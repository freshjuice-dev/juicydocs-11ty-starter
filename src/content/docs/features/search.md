---
eleventyNavigation:
    key: Search
    parent: Features
    order: 20
title: Search
description: Command palette search powered by Pagefind
---

JuicyDocs includes a command palette-style search powered by [Pagefind](https://pagefind.app/).

## Opening Search

There are multiple ways to open the search:

- **Keyboard shortcut**: Press `/` or `Cmd+K` (Mac) / `Ctrl+K` (Windows)
- **Click**: Click the search button in the header
- **Mobile**: Tap the search icon in the bottom navigation

## Features

### Full-Text Search

Pagefind indexes all your documentation content, allowing users to search for any word or phrase.

### Keyboard Navigation

- **Arrow keys**: Navigate through results
- **Enter**: Open selected result
- **Escape**: Close search

### Highlighted Results

Search terms are highlighted in the results, making it easy to see why a page matched.

### Fast & Lightweight

Pagefind runs entirely in the browser with no server required. The search index is generated at build time and loaded on-demand.

## How It Works

1. During `npm run build`, Pagefind indexes all HTML files in the `_site` directory
2. The index is saved as static files in `_site/pagefind/`
3. When users search, the browser loads only the parts of the index needed for that query

## Configuration

Pagefind is configured in `eleventy.config.js` via the Eleventy Pagefind plugin:

```javascript
import pagefindPlugin from "eleventy-plugin-pagefind";

eleventyConfig.addPlugin(pagefindPlugin, {
  // Options
});
```

## Excluding Content from Search

To exclude content from search, add the `data-pagefind-ignore` attribute:

```html
<div data-pagefind-ignore>
  This content won't be indexed
</div>
```

Or exclude entire pages using front matter (requires plugin configuration).
