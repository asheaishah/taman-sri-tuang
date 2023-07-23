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
            title:'Grand Dunman',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Discover Grand Dunman, an epitome of luxury living in District 15, Singapore. Nestled in nature, this upcoming residential development offers over 1,000 units coupled with premium facilities and seamless connectivity, with Dakota MRT Station less than 100m away.' },
                { hid: 'keywords', name: 'keywords', content: 'Grand Dunman, Dunman Residences, New Property Launch, Singapore District 15 Properties, Dakota MRT Condos, Luxury Residential Developments Singapore, Dunman Road Condo, Grand Dunman New Launch, Dunman Real Estate' },
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
        title:'Grand Dunman',
        emailUser: ''
    }
})
