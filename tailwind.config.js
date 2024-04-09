/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F36F2B',
        'base': '#f1f1f1',
        'secondary': '#112C41', // Custom primary color
      }
    },
  },
  plugins: [],
};
