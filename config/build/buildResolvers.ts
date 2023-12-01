import { ResolveOptions } from 'webpack';
import { BuildPaths } from './types/config';

export function buildResolvers(srcPath: BuildPaths['src']): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [srcPath, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
