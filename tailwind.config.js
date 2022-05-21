module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-blue': '#72A1FF',
        'dark-blue': '#363E64',
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
