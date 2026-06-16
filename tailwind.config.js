/** @type {import('tailwindcss').Config} */
// Onramper layout/structure preserved. Color VALUES remapped to GIVEBACK ($GBACK)
// brand palette while keeping the original token NAMES, so component classes are
// untouched and just render in the new colors.
//
// GIVEBACK brand: primary #0D232B, green #20C854, link #42A02A, black #000000
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // light section background -> soft neutral
        pearl: "#F2F5F3",
        // dark text / buttons / footer -> GIVEBACK primary deep teal-black
        "off-black": "#0D232B",
        "body-copy": "#5B6B70",
        steel: "#7C8C90",
        "gun-metal": "#3d444d",
        // main accent (buttons, links, highlights) -> GIVEBACK green
        "cyber-blue-1": "#159C40", // dark green (gradient end)
        "cyber-blue-2": "#20C854", // GIVEBACK green (primary accent)
        "cyber-blue-3": "#42A02A", // link green
        "cyber-blue-150": "#BDEFCB", // pale green
        // secondary accent (kept as green family)
        "vibrant-teal-1": "#20C854",
        "vibrant-teal-2": "#6AFF9E",
        "vibrant-teal-3": "#B7FFD0",
        // pre-footer background base -> GIVEBACK green
        "onramp-blue": "#20C854",
      },
      spacing: {
        "sp-0": "0px",
        "sp-xs": "20px",
        "sp-sm": "40px",
        "sp-reg": "60px",
        "sp-lg": "80px",
        "sp-xl": "100px",
        "sp-xxl": "120px",
        "sp-xxxl": "11.25rem",
      },
      fontFamily: {
        // keep the same token name "saans" so classes don't change;
        // point it at GIVEBACK's fonts (Abel for display, DM Sans body fallback)
        saans: ["var(--font-abel)", "var(--font-dm-sans)", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1340px",
        "faq-heading": "720px",
      },
      borderRadius: {
        button: "70px",
        nav: "123px",
        card: "24px",
        faq: "8px",
      },
    },
  },
  plugins: [],
};
