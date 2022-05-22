module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-blue': '#72A1FF',
        'dark-blue': '#363E64',
        'main-black': '#212121',
        'secondary-black': '#292929',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '990px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
