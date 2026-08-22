// .eleventy.js
module.exports = function (eleventyConfig) {
  // -------------------------------------------------
  // 1️⃣ Robust date filter – returns empty string on bad input
  // -------------------------------------------------
  eleventyConfig.addFilter("date", (rawDate, format) => {
    if (!rawDate) return "";                     // nothing passed
    const d = new Date(rawDate);
    if (isNaN(d.getTime())) return "";          // invalid date string

    // ---- ISO style: 2024-08-22 --------------------
    if (format === "%Y-%m-%d") {
      return d.toISOString().slice(0, 10);
    }

    // ---- Human‑readable: August 22, 2024 ----------
    if (format === "MMMM D, YYYY") {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(d);
    }

    // Fallback – just ISO string
    return d.toISOString();
  });

  // -------------------------------------------------
  // 2️⃣ Define the “posts” collection – only files in src/posts/
  // -------------------------------------------------
  eleventyConfig.addCollection("posts", (collectionApi) => {
    // Grab every markdown file under src/posts/
    return collectionApi.getFilteredByGlob("./src/posts/*.md");
  });

  // -------------------------------------------------
  // 3️⃣ Passthrough copy for static assets (images, CSS, etc.)
  // -------------------------------------------------
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // -------------------------------------------------
  // 4️⃣ Return the Eleventy configuration
  // -------------------------------------------------
  return {
    dir: {
      input: "src",   // source folder
      output: "_site" // Netlify expects this folder
    },
  };
};
