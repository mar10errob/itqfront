module.exports = {
	entry: ['./app.js', './main.scss'],
	output: {
		filename: 'dist/bundle.js'
	},
	module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            use: [{
                loader: "file-loader"
        	}]
        }]
    }
}