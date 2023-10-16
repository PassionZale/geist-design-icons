import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ include: ["./src/components", './src/index.ts'] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@whouu/geist-design-icons",
      fileName: (format) => `geist-design-icons.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
