# DESIGN.md — Impeccable UI/UX System Guidelines

This document outlines the **Impeccable** design system specification for the personal portfolio. It acts as the single source of truth for visual hierarchy, layout rhythm, color theory, component states, and motion aesthetics.

---

## 1. Core Visual Identity & Tone

- **Aesthetic Direction**: Ultra-sleek, professional software engineering vCard portfolio with rich glassmorphism, refined dark mode, crisp light mode support, and micro-animated interactions.
- **Vibe**: High craft, modern, authoritative, and responsive. Avoid default stock templates or plain monochromatic boxes.

---

## 2. Color System & Tokens

### Dark Theme (Default)
- **Primary Canvas**: `hsl(240, 3%, 6%)` (Smoky Black)
- **Container / Card Layers**: 
  - Base: `hsl(240, 2%, 13%)` (Eerie Black 1)
  - Surface: `hsl(240, 1%, 17%)` (Onyx)
  - Floating Card: `hsl(240, 2%, 18%)` (Jet)
- **Accent Identity**:
  - Primary Accent: `hsl(45, 100%, 72%)` (Warm Gold / Crayola)
  - Secondary Accent: `hsl(35, 100%, 64%)` (Deep Amber)
  - Accent Gradient: `linear-gradient(135deg, hsl(45, 100%, 72%) 0%, hsl(35, 100%, 64%) 100%)`
- **Text Hierarchy**:
  - Headings / Primary: `hsl(0, 0%, 100%)`
  - Body / Secondary: `hsla(240, 1%, 85%, 0.85)`
  - Muted / Meta: `hsla(240, 1%, 70%, 0.65)`

### Light Theme
- **Primary Canvas**: `hsl(0, 0%, 97%)`
- **Container / Card Layers**:
  - Base: `hsl(0, 0%, 100%)` (Pure White)
  - Surface: `hsl(0, 0%, 96%)`
  - Border Glass: `rgba(0, 0, 0, 0.08)`
- **Accent Gradient**: `linear-gradient(135deg, hsl(38, 95%, 48%) 0%, hsl(28, 90%, 44%) 100%)`
- **Text Hierarchy**:
  - Headings / Primary: `hsl(240, 10%, 12%)`
  - Body / Secondary: `hsl(240, 4%, 30%)`

---

## 3. Depth, Elevation & Glassmorphism

- **Glass Containers**:
  - `background: rgba(30, 30, 35, 0.65)`
  - `backdrop-filter: blur(16px) saturate(180%)`
  - `border: 1px solid rgba(255, 255, 255, 0.08)`
- **Shadow Scale**:
  - Level 1 (Cards): `0 4px 20px -2px rgba(0, 0, 0, 0.3)`
  - Level 2 (Hover/Active): `0 12px 30px -4px rgba(0, 0, 0, 0.45), 0 0 15px rgba(255, 185, 50, 0.12)`
  - Level 3 (Modals/Dropdowns): `0 24px 50px -10px rgba(0, 0, 0, 0.7)`

---

## 4. Typography Scale

- **Primary Font Family**: Outfit / System UI Sans
- **Hierarchy**:
  - `Display / Page Title`: 32px (2rem), font-weight: 700, letter-spacing: -0.02em, line-height: 1.2
  - `Section Title (H2)`: 24px (1.5rem), font-weight: 600, line-height: 1.3
  - `Card Header (H3)`: 18px (1.125rem), font-weight: 600, line-height: 1.4
  - `Body Text`: 15px (0.9375rem), font-weight: 400, line-height: 1.65
  - `Meta / Caption`: 13px (0.8125rem), font-weight: 500, letter-spacing: 0.02em

---

## 5. Motion & Micro-Interactions

- **Spring Dynamics**: `framer-motion` transition configuration:
  - Default Spring: `{ type: "spring", stiffness: 350, damping: 25 }`
  - Smooth Ease: `{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }`
- **Interactive Card Hover**:
  - Scale transform: `1.015` to `1.02`
  - Subtle Y translation: `-4px`
  - Border highlight fade-in: `rgba(255, 195, 60, 0.25)`
- **Navigation Active Tab**:
  - Smooth layout shift indicator with `layoutId="activeTab"`

---

## 6. Impeccable Anti-Pattern Rules Checklist

- ❌ **NO AI Slop Blue/Purple Glows**: Stick strictly to tailored Warm Amber/Gold accents with deep onyx/smoky dark themes.
- ❌ **NO Hard Un-styled Borders**: Always use multi-layered 1px translucent glass borders (`rgba(255,255,255,0.08)`).
- ❌ **NO Low-Contrast Muted Body Text**: Ensure text contrast meets WCAG AAA standards (minimum 4.5:1 ratio).
- ❌ **NO Static Non-Interactive Elements**: Every clickable button, tab, chip, card, and social link must feature distinct hover, active, and focus-visible states.
- ❌ **NO Sudden Unanimated Layout Jumps**: Use Framer Motion `AnimatePresence` for section switching and modals.
