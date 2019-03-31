import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Design Tokens Generator',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Design Tokens Generator'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:400,700,900'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/the-grid-flexbox@2.0.1/css/the-grid.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
        crossorigin: 'anonymous'
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#000'
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~/plugins/vue-sticky',
    ssr: false
  }],
  router: {
    base: '/design-tokens-generator/'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/css/_variables.scss']
  ],

  node: {
    fs: 'empty'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
