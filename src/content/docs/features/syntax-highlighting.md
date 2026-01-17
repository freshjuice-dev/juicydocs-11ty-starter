---
eleventyNavigation:
    key: Syntax Highlighting
    parent: Features
    order: 10
title: Syntax Highlighting
description: Beautiful code blocks powered by Shiki
---

JuicyDocs uses [Shiki](https://shiki.style/) for syntax highlighting. Shiki uses the same grammar files as VS Code, providing accurate and beautiful code highlighting.

## Basic Usage

Use fenced code blocks with a language identifier:

````markdown
```javascript
function hello() {
  console.log("Hello, JuicyDocs!");
}
```
````

Renders as:

```javascript
function hello() {
  console.log("Hello, JuicyDocs!");
}
```

## Supported Languages

Shiki supports [all languages available in VS Code](https://shiki.style/languages). Common languages include:

| Language | Identifier |
|----------|------------|
| JavaScript | `javascript`, `js` |
| TypeScript | `typescript`, `ts` |
| Python | `python`, `py` |
| HTML | `html` |
| CSS | `css` |
| JSON | `json` |
| YAML | `yaml` |
| Bash | `bash`, `shell` |
| Markdown | `markdown`, `md` |

## Code Block Examples

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

### CSS

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Python

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i))
```

### JSON

```json
{
  "name": "juicydocs",
  "version": "1.0.0",
  "dependencies": {
    "@11ty/eleventy": "^3.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

## Theme

JuicyDocs uses a theme that adapts to light and dark modes. The code blocks automatically adjust their colors based on your selected theme preference.
