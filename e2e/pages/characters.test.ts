import { test, expect } from "@playwright/test";

test("should load the main page and fetch characters", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.waitForSelector("div[class*='characters-container']", {
    state: "visible",
    timeout: 10000,
  });

  const charactersContainerDiv = await page.locator("div[class*='characters-container']");
  const charactersCount = await charactersContainerDiv.locator("> *").count();

  expect(charactersCount).toBe(50);
});
