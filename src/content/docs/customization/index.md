---
eleventyNavigation:
    key: Customization
    order: 30
title: Customization
description: Customize the look and feel of your documentation site
---

JuicyDocs is built with Tailwind CSS v4, making it easy to customize the design to match your brand.

## Styling with Tailwind

### Theme Configuration

The main theme configuration is in `src/assets/css/main.css`:

```css
@theme {
  /* Font families */
  --font-sans: "General Sans", system-ui, sans-serif;
  --font-mono: "Fira Code", monospace;

  /* Custom breakpoints */
  --breakpoint-xs: 24.375rem; /* 390px */

  /* Max widths */
  --max-width-8xl: 90rem;  /* 1440px */
  --max-width-9xl: 105rem; /* 1680px */
}
```

### CSS Files

Styles are organized into modular files in `src/assets/css/`:

| File | Purpose |
|------|---------|
| `main.css` | Main entry point, theme config |
| `_base.css` | Base styles, fonts, resets |
| `_typography.css` | Prose/content typography |
| `_buttons.css` | Button components |
| `_navigation.css` | Sidebar, TOC, search styles |
| `_code.css` | Code block styles |
| `_utilities.css` | Utility classes |

### Changing Colors

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

## Layouts

JuicyDocs includes several layouts in `src/_includes/layouts/`:

| Layout | Purpose |
|--------|---------|
| `base.njk` | Base HTML structure, head, scripts |
| `docs.njk` | Documentation pages with sidebar and TOC |
| `page.njk` | Simple pages without TOC |
| `changelog.njk` | Changelog/blog entries |

### Creating a Custom Layout

1. Create a new file in `src/_includes/layouts/`
2. Extend the base layout:

```nunjucks
---
layout: layouts/base.njk
---

<main class="container mx-auto px-4 py-8">
  {{ content | safe }}
</main>
```

3. Use in your content:

```yaml
---
layout: layouts/custom.njk
title: My Page
---
```

## Shortcodes

JuicyDocs includes custom shortcodes defined in `config/shortcodes.js`.

### Phosphor Icons

Use Phosphor icons anywhere in your templates:

```nunjucks
{% phosphor "house", "regular", { size: 24 } %}
{% phosphor "gear", "bold", { size: 20 } %}
```

Available weights: `thin`, `light`, `regular`, `bold`, `fill`, `duotone`

Browse icons at [phosphoricons.com](https://phosphoricons.com/)

## Adding Custom JavaScript

Add custom JavaScript in `src/assets/js/`. The main entry point is `main.js`.

For page-specific scripts, add them in your layout or use Eleventy's JavaScript template engine.
