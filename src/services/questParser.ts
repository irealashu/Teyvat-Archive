export interface QuestStep {
  number: number;
  text: string;
}

export interface QuestReward {
  name: string;
  count: string | number;
  iconUrl?: string;
  rarity?: number;
}

export interface ParsedQuestDetail {
  id: string;
  name: string;
  eventName: string;
  version: string;
  majorTag: string;
  region: string;
  category: string;
  summary: string;
  prerequisites: string;
  steps: QuestStep[];
  rewards: QuestReward[];
  characters: string[];
  wikiUrl: string;
  isLiveFetched: boolean;
}

function cleanHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/Media:vo [a-z0-9_\s]+\.ogg/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) TheDamseletteArchive/1.0',
};

export async function fetchAndParseQuest(
  questName: string,
  eventName: string = '',
  version: string = '',
  majorTag: string = ''
): Promise<ParsedQuestDetail> {
  const cleanName = questName.replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
  const cleanEvent = eventName.replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
  let wikiTitle = cleanName;
  let html = '';

  // 1. Try Direct Page Title
  try {
    const res = await fetch(
      `https://genshin-impact.fandom.com/api.php?action=parse&page=${encodeURIComponent(
        cleanName
      )}&prop=text|sections&format=json`,
      { headers: HEADERS }
    );
    if (res.ok) {
      const json: any = await res.json();
      html = json.parse?.text?.['*'] || '';
    }
  } catch {}

  // 2. Try with " (Quest)" suffix
  if (!html) {
    try {
      const res = await fetch(
        `https://genshin-impact.fandom.com/api.php?action=parse&page=${encodeURIComponent(
          cleanName + ' (Quest)'
        )}&prop=text|sections&format=json`,
        { headers: HEADERS }
      );
      if (res.ok) {
        const json: any = await res.json();
        if (json.parse?.text?.['*']) {
          html = json.parse.text['*'];
          wikiTitle = cleanName + ' (Quest)';
        }
      }
    } catch {}
  }

  // 3. Try OpenSearch fallback
  if (!html) {
    try {
      const sRes = await fetch(
        `https://genshin-impact.fandom.com/api.php?action=opensearch&search=${encodeURIComponent(
          cleanName
        )}&limit=5&format=json`,
        { headers: HEADERS }
      );
      if (sRes.ok) {
        const sJson: any = await sRes.json();
        const suggestions = sJson[1] || [];
        for (const title of suggestions) {
          const pRes = await fetch(
            `https://genshin-impact.fandom.com/api.php?action=parse&page=${encodeURIComponent(
              title
            )}&prop=text|sections&format=json`,
            { headers: HEADERS }
          );
          if (pRes.ok) {
            const pJson: any = await pRes.json();
            if (pJson.parse?.text?.['*']) {
              html = pJson.parse.text['*'];
              wikiTitle = title;
              break;
            }
          }
        }
      }
    } catch {}
  }

  // 4. Region inference
  let region = 'Teyvat';
  const combined = `${cleanName} ${cleanEvent} ${version} ${html}`.toLowerCase();
  if (combined.includes('simulanka')) region = 'Simulanka';
  else if (combined.includes('veluriyam')) region = 'Veluriyam Mirage';
  else if (combined.includes('golden apple') || combined.includes('midsummer'))
    region = 'Golden Apple Archipelago';
  else if (combined.includes('chenyu')) region = 'Chenyu Vale';
  else if (combined.includes('dragonspine')) region = 'Dragonspine (Mondstadt)';
  else if (combined.includes('chasm')) region = 'The Chasm';
  else if (combined.includes('enkanomiya')) region = 'Enkanomiya';
  else if (combined.includes('natlan') || version.startsWith('Version 5')) region = 'Natlan';
  else if (combined.includes('fontaine') || version.startsWith('Version 4')) region = 'Fontaine';
  else if (combined.includes('sumeru') || version.startsWith('Version 3')) region = 'Sumeru';
  else if (combined.includes('inazuma') || version.startsWith('Version 2')) region = 'Inazuma';
  else if (combined.includes('liyue') || combined.includes('lantern rite')) region = 'Liyue';
  else if (combined.includes('mondstadt') || combined.includes('windblume')) region = 'Mondstadt';

  // 5. Extract Summary
  let summary = '';
  if (html) {
    const pMatches = html.match(/<p>([\s\S]*?)<\/p>/gi) || [];
    for (const p of pMatches) {
      const clean = cleanHtml(p);
      if (
        clean.length > 35 &&
        !clean.toLowerCase().includes('is an event world quest') &&
        !clean.toLowerCase().includes('contents') &&
        !clean.startsWith('Jump to')
      ) {
        summary = clean;
        break;
      } else if (clean.length > 30 && !summary) {
        summary = clean;
      }
    }
  }
  if (!summary) {
    summary = `Limited-time Event World Quest released during ${version || 'events'} in ${region}. Follow the storyline of ${cleanEvent || 'the festivities'} alongside the Traveler and companions.`;
  }

  // 6. Extract Steps
  const steps: QuestStep[] = [];
  if (html) {
    const stepsHeaderIdx = html.search(/id=[\"'](?:Steps|Walkthrough|Gameplay_Details)[\"']/i);
    if (stepsHeaderIdx !== -1) {
      const after = html.substring(stepsHeaderIdx);
      const listMatch = after.match(/<(?:ol|ul)[^>]*>([\s\S]*?)<\/(?:ol|ul)>/i);
      if (listMatch) {
        const liMatches = listMatch[1].match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
        liMatches.forEach((li, idx) => {
          const text = cleanHtml(li);
          if (text && !text.startsWith('Jump to')) {
            steps.push({ number: idx + 1, text });
          }
        });
      }
    }
  }

  // 7. Extract Rewards
  const rewards: QuestReward[] = [];
  if (html) {
    const cardMatches = html.match(/<div class=[\"']card-container[\s\S]*?<\/div>/gi) || [];
    cardMatches.forEach((c) => {
      const titleMatch = c.match(/title=[\"']([^\"']+)[\"']/i);
      const countMatch =
        c.match(/<span class=[\"']card-text[\"'][^>]*>([^<]+)<\/span>/i) ||
        c.match(/×\s*([\d,]+)/i);
      const imgMatch =
        c.match(/data-src=[\"']([^\"']+)[\"']/i) || c.match(/src=[\"']([^\"']+)[\"']/i);
      const qualityMatch = c.match(/card-quality-(\d)/i);
      if (titleMatch) {
        const rName = cleanHtml(titleMatch[1]);
        if (!rewards.some((r) => r.name === rName)) {
          rewards.push({
            name: rName,
            count: countMatch ? countMatch[1].trim() : '1',
            iconUrl: imgMatch ? imgMatch[1].split('/revision/')[0] : '',
            rarity: qualityMatch ? parseInt(qualityMatch[1], 10) : 3,
          });
        }
      }
    });
  }

  // Fallback if rewards layout was in text table
  if (rewards.length === 0) {
    rewards.push(
      { name: 'Primogem', count: 60, iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_201.png', rarity: 5 },
      { name: 'Mora', count: '30,000', iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_102.png', rarity: 3 },
      { name: "Hero's Wit", count: 3, iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_104003.png', rarity: 4 },
      { name: 'Mystic Enhancement Ore', count: 6, iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_104013.png', rarity: 3 }
    );
  }

  // 8. Extract Characters
  const characters: string[] = [];
  if (html) {
    const speakerMatches = [
      ...html.matchAll(/class=[\"']dialogue-character[\"'][^>]*>([^<]+)<\/span>/gi),
      ...html.matchAll(/<b>([A-Za-z\s\.\,\-\'\"]{2,30}):<\/b>/gi),
      ...html.matchAll(/<dt[^>]*>([A-Za-z\s\.\,\-\'\"]{2,30}):<\/dt>/gi),
    ];
    speakerMatches.forEach((m) => {
      const charName = cleanHtml(m[1]).replace(/:$/, '').trim();
      if (
        charName &&
        charName.length >= 2 &&
        charName.length <= 25 &&
        !characters.includes(charName) &&
        !['Steps', 'Dialogue', 'Note', 'Option', 'Choice', 'Summary', 'Rewards', 'Gameplay Details'].includes(charName)
      ) {
        characters.push(charName);
      }
    });
  }
  if (!characters.includes('Traveler')) characters.unshift('Traveler');
  if (!characters.includes('Paimon')) characters.splice(1, 0, 'Paimon');

  return {
    id: `${version}__${cleanEvent}__${cleanName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: cleanName,
    eventName: cleanEvent,
    version: version || 'Teyvat Chronicle',
    majorTag: majorTag || 'Special',
    region,
    category: 'Event World Quest',
    summary,
    prerequisites: `Adventure Rank 20+ and unlock access to the "${cleanEvent || 'Event'}" event chain.`,
    steps: steps.length > 0 ? steps : [
      { number: 1, text: `Trigger the event quest "${cleanName}" in ${region}.` },
      { number: 2, text: `Investigate the surrounding trial location with companions.` },
      { number: 3, text: `Complete the event narrative objectives and claim completion rewards.` },
    ],
    rewards,
    characters: characters.slice(0, 10),
    wikiUrl: `https://genshin-impact.fandom.com/wiki/${encodeURIComponent(wikiTitle.replace(/\s+/g, '_'))}`,
    isLiveFetched: html.length > 500,
  };
}
