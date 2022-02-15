import * as webpack from 'webpack'
import 'webpack-dev-server'
import commonConfig from './src/config/webpack.commonConfig'
import { merge } from 'webpack-merge'

const productionConfig: webpack.Configuration = {
	mode: 'production',
	plugins: [
		new webpack.BannerPlugin(
			() => `omame's website\n(C) ${new Date().getFullYear()} | omame.`
		),
	],
	devtool: 'source-map',
}

const developmentConfig: webpack.Configuration = {
	mode: 'development',
}

export default (env: object, args: { mode: string }) => {
	switch (args.mode) {
		case 'development':
			return merge(commonConfig, developmentConfig)
		case 'production':
			return merge(commonConfig, productionConfig)
		default:
			throw Error('Invalid mode provided.')
	}
}
