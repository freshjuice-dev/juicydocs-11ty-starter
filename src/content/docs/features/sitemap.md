---
eleventyNavigation:
    key: Sitemap & RSS
    parent: Features
    order: 40
title: Sitemap & RSS
description: SEO and syndication support
---

JuicyDocs automatically generates sitemap and RSS feed files for your site.

## Sitemap

A sitemap is generated at `/sitemap.xml` containing all pages on your site.

### Purpose

- Helps search engines discover and index your content
- Provides metadata about each page (last modified date, priority)
- Improves SEO by ensuring all pages are found

### Format

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/docs/</loc>
    <lastmod>2024-01-15</lastmod>
  </url>
  <!-- More URLs... -->
</urlset>
```

### XSL Stylesheet

JuicyDocs includes an XSL stylesheet (`/sitemap.xsl`) that makes the sitemap human-readable in browsers.

## RSS Feed

An RSS/Atom feed is generated at `/feed.xml` for content syndication.

### Purpose

- Allows users to subscribe to updates
- Enables integration with feed readers
- Useful for changelog/blog content

### Subscribing

Users can subscribe to your feed using any RSS reader:

1. Copy the feed URL: `https://your-site.com/feed.xml`
2. Add it to their preferred feed reader

## Configuration

Both files are generated from Nunjucks templates:

- `src/sitemap.xml.njk` - Sitemap template
- `src/feed.njk` - RSS feed template

### Customizing

Edit these templates to:

- Change which pages are included
- Modify the feed format
- Add custom metadata
