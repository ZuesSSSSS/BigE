// Plugins
const { CleanWebpackPlugin } 	= require("clean-webpack-plugin");
const BrowserSyncPlugin    		= require('browser-sync-webpack-plugin');

// Helper variables
const path                 		= require('path');
const MiniCssExtractPlugin 		= require('mini-css-extract-plugin');
const buildDirPath         		= 'dist';
const entryFiles           		= require('./entry.json');

module.exports = {
	entry: entryFiles,
	output: {
		path: path.join(__dirname, buildDirPath),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				// Compile js
				test: /\js$/,
				use: {
					loader: 'babel-loader',
					options: {
							presets: [ 
								['minify'],
								'@babel/preset-env'
							],
						},
				},
				exclude: /node_modules/,
			},
			{
				// Compile SCSS files
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer'),
								require('cssnano')( {
                  preset: 'default',
                  discardComments: {
                      removeAll: true,
                  },
								}),
							],
                map: false,
                sourceMap: false
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false
						}
					}
				],
				exclude: /node_modules/,
			},
			{
				// Compile Fonts
				// test: /\.(woff2|woff|ttf|eot|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{ 
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						emitFile: true,
						useRelativePath: true
					}
				}],
				exclude: /node_modules/
			},
			{
				// Compile Images and Icons
				test: /\.(png|svg|jpg|gif)$/,
				use: [ { loader: 'file-loader' } ],
				exclude: /node_modules/,
			},
		]
	},
	plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css', //Extracted css filename
		}),
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
				port: '3030', // Change this port if it conflicts with your local dev
				server: { 
					baseDir: ['.'] 
				},
                watchOptions: {
                    ignored: [
                        './node_modules/**/.scss',
                        './node_modules/**/.js'
                    ],
                },
                files: 
                [
                    './src/**',
                    'index.html'
                ],
            },
            {
                reload: true
            },
        )
    ]
}
