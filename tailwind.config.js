/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundcolor: ['dark'],
      textcolor: ['dark']
    },
  },
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        sm: "390px",
        md: "744px",
        lg: "1133px",
        xl: "1440px",
        "2xl": "1920px",
  
        "max-sm": { max: "639px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1311px" },
      },
      extend: {
        colors: {
          primary: {
            100 : "#d1f8ff",
            200 : "#25ddf0",
            300 : "#1CB3C2",
            400 : "#138a96",
            500 : "#0b646d",
            600 : "#044046",
            700 : "#011f22",
          },
          secondary: {
            100 : "#fccad5",
            200 : "#f990ac",
            300 : "#f74083",
            400 : "#C21C60",
            500 : "#851040",
            600 : "#4d0522",
            700 : "#2a020f",
          },
          tertiary: {
            100 : "#fdd2b1",
            200 : "#f5a026",
            300 : "#C27E1C",
            400 : "#915d12",
            500 : "#643e09",
            600 : "#392203",
            700 : "#1b0e01",
          },
          grey: {
            100 : "#eff1f1",
            200 : "#c5cacb",
            300 : "#9fa3a4",
            400 : "#7a7e7e",
            500 : "#585a5b",
            600 : "#373939",
            700 : "#1a1b1b",
          },
          "off-white": {
            100 : "#F8FAFC",
            200 : "#e8eef5",
            300 : "#FFFFFF",
            400 : "#fafafa",
            500 : "#c0d4e5",
            600 : "#B2C8DE",
            700 : "#88afcd",
          },
        }
      },
    },
    plugins: [],
  }