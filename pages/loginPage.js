//@ts-check
import { expect } from "@playwright/test";
import { basePage } from "./basepage";

export class loginPage extends basePage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    super(page);
  }

  async Login(email, password) {
    this.txtUserName.fill(email);
    this.txtPassword.fill(password);
    this.btnSignin.click();
  }
}
