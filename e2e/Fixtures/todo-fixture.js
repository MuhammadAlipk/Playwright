const base = require("@playwright/test");
const { TodoPage } = require("./todo-page");

exports.test = base.test.extend({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo("Item1");
    await todoPage.addToDo("Item2");

    await use(todoPage);
    await todoPage.removeAll();
  },
});
