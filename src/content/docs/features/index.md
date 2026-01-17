---
eleventyNavigation:
    key: Features
    order: 20
title: Features
description: Explore the built-in features of JuicyDocs
---

JuicyDocs comes with many features out of the box. Here's an overview of what's included.

## Core Features

- **[Syntax Highlighting](/docs/features/syntax-highlighting/)** - Beautiful code blocks powered by Shiki
- **[Search](/docs/features/search/)** - Command palette search powered by Pagefind
- **[llms.txt](/docs/features/llms-txt/)** - AI-readable documentation format
- **[Sitemap & RSS](/docs/features/sitemap/)** - SEO and syndication support

## Navigation

### Sidebar Navigation

The sidebar navigation is automatically generated from your content files using `eleventyNavigation` front matter:

- Nested navigation with parent/child relationships
- Active page highlighting
- Mobile-friendly slide-out menu

### Table of Contents

Every documentation page with headings (h2, h3, h4) automatically gets a table of contents:

- **Desktop**: Shown in the right sidebar
- **Mobile**: Accessible via the TOC button in the bottom navigation
- Highlights current section as you scroll

### Breadcrumbs

Breadcrumb navigation shows the current page's location in the documentation hierarchy.

### Previous/Next Links

At the bottom of each documentation page, you'll find links to the previous and next pages in the navigation order.

## Dark Mode

JuicyDocs supports three theme modes:

- **System** - Follows your operating system preference
- **Light** - Always light theme
- **Dark** - Always dark theme

The theme switcher is located in the footer. User preference is saved to localStorage.

## Mobile Experience

JuicyDocs is fully responsive with a mobile-optimized experience:

- **Bottom Navigation Bar** - Quick access to Home, Search, TOC, and scroll-to-top
- **Slide-out Sidebar** - Full navigation accessible via the menu button
- **Touch-friendly** - Large tap targets and smooth interactions

## Responsive Tables

All tables are automatically wrapped in [`<table-saw>`](https://github.com/zachleat/table-saw) for responsive behavior on mobile devices. Tables scroll horizontally when they don't fit the screen width.

To opt-out for a specific table, add the `data-table-saw="none"` attribute:

```html
<table data-table-saw="none">
  ...
</table>
```

## External Links

External links (starting with `http://` or `https://`) are automatically enhanced:

- Opens in a new tab (`target="_blank"`)
- Adds `rel="noopener"` for security

This helps users stay on your documentation while exploring external resources.

## Accessibility

JuicyDocs includes several accessibility enhancements:

- **Keyboard-accessible code blocks** - All `<pre>` elements have `tabindex="0"` for keyboard navigation
- **Skip to content link** - Screen reader users can skip navigation
- **Proper heading hierarchy** - Semantic HTML structure
- **Focus indicators** - Visible focus states for keyboard navigation
- **Color contrast** - Meets WCAG guidelines in both light and dark modes
