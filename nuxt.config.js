
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.5.1.slim.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" },



      { src: 'https://www.amcharts.com/lib/4/core.js' },
      { src: 'https://www.amcharts.com/lib/4/charts.js' },
      { src: 'https://www.amcharts.com/lib/4/themes/animated.js' },

      { src: '/vendors.min.js' },

      { src: '/vendors/vendor_components/apexcharts-bundle/irregular-data-series.js' },
      { src: '/vendors/vendor_components/apexcharts-bundle/dist/apexcharts.js' },

      { src: '/vendors/vendor_components/Web-Ticker-master/jquery.webticker.min.js' },

      { src: '/main/js/template.js' },
      { src: '/main/js/dashboard.js' },
      { src: '/main/js/demo.js' },



    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: "@/assets/main/css/vendors_css" },
    { src: "@/assets/main/css/style" },
    { src: "@/assets/main/css/skin_color" },
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: "~/plugins/echart.js", mode: 'server' }
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
    transpile: ['vue-echarts', 'resize-detector']
  }
}
