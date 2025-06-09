/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#60a5fa", // Light Blue (or choose your preferred color)
        },
        dark: {
          500: "#374151",
          600: "#1f2937",
          700: "#111827",
          800: "#0f172a",
          900: "#0a0f1d"
        }
      },
    },
  },
  plugins: [],
};
