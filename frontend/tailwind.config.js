/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorphic': '4px 4px 8px #d9d9d9, -4px -4px 8px #ffffff',
      },
      fontFamily:{
        sand:['Quicksand',"Quicksand"]
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          " display": "none"
        },
        ".no-scrollbar": {
          // "-ms-overflow-style": "",
          "scrollbar-width": "2px",
        },
        
      }
      addUtilities(newUtilities);
    }],
}

