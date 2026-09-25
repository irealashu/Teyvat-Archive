/**
 * Automated Data Sync Script for The Damselette Archive
 *
 * Usage:
 *   node scripts/sync-data.cjs npcs    # Syncs 343+ NPCs with rewards & dialogues
 *   node scripts/sync-data.cjs quests  # Syncs 477+ Event World Quests across all versions
 *   node scripts/sync-data.cjs all     # Syncs all datasets
 */

const fs = require('fs');
const path = require('path');

const NPC_API_URL = 'https://genshin-impact.fandom.com/api.php?action=parse&page=NPC/Dialogue_Reward&prop=text&format=json';
const QUEST_API_URL = 'https://genshin-impact.fandom.com/api.php?action=parse&page=World_Quest/Event_List&prop=text&format=json';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) TheDamseletteArchive/1.0',
};

async function syncNPCs() {
  console.log('\n========================================');
  console.log('🔄 SYNCING NPC DIALOGUE REWARDS DATA');
  console.log('========================================');
  console.log(`Fetching: ${NPC_API_URL}`);

  try {
    const res = await fetch(NPC_API_URL, { headers: HEADERS });
    if (!res.ok) throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
    const json = await res.json();
    const html = json.parse?.text?.['*'];

    if (!html) throw new Error('No parsed HTML returned in MediaWiki API response.');

    const rows = html.split(/<tr[^>]*>/).slice(2);
    console.log(`Found ${rows.length} raw NPC rows in table.`);

    const npcs = [];
    rows.forEach((row, index) => {
      const cells = row.split(/<\/td>\s*<td[^>]*>/);
      if (cells.length < 4) return;

      const nameMatch = cells[1].match(/<a[^>]*title=[\"']([^\"']+)[\"'][^>]*>([^<]+)<\/a>/i) || cells[1].match(/>([^<]+)<\/td>/i);
      let name = nameMatch ? nameMatch[2].trim().replace(/&quot;/g, '"').replace(/&#39;/g, "'") : '';
      if (!name && nameMatch) name = nameMatch[1];
      name = name.replace(/^"|"$/g, '');

      const regionMatch = cells[2].match(/title=[\"']([^\"']+)[\"']/i) || cells[2].match(/>([^<]+)</i);
      const region = regionMatch ? regionMatch[1].trim() : 'Teyvat';

      const rewardHtml = cells[3];
      const rewardCards = rewardHtml.split(/<div class=[\"']card-container/i).slice(1);
      const rewards = [];

      rewardCards.forEach((rc) => {
        const itemMatch = rc.match(/title=[\"']([^\"']+)[\"']/i);
        const itemName = itemMatch ? itemMatch[1].replace(/&#39;/g, "'").replace(/&quot;/g, '"') : 'Item';

        const countMatch = rc.match(/<span class=[\"']card-text[\"'][^>]*>([^<]+)<\/span>/i) || rc.match(/×\s*(\d+[\d,]*)/i);
        const count = countMatch ? countMatch[1].trim() : '1';

        const imgMatch = rc.match(/data-src=[\"']([^\"']+)[\"']/i) || rc.match(/src=[\"']([^\"']+)[\"']/i);
        let iconUrl = '';
        if (imgMatch && !imgMatch[1].startsWith('data:')) {
          iconUrl = imgMatch[1].split('/revision/')[0];
        }

        const qualityMatch = rc.match(/card-quality-(\d)/i);
        const rarity = qualityMatch ? parseInt(qualityMatch[1], 10) : 3;

        rewards.push({
          name: itemName,
          count,
          rarity,
          iconUrl,
        });
      });

      const locHtml = cells[4] || '';
      const locImgMatches = [...locHtml.matchAll(/data-src=[\"']([^\"']+)[\"']/gi), ...locHtml.matchAll(/src=[\"']([^\"']+)[\"']/gi)];
      const locationImages = [];
      for (const m of locImgMatches) {
        if (!m[1].startsWith('data:')) {
          const cleanImg = m[1].split('/revision/')[0];
          if (!locationImages.includes(cleanImg)) {
            locationImages.push(cleanImg);
          }
        }
      }

      const locText = locHtml
        .replace(/<style[^>]*>.*?<\/style>/gis, '')
        .replace(/<script[^>]*>.*?<\/script>/gis, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/Show Location|Hide Location/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      npcs.push({
        id: index + 1,
        name,
        region,
        rewards,
        locationText: locText || 'Detailed in world map',
        dialoguePrompt: 'Exhaust conversation options to receive reward',
        dialogueResponse: '',
        locationImages: locationImages.slice(0, 2),
      });
    });

    const targetPath = path.join(__dirname, '../src/data/npcs.json');
    fs.writeFileSync(targetPath, JSON.stringify(npcs, null, 2));
    console.log(`✅ Successfully synced ${npcs.length} NPCs to ${targetPath}`);
  } catch (err) {
    console.error('❌ Error syncing NPCs:', err.message);
  }
}

async function syncQuests() {
  console.log('\n========================================');
  console.log('🔄 SYNCING EVENT WORLD QUESTS DATA');
  console.log('========================================');
  console.log(`Fetching: ${QUEST_API_URL}`);

  try {
    const res = await fetch(QUEST_API_URL, { headers: HEADERS });
    if (!res.ok) throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
    const json = await res.json();
    const html = json.parse?.text?.['*'];

    if (!html) throw new Error('No parsed HTML returned in MediaWiki API response.');

    function parseListTree(ulHtml) {
      const events = [];
      let topEvent = null;
      const regex = /<\/?(ul|li|a)[^>]*>|([^<]+)/gi;
      let match;
      let listDepth = 0;

      while ((match = regex.exec(ulHtml)) !== null) {
        const tag = match[0];
        if (/^<ul/i.test(tag)) {
          listDepth++;
        } else if (/^<\/ul/i.test(tag)) {
          listDepth--;
        } else if (/^<a\b/i.test(tag)) {
          const titleMatch = tag.match(/title=[\"']([^\"']+)[\"']/i);
          if (titleMatch) {
            const name = titleMatch[1].replace(/&#39;/g, "'").replace(/&quot;/g, '"');
            if (listDepth === 1) {
              topEvent = {
                eventName: name,
                quests: [],
              };
              events.push(topEvent);
            } else if (listDepth >= 2 && topEvent) {
              if (!topEvent.quests.includes(name)) {
                topEvent.quests.push(name);
              }
            }
          }
        }
      }

      return events;
    }

    const versionBlocks = html.split(/<h3[^>]*>/i).slice(1);
    const finalVersionList = [];

    versionBlocks.forEach((vb, idx) => {
      const h3End = vb.indexOf('</h3>');
      if (h3End === -1) return;
      const h3Text = vb.substring(0, h3End);
      const body = vb.substring(h3End + 5);

      const vMatch = h3Text.match(/id=\"([^\"]+)\"/i) || h3Text.match(/>([^<]+)</i);
      const version = vMatch ? vMatch[1].replace(/_/g, ' ').trim() : 'Version ' + (idx + 1);

      const ulStart = body.indexOf('<ul>');
      if (ulStart === -1) return;

      const ulHtml = body.substring(ulStart);
      const events = parseListTree(ulHtml);

      const cleanedEvents = events.map((e) => ({
        eventName: e.eventName,
        questsCount: e.quests.length > 0 ? e.quests.length : 1,
        quests: e.quests.length > 0 ? e.quests : [e.eventName],
      }));

      if (cleanedEvents.length > 0) {
        const majorMatch = version.match(/Version\s+(\d+)/i);
        const majorTag = majorMatch ? majorMatch[1] + '.x' : 'Special';

        finalVersionList.push({
          id: idx + 1,
          version,
          majorTag,
          eventsCount: cleanedEvents.length,
          totalQuestsCount: cleanedEvents.reduce((acc, e) => acc + e.questsCount, 0),
          events: cleanedEvents,
        });
      }
    });

    const targetPath = path.join(__dirname, '../src/data/event_quests.json');
    fs.writeFileSync(targetPath, JSON.stringify(finalVersionList, null, 2));
    const totalQ = finalVersionList.reduce((acc, v) => acc + v.totalQuestsCount, 0);
    const totalE = finalVersionList.reduce((acc, v) => acc + v.eventsCount, 0);
    console.log(`✅ Successfully synced ${totalQ} Quests across ${totalE} Events and ${finalVersionList.length} Versions to ${targetPath}`);
  } catch (err) {
    console.error('❌ Error syncing Quests:', err.message);
  }
}

async function main() {
  const arg = (process.argv[2] || 'all').toLowerCase();
  if (arg === 'npcs' || arg === 'npc') {
    await syncNPCs();
  } else if (arg === 'quests' || arg === 'quest') {
    await syncQuests();
  } else {
    await syncNPCs();
    await syncQuests();
  }
  console.log('\n✨ Data synchronization complete!\n');
}

main();
