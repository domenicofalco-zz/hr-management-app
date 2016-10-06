const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		['.', 'app', 'js', 'main.js'].join(path.sep)
	],
	resolve: {
		modulesDirectories: ['node_modules'],
		alias: {
      'react':[__dirname, 'node_modules', 'react'].join(path.sep)
    },
		extensions: ['', '.js', '.jsx']
	},
	output: {
		filename: './public/js/bundle.js'
	},
	// devtool: 'eval-source-map',
	module: {
		devtool: null,
		loaders: [
			{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['babel'],
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['transform-decorators-legacy']
				}
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			}
		]
	}
};
