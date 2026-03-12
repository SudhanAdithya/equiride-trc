# EquiRide — UX/UI Design Portfolio

**Project:** EquiRide — Tirupur Riding Club Mobile App  
**Designer:** Sudhan M  
**Date:** March 2026  
**Platform:** Ionic 5 / Angular 9 (Mobile-first PWA)

---

## 1. Project Brief

Design a premium mobile social platform for a local horse riding club that combines **social networking**, **session booking**, and **facility showcase** into a unified, modern experience. The app should feel like a luxury equestrian brand — not a typical club management tool.

### Target Users
- Club members (riders of all levels)
- Coaches and trainers
- Prospective members exploring facilities

### Design Goals
1. Create a **visually stunning** dark-mode interface
2. Build a consistent, scalable **design system**
3. Demonstrate mastery of **modern UI patterns** (glassmorphism, micro-animations, gradient accents)
4. Prioritize **mobile-first** responsive design

---

## 2. Design System

### Color Palette

| Role | Hex | Application |
|------|-----|-------------|
| Background Primary | `#0F1117` | Page backgrounds, tab bar |
| Background Card | `rgba(26,29,38,0.65)` | Glassmorphism cards |
| Accent Gold | `#D4A76A` | Brand, CTAs, active states, avatars |
| Accent Teal | `#2EC4B6` | Secondary interactive elements |
| Accent Purple | `#7C5CFC` | Tertiary highlights |
| Text Primary | `#E5E7EB` | Headings, usernames |
| Text Secondary | `#9CA3AF` | Body text, descriptions |
| Text Muted | `#6B7280` | Timestamps, labels |

**Rationale:** The dark palette with warm gold evokes luxury and elegance, consistent with the premium equestrian aesthetic. Gold specifically connects to saddle leather, trophies, and championship ribbons.

### Typography
- **Font:** Inter (Google Fonts)
- **Weights Used:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Scale:** 10px (labels) → 52px (hero title)

### Component Library
- **Glass Card** — `backdrop-filter: blur(20px)`, semi-transparent background, subtle gold border
- **Avatar Ring** — Circular image with gradient gold border (2-3px)
- **Feature Chip** — Compact info tag with icon + label
- **Gold Button** — Gradient fill (`#D4A76A → #E8C992`), dark text, soft shadow
- **Glass Button** — Transparent with border, blur backdrop
- **Tab Bar** — Dark background, gold active indicator with icon glow

### Animation System
| Animation | Duration | Usage |
|-----------|----------|-------|
| `fadeIn` | 0.5s ease-out | Generic entrance |
| `slideUp` | 0.5-0.8s ease-out | Cards, sections |
| `pulseGlow` | 3s infinite | Logo badges, highlights |
| `loaderSlide` | 1.5s infinite | Splash screen loader |
| Stagger delay | 0.05-0.08s per child | Feed posts, notifications |

---

## 3. Screen Designs

### 3.1 Login Page
**Pattern:** Full-screen hero with content overlay

- Cinematic horse riding photograph fills the viewport
- Dark gradient overlay (30% → 98% opacity) creates readable text zone at bottom
- Logo badge with `pulseGlow` animation draws attention
- "TRC" rendered in 52px ExtraBold with gold gradient fill
- Glassmorphism sign-in button with Google icon and forward arrow
- Decorative dot pagination indicator

**UX Rationale:** The immersive hero creates an emotional first impression. By pushing all interactive elements to the bottom third, I optimize for one-handed mobile use.

![Login Page](/Users/sudhan/.gemini/antigravity/brain/beeecffc-5c37-426c-80b3-6b412c05cc0d/login_page_after_wait_1773290986959.png)

### 3.2 Social Feed
**Pattern:** Stories + Card Feed (inspired by Instagram / X)

- **Stories Row** — Horizontal scroll of 7 user avatars with gradient rings indicating unread stories (gold → teal gradient for active, gray for inactive)
- **Post Cards** — Glass cards with:
  - Avatar ring + username + relative timestamp
  - Body text with 14px/1.65 line-height for readability
  - Optional full-width image (12px border-radius)
  - Action bar: Heart (toggleable with red fill), Comment count, Share
