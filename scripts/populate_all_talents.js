import fs from 'fs';
import path from 'path';

import { ALL_TALENTS as fontaineTalents } from './talents_fontaine.js';
import { INAZUMA_TALENTS as inazumaTalents } from './talents_inazuma.js';
import { LIYUE_TALENTS as liyueTalents } from './talents_liyue.js';
import { MONDSTADT_TALENTS as mondstadtTalents } from './talents_mondstadt.js';
import { NATLAN_TALENTS as natlanTalents } from './talents_natlan.js';
import { NODKRAI_TALENTS as nodkraiTalents } from './talents_nodkrai.js';
import { SPECIAL_TALENTS as specialTalents } from './talents_special.js';
import { SUMERU_TALENTS as sumeruTalents } from './talents_sumeru.js';

const combinedTalents = {
  ...fontaineTalents,
  ...inazumaTalents,
  ...liyueTalents,
  ...mondstadtTalents,
  ...natlanTalents,
  ...nodkraiTalents,
  ...specialTalents,
  ...sumeruTalents,
};

function formatSkills(talents) {
  const lines = ['skills: ['];
  for (const s of talents) {
    lines.push('      {');
    lines.push(`        name: ${JSON.stringify(s.name)},`);
    lines.push(`        type: ${JSON.stringify(s.type)},`);
    lines.push(`        description: ${JSON.stringify(s.description)},`);
    lines.push('      },');
  }
  lines.push('    ],');
  return lines.join('\n');
}

const charactersDir = path.resolve(process.cwd(), 'src/data/characters');
const files = fs.readdirSync(charactersDir).filter(f => f.endsWith('.ts'));

let totalUpdatedCharacters = 0;

for (const file of files) {
  const filePath = path.join(charactersDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Find all character blocks by id
  const regex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  const matches = [];
  while ((match = regex.exec(content)) !== null) {
    matches.push({ id: match[1], index: match.index });
  }

  // Iterate in reverse order so string indices remain valid when replacing
  for (let i = matches.length - 1; i >= 0; i--) {
    const charId = matches[i].id;
    const talents = combinedTalents[charId];
    if (!talents) {
      console.warn(`No talents found for character ID: ${charId}`);
      continue;
    }

    const startIndex = matches[i].index;
    const endIndex = (i + 1 < matches.length) ? matches[i + 1].index : content.length;
    const charBlock = content.slice(startIndex, endIndex);

    const skillRegex = /skills:\s*\[[\s\S]*?\n\s*\],/m;
    const skillMatch = charBlock.match(skillRegex);
    if (!skillMatch) {
      console.warn(`Could not find skills block for character: ${charId}`);
      continue;
    }

    const formatted = formatSkills(talents);
    const updatedCharBlock = charBlock.replace(skillRegex, formatted);

    content = content.slice(0, startIndex) + updatedCharBlock + content.slice(endIndex);
    totalUpdatedCharacters++;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${file} successfully.`);
}

console.log(`Total characters updated with complete talents: ${totalUpdatedCharacters}`);
