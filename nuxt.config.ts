// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
  alias: {
    '@images': './assets/img/',
    "@fonts/*": "./assets/fonts/*",
  },
  build: {
    transpile: ['vuetify']
  },
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({autoImport: true}))
    })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      }
    }
  }
})