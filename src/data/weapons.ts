import { Weapon } from '../types';
import { SWORDS } from './weapons/swords';
import { CLAYMORES } from './weapons/claymores';
import { POLEARMS } from './weapons/polearms';
import { BOWS } from './weapons/bows';
import { CATALYSTS } from './weapons/catalysts';

export const INITIAL_WEAPONS: Weapon[] = [
  ...SWORDS,
  ...CLAYMORES,
  ...POLEARMS,
  ...BOWS,
  ...CATALYSTS
];
