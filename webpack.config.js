const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	resolve: {
    alias: {
      three: path.resolve('./node_modules/three')
    },
		extensions: [".js", ".ts", ".wasm"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: './src/favicon.png',
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		static: './dist',
		https: true,
		host: '0.0.0.0'
	},
	module: {
		rules: [
			{ test: /\.ts?$/, loader: "ts-loader" },
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	}
};
