/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '4': 'repeat(4, minmax(0, auto))',
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}