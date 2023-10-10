/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif',
    },
    extend: {
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
}
