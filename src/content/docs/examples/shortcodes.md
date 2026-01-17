---
eleventyNavigation:
    key: Shortcodes
    parent: Examples
    order: 10
title: Shortcodes
description: Available shortcodes for embedding content in your documentation
---

JuicyDocs includes several shortcodes to enhance your documentation with rich content.

## Alert

Display alert boxes with different styles. Useful for warnings, tips, and important information.

### Usage

```nunjucks
{% raw %}{% alert "This is an info message", "info" %}
{% alert "Warning! Be careful", "warning", "Heads up" %}{% endraw %}
```

### Types

{% alert "This is an info alert — useful for tips and notes.", "info" %}

{% alert "This is a warning alert — something needs attention.", "warning" %}

{% alert "This is a success alert — operation completed!", "success" %}

{% alert "This is a danger alert — something went wrong.", "danger" %}

### With Title

{% alert "This is an important message that requires your attention.", "warning", "Important Notice" %}

### Multi-line Content

For longer content, use the paired `alertAlt` shortcode:

```nunjucks
{% raw %}{% alertAlt "info", "Pro Tip" %}
This is a longer alert with multiple lines.

You can include **markdown** formatting here.
{% endalertAlt %}{% endraw %}
```

---

## YouTube (Lazy Loading)

The `youtube` shortcode uses [lite-youtube-embed](https://github.com/nicholashudson/nicholashudson/lite-youtube-embed) for fast, lazy-loading YouTube embeds. The video thumbnail loads immediately, but the full player only loads when clicked.

### Usage

```nunjucks
{% raw %}{% youtube "dQw4w9WgXcQ" %}
{% youtube "https://www.youtube.com/watch?v=dQw4w9WgXcQ" %}
{% youtube "https://youtu.be/dQw4w9WgXcQ", "Never Gonna Give You Up" %}{% endraw %}
```

You can pass either:
- Just the video ID: `dQw4w9WgXcQ`
- Full YouTube URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Short URL: `https://youtu.be/dQw4w9WgXcQ`

### Example

{% youtube "dQw4w9WgXcQ", "Rick Astley - Never Gonna Give You Up" %}

### Another Example

{% youtube "https://www.youtube.com/watch?v=xvFZjo5PgG0", "Another video" %}

---

## Embed

Embed external content via iframe (YouTube, CodePen, etc.). YouTube URLs are automatically converted to `youtube-nocookie.com` for privacy.

### Usage

```nunjucks
{% raw %}{% embed "https://www.youtube.com/embed/dQw4w9WgXcQ" %}
{% embed "https://www.youtube.com/embed/dQw4w9WgXcQ", "400" %}{% endraw %}
```

### Example

{% embed "https://www.youtube.com/embed/C7dPqrmDWxs" %}
