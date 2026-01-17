---
eleventyNavigation:
    key: Code Blocks
    parent: Examples
    order: 20
title: Code Blocks
description: Syntax highlighting examples in various languages
---

This page demonstrates code block styling with syntax highlighting.

## JavaScript

```javascript
// Modern JavaScript example
const fetchUsers = async () => {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

// ES6 class example
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
    return this;
  }

  emit(event, ...args) {
    const callbacks = this.events.get(event) || [];
    callbacks.forEach(cb => cb(...args));
  }
}
```

## TypeScript

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

type UserResponse = {
  data: User[];
  total: number;
  page: number;
};

async function getUsers(page: number = 1): Promise<UserResponse> {
  const response = await fetch(`/api/users?page=${page}`);
  return response.json();
}

// Generic function
function identity<T>(arg: T): T {
  return arg;
}
```

## Python

```python
from dataclasses import dataclass
from typing import List, Optional
import asyncio

@dataclass
class User:
    id: int
    name: str
    email: str
    is_active: bool = True

class UserRepository:
    def __init__(self):
        self._users: List[User] = []

    async def find_by_id(self, user_id: int) -> Optional[User]:
        await asyncio.sleep(0.1)  # Simulate DB query
        return next(
            (u for u in self._users if u.id == user_id),
            None
        )

    def add(self, user: User) -> None:
        self._users.append(user)

# Usage
async def main():
    repo = UserRepository()
    repo.add(User(1, "Alice", "alice@example.com"))
    user = await repo.find_by_id(1)
    print(f"Found: {user.name}")

asyncio.run(main())
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <header class="site-header">
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <h1>Hello World</h1>
      <p>Welcome to my website.</p>
    </article>
  </main>

  <script src="/main.js" type="module"></script>
</body>
</html>
```

## CSS

```css
/* Custom properties */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --spacing-unit: 0.25rem;
}

/* Modern CSS with nesting */
.card {
  display: flex;
  flex-direction: column;
  padding: calc(var(--spacing-unit) * 4);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }

  & .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-primary);
  }
}

/* Animation */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Bash

```bash
#!/bin/bash

# Variables
PROJECT_NAME="my-project"
BUILD_DIR="./dist"

# Function
build_project() {
  echo "Building $PROJECT_NAME..."
  npm run build

  if [ $? -eq 0 ]; then
    echo "Build successful!"
  else
    echo "Build failed!" >&2
    exit 1
  fi
}

# Main
build_project

# Deploy
rsync -avz "$BUILD_DIR/" user@server:/var/www/html/
```

## JSON

```json
{
  "name": "juicydocs",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy",
    "clean": "rm -rf _site"
  },
  "dependencies": {
    "@11ty/eleventy": "^3.0.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "prettier": "^3.0.0"
  }
}
```

## YAML

```yaml
# Eleventy configuration
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build
        env:
          ELEVENTY_ENV: production
```

## Diff

```diff
- const oldFunction = function() {
-   return "old";
- };
+ const newFunction = () => {
+   return "new";
+ };
```

## Inline Code

You can also use `inline code` within paragraphs. For example, the `console.log()` function outputs to the console.
