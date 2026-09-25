# 📚 The Damselette Archive - Data Sources & API Registry

This document serves as the canonical reference guide for all authoritative, official, community, datamined, and theorycrafted data sources, APIs, endpoint schemas, and update pipelines integrated into **The Damselette Archive**.

---

## 1. 🌐 Comprehensive Registry of Data Sources & APIs

| Source / Tool | Provider / Badge | Coverage / Records | API Endpoint / Format | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **[HoYoWiki](https://wiki.hoyolab.com/pc/genshin/home)** | HoYoverse <br>`Official` | All Official Characters, Weapons, Artifacts, Enemies | `https://sg-wiki-api.hoyolab.com/hoyowiki/genshin/wapi/get_entry_page_list`<br>`REST / JSON` | Official voice actors (EN/JP/CN/KR), canonical profile data, official talent text. |
| **[Teyvat Interactive Map](https://act.hoyolab.com/ys/app/interactive-map/index.html)** | HoYoverse <br>`Official` | 10,000+ World Markers across 8 Regions | `https://sg-public-api.hoyolab.com/event/game_record/genshin/api/map_spot`<br>`REST / JSON` | Official coordinates, Oculus locations, NPC markers, and waypoint positions. |
| **[Project Amber (ambr.top)](https://ambr.top/en/archive)** | Project Amber <br>`Community API` | Complete Game Archive (Avatars, Weapons, Artifacts, Books, Audio) | `https://api.ambr.top/v2/en/avatar`<br>`REST / JSON` | High-fidelity character base stats, ascension costs, multi-volume books, audio assets. |
| **[Genshin Impact Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki)** | Fandom Curators <br>`Wiki Database` | 343 NPCs • 477 Event World Quests • All Lore Scripts | `https://genshin-impact.fandom.com/api.php?action=parse&format=json`<br>`MediaWiki Action API` | NPC resident conversation gifts, exact dialogue triggers, event quest chains, version histories. |
| **[EnkaNetwork](https://enka.network)** | EnkaNetwork / MikuGG <br>`Community API` | Real-time Player Profiles via UID | `https://enka.network/api/uid/{UID}`<br>`REST / JSON` | Live player showcase, artifact substats, roll values, weapon levels, talent investments. |
| **[genshin-db](https://github.com/theBowja/genshin-db)** | theBowja <br>`Open Source` | 129 Characters • 279 Weapons • 63 Reliquary Sets | `npm install genshin-db`<br>`Node.js / TypeScript Module` | High-speed, zero-latency in-memory SQLite/JSON querying for server.ts. |
| **[Hakush.in Database](https://gi.hakush.in)** | Hakush.in <br>`Datamine` | Raw Multipliers, ICD Tags, 3D Assets | `https://api.hakush.in/gi/data/character.json`<br>`REST / JSON` | Raw multiplier curves, elemental gauge theory, enemy resistance scaling tables. |
| **[HomDGCat Database](https://homdgcat.wiki/gi)** | HomDGCat <br>`Datamine` | Hidden Formulas, Abyss Waves, Drop Rates | `https://homdgcat.wiki/gi/char`<br>`Web Archive / Datamine` | Exact mathematical formulas for defense reduction, poise damage, and monster HP scaling. |
| **[KeqingMains (KQM)](https://keqingmains.com)** | KQM Community <br>`Theorycrafting` | 100+ Character Build Guides & Calculations | `https://keqingmains.com/category/characters/`<br>`Web Archive / Guides` | Stat priorities (CRIT / ER / EM / ATK), weapon rankings, and optimal rotation sequences. |
| **[Genshin Optimizer](https://genshin-optimizer.com)** | Frzyc <br>`Open Source` | Mathematical Damage Engine & GOOD Spec | `https://github.com/frzyc/genshin-optimizer`<br>`GOOD Standard / TypeScript` | Standardized GOOD format for artifact inventory exchange and damage formula calculators. |
| **[Paimon.moe](https://paimon.moe)** | Made by Made <br>`Community API` | 50M+ Wish Pulls & Event Timelines | `https://paimon.moe/wish/tally`<br>`Web Archive / Analytics` | Global wish probability distributions, soft pity curves (74+ pulls), banner timeline archives. |

---

## 2. 🔄 How to Synchronize & Update Datasets

All data fetchers and sync pipelines are automated with NPM commands:

### Sync NPC Dialogue Gifts (343 NPCs)
```bash
npm run sync:npcs
```
* **Source**: Genshin Impact Wiki Action API
* **Output**: `src/data/npcs.json`
* **Fields**: NPC Name, Region, Dialogue Trigger Prompt (`{{DIcon|Reward}}`), In-Game Response, Reward Items & Counts, Location Text & Screenshot URLs.

### Sync Event World Quests (477 Quests across 146 Events)
```bash
npm run sync:quests
```
* **Source**: Genshin Impact Wiki World Quest Event List
* **Output**: `src/data/event_quests.json`
* **Fields**: Version number, Era Tag (`1.x`, `2.x`, `3.x`, `4.x`, `5.x`, `Special`), Limited-Time Event Name, and Sub-Quest chapters.

### Sync Everything at Once
```bash
npm run sync:all
```

### Update Offline Character / Weapon / Artifact Database
```bash
npm update genshin-db
```

---

## 3. 🛠️ Server Proxy Endpoints

The full-stack application provides high-speed, cached proxy endpoints:

- `GET /api/amber/avatar` - List of all characters
- `GET /api/amber/avatar/:id` - Full character details with talents, constellations, and passives
- `GET /api/amber/weapon` - List of all weapons
- `GET /api/amber/weapon/:id` - Full weapon details with R1-R5 scalings
- `GET /api/amber/reliquary` - List of all artifact sets
- `GET /api/amber/reliquary/:id` - Artifact set bonuses and lore
- `GET /api/amber/book` - List of all literature series & books
- `GET /api/amber/book/:id` - Full multi-volume book story content
- `GET /api/amber/npc` - List of all 343 NPC dialogue rewards
- `GET /api/amber/quest` - List of all 477 Event World Quests
- `GET /api/enka/showcase/:uid` - Live player showcase profile data from EnkaNetwork

---

## 4. 📖 API Call Examples

### HoYoWiki Official REST API
```bash
curl -X POST "https://sg-wiki-api.hoyolab.com/hoyowiki/genshin/wapi/get_entry_page_list" \
  -H "Content-Type: application/json" \
  -d '{"filters":[],"menu_id":"2","page_num":1,"page_size":30}'
```

### Project Amber REST API
```bash
curl -s "https://api.ambr.top/v2/en/avatar"
curl -s "https://api.ambr.top/v2/en/weapon"
curl -s "https://api.ambr.top/v2/en/reliquary"
curl -s "https://api.ambr.top/v2/en/book"
```

### Genshin Impact Wiki MediaWiki API
```bash
curl -s "https://genshin-impact.fandom.com/api.php?action=parse&page=NPC/Dialogue_Reward&prop=text&format=json"
curl -s "https://genshin-impact.fandom.com/api.php?action=parse&page=World_Quest/Event_List&prop=text&format=json"
```

### EnkaNetwork Player Profile API
```bash
curl -s "https://enka.network/api/uid/800000000"
```
