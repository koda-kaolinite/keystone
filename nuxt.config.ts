// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {
      enabled: true,

      timeline: {
        enabled: true
      }
    },

    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/test-utils',
        '@nuxt/ui-pro',
        '@nuxtjs/i18n',
        '@nuxt/fonts'
    ],

    fonts: {
        families: [
            {name: 'Sora', provider: 'google', weights: ['400', '500', '600', '700', '800']},
            {name: 'Inter', provider: 'google', weights: ['400', '500', '600', '700']}
        ]
    },

    css: ['~/assets/css/main.css'],

    i18n: {
        strategy: 'no_prefix',
        defaultLocale: 'pt-BR',
        langDir: 'locales',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en.json',
                name: 'English'
            },
            {
                code: 'pt-BR',
                iso: 'pt-BR',
                file: 'pt-BR.json',
                name: 'Portuguese'
            }
        ],
        vueI18n: './i18n.config.ts'
    }
})