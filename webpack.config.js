'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		path.resolve(__dirname, 'src/js/', 'app.js'),
		path.resolve(__dirname, 'src/sass/', 'main.scss'),
	],
	output: {
		path: path.resolve(__dirname, 'dist/assets/'),
		filename: '../js/bundle.js',
	},
	module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				//resolve-url-loader may be chained before sass-loader if necessary
				use: ['css-loader', 'sass-loader']
			})
        },
        {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            use: [{
                loader: "file-loader"
        	}]
        }]
    },
    plugins: [
		// new ExtractTextPlugin('style.css')
		//if you want to pass in options, you can do so:
		new ExtractTextPlugin({
	 		filename: '../css/style.css'
		})
	]
}