import { test, expect } from "@playwright/test";

test("should load the character page detail", async ({ page }) => {
  await page.goto("http://localhost:3000/characters/1011334");

  await page.waitForSelector("div[class*='character-card']", {
    state: "visible",
  });

  const characterNameContainerDiv = await page.locator(
    "div[class*='character-card__footer-name-container']",
  );
  const characterName = await characterNameContainerDiv
    .locator("div[class*='character-card__footer-name']")
    .textContent();

  expect(characterName).toContain("3-D");
});
