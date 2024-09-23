const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/main/frontend/views/**/*.{html,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"



  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

