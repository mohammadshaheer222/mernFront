/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        "hero": "url('../src/assets/HEADER2.jpg')",
        "heroXs": "url('../src/assets/Header_M(1).jpg')",
        "bannerOffer": "url('../src/assets/banner.jpg')"
      },
    },
  },
  plugins: [],
};
