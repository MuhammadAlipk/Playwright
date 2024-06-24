//@ts-check
import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { RegisterPage } from "../pages/RegisterPage";

test.beforeEach("Nevigate to the home page", async ({ page }) => {
  const basePage = new BasePage(page);
  basePage.goto();
  await expect(page).toHaveTitle("Your Store");
});

test("Nevigate to registraton page", async ({ page }) => {
  const registrationPage = new RegisterPage(page);
  registrationPage.gotoRegisterPage();
});

test("Register New user", async ({ page }) => {});
