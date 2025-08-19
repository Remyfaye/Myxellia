/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: "#F5F5F5",
        light: "#C9E6FE",
      },
      screens: {
        xs: "480px", // new extra small screen
        tablet: "568px", // alternative to md
        smallLaptop: "900px", // alternative to md
        laptop: "1124px", // alternative to lg
        desktop: "1280px", // alternative to xl
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
