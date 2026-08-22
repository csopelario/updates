// .eleventy.js
module.exports = function (eleventyConfig) {
  // Simple date filter (handles the two formats we need)
  eleventyConfig.addFilter("date", (dateObj, format) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    if (format === "%Y-%m-%d") {
      return d.toISOString().slice(0, 10);
    }
    if (format === "MMMM D, YYYY") {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(d);
    }
    return d.toISOString();
  });

  // Copy static assets (images, CSS, etc.)
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: { input: "src", output: "_site" },
  };
};
