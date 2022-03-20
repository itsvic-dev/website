/*  omame's website
 *  Copyright (C) 2022 omame <me@omame.xyz>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
		crossOriginLoading: 'anonymous',
		assetModuleFilename: 'images/[contenthash].[ext]',
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
				test: /\.(webp|svg|woff|woff2)$/,
				type: 'asset/resource',
			},
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'@': path.join(__dirname, 'src'),
			'react': 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat',
			'react/jsx-runtime': 'preact/jsx-runtime'
		},
		symlinks: false
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		},
		compress: true,
		port: 9000,
		historyApiFallback: true
	}
}
