import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [VueDevTools(), vue()],
});
