// https://nuxt.com/docs/api/configuration/nuxt-config

import { aliases, mdi } from 'vuetify/iconsets/mdi'

const softagon = {
  dark: false,
  colors: {
    background: '#1e293b',
    surface: '#FFFFFF',
    primary: '#fe682d',
    'primary-darken-1': '#3700B3',
    secondary: '#00a3d7',
    'secondary-darken-1': '#018786',
    error: '#fe682d',
    info: '#2196F3',
    success: '#01b9e0',
    warning: '#fea800',
  },
}

export default defineNuxtConfig({
  ssr: true,
  build: {
    transpile: ['vuetify'],
  },
   modules: [
    '@invictus.codes/nuxt-vuetify',
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'softagon',
        themes: {
          softagon,
        },
      },
      defaults: {
       
      },
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
    },
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: 'sass',
      autoImport: true,
    },
  },
  //   nitro: {
  //   serveStatic: true,
  //   compressPublicAssets: true,
  // },
 
})