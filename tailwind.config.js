/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#1a365d",
  accent1: "#4caf50",
  accent2: "#ffffff",
  accent3: "#f5f5f5",
  accent4: "#222222"
};
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        //Primary colors
        primary: colors.primary,
        //Accent colors
        accent1: colors.accent1,
        accent2: colors.accent2,
        accent3: colors.accent3,
        accent4: colors.accent4
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
