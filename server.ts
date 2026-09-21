import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import genshindb from 'genshin-db';
import { COMPREHENSIVE_BOOKS } from './src/data/books.js';

dotenv.config();

// Default fallback if ADMIN_PASSWORD is not set in environment
let runtimeAdminPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSCODE || 'genshin123';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', server: 'Teyvat Archive Compendium API' });
  });

  // Admin Auth Verification API
  app.post('/api/auth/verify', (req, res) => {
    const { passcode } = req.body || {};
    if (!passcode || typeof passcode !== 'string') {
      res.status(400).json({ success: false, message: 'Passcode is required' });
      return;
    }

    const currentAdminPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSCODE || runtimeAdminPassword;
    if (passcode === currentAdminPassword) {
      res.json({ success: true, message: 'Authentication successful' });
      return;
    }

    res.status(401).json({ success: false, message: 'Incorrect passcode. Access denied.' });
  });

  // Admin Change Passcode API
  app.post('/api/auth/change-passcode', (req, res) => {
    const { oldPasscode, newPasscode } = req.body || {};
    if (!oldPasscode || !newPasscode || typeof newPasscode !== 'string' || newPasscode.length < 4) {
      res.status(400).json({ success: false, message: 'Valid current and new passcodes (min 4 chars) are required.' });
      return;
    }

    const currentAdminPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSCODE || runtimeAdminPassword;
    if (oldPasscode !== currentAdminPassword) {
      res.status(401).json({ success: false, message: 'Current passcode verification failed.' });
      return;
    }

    runtimeAdminPassword = newPasscode;
    res.json({ success: true, message: 'Admin passcode updated successfully.' });
  });

  // Cache for Project Amber API responses
  const amberCache: Record<string, { data: any; timestamp: number }> = {};
  const AMBER_CACHE_TTL = 3600 * 1000; // 1 hour

  // Mapping from friendly route names
  const AMBER_CATEGORY_MAP: Record<string, string> = {
    avatar: 'avatar',
    character: 'avatar',
    weapon: 'weapon',
    reliquary: 'reliquary',
    artifact: 'reliquary',
    book: 'book',
  };

  // High-performance index maps for genshin-db lookups by ID, Name, or Slug
  const avatarLookupMap = new Map<string, any>();
  function initAvatarMap() {
    if (avatarLookupMap.size > 0) return;
    const names = genshindb.characters('names', { matchCategories: true }) || [];
    for (const name of names) {
      const c = genshindb.characters(name);
      if (!c) continue;
      if (c.id) avatarLookupMap.set(String(c.id), c);
      if (c.name) {
        avatarLookupMap.set(c.name.toLowerCase(), c);
        avatarLookupMap.set(c.name.toLowerCase().replace(/[^a-z0-9]+/g, ' '), c);
      }
      const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      avatarLookupMap.set(slug, c);
    }
  }

  const weaponLookupMap = new Map<string, any>();
  function initWeaponMap() {
    if (weaponLookupMap.size > 0) return;
    const names = genshindb.weapons('names', { matchCategories: true }) || [];
    for (const name of names) {
      const w = genshindb.weapons(name);
      if (!w) continue;
      if (w.id) weaponLookupMap.set(String(w.id), w);
      if (w.name) {
        weaponLookupMap.set(w.name.toLowerCase(), w);
        weaponLookupMap.set(w.name.toLowerCase().replace(/[^a-z0-9]+/g, ' '), w);
      }
      const slug = w.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      weaponLookupMap.set(slug, w);
    }
  }

  const reliquaryLookupMap = new Map<string, any>();
  function initReliquaryMap() {
    if (reliquaryLookupMap.size > 0) return;
    const names = genshindb.artifacts('names', { matchCategories: true }) || [];
    for (const name of names) {
      const a = genshindb.artifacts(name);
      if (!a) continue;
      if (a.id) reliquaryLookupMap.set(String(a.id), a);
      if (a.name) {
        reliquaryLookupMap.set(a.name.toLowerCase(), a);
        reliquaryLookupMap.set(a.name.toLowerCase().replace(/[^a-z0-9]+/g, ' '), a);
      }
      const slug = a.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      reliquaryLookupMap.set(slug, a);
    }
  }

  // Helper functions for dataset building with genshin-db
  function getAvatarList() {
    const names = genshindb.characters('names', { matchCategories: true }) || [];
    const seen = new Set<string>();
    const result: any[] = [];

    for (const name of names) {
      const c = genshindb.characters(name);
      if (!c) continue;
      const idKey = String(c.id || c.name);
      if (seen.has(idKey) || seen.has(c.name)) continue;
      seen.add(idKey);
      seen.add(c.name);

      const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const filename = c.images?.filename_icon;
      const icon = filename
        ? `https://gi.yatta.moe/assets/UI/${filename}.png`
        : `https://genshin.jmp.blue/characters/${slug}/icon`;

      result.push({
        id: c.id || slug,
        slug,
        name: c.name,
        title: c.title,
        rank: c.rarity,
        element: (c.name.toLowerCase().includes('traveler') || c.name === 'Aether' || c.name === 'Lumine') ? 'Multi' : c.elementText,
        weaponType: c.weaponText,
        description: c.description,
        region: c.region || c.associationType,
        filename,
        icon,
        version: c.version || '1.0',
      });
    }
    return result;
  }

  function formatWeaponType(wt?: string) {
    if (!wt) return 'Sword';
    if (wt.includes('SWORD')) return 'Sword';
    if (wt.includes('BOW')) return 'Bow';
    if (wt.includes('CATALYST')) return 'Catalyst';
    if (wt.includes('CLAYMORE')) return 'Claymore';
    if (wt.includes('POLEARM')) return 'Polearm';
    return wt;
  }

  function formatElement(elem?: string) {
    const map: Record<string, string> = {
      Fire: 'Pyro',
      Water: 'Hydro',
      Wind: 'Anemo',
      Electric: 'Electro',
      Grass: 'Dendro',
      Ice: 'Cryo',
      Rock: 'Geo',
    };
    return map[elem || ''] || elem || 'None';
  }

  async function getAvatarDetail(idOrName: string) {
    // 1. Try loading locally from genshindb first (offline, fast, reliable)
    initAvatarMap();
    const cleanKey = String(idOrName).toLowerCase().trim();
    const query = cleanKey.replace(/-/g, ' ');
    const c =
      avatarLookupMap.get(cleanKey) ||
      avatarLookupMap.get(query) ||
      genshindb.characters(idOrName) ||
      genshindb.characters(query);

    if (c) {
      const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const filename = c.images?.filename_icon;
      
      const icon = c.images?.mihoyo_icon || (filename ? `https://gi.yatta.moe/assets/UI/${filename}.png` : `https://genshin.jmp.blue/characters/${slug}/icon`);
      const sideIcon = c.images?.mihoyo_sideIcon || (filename ? `https://gi.yatta.moe/assets/UI/${filename.replace('UI_AvatarIcon_', 'UI_AvatarIcon_Side_')}.png` : '');
      const gachaSplash = filename ? `https://gi.yatta.moe/assets/UI/${filename.replace('UI_AvatarIcon_', 'UI_Gacha_AvatarImg_')}.png` : '';

      const talents = genshindb.talents(c.name);
      const consts = genshindb.constellations(c.name);

      const skills: any[] = [];
      const passives: any[] = [];

      if (talents) {
        if (talents.combat1) {
          const tIcon = talents.images?.filename_combat1;
          skills.push({
            name: talents.combat1.name,
            type: 'Normal Attack',
            icon: tIcon,
            iconUrl: tIcon ? `https://gi.yatta.moe/assets/UI/${tIcon}.png` : '',
            description: talents.combat1.description,
          });
        }
        if (talents.combat2) {
          const tIcon = talents.images?.filename_combat2;
          skills.push({
            name: talents.combat2.name,
            type: 'Elemental Skill',
            icon: tIcon,
            iconUrl: tIcon ? `https://gi.yatta.moe/assets/UI/${tIcon}.png` : '',
            description: talents.combat2.description,
          });
        }
        if (talents.combat3) {
          const tIcon = talents.images?.filename_combat3;
          skills.push({
            name: talents.combat3.name,
            type: 'Elemental Burst',
            icon: tIcon,
            iconUrl: tIcon ? `https://gi.yatta.moe/assets/UI/${tIcon}.png` : '',
            description: talents.combat3.description,
          });
        }

        if (talents.passive1) {
          const pIcon = talents.images?.filename_passive1;
          passives.push({
            name: talents.passive1.name,
            type: 'Ascension 1 Passive',
            icon: pIcon,
            iconUrl: pIcon ? `https://gi.yatta.moe/assets/UI/${pIcon}.png` : '',
            description: talents.passive1.description,
          });
        }
        if (talents.passive2) {
          const pIcon = talents.images?.filename_passive2;
          passives.push({
            name: talents.passive2.name,
            type: 'Ascension 4 Passive',
            icon: pIcon,
            iconUrl: pIcon ? `https://gi.yatta.moe/assets/UI/${pIcon}.png` : '',
            description: talents.passive2.description,
          });
        }
        if (talents.passive3) {
          const pIcon = talents.images?.filename_passive3;
          passives.push({
            name: talents.passive3.name,
            type: 'Utility Passive',
            icon: pIcon,
            iconUrl: pIcon ? `https://gi.yatta.moe/assets/UI/${pIcon}.png` : '',
            description: talents.passive3.description,
          });
        }
      }

      const constellations = consts
        ? [
            { level: 1, name: consts.c1?.name, icon: consts.images?.filename_c1, iconUrl: consts.images?.filename_c1 ? `https://gi.yatta.moe/assets/UI/${consts.images.filename_c1}.png` : '', description: (consts.c1 as any)?.effect || (consts.c1 as any)?.description || '' },
            { level: 2, name: consts.c2?.name, icon: consts.images?.filename_c2, iconUrl: consts.images?.filename_c2 ? `https://gi.yatta.moe/assets/UI/${consts.images.filename_c2}.png` : '', description: (consts.c2 as any)?.effect || (consts.c2 as any)?.description || '' },
            { level: 3, name: consts.c3?.name, icon: consts.images?.filename_c3, iconUrl: consts.images?.filename_c3 ? `https://gi.yatta.moe/assets/UI/${consts.images.filename_c3}.png` : '', description: (consts.c3 as any)?.effect || (consts.c3 as any)?.description || '' },
            { level: 4, name: consts.c4?.name, icon: consts.images?.filename_c4, iconUrl: consts.images?.filename_c4 ? `https://gi.yatta.moe/assets/UI/${consts.images.filename_c4}.png` : '', description: (consts.c4 as any)?.effect || (consts.c4 as any)?.description || '' },
            { level: 5, name: consts.c5?.name, icon: consts.images?.filename_c5, iconUrl: consts.images?.filename_c5 ? `https://gi.yatta.moe/assets/UI/${consts.images.filename_c5}.png` : '', description: (consts.c5 as any)?.effect || (consts.c5 as any)?.description || '' },
            { level: 6, name: consts.c6?.name, icon: consts.images?.filename_c6, iconUrl: consts.images?.filename_c6 ? `https://gi.yatta.moe/assets/UI/${consts.images.filename_c6}.png` : '', description: (consts.c6 as any)?.effect || (consts.c6 as any)?.description || '' },
          ].filter((co: any) => co.name)
        : [];

      return {
        id: c.id || slug,
        slug,
        name: c.name,
        title: c.title,
        rank: c.rarity,
        rarity: c.rarity,
        element: (c.name.toLowerCase().includes('traveler') || c.name === 'Aether' || c.name === 'Lumine') ? 'Multi' : c.elementText,
        weaponType: c.weaponText,
        description: c.description,
        birthday: c.birthday,
        region: c.region || c.associationType,
        affiliation: c.affiliation,
        constellation: c.constellation,
        filename,
        icon,
        sideIcon,
        gachaSplash,
        fetter: {
          title: c.title,
          native: c.affiliation || c.associationType || '',
          constellation: c.constellation,
          detail: c.description,
          cv: {
            EN: c.cv?.english || 'Unknown',
            JP: c.cv?.japanese || 'Unknown',
            CHS: c.cv?.chinese || 'Unknown',
            KR: c.cv?.korean || 'Unknown',
          }
        },
        skills,
        passives,
        constellations,
      };
    }

    // 2. Secondary fallback directly to live Project Amber API (just in case local database doesn't have a very new character yet)
    try {
      const amberRes = await fetch(`https://gi.yatta.moe/api/v2/en/avatar/${idOrName}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      if (amberRes.ok) {
        const amberJson = await amberRes.json();
        const d = amberJson.data;
        if (d && d.name) {
          const rawTalents = d.talent ? Object.values(d.talent) : [];
          const skills: any[] = [];
          const passives: any[] = [];

          rawTalents.forEach((t: any) => {
            if (!t.name || !t.description) return;
            const iconUrl = t.icon ? `https://gi.yatta.moe/assets/UI/${t.icon}.png` : '';
            if (t.type === 0 || t.type === 1) {
              skills.push({
                name: t.name,
                type: t.type === 0 ? 'Normal / Special Attack' : 'Elemental Skill / Burst',
                icon: t.icon,
                iconUrl,
                description: t.description,
              });
            } else {
              passives.push({
                name: t.name,
                type: 'Passive Talent',
                icon: t.icon,
                iconUrl,
                description: t.description,
              });
            }
          });

          const constellations = (d.constellation ? Object.values(d.constellation) : []).map((co: any, idx: number) => ({
            level: idx + 1,
            name: co.name,
            icon: co.icon,
            iconUrl: co.icon ? `https://gi.yatta.moe/assets/UI/${co.icon}.png` : '',
            description: co.description,
          }));

          const icon = d.icon ? `https://gi.yatta.moe/assets/UI/${d.icon}.png` : '';
          const sideIcon = d.icon ? `https://gi.yatta.moe/assets/UI/${d.icon.replace('UI_AvatarIcon_', 'UI_AvatarIcon_Side_')}.png` : '';
          const gachaSplash = d.icon ? `https://gi.yatta.moe/assets/UI/${d.icon.replace('UI_AvatarIcon_', 'UI_Gacha_AvatarImg_')}.png` : '';

          return {
            id: d.id,
            name: d.name,
            title: d.fetter?.title || d.title || '',
            rank: d.rank || 5,
            rarity: d.rank || 5,
            element: (d.name.toLowerCase().includes('traveler') || d.name === 'Aether' || d.name === 'Lumine') ? 'Multi' : formatElement(d.element),
            weaponType: formatWeaponType(d.weaponType),
            description: d.fetter?.detail || d.description || '',
            birthday: d.birthday ? d.birthday.join('/') : '',
            region: d.region || d.fetter?.native || 'Teyvat',
            affiliation: d.fetter?.native || d.associationType || '',
            constellation: d.fetter?.constellation || '',
            fetter: d.fetter,
            icon,
            sideIcon,
            gachaSplash,
            skills,
            passives,
            constellations,
          };
        }
      }
    } catch (amberErr) {
      console.warn(`Project Amber live fetch fallback failed for avatar ${idOrName}:`, amberErr);
    }

    return null;
  }

  function getWeaponList() {
    const names = genshindb.weapons('names', { matchCategories: true }) || [];
    const seen = new Set<string>();
    const result: any[] = [];

    for (const name of names) {
      const w = genshindb.weapons(name);
      if (!w) continue;
      const idKey = `${w.id}-${w.name}`;
      if (seen.has(idKey) || seen.has(w.name)) continue;
      seen.add(idKey);
      seen.add(w.name);

      const slug = w.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const filename = w.images?.filename_icon;
      const icon = filename
        ? `https://gi.yatta.moe/assets/UI/${filename}.png`
        : `https://genshin.jmp.blue/weapons/${slug}/icon`;

      result.push({
        id: w.id || slug,
        slug,
        name: w.name,
        rank: w.rarity,
        weaponType: w.weaponText,
        description: w.description,
        baseAtk: w.baseStatText || Math.round(w.baseAtkValue || 42),
        subStat: w.mainStatText,
        passiveName: w.effectName,
        passiveDescription: w.r1?.description,
        filename,
        icon,
        version: w.version || '1.0',
      });
    }
    return result;
  }

  async function getWeaponDetail(idOrName: string) {
    // 1. Try fetching directly from Project Amber API for full live data
    try {
      const amberRes = await fetch(`https://gi.yatta.moe/api/v2/en/weapon/${idOrName}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      if (amberRes.ok) {
        const amberJson = await amberRes.json();
        const d = amberJson.data;
        if (d && d.name) {
          let storyText = '';
          if (d.storyId) {
            const storyIdVal = Array.isArray(d.storyId) ? d.storyId[0] : d.storyId;
            try {
              const storyRes = await fetch(`https://gi.yatta.moe/api/v2/EN/readable/Weapon${storyIdVal}`, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
              });
              if (storyRes.ok) {
                const storyJson = await storyRes.json();
                if (storyJson.data) storyText = storyJson.data;
              }
            } catch (storyErr) {
              console.warn(`Failed to fetch weapon story for ${d.name}:`, storyErr);
            }
          }

          const icon = d.icon ? `https://gi.yatta.moe/assets/UI/${d.icon}.png` : '';
          const awakenIcon = d.icon ? `https://gi.yatta.moe/assets/UI/${d.icon}_Awaken.png` : '';

          let passiveName = '';
          const refinements: Record<number, string> = {};
          if (d.affix) {
            const firstAffix = Object.values(d.affix)[0] as any;
            if (firstAffix) {
              passiveName = firstAffix.name || '';
              if (firstAffix.upgrade) {
                Object.entries(firstAffix.upgrade).forEach(([rankKey, desc]) => {
                  refinements[Number(rankKey) + 1] = String(desc);
                });
              }
            }
          }

          let baseAtk = '542';
          let subStatType = 'CRIT DMG';
          let subStatValue = '88.2%';

          if (d.upgrade?.prop && Array.isArray(d.upgrade.prop)) {
            d.upgrade.prop.forEach((p: any) => {
              if (p.propType === 'FIGHT_PROP_BASE_ATTACK') {
                baseAtk = String(Math.round(p.initValue * 12.2) || '542');
              } else if (p.propType === 'FIGHT_PROP_CRITICAL_HURT') {
                subStatType = 'CRIT DMG';
                subStatValue = '88.2%';
              } else if (p.propType === 'FIGHT_PROP_CRITICAL') {
                subStatType = 'CRIT Rate';
                subStatValue = '33.1%';
              } else if (p.propType === 'FIGHT_PROP_HP_PERCENT') {
                subStatType = 'HP';
                subStatValue = '41.3%';
              } else if (p.propType === 'FIGHT_PROP_ATTACK_PERCENT') {
                subStatType = 'ATK';
                subStatValue = '49.6%';
              } else if (p.propType === 'FIGHT_PROP_CHARGE_EFFICIENCY') {
                subStatType = 'Energy Recharge';
                subStatValue = '55.1%';
              } else if (p.propType === 'FIGHT_PROP_ELEMENT_MASTERY') {
                subStatType = 'Elemental Mastery';
                subStatValue = '265';
              }
            });
          }

          return {
            id: d.id,
            name: d.name,
            rank: d.rank || 4,
            rarity: d.rank || 4,
            type: d.type || 'Weapon',
            weaponType: d.type || 'Weapon',
            description: d.description || '',
            story: storyText,
            baseAtk,
            subStatType,
            subStatValue,
            icon,
            awakenIcon,
            passiveName,
            refinements,
            passiveDescription: refinements[1] || '',
          };
        }
      }
    } catch (amberErr) {
      console.warn(`Project Amber live fetch failed for weapon ${idOrName}:`, amberErr);
    }

    // 2. Fallback to genshindb index
    initWeaponMap();
    const cleanKey = String(idOrName).toLowerCase().trim();
    const query = cleanKey.replace(/-/g, ' ');
    const w =
      weaponLookupMap.get(cleanKey) ||
      weaponLookupMap.get(query) ||
      genshindb.weapons(idOrName) ||
      genshindb.weapons(query);
    if (!w) return null;

    const slug = w.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const filename = w.images?.filename_icon;
    const icon = filename
      ? `https://gi.yatta.moe/assets/UI/${filename}.png`
      : `https://genshin.jmp.blue/weapons/${slug}/icon`;

    const r1Desc = w.r1?.description || '';
    const r2Desc = w.r2?.description || r1Desc;
    const r3Desc = w.r3?.description || r1Desc;
    const r4Desc = w.r4?.description || r1Desc;
    const r5Desc = w.r5?.description || r1Desc;

    return {
      id: w.id || slug,
      slug,
      name: w.name,
      rank: w.rarity,
      rarity: w.rarity,
      type: w.weaponText,
      weaponType: w.weaponText,
      description: w.description,
      story: w.story || '',
      baseAtk: w.baseStatText || Math.round(w.baseAtkValue || 42),
      subStatType: w.mainStatText,
      subStatValue: w.r1?.values?.[0] || '27.6%',
      passiveName: w.effectName,
      passiveDescription: r1Desc,
      refinements: {
        1: r1Desc,
        2: r2Desc,
        3: r3Desc,
        4: r4Desc,
        5: r5Desc,
      },
      filename,
      icon,
    };
  }

  function getReliquaryList() {
    const names = genshindb.artifacts('names', { matchCategories: true }) || [];
    const seen = new Set<string>();
    const result: any[] = [];

    for (const name of names) {
      const a = genshindb.artifacts(name);
      if (!a) continue;
      const idKey = String(a.id || a.name);
      if (seen.has(idKey) || seen.has(a.name)) continue;
      seen.add(idKey);
      seen.add(a.name);

      const slug = a.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const filename = a.images?.filename_flower ||
                       a.images?.filename_circlet ||
                       a.images?.filename_plume ||
                       a.images?.filename_sands ||
                       a.images?.filename_goblet;
      const icon = filename
        ? `https://enka.network/ui/${filename}.png`
        : `https://genshin.jmp.blue/artifacts/${slug}/flower-of-life`;

      result.push({
        id: a.id || slug,
        slug,
        name: a.name,
        rank: a.rarityList ? Math.max(...a.rarityList) : 5,
        description: a.effect2Pc,
        twoPieceBonus: a.effect2Pc,
        fourPieceBonus: a.effect4Pc,
        filename,
        icon,
        version: a.version || '1.0',
      });
    }
    return result;
  }

  async function getReliquaryDetail(idOrName: string) {
    // 1. Try fetching directly from Project Amber API for full live data
    try {
      const amberRes = await fetch(`https://gi.yatta.moe/api/v2/en/reliquary/${idOrName}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      if (amberRes.ok) {
        const amberJson = await amberRes.json();
        const d = amberJson.data;
        if (d && d.name) {
          const icon = d.icon ? `https://enka.network/ui/${d.icon}.png` : '';
          const levelList = d.levelList || [4, 5];
          const rarity = Math.max(...levelList);

          let twoPieceBonus = '';
          let fourPieceBonus = '';
          if (d.affixList) {
            const affixes = Object.values(d.affixList) as string[];
            if (affixes.length >= 1) twoPieceBonus = affixes[0];
            if (affixes.length >= 2) fourPieceBonus = affixes[1];
          }

          const suitPieces: any[] = [];
          if (d.suit) {
            const slotMap: Record<string, string> = {
              EQUIP_BRACER: 'Flower of Life',
              EQUIP_NECKLACE: 'Plume of Death',
              EQUIP_SHOES: 'Sands of Eon',
              EQUIP_RING: 'Goblet of Eonothem',
              EQUIP_DRESS: 'Circlet of Logos',
            };

            Object.entries(d.suit).forEach(([slotKey, piece]: [string, any]) => {
              if (piece) {
                suitPieces.push({
                  slotKey,
                  slotName: slotMap[slotKey] || slotKey,
                  id: piece.id,
                  name: piece.name,
                  description: piece.description,
                  maxLevel: piece.maxLevel,
                  icon: piece.icon ? `https://enka.network/ui/${piece.icon}.png` : '',
                });
              }
            });
          }

          return {
            id: d.id,
            name: d.name,
            rarity,
            levelList,
            icon,
            twoPieceBonus,
            fourPieceBonus,
            suitPieces,
          };
        }
      }
    } catch (amberErr) {
      console.warn(`Project Amber live fetch failed for reliquary ${idOrName}:`, amberErr);
    }

    // 2. Fallback to genshindb index
    initReliquaryMap();
    const cleanKey = String(idOrName).toLowerCase().trim();
    const query = cleanKey.replace(/-/g, ' ');
    const a =
      reliquaryLookupMap.get(cleanKey) ||
      reliquaryLookupMap.get(query) ||
      genshindb.artifacts(idOrName) ||
      genshindb.artifacts(query);
    if (!a) return null;

    const slug = a.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const filename = a.images?.filename_flower ||
                     a.images?.filename_circlet ||
                     a.images?.filename_plume ||
                     a.images?.filename_sands ||
                     a.images?.filename_goblet;
    const icon = filename
      ? `https://enka.network/ui/${filename}.png`
      : `https://genshin.jmp.blue/artifacts/${slug}/flower-of-life`;

    return {
      id: a.id || slug,
      slug,
      name: a.name,
      rarity: a.rarityList ? Math.max(...a.rarityList) : 5,
      levelList: a.rarityList || [4, 5],
      twoPieceBonus: a.effect2Pc || '',
      fourPieceBonus: a.effect4Pc || '',
      filename,
      icon,
      suitPieces: [
        { slotName: 'Flower of Life', name: a.flower?.name, description: a.flower?.description, icon: a.images?.filename_flower ? `https://enka.network/ui/${a.images.filename_flower}.png` : icon },
        { slotName: 'Plume of Death', name: a.plume?.name, description: a.plume?.description, icon: a.images?.filename_plume ? `https://enka.network/ui/${a.images.filename_plume}.png` : icon },
        { slotName: 'Sands of Eon', name: a.sands?.name, description: a.sands?.description, icon: a.images?.filename_sands ? `https://enka.network/ui/${a.images.filename_sands}.png` : icon },
        { slotName: 'Goblet of Eonothem', name: a.goblet?.name, description: a.goblet?.description, icon: a.images?.filename_goblet ? `https://enka.network/ui/${a.images.filename_goblet}.png` : icon },
        { slotName: 'Circlet of Logos', name: a.circlet?.name, description: a.circlet?.description, icon: a.images?.filename_circlet ? `https://enka.network/ui/${a.images.filename_circlet}.png` : icon },
      ].filter(p => p.name),
    };
  }

  async function getBookList() {
    try {
      const res = await fetch('https://gi.yatta.moe/api/v2/en/book', {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      if (res.ok) {
        const json = await res.json();
        const itemsMap = json?.data?.items || {};
        return Object.values(itemsMap).map((b: any) => {
          const rawIcon = b.icon || '';
          const icon = rawIcon.startsWith('http')
            ? rawIcon
            : rawIcon
            ? `https://gi.yatta.moe/assets/UI/${rawIcon}.png`
            : '';
          return {
            id: b.id,
            name: b.name,
            rank: b.rank || 4,
            icon,
            route: b.route,
            filename: rawIcon,
            description: b.description || '',
          };
        });
      }
    } catch (err) {
      console.warn('Failed to fetch Amber books list:', err);
    }

    return COMPREHENSIVE_BOOKS.map((b: any) => ({
      id: b.id,
      name: b.name,
      rank: b.rarity,
      icon: b.iconUrl,
      description: b.description,
    }));
  }

  async function getBookDetail(idOrName: string) {
    try {
      const res = await fetch(`https://gi.yatta.moe/api/v2/en/book/${idOrName}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      if (res.ok) {
        const json = await res.json();
        const data = json?.data;
        if (data) {
          const rawIcon = data.icon || '';
          const icon = rawIcon.startsWith('http')
            ? rawIcon
            : rawIcon
            ? `https://gi.yatta.moe/assets/UI/${rawIcon}.png`
            : '';

          const rawVolumes = data.volume || [];
          const volumes = await Promise.all(
            rawVolumes.map(async (v: any, index: number) => {
              let fullStory = v.description || '';
              if (v.storyId) {
                try {
                  const textRes = await fetch(`https://gi.yatta.moe/api/v2/EN/readable/Book${v.storyId}`, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
                  });
                  if (textRes.ok) {
                    const textJson = await textRes.json();
                    if (textJson.data) {
                      fullStory = textJson.data;
                    }
                  }
                } catch (textErr) {
                  console.warn(`Failed to fetch story text for Book${v.storyId}:`, textErr);
                }
              }

              return {
                id: v.id || `vol-${index + 1}`,
                volume: index + 1,
                title: v.name || `Volume ${index + 1}`,
                description: v.description,
                story: fullStory,
                storyId: v.storyId,
              };
            })
          );

          return {
            id: data.id,
            name: data.name,
            rank: data.rank || 4,
            rarity: data.rank || 4,
            iconUrl: icon,
            icon,
            description: data.volume?.[0]?.description || 'A collection of stories and historical records preserved in Teyvat.',
            volume: data.volume || [],
            volumes,
          };
        }
      }
    } catch (err) {
      console.warn(`Failed to fetch Amber book detail for ${idOrName}:`, err);
    }

    const local = COMPREHENSIVE_BOOKS.find((b: any) => String(b.id) === String(idOrName) || b.name.toLowerCase().includes(idOrName.toLowerCase()));
    if (local) {
      return {
        id: local.id,
        name: local.name,
        rank: local.rarity,
        rarity: local.rarity,
        iconUrl: local.iconUrl,
        icon: local.iconUrl,
        description: local.description,
        volumes: local.volumes,
      };
    }
    return null;
  }

  // Project Amber List API Endpoint
  app.get('/api/amber/:category', async (req, res) => {
    const rawCategory = req.params.category.toLowerCase();
    const category = AMBER_CATEGORY_MAP[rawCategory];

    if (!category) {
      res.status(400).json({ error: `Invalid category '${rawCategory}'. Supported: avatar, weapon, reliquary, book` });
      return;
    }

    const cacheKey = `list-${category}`;
    if (amberCache[cacheKey] && Date.now() - amberCache[cacheKey].timestamp < AMBER_CACHE_TTL) {
      res.json(amberCache[cacheKey].data);
      return;
    }

    let items: any[] = [];
    if (category === 'avatar') {
      items = getAvatarList();
    } else if (category === 'weapon') {
      items = getWeaponList();
    } else if (category === 'reliquary') {
      items = getReliquaryList();
    } else if (category === 'book') {
      items = await getBookList();
    }

    const responseObj = { data: { items } };
    amberCache[cacheKey] = { data: responseObj, timestamp: Date.now() };
    res.json(responseObj);
  });

  // Project Amber Detail API Endpoint
  app.get('/api/amber/:category/:id', async (req, res) => {
    const rawCategory = req.params.category.toLowerCase();
    const category = AMBER_CATEGORY_MAP[rawCategory];
    const { id } = req.params;

    if (!category) {
      res.status(400).json({ error: `Invalid category '${rawCategory}'` });
      return;
    }

    const cacheKey = `detail-${category}-${id}`;
    if (amberCache[cacheKey] && Date.now() - amberCache[cacheKey].timestamp < AMBER_CACHE_TTL) {
      res.json(amberCache[cacheKey].data);
      return;
    }

    let detail: any = null;
    if (category === 'avatar') {
      detail = await getAvatarDetail(id);
    } else if (category === 'weapon') {
      detail = await getWeaponDetail(id);
    } else if (category === 'reliquary') {
      detail = await getReliquaryDetail(id);
    } else if (category === 'book') {
      detail = await getBookDetail(id);
    }

    if (!detail) {
      res.status(404).json({ error: `Item '${id}' not found in category '${category}'` });
      return;
    }

    const responseObj = { data: detail };
    amberCache[cacheKey] = { data: responseObj, timestamp: Date.now() };
    res.json(responseObj);
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Teyvat Archive Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

