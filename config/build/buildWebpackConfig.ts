import { Configuration } from 'webpack';
import path from 'path';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { mode, paths, port, isDev } = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(paths.html, isDev),

		module: {
			rules: buildLoaders(isDev),
		},
		resolve: buildResolvers(paths.src),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: buildDevServer(port),
	};
}
