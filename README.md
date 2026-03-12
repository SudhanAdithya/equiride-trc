<p align="center">
  <img src="src/assets/login-hero.png" alt="EquiRide TRC" width="600" style="border-radius: 16px" />
</p>

<h1 align="center">🏇 EquiRide — Tirupur Riding Club</h1>

<p align="center">
  <strong>A premium mobile-first social platform for the equestrian community</strong><br>
  <em>Built with Ionic • Angular • Firebase — Designed for portfolio excellence</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-9-DD0031?logo=angular" />
  <img src="https://img.shields.io/badge/Ionic-5-3880FF?logo=ionic" />
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase" />
  <img src="https://img.shields.io/badge/Design-Dark%20Luxury-D4A76A" />
</p>

---

## ✨ Overview

**EquiRide** is a full-featured social & booking platform designed for the Tirupur Riding Club (TRC). The app delivers a **dark-mode luxury** experience with glassmorphism, micro-animations, and a curated equestrian aesthetic — built to showcase modern **UI/UX design principles**.

> This project demonstrates end-to-end mobile application design, from visual identity to interactive prototyping, using a real-world use case for a local horse riding club.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Background** | `#0F1117` | Primary dark surface |
| **Card** | `rgba(26,29,38,0.65)` | Glassmorphism cards |
| **Gold** | `#D4A76A` | Branding, CTAs, active states |
| **Teal** | `#2EC4B6` | Secondary interactions |
| **Purple** | `#7C5CFC` | Tertiary accent |
| **Typography** | Inter (300–800) | Google Fonts |

### Design Principles
- 🌑 **Dark Mode First** — Deep charcoal surfaces with luminous accents
- 🪟 **Glassmorphism** — `backdrop-filter: blur(20px)` on all cards
- ✨ **Micro-Animations** — fadeIn, slideUp, pulseGlow on interactive elements
- 💎 **Gold Ring Avatars** — Gradient-bordered circular profile images
- 📱 **Mobile-First** — Optimized for 375px viewport, scales beautifully

---

## 📱 App Screens

### 🔐 Login
Full-screen cinematic hero with horse rider at sunset. Gradient overlay fades to dark. Gold TRC branding with glassmorphism "Continue with Google" button. Animated entry with staggered slide-ups.

### 📰 Social Feed
- **Stories Row** — Horizontal scrollable avatars with gradient ring indicators
- **Posts** — Glassmorphism cards with avatar rings, timestamps, like/comment/share actions
- **FAB** — Gold gradient floating action button for new posts
- **Data** — 7 sample posts from diverse fake users + live Firestore posts, sorted newest-first

### 📅 Book a Ride  
Premium booking form with custom-styled dark inputs, floating icon labels, session duration chips (30m / 1h / 2h), and a gold gradient submit button.

### 🔔 Notifications
Categorized alerts (Today / Earlier) with color-coded icon badges — green for confirmations, red for likes, teal for follows, gold for events, purple for comments.

### 👤 Profile
Hero banner with gradient overlay, gold-ringed avatar, online status badge, stats grid (Rides / Posts / Following), achievement badges, and "My Posts" section.

### 🏊 Facilities
Four immersive sections with full-bleed images and feature chips:
- **Infinity Pool & Deck** — 25m heated pool, 6AM-9PM
- **Luxury Suites** — 12 rooms with countryside views  
- **The Equestrian Lounge** — Cocktail bar with live music
- **Farm-to-Table Kitchen** — Organic South Indian & international cuisine

### 🧭 Side Menu
Dark themed navigation with gold avatar ring, categorized sections (Explore / Admin / Settings), and styled menu items with icon badges.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Ionic 5 + Angular 9 |
| **Backend** | Firebase Firestore + Firebase Auth |
| **Storage** | Firebase Cloud Storage |
| **Push Notifications** | Firebase Cloud Messaging |
| **Styling** | SCSS with CSS Custom Properties |
| **Fonts** | Google Fonts (Inter) |
| **Authentication** | Google Sign-In (OAuth 2.0) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 14.x (recommended: use conda or nvm)
- npm 6.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/SudhanAdithya/equiride-trc.git
cd equiride-trc

# Install dependencies
npm install

# Start the dev server
npm start
```

The app will be available at `http://localhost:4200/`

> **Tip:** Open Chrome DevTools → Toggle Device Toolbar → Select iPhone 12 Pro for the best mobile preview experience.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── login/          # Full-screen hero login
│   ├── tab1/           # Social feed with stories & posts
│   ├── tab2/           # Booking page
│   ├── tab3/           # Notifications
│   ├── profile/        # User profile with stats & badges
│   ├── facility/       # Club facilities showcase
│   ├── horses/         # Horse directory
│   ├── tabs/           # Tab bar navigation
│   └── core/           # Services (Auth, Posts, FCM)
├── assets/             # Images (hero, posts, facilities)
├── theme/
│   └── variables.scss  # Design tokens & color palette
├── global.scss         # Global styles & animations
└── index.html          # SEO-optimized entry point
```

---

## 🎯 UX Design Highlights

1. **Visual Hierarchy** — Content is layered using depth (glassmorphism), color (gold accents on dark), and typography weight (Inter 300-800)
2. **Consistency** — Every page shares the same design tokens, card style, and animation language
3. **Feedback** — Ripple effects, scale transforms on tap, and state changes on interactions
4. **Accessibility** — High contrast ratios (gold on dark ≈ 7.2:1), clear labels, and semantic HTML
5. **Emotional Design** — Cinematic hero images, warm color palette, and elegant typography create a premium feel

---

## 👨‍💻 Author

**Sudhan M**  
UI/UX Designer & Full-Stack Developer

---

<p align="center">
  <em>Crafted with ♥ for the equestrian community</em>
</p>