- **FAB** — Gold gradient floating button for post creation
- **Data** — 7 sample posts with realistic riding content, sorted newest-first

**UX Rationale:** The stories row creates a sense of community and activity. Posts use a familiar social pattern to reduce learning curve.

![Feed Page](/Users/sudhan/.gemini/antigravity/brain/beeecffc-5c37-426c-80b3-6b412c05cc0d/tab2_booking_page_1773291457689.png)

### 3.3 Booking Page
**Pattern:** Form-in-Card

- Hero card with icon + title + description establishes context
- Dark-styled inputs with leading icons and subtle border animation on focus
- **Duration Chips** — 3 toggle options (30 min / 1 hour / 2 hours) with active gold state
- Gold gradient submit button with shadow depth

**UX Rationale:** Breaking the form into a visually distinct card separates it from the page chrome. Duration chips replace a dropdown for faster selection.

### 3.4 Notifications
**Pattern:** Categorized List

- Sectioned by recency (Today / Earlier)
- Each notification has a **color-coded icon badge** mapping to notification type:
  - 🟢 Green = Confirmations
  - 🔴 Red = Likes  
  - 🔵 Teal = Follows
  - 🟡 Gold = Events
  - 🟣 Purple = Comments
- Staggered slide-up animation on mount

### 3.5 Profile
**Pattern:** Hero + Stats + Feed

- Gradient hero banner (gold → teal, 12% opacity)
- 80px avatar with gold ring and green online badge
- Stats grid: Rides (87) / Posts (24) / Following (156)
- Achievement badges as horizontally scrollable icon cards
- "My Posts" section with compact post cards showing text + engagement metrics

### 3.6 Facilities
**Pattern:** Image Card Gallery

- Full-bleed images with hover zoom effect (scale 1.05)
- Color-coded category tags (Gold=Pool, Teal=Stay, Purple=Bar, Red=Kitchen)
- Feature chips showing key stats (dimensions, hours, capacity)
- 4 sections: Pool, Suites, Bar, Kitchen

### 3.7 Side Menu & Splash

- **Splash:** Centered logo with gold gradient text, pulsing glow, animated loader bar
- **Menu:** Dark panel with gold-ringed avatar, sectioned items (Explore / Admin / Settings)

---

## 4. UX Principles Applied

| Principle | Implementation |
|-----------|---------------|
| **Visual Hierarchy** | Depth via glassmorphism, color weight via gold accents, type scale from 10px to 52px |
| **Consistency** | Every page shares identical design tokens, card style, and animation language |
| **Feedback** | Ripple on touch, scale(0.92) on tap, heart color toggle, focus border glow |
| **Gestalt — Proximity** | Related info grouped in cards; stats grouped in centered grid |
| **Gestalt — Similarity** | All posts share identical card structure; all notifications share icon + text pattern |
| **Hick's Law** | Duration selection uses 3 chips instead of open input; tab bar limited to 3 tabs |
| **Fitts's Law** | FAB placed at thumb zone; CTA buttons are full-width with 16px padding |
| **Emotional Design** | Cinematic imagery, warm gold palette, and italic tagline create aspiration |
| **Dark Mode Benefits** | Reduced eye strain, OLED power saving, content-forward presentation |

---

## 5. Technical Implementation

- **Framework:** Ionic 5 + Angular 9 with SCSS modules
- **Data:** Firebase Firestore (real-time posts) + hardcoded sample data for portfolio demonstration
- **Auth:** Google OAuth 2.0 via Firebase Auth
- **Animations:** CSS `@keyframes` with staggered `animation-delay` per child element
- **Glassmorphism:** `backdrop-filter: blur(20px)` with `rgba` backgrounds and subtle borders
- **Responsive:** Mobile-first with `ion-split-pane` for tablet/desktop adaptation

---

## 6. Conclusion

EquiRide demonstrates a comprehensive approach to mobile UI/UX design — from establishing a cohesive design system with tokens and components, to applying it consistently across 7+ screens. The dark luxury theme differentiates the app from generic club management tools and positions it as a premium digital experience worthy of the equestrian lifestyle.

The project showcases proficiency in: **design systems**, **mobile-first design**, **component-driven architecture**, **micro-interactions**, **glassmorphism**, **information architecture**, and **emotional design**.
