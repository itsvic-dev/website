import * as path from 'path'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const commonConfig: webpack.Configuration = {
	entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, '../..', 'dist'),
		filename: 'js/[id].bundle.js',
		assetModuleFilename: 'assets/[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(webp|svg|woff2)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../..', 'src'),
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/jsx-runtime',
		},
		extensions: ['.js', '.ts', '.tsx'],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			publicPath: '/',
		}),
	],
}

export default commonConfig
