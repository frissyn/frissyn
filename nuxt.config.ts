import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    build: { quiet: false },
    css: [
      '~/assets/css/anims.css',
      '~/assets/css/index.css',
      '~/assets/css/overrides.css'
    ],
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        config:  {
            content: ['./pages/**/*.{vue,js}'],
            plugins: [require('daisyui')],
            daisyui: {
                themes: ['cupcake', 'dark']
            }
        }
    },
    meta: { title: 'frissyn ✧' },
    head: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
        htmlAttrs: { lang: 'en' },
        meta: [
            { name: 'theme-color', content: '#F2AD85' },
            { name: 'robots', content: 'index, follow' },
            { name: 'description', content: '"no thoughts, head empty" - frissyn' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    }
})