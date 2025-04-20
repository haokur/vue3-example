import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  base: "/vue3-example",
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
