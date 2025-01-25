/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        waterDrop: "#93c5fd", // Customize water drop hover effect color
        customBlue: {
          DEFAULT: '#001f3f', // Base color
          light: '#003366',  // A lighter shade
          dark: '#000a1a',   // A darker shade
        },
      },
    },
  },
  plugins: [],
}

