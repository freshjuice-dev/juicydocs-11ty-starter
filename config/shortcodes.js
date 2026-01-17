/**
 * Custom Eleventy shortcodes
 * https://www.11ty.dev/docs/shortcodes/
 */
export default function (eleventyConfig) {
  // alert - Display alert box with optional type and title
  eleventyConfig.addShortcode("alert", function (content, type, title) {
    const validTypes = ["info", "warning", "success", "danger"];
    const typeClass = validTypes.includes(type) ? `alert-${type}` : "";
    const titleAttr = title ? `data-title="${title}"` : "";

    return `<div class="alert ${typeClass}" ${titleAttr} role="alert">${content}</div>`;
  });

  // alertAlt - Paired version of alert shortcode (for multi-line content)
  eleventyConfig.addPairedShortcode("alertAlt", function (content, type, title) {
    const validTypes = ["info", "warning", "success", "danger"];
    const typeClass = validTypes.includes(type) ? `alert-${type}` : "";
    const titleAttr = title ? `data-title="${title}"` : "";

    return `<div class="alert ${typeClass}" ${titleAttr} role="alert">${content}</div>`;
  });

  // embed - Embed external content via iframe (YouTube, etc.)
  eleventyConfig.addShortcode("embed", function (src, height) {
    try {
      let url = new URL(src);
      // Use youtube-nocookie.com for privacy
      if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
        url = new URL(src.replace("youtube.com", "youtube-nocookie.com"));
      }
      return `<!-- embed --><div class="embed-wrapper"><iframe src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" height="${height || ""}" allowfullscreen></iframe></div><!-- /embed -->`;
    } catch (e) {
      console.log(`embed: ${src} is not a valid URL`);
      return "";
    }
  });

  // youtube - Lazy-loading YouTube embed using lite-youtube-embed
  // Accepts YouTube URL or video ID
  eleventyConfig.addShortcode("youtube", function (src, title) {
    let videoId = src;

    // Extract video ID from various YouTube URL formats
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      try {
        const url = new URL(src);
        if (url.hostname === "youtu.be") {
          videoId = url.pathname.slice(1);
        } else {
          videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
        }
      } catch (e) {
        console.log(`youtube: ${src} is not a valid URL`);
        return "";
      }
    }

    const videoTitle = title || "YouTube video";

    return `<!-- youtube --><lite-youtube videoid="${videoId}" playlabel="Play: ${videoTitle}"></lite-youtube><!-- /youtube -->`;
  });
}
