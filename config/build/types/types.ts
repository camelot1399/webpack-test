export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analizer?: boolean;
  platform: BuildPlatform;
  isDev: boolean;
}

export type BuildPlatform = "mobile" | "desktop";
