# The Damselette Archive

A high-performance Genshin Impact lore, literature, and game records database. Named in honor of Columbina (The Damselette), this archive is powered by live data from **Project Amber** paired with local static compendiums.

---

## 🚀 Key Features

- **Character Archive**: Search and inspect full talent trees, element types, weapon specialties, voice actor profiles, and custom elemental description formatting.
- **Weapon Compendium**: Explore weapons from 1★ to 5★, featuring real-time refinement slider controls to display scaling stats and effects.
- **Artifact Sets Specification**: Full 2-Piece and 4-Piece set effect details, with 100% reliable set piece icon assets fetched dynamically via high-availability CDNs. Including custom handling for 1-piece tiara/prayers sets.
- **Book & Literature Library**: Read multi-volume lore books, historical diaries, and in-game letters with beautiful stylized text.
- **Theme Selector**: Dynamic theme selection to choose between luxurious Dark mode and stylized themes.

---

## 📁 Clean Codebase Directory Structure

```text
/
├── server.ts             # Express backend proxy for Project Amber & Enka API requests
├── vite.config.ts        # Vite configuration with proxy settings
├── index.html            # Web entry point
├── src/
│   ├── App.tsx           # Main App layout, tab navigation, and theme applicator
│   ├── main.tsx          # React application entry point
│   ├── index.css         # Global Tailwind CSS definitions
│   ├── types.ts          # Shared TypeScript type definitions
│   ├── components/       # Core UI modules (clean single-purpose components)
│   │   ├── Navbar.tsx             # Sticky squircle logo-brand header with navigation tabs
│   │   ├── ThemeSelector.tsx      # Dropdown selector for UI themes
│   │   ├── ArchiveAvatarView.tsx  # Character cards & talent grid
│   │   ├── ArchiveWeaponView.tsx  # Refinement sliding scale & story
│   │   ├── ArchiveReliquaryView.tsx # Artifact sets, piece icons & effects
│   │   ├── ArchiveBookView.tsx    # Multi-volume text reading interface
│   │   └── GenshinTextRenderer.tsx # Context-aware text formatting for custom icons
│   ├── data/             # Local database compendiums
│   │   ├── characters.ts          # Default character rosters
│   │   ├── weapons.ts             # Default weapon rosters
│   │   ├── artifacts.ts           # Default artifact set list
│   │   ├── books.ts               # Local book texts
│   │   └── characters/ / weapons/ # Specialized database files
│   ├── services/         # API interfaces
│   │   └── amberService.ts        # Clean API fetch proxy wrappers
│   └── utils/            # Shared helper files
│       └── theme.ts               # Theme modes and browser storage sync
```

---

## 🛠️ Development & Production Commands

### Running Locally

To install dependencies and start the local development server:

```bash
npm install
npm run dev
```

### Production Build

Compiles both the client-side single-page app (SPA) and server bundle cleanly:

```bash
npm run build
npm start
```

---

## 🌐 Deploying to GitHub Pages via GitHub Actions

This repository includes a pre-configured automated workflow in `.github/workflows/deploy.yml` for publishing directly to **GitHub Pages**.

### 1-Minute Setup in your GitHub Repository:
1. Go to your repository on GitHub.
2. Click **Settings** (top tabs) → **Pages** (left sidebar).
3. Under **Build and deployment** → **Source**, change from `"Deploy from a branch"` to **`GitHub Actions`**.
4. Push your changes to the `main` or `master` branch (or run the workflow manually under **Actions** → **Deploy The Damselette Archive to GitHub Pages** → **Run workflow**).
5. GitHub Actions will build the static site, generate `.nojekyll` and SPA `404.html`, and publish your site!
