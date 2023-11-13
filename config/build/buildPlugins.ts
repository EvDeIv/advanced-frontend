import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export function buildPlugins(path: string): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path,
		}),
	];
}
