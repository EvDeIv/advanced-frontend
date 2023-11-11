import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};

export default config;
