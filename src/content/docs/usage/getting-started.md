---
eleventyNavigation:
    key: Getting Started
    parent: Usage
    order: 10
title: Getting Started
description: Step-by-step guide to setting up your JuicyDocs site
---

This guide walks you through setting up JuicyDocs from scratch.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** version 20 or higher (we recommend using the latest LTS version)
- **npm** or another package manager like pnpm or yarn
- **Git** for version control

Check your Node.js version:

```bash
node --version
# Should output v20.x.x or higher
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/freshjuice-dev/juicydocs-11ty-starter.git my-docs
cd my-docs
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Your documentation site will be available at `http://localhost:8080`.

## Project Structure

```
juicydocs/
├── config/              # Eleventy configuration modules
│   ├── collections.js   # Custom collections
│   ├── dataExtensions.js # YAML support
│   ├── filters.js       # Template filters
│   ├── plugins.js       # Eleventy plugins
│   ├── shortcodes.js    # Custom shortcodes
│   └── transforms.js    # Output transforms
├── src/
│   ├── _data/           # Global data files
│   │   ├── metadata.yaml # Site metadata
│   │   └── navigation.yaml # Navigation links
│   ├── _includes/       # Templates and partials
│   │   ├── layouts/     # Page layouts
│   │   └── partials/    # Reusable components
│   ├── assets/          # Static assets
│   │   ├── css/         # Stylesheets
│   │   ├── fonts/       # Web fonts
│   │   ├── images/      # Images
│   │   └── js/          # JavaScript
│   └── content/         # Your documentation content
│       ├── docs/        # Documentation pages
│       └── changelog/   # Changelog entries
├── eleventy.config.js   # Main Eleventy config
├── package.json
└── tailwind.config.js
```

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run clean` | Remove build artifacts |

## Creating Your First Page

1. Create a new file in `src/content/docs/`:

```markdown
---
eleventyNavigation:
    key: My First Page
    parent: Usage
    order: 100
title: My First Page
description: My first documentation page
---

# Hello World

This is my first documentation page!
```

2. Save the file and the development server will automatically reload.

## Next Steps

- [Settings](/docs/usage/settings/) - Configure your site metadata
- [Tailwind CSS](/docs/usage/tailwind/) - Learn how to customize styles
