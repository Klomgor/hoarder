/// <reference types="vitest" />

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      "@/*": "./*",
    },
    globalSetup: ["./setup/startContainers.ts", "./setup/seed.ts"],
    teardownTimeout: 30000,
    include: ["tests/**/*.test.ts"],
  },
});