import "lite-youtube-embed";
import "@zachleat/table-saw";

// Components
import "./components/command-palette.js";
import { initThemeSwitcher } from "./components/theme-switcher.js";
import { initMobileMenu } from "./components/mobile-menu.js";
import { initTocTracker } from "./components/toc-tracker.js";

/**
 * DOM ready handler
 */
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // Add loaded class for CSS transitions
    document.body.classList.add("loaded");

    // Initialize components
    initThemeSwitcher();
    initMobileMenu();
    initTocTracker();

    // JuicyDocs console branding
    console.log(
      "%c📚 JuicyDocs %c Freshly Pressed Documentation ",
      "background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: #fff; font-size: 16px; font-weight: bold; padding: 8px 12px; border-radius: 8px 0 0 8px;",
      "background: #1e293b; color: #f97316; font-size: 16px; font-weight: bold; padding: 8px 12px; border-radius: 0 8px 8px 0;"
    );
    console.log(
      "%c Squeezed with care by FreshJuice %c https://freshjuice.dev",
      "color: #71717a; font-size: 12px;",
      "color: #f97316; font-size: 12px;"
    );
  },
  { once: true }
);
