// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ゆきふわり',
  siteUrl: 'https://me.asutora.com',
  plugins: [
	{
		use: '@gridsome/plugin-google-analytics',
		options: {
		  	id: 'UA-79576800-2'
		}
	},
	{
		use: '@gridsome/plugin-sitemap',
		options: {
			cacheTime: 600000, // default
			exclude: [],
			config: {
				'/about': {
					changefreq: 'daily',
					priority: 0.7
				},
				'/gallery': {
					changefreq: 'daily',
					priority: 0.7
				},
				'/project': {
					changefreq: 'daily',
					priority: 0.7
				}
			}
		}
	}
  ],
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
  }
}