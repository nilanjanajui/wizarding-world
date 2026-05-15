# ✨ Wizarding World

<div align="center">

```txt
 ██╗    ██╗██╗███████╗ █████╗ ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗
 ██║    ██║██║╚══███╔╝██╔══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔════╝
 ██║ █╗ ██║██║  ███╔╝ ███████║██████╔╝██║  ██║██║██╔██╗ ██║██║  ███╗
 ██║███╗██║██║ ███╔╝  ██╔══██║██╔══██╗██║  ██║██║██║╚██╗██║██║   ██║
 ╚███╔███╔╝██║███████╗██║  ██║██║  ██║██████╔╝██║██║ ╚████║╚██████╔╝
  ╚══╝╚══╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝
```

### ⚡ A Cinematic Harry Potter Experience Built With Modern React

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />

<br/>

> *"It does not do to dwell on dreams and forget to live."*
> — Albus Dumbledore

<br/>

[![Live Demo](https://img.shields.io/badge/✨_Live_Demo-111827?style=for-the-badge)](https://wizarding-world-sooty.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/📦_Repository-181717?style=for-the-badge\&logo=github)](https://github.com/nilanjanajui/wizarding-world)
[![Issues](https://img.shields.io/badge/🐛_Issues-red?style=for-the-badge)](https://github.com/nilanjanajui/wizarding-world/issues)
[![License](https://img.shields.io/badge/📜_MIT-green?style=for-the-badge)](#-license)

</div>

---

## 🌌 About The Project

**Wizarding World** is a fully immersive Harry Potter companion SPA designed to feel magical, cinematic, and alive.

Built with **React 18**, **Framer Motion**, and **Tailwind CSS v4**, the app combines modern frontend architecture with highly interactive visual effects — including animated route transitions, GPU-accelerated tilt cards, particle-based sparkle trails, and dynamic Hogwarts house theming.

The project focuses heavily on:

* ⚡ Smooth performance
* 🎨 Rich UI/UX interactions
* 🧠 Clean scalable architecture
* 🪄 Immersive wizarding-world aesthetics
* 📦 Modern React best practices

---

# ✨ Core Features

## 🏰 Cinematic Home Experience

* Gold shimmer animated hero title
* Scroll-triggered fade animations
* Featured wizard cards
* Atmospheric transitions and layered motion

---

## 🎬 Movies Explorer

Browse all **8 Harry Potter films** with:

* Official poster art
* Release dates
* Ratings & metadata
* Lazy-loaded images
* Responsive cinematic layout

---

## 🧙 Massive Character Database

Explore **4000+ wizarding characters** powered by Potter APIs.

### Includes:

* Live search
* Dynamic filtering
* Smart sorting
* Per-house visual themes
* Responsive grid layouts
* Hover glow effects
* Interactive 3D motion cards

---

## 👤 Deep Character Profiles

Each character includes:

* Biography
* Actor information
* Wand details
* House affiliation
* Patronus
* Species
* Blood status
* Birth details
* Wizarding lore enrichment

---

## ⭐ Persistent Favourites System

Users can save favourite characters with:

* `localStorage` persistence
* Shared React Context state
* Cross-page synchronization
* Instant updates

---

## 📊 Wizard Stats Dashboard

Interactive stats powered by real character and actor data.

Features:

* Animated charts
* Actor career insights
* Character distribution metrics
* Motion-driven visualizations

---

## 🎩 Sorting Hat Ceremony

A playful interactive sorting experience inspired by Hogwarts.

* Animated sorting reveal
* House-based effects
* Dynamic outcomes
* Cinematic transitions

---

# 🎨 Signature UI & Animation Systems

## ✨ Golden Sparkle Cursor Trail

A full-screen canvas overlay renders enchanted particles that follow the cursor in real time.

### Technical Details

* `requestAnimationFrame` optimized
* Physics-inspired motion
* Particle fade + gravity system
* Glow blur rendering
* 16ms spawn throttling
* Multiple particle geometries
* GPU-friendly rendering strategy

### Particle Types

* ✦ Stars
* ◆ Diamonds
* ✚ Cross ellipses
* ● Orbs

---

## 🪄 3D Tilt Character Cards

Each character card responds dynamically to cursor movement.

### Built With

* `useMotionValue`
* `useTransform`
* `useSpring`
* Framer Motion perspective transforms

### Effects

* ±8° perspective tilt
* Elastic spring snap-back
* House glow blooms
* Hover depth illusion
* Dynamic shadow interpolation

---

## 🏠 Dynamic Hogwarts House Theming

Every Hogwarts house has a complete visual identity.

| House         | Primary Color | Glow Style      | Theme Mood       |
| ------------- | ------------- | --------------- | ---------------- |
| 🦁 Gryffindor | `#c84b11`     | Crimson bloom   | Bold & heroic    |
| 🦡 Hufflepuff | `#f0a500`     | Amber glow      | Warm & loyal     |
| 🦅 Ravenclaw  | `#0e4d8a`     | Royal blue aura | Elegant & wise   |
| 🐍 Slytherin  | `#1a6b3a`     | Emerald mist    | Dark & ambitious |

---

## 🌠 Page Transition System

The app uses `AnimatePresence` for seamless route transitions.

### Transition Features

* Route fade animations
* Smooth page exits
* Shared layout persistence
* Animated loading boundaries
* Suspense-driven lazy route loading

---

# 🏗️ Project Architecture

```txt
src/
├── components/
│   ├── Layout.jsx
│   ├── SparkleTrail.jsx
│   ├── Navbar.jsx
│   └── characters/
│       ├── TiltCard.jsx
│       └── CharacterProfile.jsx
│
├── context/
│   ├── FavoritesContext.jsx
│   └── CharactersContext.jsx
│
├── data/
│   └── charactersData.js
│
├── hooks/
│   └── useScrollFade.js
│
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── Characters.jsx
│   ├── FavCharacters.jsx
│   ├── WizardStats.jsx
│   ├── SortingHat.jsx
│   └── NotFound.jsx
│
├── App.jsx
└── index.css
```

---

# 🧠 Architectural Decisions

## ⚛️ Context API Instead of Redux

The application intentionally avoids Redux and large state libraries.

### Why?

* Smaller bundle size
* Cleaner developer experience
* Reduced boilerplate
* Simpler data flow
* Better maintainability

---

## ⚡ Shared Character Fetching

`CharactersContext` performs a single API fetch and distributes the data globally.

### Benefits

* Zero duplicate requests
* Faster navigation
* Shared cache behavior
* Cleaner page architecture

---

## 💤 Aggressive Lazy Loading

Every route is loaded on demand using:

```jsx
React.lazy()
<Suspense>
```

This keeps the initial bundle lightweight and improves performance significantly.

---

# ⚡ Performance Optimizations

| Optimization               | Benefit                      |
| -------------------------- | ---------------------------- |
| Route-based code splitting | Smaller initial bundle       |
| Lazy-loaded images         | Faster rendering             |
| Shared API context         | Prevents duplicate requests  |
| Canvas throttling          | Stable FPS                   |
| Cleanup on unmount         | Prevents memory leaks        |
| Suspense boundaries        | Smoother loading UX          |
| Motion optimization        | Better animation performance |

---

# 🧪 Error Handling System

Robust failure handling exists across all data-fetching pages.

### Includes

* Full-screen fallback UI
* Human-readable error messages
* Animated retry buttons
* Retry state re-trigger system
* Context-level retry support

### Retry Mechanism

```js
setRetryKey((prev) => prev + 1)
```

Simple, predictable, and dependency-free.

---

# 🔌 APIs Used

| API            | Purpose                      |
| -------------- | ---------------------------- |
| HP API         | Character roster & portraits |
| PotterDB       | Posters & enriched metadata  |
| Potterhead API | Supplemental lore data       |

---

# 🛠️ Tech Stack

| Technology           | Purpose           |
| -------------------- | ----------------- |
| React 18             | UI library        |
| Vite 5               | Build tooling     |
| Tailwind CSS v4      | Styling system    |
| Framer Motion        | Animation engine  |
| React Router v6      | Routing           |
| Context API          | Global state      |
| IntersectionObserver | Scroll animations |
| Canvas API           | Particle system   |

---

# 🚀 Getting Started

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/nilanjanajui/wizarding-world.git

# Enter the project
cd wizarding-world

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🏗️ Production Build

```bash
npm run build
npm run preview
```

---

# 🧭 Route Structure

```jsx
<BrowserRouter>
  <SparkleTrail />

  <AnimatePresence mode="wait">
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:name" element={<CharacterProfile />} />
      <Route path="/favourites" element={<FavCharacters />} />
      <Route path="/stats" element={<WizardStats />} />
      <Route path="/sorting-hat" element={<SortingHat />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </AnimatePresence>
</BrowserRouter>
```

---

# 📸 Recommended README Screenshots

Add screenshots/gifs for:

* 🏰 Home page hero
* 🧙 Character grid
* ✨ Sparkle cursor trail
* 🎩 Sorting Hat experience
* 📊 Stats dashboard
* 🎬 Movies page
* 🪄 Tilt card hover animation

Example:

```md
![Home Screenshot](./public/screenshots/home.png)
```

---

# 🗺️ Future Roadmap

## Planned Features

* [ ] HP Trivia Quiz
* [ ] Spells Encyclopedia
* [ ] Character Comparison System
* [ ] Movie Timeline Experience
* [ ] Wizard Duel Mini-game
* [ ] Sorting Hat SVG Animation Upgrade
* [ ] Shared `HOUSE_CONFIG` extraction
* [ ] Offline support with caching
* [ ] PWA support

---

# 🤝 Contributing

Contributions are welcome.

```bash
# Fork the repository

# Create a feature branch
git checkout -b feature/amazing-feature

# Commit changes
git commit -m "Add amazing feature"

# Push branch
git push origin feature/amazing-feature
```

Then open a Pull Request.

---

# 📜 License

Distributed under the MIT License.

See `LICENSE` for more information.

---

# 💫 Final Note

This project is a fan-made tribute to the Harry Potter universe.

All wizarding-world characters, names, houses, and related properties belong to J.K. Rowling and Warner Bros.

---

<div align="center">

## ✨ Made with magic, motion, and modern React

### by [nilanjanajui](https://github.com/nilanjanajui)

<br/>

```txt
  ∗  .  ·  ˚  ✦   ·    .   ✦  ˚  ·  .  ∗
      "Mischief Managed."
  ∗  .  ·  ˚  ✦   ·    .   ✦  ˚  ·  .  ∗
```

</div>
