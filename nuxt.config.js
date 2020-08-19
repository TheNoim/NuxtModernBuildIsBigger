const pkg = require('./package')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    babel: {
      presets(env, [preset, options]) {
        options.targets = {}
        if (env.envName === 'modern') {
          options.targets.browsers = pkg.browserslist.modern
          options.targets.esmodules = true
        }
        if (env.envName === 'client') {
          options.targets.browsers = pkg.browserslist.production
        }
        if (env.envName === 'server') {
          options.targets.browsers = pkg.browserslist.ssr
        }
        options.debug = true
        options.ignoreBrowserslistConfig = false
        options.bugfixes = false
        options.corejs = {}
        options.corejs.version = 2
        return [['@nuxt/babel-preset-app', options]]
      },
    }
  },
  modern: 'client'
}
