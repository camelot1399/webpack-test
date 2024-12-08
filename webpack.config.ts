import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from "./config/build/types/types";
import path from "path";

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analizer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables): webpack.Configuration => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analizer: env.analizer,
    platform: env.platform ?? "desktop",
    isDev: env.mode === "development",
  });

  return config;
};
