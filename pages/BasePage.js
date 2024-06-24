export class BasePage {
  /**
   * @param {import ('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.lblMyAccount = page.getByRole("link", { name: "My Account" }).first();
    this.lblRegisterNewAccount = page
      .getByRole("link", { name: "Register" })
      .first();

    this.lblRegisterNewAccount = page
      .getByRole("link", { name: "Login" })
      .first();
  }

  async goto() {
    await this.page.goto("https://tutorialsninja.com/demo/");
  }
}
