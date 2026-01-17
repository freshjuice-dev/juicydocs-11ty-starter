---
eleventyNavigation:
    key: Buttons
    parent: Examples
    order: 20
title: Buttons
description: Button component styles and variants
---

JuicyDocs includes a flexible button system with multiple variants and sizes.

## Basic Button

The default `.btn` class provides a clean, rounded button style.

```html
<a href="#" class="btn">Default Button</a>
<button class="btn">Button Element</button>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn">Default Button</a>
    <button class="btn">Button Element</button>
</div>

---

## Variants

### Primary

```html
<a href="#" class="btn btn--primary">Primary</a>
<a href="#" class="btn btn--primary-light">Primary Light</a>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn btn--primary">Primary</a>
    <a href="#" class="btn btn--primary-light">Primary Light</a>
</div>

### Secondary

```html
<a href="#" class="btn btn--secondary">Secondary</a>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn btn--secondary">Secondary</a>
</div>

### Success

```html
<a href="#" class="btn btn--success">Success</a>
<a href="#" class="btn btn--success-light">Success Light</a>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn btn--success">Success</a>
    <a href="#" class="btn btn--success-light">Success Light</a>
</div>

### Warning

```html
<a href="#" class="btn btn--warning">Warning</a>
<a href="#" class="btn btn--warning-light">Warning Light</a>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn btn--warning">Warning</a>
    <a href="#" class="btn btn--warning-light">Warning Light</a>
</div>

### Danger

```html
<a href="#" class="btn btn--danger">Danger</a>
<a href="#" class="btn btn--danger-light">Danger Light</a>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn btn--danger">Danger</a>
    <a href="#" class="btn btn--danger-light">Danger Light</a>
</div>

### Outline

```html
<a href="#" class="btn btn--outline">Outline</a>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn btn--outline">Outline</a>
</div>

### Ghost

```html
<a href="#" class="btn btn--ghost">Ghost</a>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <a href="#" class="btn btn--ghost">Ghost</a>
</div>

---

## Sizes

```html
<a href="#" class="btn btn--xs">Extra Small</a>
<a href="#" class="btn btn--sm">Small</a>
<a href="#" class="btn btn--md">Medium</a>
<a href="#" class="btn btn--lg">Large</a>
<a href="#" class="btn btn--xl">Extra Large</a>
```

<div class="not-prose flex flex-wrap items-center gap-4 my-6">
    <a href="#" class="btn btn--xs">Extra Small</a>
    <a href="#" class="btn btn--sm">Small</a>
    <a href="#" class="btn btn--md">Medium</a>
    <a href="#" class="btn btn--lg">Large</a>
    <a href="#" class="btn btn--xl">Extra Large</a>
</div>

---

## Combining Variants and Sizes

You can combine variant and size classes:

```html
<a href="#" class="btn btn--primary btn--sm">Small Primary</a>
<a href="#" class="btn btn--success btn--lg">Large Success</a>
<a href="#" class="btn btn--danger btn--xl">XL Danger</a>
```

<div class="not-prose flex flex-wrap items-center gap-4 my-6">
    <a href="#" class="btn btn--primary btn--sm">Small Primary</a>
    <a href="#" class="btn btn--success btn--lg">Large Success</a>
    <a href="#" class="btn btn--danger btn--xl">XL Danger</a>
</div>

---

## Full Width

```html
<a href="#" class="btn btn--primary btn--full">Full Width Button</a>
```

<div class="not-prose my-6">
    <a href="#" class="btn btn--primary btn--full">Full Width Button</a>
</div>

---

## Icon Button

For square icon-only buttons:

```html
<button class="btn btn--icon btn--primary">
    <svg>...</svg>
</button>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <button class="btn btn--icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"/></svg>
    </button>
    <button class="btn btn--icon btn--primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/></svg>
    </button>
    <button class="btn btn--icon btn--success">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg>
    </button>
    <button class="btn btn--icon btn--danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>
    </button>
</div>

---

## Disabled State

```html
<button class="btn" disabled>Disabled</button>
<button class="btn btn--primary" disabled>Disabled Primary</button>
```

<div class="not-prose flex flex-wrap gap-4 my-6">
    <button class="btn" disabled>Disabled</button>
    <button class="btn btn--primary" disabled>Disabled Primary</button>
</div>

---

## Button Group Example

```html
<div class="flex">
    <a href="#" class="btn btn--primary rounded-r-none">Left</a>
    <a href="#" class="btn btn--primary rounded-none border-x-0">Center</a>
    <a href="#" class="btn btn--primary rounded-l-none">Right</a>
</div>
```

<div class="not-prose flex my-6">
    <a href="#" class="btn btn--primary rounded-r-none">Left</a>
    <a href="#" class="btn btn--primary rounded-none border-x-0">Center</a>
    <a href="#" class="btn btn--primary rounded-l-none">Right</a>
</div>
