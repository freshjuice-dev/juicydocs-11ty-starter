---
eleventyNavigation:
    key: Navigation
    parent: Usage
    order: 25
title: Navigation
description: Configure sidebar navigation and menu structure
---

JuicyDocs uses Eleventy's Navigation plugin to generate the sidebar menu automatically from your content files.

## How Navigation Works

The sidebar navigation is built from two sources:

1. **Main Menu** - Defined in `navigation.yaml` (static links)
2. **Documentation Menu** - Generated from `eleventyNavigation` front matter in your content files

## Sidebar Navigation (eleventyNavigation)

Add `eleventyNavigation` to your page's front matter to include it in the sidebar:

```yaml
---
eleventyNavigation:
    key: My Page Title
title: My Page Title
---
```

### Navigation Properties

| Property | Required | Description |
|----------|----------|-------------|
| `key` | Yes | Unique identifier shown in sidebar |
| `parent` | No | Key of parent page for nesting |
| `order` | No | Sort order (lower numbers first) |

### Setting Order

Use the `order` property to control the position of items:

```yaml
---
eleventyNavigation:
    key: First Item
    order: 10
---
```

```yaml
---
eleventyNavigation:
    key: Second Item
    order: 20
---
```

Lower numbers appear first. Using increments of 10 (10, 20, 30...) makes it easy to insert items later.

### Creating Nested Navigation

Use the `parent` property to nest pages under a parent:

```yaml
# Parent page (docs/guides/index.md)
---
eleventyNavigation:
    key: Guides
    order: 40
title: Guides
---
```

```yaml
# Child page (docs/guides/quickstart.md)
---
eleventyNavigation:
    key: Quick Start
    parent: Guides
    order: 10
title: Quick Start Guide
---
```

This creates a nested structure:

```
Guides
├── Quick Start
├── Installation
└── Configuration
```

### Example Structure

Here's how JuicyDocs documentation is organized:

```yaml
# docs/usage/index.md
eleventyNavigation:
    key: Usage
    order: 10

# docs/usage/getting-started.md
eleventyNavigation:
    key: Getting Started
    parent: Usage
    order: 10

# docs/usage/settings.md
eleventyNavigation:
    key: Settings
    parent: Usage
    order: 20

# docs/features/index.md
eleventyNavigation:
    key: Features
    order: 20
```

## Main Menu (navigation.yaml)

The main menu at the top of the sidebar is defined in `src/_data/navigation.yaml`:

```yaml
# Main menu - shown at top of sidebar
main:
  - text: Welcome
    url: /
  - text: Changelog
    url: /changelog/
```

These links appear above the documentation navigation and are highlighted when active.

## Legal Links

Footer/legal links at the bottom of the sidebar:

```yaml
# Legal/Footer pages
legal:
  - text: License
    url: /license/
  - text: Credits
    url: /credits/
```

## Top Navigation

Links shown in the header:

```yaml
# Top navigation (header)
topnav:
  - text: GitHub
    url: https://github.com/your/repo
```

## Footer Navigation

The footer has a 3-column layout:

```yaml
footer:
  - title: Documentation
    links:
      - text: Getting Started
        url: /docs/usage/getting-started/
      - text: Features
        url: /docs/features/

  - title: Community
    links:
      - text: GitHub
        url: https://github.com/your/repo
      - text: Discord
        url: https://discord.gg/your-server

  - title: More
    links:
      - text: Changelog
        url: /changelog/
```

## Complete navigation.yaml Example

```yaml
# Top Navigation
topnav:
  - text: GitHub
    url: https://github.com/freshjuice-dev/juicydocs-11ty-starter

# Main menu - shown at top of sidebar
main:
  - text: Welcome
    url: /
  - text: Changelog
    url: /changelog/

# Legal/Footer pages
legal:
  - text: License
    url: /license/
  - text: Credits
    url: /credits/

# Footer Navigation (3 columns)
footer:
  - title: Documentation
    links:
      - text: Getting Started
        url: /docs/usage/getting-started/
      - text: Features
        url: /docs/features/

  - title: Community
    links:
      - text: GitHub
        url: https://github.com/freshjuice-dev/juicydocs-11ty-starter

  - title: More
    links:
      - text: FreshJuice
        url: https://freshjuice.dev
```

## Tips

- **Use descriptive keys** - The `key` is shown in the sidebar, so make it readable
- **Keep nesting shallow** - One or two levels of nesting is usually enough
- **Order by importance** - Put the most important pages first with lower order numbers
- **Group related content** - Use parent pages to group related documentation
