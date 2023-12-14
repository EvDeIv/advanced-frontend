import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(
    isDev: BuildOptions['isDev'],
): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = { test: /\.svg$/, use: ['@svgr/webpack'] };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [{ loader: 'file-loader' }],
    };

    const cssLoader = buildCssLoader(isDev);

    return [svgLoader, fileLoader, babelLoader, tsLoader, cssLoader];
}
