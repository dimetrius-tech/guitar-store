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
    },
  },
  plugins: [],
}

