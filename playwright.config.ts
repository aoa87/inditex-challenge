// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  webServer: {
    command: "npm run dev", // Command to run Next.js server for tests
    port: 3000,
  },
  use: {
    baseURL: "http://localhost:3000", // URL for your app
    headless: true, // Run tests headlessly by default
  },
});
