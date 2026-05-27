import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  oxc: false,
  esbuild: {
    jsx: "automatic",
    jsxDev: true,
  } as unknown as import("vite").ESBuildOptions,
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["utils/**/*.ts", "hooks/**/*.ts"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
