const path = require('path');

module.exports = {
	cache: true,
	target: 'web',
	entry: './src/index.tsx',
	performance: {
		hints: false,
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build/assets'),
		publicPath: '/assets/',
		crossOriginLoading: 'anonymous'
	},
	mode: process.env.BUILD_MODE,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(webp|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'images/[contenthash].[ext]'
				}
			},
			{
				test: /\.(woff|woff2)$/,
				use: {
					loader: 'url-loader'
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'@': path.join(__dirname, 'src')
		},
		symlinks: false
	},
	devServer: {
		contentBase: './public',
		compress: true,
		port: 9000,
		historyApiFallback: true
	}
}
