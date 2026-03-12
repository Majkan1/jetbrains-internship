import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), commonjs()],
  define: {
    global: "globalThis",
  },
  ssr: {
    noExternal: ["@jetbrains/kotlin-web-site-ui", /@rescui\/.+/],
  },
  optimizeDeps: {
    include: [
      "@jetbrains/kotlin-web-site-ui/out/components/footer/index.js",
      "@jetbrains/kotlin-web-site-ui/out/components/header/index.js"
    ]
  }
});
