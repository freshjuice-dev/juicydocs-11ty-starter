---
eleventyNavigation:
    key: Settings
    parent: Usage
    order: 20
title: Settings
description: Configure your JuicyDocs site settings
---

JuicyDocs uses YAML files for configuration. This makes it easy to customize your site without touching any code.

## Site Metadata

Edit `src/_data/metadata.yaml` to configure your site's basic information:

```yaml
# Site Metadata
title: My Documentation
description: Documentation for my awesome project
url: https://docs.example.com
language: en
author: Your Name
email: hello@example.com

# Social/SEO
twitter: "@yourhandle"
image: /assets/images/og-image.png
themeColor: "#f97316"

# GitHub (for "Edit this page" links)
github:
  owner: your-username
  repo: your-repo
  editBranch: main
```

## Navigation

Edit `src/_data/navigation.yaml` to configure navigation links:

```yaml
# Top Navigation
topnav:
  - text: GitHub
    url: https://github.com/your/repo

# Main Menu (shown at top of sidebar)
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
        url: /docs/
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
      - text: Blog
        url: /blog/
      - text: Changelog
        url: /changelog/
```

## Environment Variables

JuicyDocs supports environment-specific configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `ELEVENTY_ENV` | Build environment | `development` |

Set the environment when building:

```bash
# Development (default)
npm run dev

# Production
ELEVENTY_ENV=production npm run build
```

In production mode, certain development features are disabled and optimizations are enabled.

## Build Configuration

The main Eleventy configuration is in `eleventy.config.js`. Modular configurations are stored in the `config/` directory:

| File | Purpose |
|------|---------|
| `collections.js` | Custom collections |
| `dataExtensions.js` | YAML data file support |
| `filters.js` | Template filters |
| `plugins.js` | Eleventy plugins |
| `shortcodes.js` | Custom shortcodes |
| `transforms.js` | Output transforms |
