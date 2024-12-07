import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins({
  mode,
  paths,
  analizer,
  platform,
}: BuildOptions): Configuration["plugins"] {
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __MODE__: JSON.stringify(mode),
    }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );

    analizer && plugins.push(new BundleAnalyzerPlugin());

    plugins.push(new ForkTsCheckerWebpackPlugin());

    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(paths.public, "locales"),
            to: path.resolve(paths.output, "locales"),
          },
        ],
      })
    );
  }

  return plugins.filter(Boolean);
}
