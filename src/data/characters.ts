import { Character } from '../types';
import { NATLAN_CHARACTERS } from './characters/natlan';
import { FONTAINE_CHARACTERS } from './characters/fontaine';
import { SUMERU_CHARACTERS } from './characters/sumeru';
import { INAZUMA_CHARACTERS } from './characters/inazuma';
import { LIYUE_CHARACTERS } from './characters/liyue';
import { MONDSTADT_CHARACTERS } from './characters/mondstadt';
import { NOD_KRAI_CHARACTERS } from './characters/nodkrai';
import { SPECIAL_CHARACTERS } from './characters/special';

export const INITIAL_CHARACTERS: Character[] = [
  // Natlan
  ...NATLAN_CHARACTERS,
  // Fontaine
  ...FONTAINE_CHARACTERS,
  // Sumeru
  ...SUMERU_CHARACTERS,
  // Inazuma
  ...INAZUMA_CHARACTERS,
  // Liyue
  ...LIYUE_CHARACTERS,
  // Mondstadt
  ...MONDSTADT_CHARACTERS,
  // Nod Krai
  ...NOD_KRAI_CHARACTERS,
  // Snezhnaya & Other (Peoples of Teyvat)
  ...SPECIAL_CHARACTERS
];
