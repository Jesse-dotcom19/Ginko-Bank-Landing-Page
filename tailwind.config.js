/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "Blue": "#3a86ff",
        "Light-Blue": "#ebf3ff",
        "White": "#ffffff",
        "Paragraph-Grey": "#4d4d4d",
        "Black": "#1a191e",
        "Black (muted)": "#82858e",
        "Border (grey)": "#e8e8e8"

      }
    },
  },

  "fontSize": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.3125rem",
    "3xl": "1.375rem",
    "4xl": "1.5rem",
    "5xl": "1.75rem",
    "6xl": "2.375rem",
    "7xl": "3.125rem",
    "8xl": "4rem"
   },

   "fontFamily": {
    "dm-sans": "DM Sans"
   },

  screens: {
    xs: "0px",
    ss: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1576px"
  },
  plugins: [],
}
