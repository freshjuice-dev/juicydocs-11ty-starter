/**
 * Copy Page Component
 * Dropdown menu surfaced on docs and changelog pages with AI-friendly
 * actions: copy markdown to clipboard, view markdown, open in ChatGPT,
 * open in Claude.
 */

const COPY_FEEDBACK_MS = 1500;

async function copyMarkdownToClipboard(mdPath) {
  const response = await fetch(mdPath, { headers: { Accept: "text/markdown" } });
  if (!response.ok) {
    throw new Error(`Markdown fetch failed: ${response.status}`);
  }
  const text = await response.text();
  await navigator.clipboard.writeText(text);
}

function wireContainer(container) {
  const trigger = container.querySelector("[data-copy-page-trigger]");
  const menu = container.querySelector("[data-copy-page-menu]");
  const copyBtn = container.querySelector('[data-copy-page-action="copy"]');
  const copyLabel = container.querySelector("[data-copy-page-label]");
  if (!trigger || !menu || !copyBtn || !copyLabel) return;

  const close = () => {
    menu.classList.add("hidden");
    trigger.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    menu.classList.remove("hidden");
    trigger.setAttribute("aria-expanded", "true");
  };
  const isOpen = () => !menu.classList.contains("hidden");

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isOpen()) close();
    else open();
  });

  copyBtn.addEventListener("click", async (e) => {
    e.stopPropagation();
    const mdPath = copyBtn.dataset.mdPath;
    if (!mdPath) return;
    const originalLabel = copyLabel.textContent;
    try {
      await copyMarkdownToClipboard(mdPath);
      copyLabel.textContent = "Copied!";
    } catch (err) {
      console.error("Copy as Markdown failed:", err);
      copyLabel.textContent = "Copy failed";
    }
    setTimeout(() => {
      copyLabel.textContent = originalLabel;
      close();
    }, COPY_FEEDBACK_MS);
  });

  document.addEventListener("click", (e) => {
    if (isOpen() && !container.contains(e.target)) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      close();
      trigger.focus();
    }
  });
}

export function initCopyPage() {
  const containers = document.querySelectorAll("[data-copy-page]");
  containers.forEach(wireContainer);
}
