// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true ,
      useIconCDN: true ,

      /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true ,
    }
  }
})
