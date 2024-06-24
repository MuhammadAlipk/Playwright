export class TodoPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.inputBox = this.page.locator("input.new-todo");
    this.todoItems = this.page.getByTestId("todo-item");
  }

  async goto() {
    await this.page.goto("https://demo.playwright.dev/todomvc/");
  }

  /**
   * @param {string} text
   */
  async addToDo(text) {
    await this.inputBox.fill(text);
    await this.inputBox.press("Enter");
  }

  /**
   * @param {string} text
   */
  async remove(text) {
    const todo = this.todoItems.filter({ hasText: text });
    await todo.hover();
    await todo.getByLabel("Delete").click();
  }

  async removeAll() {
    while ((await this.todoItems.count()) > 0) {
      await this.todoItems.first().hover();
      await this.todoItems.getByLabel("Delete").first().click();
    }
  }
}
