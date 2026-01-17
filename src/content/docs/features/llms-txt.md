---
eleventyNavigation:
    key: llms.txt
    parent: Features
    order: 30
title: llms.txt
description: AI-readable documentation format
---

JuicyDocs automatically generates an `llms.txt` file that makes your documentation accessible to AI language models.

## What is llms.txt?

The [llms.txt specification](https://llmstxt.org/) defines a standard format for websites to provide AI-friendly content. It's similar to `robots.txt` but for AI systems.

## Generated Output

JuicyDocs generates `/llms.txt` at build time, containing:

- Site title and description
- List of all documentation pages with titles and URLs
- Plain text content of each page

## Example Output

```
# My Documentation Site

> Documentation for my awesome project

## Documentation Pages

- [Getting Started](/docs/usage/getting-started/)
- [Configuration](/docs/usage/settings/)
- [Features](/docs/features/)

---

### Getting Started

Welcome to the documentation...
```

## Benefits

- **AI Assistants**: Tools like ChatGPT can reference your documentation
- **Semantic Search**: AI systems can better understand your content structure
- **Accessibility**: Provides a machine-readable version of your docs

## Raw Source Links

Each documentation page includes a "View source" link that points directly to the raw Markdown file on GitHub. This makes it easy for users to copy the source and feed it to LLMs for assistance with your documentation.

The raw URL format is:
```
https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{path}
```

Configure the GitHub repository in `src/_data/metadata.yaml`:

```yaml
github:
  owner: your-username
  repo: your-repo
  editBranch: main
```

## Configuration

The llms.txt template is at `src/llms.txt.njk`. Customize it to change what content is included.
