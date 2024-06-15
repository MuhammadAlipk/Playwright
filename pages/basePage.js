const { expect } = require("@playwright/test");

exports.basePage = class basePage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.regiterLink = page
      .getByRole("link", { name: "Need an account?" })
      .click();

    this.txtUserName = page.getByPlaceholder("Email");
    this.txtPassword = page.getByPlaceholder("Password123");
    this.btnSignin = page.getByRole("button", { name: "Sign in" });
  }
};
