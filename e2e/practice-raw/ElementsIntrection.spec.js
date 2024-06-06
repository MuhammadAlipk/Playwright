//@ts-check

import { test, expect } from "@playwright/test";

test.beforeEach("Intrect with web elements", async ({ page }) => {
  await page.goto("https://demoqa.com/");

  await expect(page.locator("h5", { hasText: "Elements" })).toBeVisible();
  await page.getByRole("heading", { name: "elements" }).click();
});

test("Intrect with the textboxes", async ({ page }) => {
  //This code deals with the different text boxes
  await expect(page.locator("span", { hasText: "Text Box" })).toBeEnabled();
  await page.locator("span", { hasText: "Text Box" }).click();
  await page.getByRole("textbox").first().fill("Muhammad Ali");
  await page.getByPlaceholder("name@example.com").fill("name@example.com");
  await page.getByPlaceholder("Current Address").fill("Current Address");
  await page.locator("id=permanentAddress").fill("Awain Awain text .cocm");
  await page.getByRole("button", { name: "Submit" }).click();

  //This code will get values from different lables
  await expect(page.locator("p")).toContainText("Muhammad Ali");
});
