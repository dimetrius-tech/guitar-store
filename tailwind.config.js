/** @type {import('tailwindcss').Config} */
export default {
    important: true,
  content: [
      './app.vue',
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './node_modules/vuetify/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
        backgroundColor: {
            'base-background': '#110E0E'
        },
        fontSize: {
            h1: 'var(--v-theme-font-size-h1)',
            h2: 'var(--v-theme-font-size-h2)',
            h3: 'var(--v-theme-font-size-h3)'
        },
        fontFamily: {
            heading: ['Poppins', 'sans-serif'],
        },
        fontWeight: {
            extrabold: '800',
            bold: '600'
        },
    },
  },
  plugins: [],
}

