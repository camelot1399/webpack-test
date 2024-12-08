import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildBabelLoaders } from "./babel/buildBabelLoaders";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const { isDev } = options;

  const cssLoadersWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[name]__[local]" : "[hash:base64:8]", // отвечает за наименование названия класса
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoadersWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i, // важно удалить svg если используем svgr
    type: "asset/resource",
  };

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: false,
        },
      },
    ],
  };

  const babelLoader = buildBabelLoaders(options);

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          // для того чтобы работало применение стилей к svg
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  return [
    assetLoader,
    scssLoader,
    // tsLoader,
    babelLoader,
    svgrLoader,
  ];
}
