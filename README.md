# Ganesh Sapkota | Photography & Videography Portfolio

A premium, interactive React-based portfolio website designed to showcase photography work and engage visitors with custom games and animations.

## 🚀 Project Overview

Thinking of this as more than just a gallery—it's an experience. The site combines high-performance image loading, interactive canvas animations, and a fully functional game, all built on a modern React tech stack.

### Key Features
*   **Immersive Hero Section**: Features 3D mouse-parallax effects, canvas particle systems, and interactive lens flares.
*   **Dynamic Gallery**: A location-based photo gallery with efficient filtering and a custom-built lightbox (modal) for viewing high-res images.
*   **Hangman Game**: A fully separated, themed game page (`/game`) with Nepal-heritage questions, custom logic, and mobile-optimized controls.
*   **Graduation Tribute**: A special storytelling section with scroll-triggered animations and fireworks effects.
*   **Responsive Design**: Mobile-first approach ensuring perfect layout on all devices (iPhone, iPad, Desktop).

---

## 🛠 Tech Stack

*   **Frontend Library**: [React](https://react.dev/) (v18+)
*   **Build Tool**: [Vite](https://vitejs.dev/) - For ultra-fast development and optimized production builds.
*   **Routing**: [React Router DOM](https://reactrouter.com/) - Handles navigation between the Portfolio and Game page.
*   **Styling**: Pure CSS with `styled-jsx` patterns (scoped styles within components) and CSS Variables for theming.
*   **Assets**: Optimized image handling with explicit imports to support Vite bundling.

---

## 🏃‍♂️ Getting Started

Want to run this project locally? Follow these steps:

### 1. Prerequisites
Make sure you have **Node.js** (v16 or higher) installed.

### 2. Installation
Clone the project and install usage dependencies:
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will launch at `http://localhost:5173`.

---

## 📂 Project Structure

Here is a quick map to help you navigate the codebase:

```bash
src/
├── assets/          # Images (Gallery photos, backgrounds, graduation pics)
├── components/      # All React Components
│   ├── Navbar.jsx   # Navigation Logic & Scroll Handling
│   ├── Home.jsx     # Landing Page (Hero + Sections)
│   ├── Hero.jsx     # Canvas Animations & 3D Effects
│   ├── Gallery.jsx  # Photo Grid & Lightbox Logic
│   ├── Hangman.jsx  # Game Logic & UI (Standalone Page)
│   └── ...          # Other sections (About, Contact, Graduation)
├── App.jsx          # Main Router Setup
└── index.css        # Global Styles & CSS Variables
```

---

## 🎓 Learning Guide

If you are a developer looking to learn from this codebase, check out these interesting implementations:

### 1. Canvas Sparkles & Parallax (`Hero.jsx`)
*   **What to look for**: How `requestAnimationFrame` is used to create smooth particle animations without slowing down the UI.
*   **Tip**: Check the `Particle` class and how `mousePos` state drives the parallax movement.

### 2. Custom Gallery Lightbox (`Gallery.jsx`)
*   **What to look for**: Instead of using a library, we built a custom modal. Look at how `selectedImgIndex` manages the state and how keyboard events (`ArrowLeft`, `ArrowRight`, `Escape`) are attached for accessibility.

### 3. Game Logic & Routing (`Hangman.jsx` & `App.jsx`)
*   **What to look for**:
    *   **Space Handling**: How the game logic ignores spaces in "FEWA LAKE" so users don't have to guess them.
    *   **Mobile Responsiveness**: Check the `@media (max-width: 600px)` blocks to see how the layout shifts from horizontal to vertical for phones.
    *   **Routing**: How `Navbar.jsx` conditionally navigates: it scrolls if you are on Home, but redirects if you are on the Game page.

---

## 🎨 Customization

### Changing the Game Questions
Open `src/components/Hangman.jsx` and modify the `WORDS` constant:
```javascript
const WORDS = [
  { word: 'YOUR_WORD', hint: 'Your custom hint here.' },
  // Add as many as you like!
];
```

### Adding Photos
1.  Add your image file to `src/assets/`.
2.  Import it in `Gallery.jsx` or `Graduation.jsx`.
3.  Add it to the data array (e.g., `gradPhotos` or `galleryData`).

---

## © Copyright

**© 2026 Ganesh Sapkota.**
All Rights Reserved.
Designed & Developed with passion.
