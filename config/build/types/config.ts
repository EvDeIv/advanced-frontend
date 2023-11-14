export type BuildMode = 'production' | 'development';

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
}

export interface BuildOptions extends Pick<BuildEnv, 'mode' | 'port'> {
	paths: BuildPaths;
	isDev: boolean;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}
