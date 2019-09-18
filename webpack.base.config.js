const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const env = 'production';

module.exports = {
	mode: env,
	entry: {
			app: ['@babel/polyfill','./src/index.tsx']
	},
	output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist')
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|ico|eot|svg)$/,
				use : [
					{
            loader : 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:8].[ext]'
            }
					}
				]
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, 'src')
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "tangdaoyuan",
			template: "src/index.ejs",
			filename: "index.html",
			chunksSortMode: "none", // Error: Cyclic dependency
			hash: true,
			minify: true
		})
	],
	resolve: {
			alias: {
					components: `${__dirname}/src/components`,
					utils: `${__dirname}/src/utils`,
					services: `${__dirname}/src/services`,
					models: `${__dirname}/src/models`,
					routes: `${__dirname}/src/routes`,
					themes: `${__dirname}/src/themes`,
			},
			extensions: ['.ts', '.tsx', '.js']
	}
}
