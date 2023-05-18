import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    server: {
      proxy: {
        "/api": {
          target: env.VITE_SERVER_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      react(),
      // ViteAliases(),
      vitePluginFaviconsInject("./src/logo.svg"),
    ],
    define: { "process.env": {} },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/global.scss";`,
        },
      },
    },
  });
};
