//@ts-check

import { test, expect } from "@playwright/test";
import { title } from "process";

test.beforeEach("Intrect with web elements", async ({ page, browser, context }) => {
  await page.goto("https://demoqa.com/");
  await expect(page.locator("h5", { hasText: "Elements" })).toBeVisible();
  await page.getByRole("heading", { name: "elements" }).click();
});

test.describe("Text Box and check box group", 
  {tag: '@elements'},  ()=> {

test("Intrect with the textboxes", async ({ page }) => {
  //This code deals with the different text boxes
  await expect(page.locator("span", { hasText: "Text Box" })).toBeEnabled();
  await page.locator("span", { hasText: "Text Box" }).click();
  await page.getByRole("textbox").first().fill("Muhammad Ali");
  await page.getByPlaceholder("name@example.com").fill("name@example.com");
  await page.getByPlaceholder("Current Address").fill("Current Address");
  await page.locator("id=permanentAddress").fill("Awain Awain text .cocm");
  await page.getByRole("button", { name: "Submit" }).click();

  //This code will assert the result of form submission
  await expect(page.locator("//p[@id='name']")).toContainText("Muhammad Ali");
  await expect(page.locator("//p[@id='email']")).toContainText("name@example.com");
  await expect(page.locator("//p[@id='currentAddress']")).toContainText("Current Address");
  await expect(page.locator("//p[@id='permanentAddress']")).toContainText("Awain Awain text .cocm");
});

test("Intraction to check-box", async({page}) => {

  await expect(page.locator("span", {hasText:"Check Box"})).toBeEnabled();
  await page.locator("span", {hasText : "Check Box"}).click();

  await expect(page.getByRole("button", {name : "Expand All"})).toBeEnabled();
  await page.getByRole("button", {name : "Expand All"}).click();  

  await expect(page.getByRole("button", {name : "Collapse all"})).toBeEnabled();
  await page.getByRole("button", {name : "Collapse all"}).click();

  await page.getByRole("button", {name : "Expand All"}).click();
  


});


});


