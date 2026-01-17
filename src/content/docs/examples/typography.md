---
eleventyNavigation:
    key: Typography
    parent: Examples
    order: 10
title: Typography
description: Typography examples and text formatting
---

This page demonstrates the typography styles available in JuicyDocs.

## Headings

Headings from h2 to h4 are automatically included in the table of contents.

### Heading Level 3

This is a third-level heading. Use these for subsections.

#### Heading Level 4

This is a fourth-level heading. The deepest level included in the TOC.

##### Heading Level 5

Fifth-level headings are not included in the TOC.

###### Heading Level 6

Sixth-level headings are for very detailed organization.

## Paragraphs

This is a standard paragraph with some **bold text** and some *italic text*. You can also use ***bold italic*** for emphasis.

Here's another paragraph. Notice the comfortable spacing between paragraphs that makes content easy to read.

You can also create `inline code` within paragraphs using backticks.

## Links

- [Internal link to Features](/docs/features/)
- [External link to Eleventy](https://www.11ty.dev/)
- Email link: <hello@example.com>

External links automatically open in a new tab.

## Lists

### Unordered List

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered List

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task List

- [x] Completed task
- [ ] Pending task
- [ ] Another pending task

## Blockquotes

> This is a blockquote. It's useful for highlighting important information or quoting external sources.

> Nested blockquotes are also supported:
>
> > This is a nested quote.

## Horizontal Rule

Content above the rule.

---

Content below the rule.

## Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Dark Mode | Complete | System, light, dark |
| Search | Complete | Pagefind integration |
| Mobile Nav | Complete | Bottom bar + sidebar |
| i18n | Planned | Coming soon |

### Wide Table

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
|----------|----------|----------|----------|----------|----------|
| Data | Data | Data | Data | Data | Data |
| Data | Data | Data | Data | Data | Data |

Wide tables automatically get horizontal scrolling.

## Text Formatting

- **Bold text** using `**text**`
- *Italic text* using `*text*`
- ~~Strikethrough~~ using `~~text~~`
- `Inline code` using backticks
- <mark>Highlighted text</mark> using `<mark>`
- <sub>Subscript</sub> using `<sub>`
- <sup>Superscript</sup> using `<sup>`

## Abbreviations

The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

## Keyboard Keys

Press <kbd>Cmd</kbd> + <kbd>K</kbd> to open search.

## Images

Images are automatically optimized and converted to modern formats (AVIF, WebP).

### Basic Image

```markdown
![Fresh orange](/assets/images/pexels-pixabay-51958.jpg)
```

![Fresh orange](/assets/images/pexels-pixabay-51958.jpg)

### Image with Caption

```html
<figure>
  <img src="/assets/images/pexels-jsalamanca-61127.jpg" alt="Ripe banana">
  <figcaption>A perfectly ripe banana</figcaption>
</figure>
```

<figure>
  <img src="/assets/images/pexels-jsalamanca-61127.jpg" alt="Ripe banana">
  <figcaption>A perfectly ripe banana</figcaption>
</figure>

### Resized Image

Use the `eleventy:widths` attribute to generate specific image sizes:

```html
<img src="/assets/images/pexels-wendyaffieplaas-1178610.jpg" alt="Fresh cherries" eleventy:widths="300">
```

<img src="/assets/images/pexels-wendyaffieplaas-1178610.jpg" alt="Fresh cherries" eleventy:widths="300">

> **Tip:** You can pass multiple widths separated by commas: `eleventy:widths="300,600,900"`. The browser will automatically choose the best size based on the viewport. See the [Eleventy Image documentation](https://www.11ty.dev/docs/plugins/image/) for more options.

## Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.
