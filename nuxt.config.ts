// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title:'Taman Sri Tuang',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: "Taman Sri Tuang, where the heart of comfortable living beats in Kota Samarahan, Sarawak, Malaysia. Our community offers an array of housing options and essential amenities, creating a promising residential haven for families like yours. you'll discover a harmonious blend of housing diversity, essential amenities, and educational opportunities, all designed to cater to the needs of your family. Come and experience the promise of a well-rounded living environment in Kota Samarahan's finest residential area. Make Taman Sri Tuang your home today!" },
                { hid: 'keywords', name: 'keywords', content: 'Taman Sri Tuang, Taman Sri Tuang Residence,Property Launch, Porperty, Single Storey, 1 1/2 Storey, Samarahan, Kota Samarahan' },
                { name: 'format-detection', content: 'telephone=no' },
              ],
            script: [
                {
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                  integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
                  crossorigin: 'anonymous',
                },
              ],
        }
    },
    runtimeConfig: {
        email: '', // can be overridden by NUXT_API_SECRET environment variable
        title:'Taman Sri Tuang',
        emailUser: '',
    },
    
})
