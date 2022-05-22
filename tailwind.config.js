module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['DM Mono', 'san-serif'],
    },
    extend: {
      colors: {
        dark: '#2D2E32',
        darker: '#25262A',
      },
      fontFamily: {
        cursive: ['Pacifico'],
      },
    },
  },
  plugins: [],
};
