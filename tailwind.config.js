/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1440px",
      },
      maxWidth: {
        xxl: "1440px",
      },
      colors: {
        "brand-black": "#171718",
        "brand-yellow": "#ffba3f",
        "brand-yellow-light": "#ffce66",
        "light-gray": "#525351",
      },
      dropShadow: {
        "brand-yellow": "0px 0px 10px #ffba3f",
      },
    },
  },
  plugins: [],
};
