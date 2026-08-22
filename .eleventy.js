// .eleventy.js
module.exports = {
  // Tell Eleventy where the source files are and where to put the output
  dir: {
    input: "src",   // <‑‑ look for templates inside the src/ folder
    output: "_site" // <‑‑ write the generated HTML to the _site folder (Netlify already expects this)
  },

  // Optional: copy everything from the static folder straight to the output
  // (so images, CSS, etc. are available without extra configuration)
  passthroughFileCopy: true,
  // This tells Eleventy to copy the static folder as‑is
  // (you could also list individual files if you prefer)
  // The path is relative to the project root.
  // If you already have a `static/` folder, this line is enough:
  // (Eleventy will automatically copy `static/**` → `_site/static/**`)
  // No extra code needed; the `passthroughFileCopy: true` flag is enough.
};
