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
            title:'Borneo 29',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Discover our exclusive housing development, meticulously crafted by Menua Borneo Sdn Bhd, exclusively available for Bumiputera Sarawakians. Situated in the peaceful locality of Samarahan, these charming double-story terrace houses seamlessly combine comfort with convenience.' },
                { hid: 'keywords', name: 'keywords', content: 'Borneo 29, Borneo 29 Residence,Property Launch' },
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
        title:'Borneo 29',
        emailUser: '',
    },
    
})
