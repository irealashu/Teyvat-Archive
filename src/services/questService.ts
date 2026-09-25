import { ParsedQuestDetail, QuestStep, QuestReward } from './questParser';

export type DetailedQuestData = ParsedQuestDetail;
export type { QuestStep, QuestReward };

const clientQuestCache: Record<string, DetailedQuestData> = {};

export async function fetchQuestFullDetail(
  questName: string,
  eventName: string = '',
  version: string = '',
  majorTag: string = ''
): Promise<DetailedQuestData> {
  const cleanName = questName.replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
  const cleanEvent = eventName.replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
  const cacheKey = `${version}__${cleanEvent}__${cleanName}`.toLowerCase();

  if (clientQuestCache[cacheKey]) {
    return clientQuestCache[cacheKey];
  }

  try {
    const params = new URLSearchParams({
      name: cleanName,
      eventName: cleanEvent,
      version,
      majorTag,
    });

    const res = await fetch(`/api/quest/detail?${params.toString()}`);
    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }

    const data: DetailedQuestData = await res.json();
    clientQuestCache[cacheKey] = data;
    return data;
  } catch (err: any) {
    console.warn(`[questService] Error fetching quest detail for "${questName}":`, err.message);

    // Fallback object
    const fallback: DetailedQuestData = {
      id: cacheKey,
      name: cleanName,
      eventName: cleanEvent,
      version: version || 'Teyvat Chronicles',
      majorTag: majorTag || 'Special',
      region: 'Teyvat',
      category: 'Event World Quest',
      summary: `World quest storyline for "${cleanName}" in the "${cleanEvent}" event series.`,
      prerequisites: 'Adventure Rank 20+ and event unlock.',
      steps: [
        { number: 1, text: `Trigger the quest "${cleanName}" in world map.` },
        { number: 2, text: `Speak with key companions and complete the event trial objectives.` },
      ],
      rewards: [
        { name: 'Primogem', count: 60, iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_201.png', rarity: 5 },
        { name: 'Mora', count: '30,000', iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_102.png', rarity: 3 },
        { name: "Hero's Wit", count: 3, iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_104003.png', rarity: 4 },
        { name: 'Mystic Enhancement Ore', count: 6, iconUrl: 'https://gi.yatta.moe/assets/UI/UI_ItemIcon_104013.png', rarity: 3 },
      ],
      characters: ['Traveler', 'Paimon'],
      wikiUrl: `https://genshin-impact.fandom.com/wiki/${encodeURIComponent(cleanName.replace(/\s+/g, '_'))}`,
      isLiveFetched: false,
    };
    return fallback;
  }
}
