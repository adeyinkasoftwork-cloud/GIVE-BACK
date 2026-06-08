/** @type {import('tailwindcss').Config} */
// Design tokens extracted verbatim from Onramper's Webflow CSS :root block:
// onramper.webflow.*.opt.min.css
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --_colors---*
        pearl: "#efeef3",
        "off-black": "#151515",
        "body-copy": "#929292",
        steel: "#808099",
        "gun-metal": "#3d444d",
        "cyber-blue-1": "#1600d3",
        "cyber-blue-2": "#1f00ff",
        "cyber-blue-3": "#5460ff",
        "cyber-blue-150": "#cdd0ff",
        "vibrant-teal-1": "#33e7a1",
        "vibrant-teal-2": "#6affc5",
        "vibrant-teal-3": "#b7ffde",
        // pre-footer background base
        "onramp-blue": "#0093ff",
      },
      spacing: {
        // --_spacing---*  (named to mirror the originals)
        "sp-0": "0px",
        "sp-xs": "20px",
        "sp-sm": "40px",
        "sp-reg": "60px",
        "sp-lg": "80px",
        "sp-xl": "100px",
        "sp-xxl": "120px",
        "sp-xxxl": "11.25rem", // 180px
      },
      fontFamily: {
        // --_typography---primary
        saans: ["Saans", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1340px", // .container max-width
        "faq-heading": "720px",
      },
      borderRadius: {
        button: "70px", // .button
        nav: "123px", // .header__navigation
        card: "24px", // .value_card
        faq: "8px", // .faq__question
      },
    },
  },
  plugins: [],
};
