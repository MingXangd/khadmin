const isProduction = process.env.NODE_ENV === 'production';
const Timestamp = new Date().getTime();
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	//基本路徑
	publicPath: './',
	//构建时的输出目录
	outputDir:'dist',
	//放置静态资源的目录
	// assetDir:'start',
	// html 输出路径
	indexPath:'index.html',
	//文件名哈希
	filenameHashing:false,
	
	runtimeCompiler: true,
	pwa: {
		iconPaths: {
			favicon32: 'favicon.ico',
			favicon16: 'favicon.ico',
			appleTouchIcon: 'favicon.ico',
			maskIcon: 'favicon.ico',
			msTileImage: 'favicon.ico'
		}
	},
	configureWebpack: config => {
		 if (process.env.NODE_ENV === 'production') {
		      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
		    }
		
			// 开启分离js
			// config.optimization = {
			// 	runtimeChunk: 'single',
			// 	splitChunks: {
			// 		chunks: 'all',
			// 		maxInitialRequests: Infinity,
			// 		minSize: 20000,
			// 		cacheGroups: {
			// 			vendor: {
			// 				test: /[\\/]node_modules[\\/]/,
			// 				name(module) {
			// 					const packageName = module.context.match(
			// 						/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
			// 					return `npm.${packageName.replace('@', '')}`
			// 				}
			// 			}
			// 		}
			// 	}
			// };
		// }
	},
	chainWebpack: config => {
		//打包配置时间戳
		        if (process.env.NODE_ENV === 'production') {
		            // 给js和css配置版本号
		            config.output.filename('js/[name].' + Timestamp + '.js').end();
		            config.output.chunkFilename('js/[name].' + Timestamp + '.js').end();
		            config.plugin('extract-css').tap(() => [{
		                filename: `css/[name].${Timestamp}.css`,
		                chunkFilename: `css/[name].${Timestamp}.css`
		            }])
		        }
				
		// config.output.filename('js/[name].js').end();
		// config.output.chunkFilename('js/[name].js').end();
		// // 修改生产配置
		// config.plugin('extract-css').tap(args => [{
		// 	filename: `css/[name].css`,
		// 	chunkFilename: `css/[name].css`
		// }])
		// config.output.filename('js/[name].js').end()
		// config.output.chunkFilename('js/[name].js').end()

	},
	lintOnSave: false,
	css: {
	// 是否使用css分离插件 ExtractTextPlugin
	extract: true,
	// 开启 CSS source maps?
	sourceMap: false,
	},
	// css: {
	//     loaderOptions: {
	//       less: {
	//         lessOptions: {
	//           // If you are using less-loader@5 please spread the lessOptions to options directly
	//           modifyVars: {
	//             'primary-color': '#1DA57A',
	//             'link-color': '#1DA57A',
	//             'border-radius-base': '2px',
	//           },
	//           javascriptEnabled: true,
	//         },
	//       },
	//     },
	//   },
	//配置scoped失效问题
	// 'postcss-loader',
	//      options: {
	//       plugins: [
	//         require('autoprefixer'),
	//         require('postcss-import')
	//       ]
	//    	}
	
	devServer: {
	        // open: true,
	        // host: 'localhost',
	        // port: 9090,
	        // https: false,
	        // hotOnly: false,
			host: '0.0.0.0',
			        public:'192.168.31.219:8080',
			        // port: 8080,
			        // https: false,
			        // hotOnly: false,
			        // disableHostCheck:true,
			        // open: true // 配置自动启动浏览器
	        // proxy: {
	        //      //配置跨域
	        //      '/api': {
	        //          target: 'http://zb.txdou.com', //test
	        //          ws: true,// 是否启用websockets
	        //          changeOrigin: true, //是否開啟代理
	        //          pathRewrite: {
	        //             '^/api': ''
	        //          }
	        //      }
	        //  },
	        // before: app => {}
	    }
}
