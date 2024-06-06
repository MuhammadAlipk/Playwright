//@ts-check
import { test, expect } from "@playwright/test";

test.beforeEach("Login to application", async ({ page }) => {
  //navigate to shopping cart website
  page.goto("http://www.automationpractice.pl/index.php");

  //Verify that you are landed on the home page of the application
  await expect(page.getByRole("link").getByText("Sign in")).toBeVisible();
  //click on sign in link
  await page.getByRole("link").getByText("Sign in").click();

  await page.locator("id=email").fill("jane445@blondmail.com");

  await page.locator("id=passwd").fill("admin123");

  await page.locator("id=SubmitLogin").click();

  await expect(page).toHaveTitle("My account - My Shop");
});

test("Place an order with login", async ({ page }) => {
  await expect(page).toHaveTitle("My account - My Shop");

  await page.locator("xpath=//*[@id='block_top_menu']/ul/li[2]/a").click();
  // await page
  //   .locator("xpath=//*[@id='block_top_menu']/ul/li[2]/ul/li[1]/a")
  //   .click();

  await page.locator("xpath=//a[text()='Orange']").click();
});
