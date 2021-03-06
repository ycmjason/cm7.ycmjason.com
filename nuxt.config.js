const { join } = require('path');

module.exports = {
  rootDir: __dirname,
  srcDir: join(__dirname, 'src/nuxt'),
  buildDir: join(__dirname, 'nuxt-dist'),
  build: {
    publicPath: '/',
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          join(__dirname, 'src/loaders/addWrap.js'),
          'markdown-loader',
        ],
      });
    },
  },
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-113352609-4' }],
  ],
  head: {
    title: 'Cm7 | Chords from Jason',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#274156' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
    ],
  },
  css: [
    'normalize.css',
    '@/scss/base.scss',
  ],
  plugins: [
    '@/plugins/globals.js',
  ],
};
