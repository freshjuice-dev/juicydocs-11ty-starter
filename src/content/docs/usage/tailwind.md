---
eleventyNavigation:
    key: Tailwind CSS
    parent: Usage
    order: 30
title: Tailwind CSS
description: Customize your site with Tailwind CSS v4
---

JuicyDocs is built with Tailwind CSS v4, providing a utility-first approach to styling.

## Theme Configuration

The main theme configuration is in `src/assets/css/main.css`:

```css
@import "tailwindcss";

@theme {
  /* Font families */
  --font-sans: "General Sans", system-ui, sans-serif;
  --font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, monospace;

  /* Custom breakpoints */
  --breakpoint-xs: 24.375rem; /* 390px */

  /* Max widths */
  --max-width-8xl: 90rem;  /* 1440px */
  --max-width-9xl: 105rem; /* 1680px */
}
```

## CSS Files

Styles are organized into modular files in `src/assets/css/`:

| File | Purpose |
|------|---------|
| `main.css` | Main entry point, theme configuration |
| `_base.css` | Base styles, fonts, resets |
| `_typography.css` | Prose/content typography |
| `_buttons.css` | Button components |
| `_navigation.css` | Sidebar, TOC, search styles |
| `_code.css` | Code block and syntax highlighting |
| `_utilities.css` | Custom utility classes |

## Changing Colors

JuicyDocs uses Tailwind's color palette. The primary accent colors are:

- **Light mode**: Red (`red-500`, `red-600`, etc.)
- **Dark mode**: Amber (`amber-400`, `amber-500`, etc.)

To change the accent color, search and replace in the CSS files:

```css
/* Example: Change from red to blue */
/* Before */
@apply text-red-600 dark:text-amber-400;

/* After */
@apply text-blue-600 dark:text-blue-400;
```

## Dark Mode

Tailwind CSS v4 supports dark mode via the `dark:` variant. JuicyDocs uses the `class` strategy:

```html
<!-- Dark mode is applied when html has class="dark" -->
<html class="dark">
```

Example usage in templates:

```html
<div class="bg-white dark:bg-neutral-900">
  <p class="text-slate-900 dark:text-neutral-100">
    This text adapts to the theme
  </p>
</div>
```

## Custom Breakpoints

JuicyDocs includes a custom `xs` breakpoint at 390px (iPhone screen width):

```css
@theme {
  --breakpoint-xs: 24.375rem;
}
```

Use it like any other breakpoint:

```html
<div class="hidden xs:block">
  Only visible on screens 390px and wider
</div>
```

## Adding Custom Styles

Add custom styles in `src/assets/css/main.css` after the imports:

```css
@import "tailwindcss";
@import "./_base.css";
/* ... other imports ... */

/* Your custom styles */
@layer components {
  .my-custom-button {
    @apply px-4 py-2 rounded-lg bg-blue-500 text-white;
  }
}
```
