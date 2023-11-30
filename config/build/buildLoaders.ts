import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import { BuildOptions } from './types/config';

export function buildLoaders(
	isDev: BuildOptions['isDev']
): webpack.RuleSetRule[] {
	const tsLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: require.resolve('ts-loader'),
				options: {
					getCustomTransformers: () => ({
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
					}),
					transpileOnly: isDev,
				},
			},
		],
		exclude: /node_modules/,
	};

	const svgLoader = { test: /\.svg$/, use: ['@svgr/webpack'] };

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: { presets: ['@babel/preset-env'] },
		},
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [{ loader: 'file-loader' }],
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};
	return [svgLoader, fileLoader, babelLoader, tsLoader, cssLoader];
}
