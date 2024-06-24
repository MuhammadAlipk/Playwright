//@ts-check
import { test } from "./todo-fixture";
import { expect } from "@playwright/test";

test("To do list", async ({ todoPage, page }) => {
  await todoPage.addToDo("something nice");
  await expect(page.getByTestId("todo-title")).toContainText([
    "something nice",
  ]);
});
