import genshindb from 'genshin-db';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

function generateAvatarList() {
    const names = genshindb.characters('names', { matchCategories: true }) || [];
    const result = names.map(name => {
        const c = genshindb.characters(name);
        if (!c) return null;
        const slug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const filename = c.images?.filename_icon;
        const icon = filename ? `https://gi.yatta.moe/assets/UI/${filename}.png` : `https://genshin.jmp.blue/characters/${slug}/icon`;
        return {
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
        };
    }).filter(c => c !== null);
    
    fs.writeFileSync(path.join(DATA_DIR, 'avatars.json'), JSON.stringify(result, null, 2));
    console.log('Generated avatars.json');
}

function generateWeaponList() {
    const names = genshindb.weapons('names', { matchCategories: true }) || [];
    const result = names.map(name => {
        const w = genshindb.weapons(name);
        if (!w) return null;
        const slug = w.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const filename = w.images?.filename_icon;
        const icon = filename ? `https://gi.yatta.moe/assets/UI/${filename}.png` : `https://genshin.jmp.blue/weapons/${slug}/icon`;
        return {
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
        };
    }).filter(w => w !== null);
    
    fs.writeFileSync(path.join(DATA_DIR, 'weapons.json'), JSON.stringify(result, null, 2));
    console.log('Generated weapons.json');
}

function generateReliquaryList() {
    const names = genshindb.artifacts('names', { matchCategories: true }) || [];
    const result = names.map(name => {
        const a = (genshindb.artifacts(name) as any);
        if (!a) return null;
        const slug = a.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const filename = a.images?.filename_flower || a.images?.filename_circlet || a.images?.filename_plume || '';
        const icon = filename ? `https://gi.yatta.moe/assets/UI/${filename}.png` : '';
        return {
            id: a.id || slug,
            slug,
            name: a.name,
            rank: a.rarity || a.maxRarity || 5,
            flower: a.images?.filename_flower,
            plume: a.images?.filename_plume,
            sands: a.images?.filename_sands,
            goblet: a.images?.filename_goblet,
            circlet: a.images?.filename_circlet,
            twoPieceBonus: a.effect2Pc,
            fourPieceBonus: a.effect4Pc,
            filename,
            icon,
            version: a.version || '1.0',
        };
    }).filter(a => a !== null);
    
    fs.writeFileSync(path.join(DATA_DIR, 'artifacts.json'), JSON.stringify(result, null, 2));
    console.log('Generated artifacts.json');
}

generateAvatarList();
generateWeaponList();
generateReliquaryList();
