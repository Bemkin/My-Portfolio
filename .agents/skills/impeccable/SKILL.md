---
name: impeccable
description: Enforce high-craft UI/UX design standards, anti-slop rules, visual hierarchy, and micro-animations across portfolio components.
---

# Impeccable Skill Instructions

When designing, modifying, or auditing UI/UX components in this repository, follow these core principles derived from `DESIGN.md`:

## Core Objectives
1. **Visual Excellence**: Elevate UI components with modern typography, subtle glassmorphism, dynamic hover effects, and crisp contrast.
2. **Eliminate AI Design Anti-Patterns**: Avoid generic blue-purple glow effects, inter font fallbacks, muddy light mode grays, unstyled native inputs, and stat cards without visual hierarchy.
3. **Smooth Micro-Animations**: Use Framer Motion for component transitions, active tab sliding underlines, hover scale highlights, and modal backdrops.

## Execution Checklist

### 1. Color & Glass System
- Use CSS variable tokens (`var(--bg-gradient-onyx)`, `var(--glass-bg)`, `var(--text-gradient-yellow)`).
- Ensure 1px translucent borders (`border: 1px solid var(--glass-border)`).
- Provide explicit light and dark mode styles for all newly added UI elements.

### 2. Micro-Interactions
- Wrap main interactive cards with `motion.div` using `whileHover={{ y: -4, scale: 1.015 }}`.
- Active navigation tabs must feature `layoutId="activeTab"` for fluid layout transitions.
- Interactive buttons must include explicit focus-visible rings (`focus-visible:ring-2 focus-visible:ring-[var(--orange-yellow-crayola)]`).

### 3. Typography & Rhythm
- Section titles must use custom underline accent styling (`::after` accent bar or gradient text).
- Body text line-height must be set to `1.6` or higher for optimal readability.

### 4. Quality Audit
- Before finalizing changes, verify keyboard navigation, focus indicators, responsive viewport fitting (mobile, tablet, desktop), and contrast ratios.
