import pkg from './package'
// import ogImage from '~/assets/image/intro.png';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Design Tokens Generator',
    description: 'Design tokens are the minimum elements of the design system',
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
        content: 'Design tokens are the minimum elements of the design system'
      },
      // Open Graph
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Design Tokens Generator'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Design tokens are the minimum elements of the design system'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://quinalha.me/design-tokens-generator'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'intro.png'
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: 'Design Tokens Generator image'
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@gustavoquinalha'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Design Tokens Generator'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Design tokens are the minimum elements of the design system'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'intro.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Design Tokens Generator image'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/design-tokens-generator/favicon.ico'
      },
      {
        rel: 'shortcut icon',
        href: '/design-tokens-generator/favicon.ico',
        type: 'image/x-icon'

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
      }
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
