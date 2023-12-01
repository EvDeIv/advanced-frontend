export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions extends Pick<BuildEnv, 'mode' | 'port'> {
  paths: BuildPaths;
  isDev: boolean;
}
