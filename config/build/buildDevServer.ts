import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions) {
  return {
    // static: {
    //   directory: path.join(__dirname, "public"),
    // },
    port: options.port,
    open: true,
    historyApiFallback: true, // позволяет ходить по раным урлам
  };
}
