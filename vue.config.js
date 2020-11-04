// vue.config.js
const webpack = require('webpack'); //引入webpack
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

// // 封装pages下的html、js文件处理
// let glob = require('glob')
// //配置pages多页面获取当前文件夹下的html和js
// function getEntry(globPath) {
// 	let entries = {},
// 		tmp, htmls = {};
// 	// 读取src/pages/**/底下所有的html文件
// 	glob.sync(globPath + 'html').forEach(function(entry) {
// 		tmp = entry.split('/').splice(-3);
// 		htmls[tmp[1]] = entry
// 	});
// 	// 读取src/pages/**/底下所有的js文件
// 	glob.sync(globPath + 'js').forEach(function(entry) {
// 		tmp = entry.split('/').splice(-3);
// 		entries[tmp[1]] = {
// 			entry,
// 			template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', //  当前目录没有有html则以共用的public/index.html作为模板
// 			filename: tmp[1] + '.html' //  以文件夹名称.html作为访问地址
// 		};
// 	});
// 	console.log(entries);
// 	return entries;
// }
// let htmls = getEntry('./src/pages/**/*.');

let config = {
	// baseUrl: './',    // Vue CLI 3.3 起已弃用
	publicPath: './', //部署应用包时的基本 URL
	// outputDir: 'dist', //当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
	// assetsDir: 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	// indexPath: 'index.html', //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	// filenameHashing: true, //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
	// pages: htmls,
	pages: {
		index: {
			// page 的入口
			entry: './src/pages/index/index.js',
			// 模板来源
			// template: 'public/index.html',
			template: './src/pages/index/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html', //需要.html才能进入默认首页
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'portal',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		manage: {
			entry: './src/pages/manage/index.js',
			// template: 'public/index.html',
			template: './src/pages/manage/index.html',
			filename: 'manage', //不能用index.html否则跳转不过来
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'portal',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'manage']
		},
		// 只有entry属性时，直接用字符串表示模块入口
		// index: './src/pages/index/index.js',
		// manage: './src/pages/manage/manage.js'
	},
	// eslint-loader 是否在保存的时候检查
	lintOnSave: false,
	// // 是否使用包含运行时编译器的Vue核心的构建
	// runtimeCompiler: false,
	// // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
	// transpileDependencies: [],
	// // 生产环境 sourceMap
	// productionSourceMap: false,
	devServer: {
		// open: true,
		// host: '127.0.0.1',
		// port: 3000,
		// https: false,
		// hotOnly: false,
		proxy: {
			'/api': {
				target: 'http://localhost:3000', //代理接口
				ws: true,
				changeOrigin: true
			}
		},
		// before: app => {
		// },
		overlay: {
			warnings: true,
			errors: true
		}
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				//配置jquery
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			})
		]
	},
	pluginOptions: {
		'style-resources-loader': {
		    preProcessor: 'sass',
		    patterns: [
				path.resolve(__dirname, './src/assets/css/*.scss')  //.scss文件所在目录
		    ]
		},
		'style-resources-loader': {
		    preProcessor: 'less',
		    patterns: [
				path.resolve(__dirname, './src/assets/css/*.less') 	// less所在文件路径
			]
		}
	},  
	css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            },
            sass: {
                javascriptEnabled: true
            }
        }
    }
	// chainWebpack: config => {
	// 	// 公共资源提取
	// 	// vendors提取的是第三方公共库(满足提取规则的node_modules里面的且页面引入的)，这些文件会打到dist/js/chunk-vendors.js里面
	// 	// 提取规则是每个页面都引入的才会打到chunk-vendors.js里面(如vue.js)
	// 	// 控制条件是minChunks字段，所以该字段的值是当前activity/src/projects里面的html的个数
	// 	// common提取的应该是除了vendors提取后，剩余的满足条件的公共静态模块
	// 	// 我们的项目不需要common，所以将common置为{}，覆盖默认common配置
	// 	config.optimization.splitChunks({
	// 		cacheGroups: {
	// 			vendors: {
	// 				name: 'chunk-vendors',
	// 				// minChunks: pageNum,
	// 				test: /node_modules/,
	// 				priority: -10,
	// 				chunks: 'initial'
	// 			},
	// 			common: {}
	// 		}
	// 	});
	// }
};

// //开发环境--配置vconsole优化
// const vConsolePlugin = require('vconsole-webpack-plugin');
// if (process.env.NODE_ENV !== 'production') {
// 	//移动端模拟开发者工具
// 	config.configureWebpack.plugins.push(new vConsolePlugin({
// 		filter: [], // 需要过滤的入口文件
// 		enable: true
// 	}));
// }

module.exports = config; //导出
