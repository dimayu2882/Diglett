import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, './src/assets/img/'),
    },
  },
  build: {
    sourcemap: true
  }
});
