// .eleventy.js
module.exports = function (eleventyConfig) {
  // ---------- 1️⃣ Simple date filter ----------
  // Usage in Nunjucks: {{ myDate | date("YYYY‑MM‑DD") }}
  // The format string follows the syntax of JavaScript’s Intl.DateTimeFormat
  // (we’ll support the two formats you need).
  eleventyConfig.addFilter("date", (dateObj, format) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    // Simple switch for the two formats we use:
    if (format === "%Y-%m-%d") {
      // ISO style: 2024-08-22
      return d.toISOString().slice(0, 10);
    }
    if (format === "MMMM D, YYYY") {
      // Human‑readable month name (e.g., “August 22, 2024”)
      // Using Intl for proper locale handling
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(d);
    }
    // Fallback – just output ISO string
    return d.toISOString();
  });

  // ---------- 2️⃣ Passthrough copy for static assets ----------
  // Anything inside the `static/` folder will be copied unchanged to the output.
  eleventyConfig.addPassthroughCopy("static");

  // ---------- 3️⃣ Return the config ----------
  return {
    dir: {
      input: "src",   // source files are in src/
      output: "_site", // Netlify expects this folder
    },
  };
};
