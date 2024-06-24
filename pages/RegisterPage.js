import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
  /**
   * @param {import('@playwright').page} page
   */

  constructor(page) {
    super(page);
    this.page = page;
  }

  async gotoRegisterPage() {
    this.lblMyAccount.click();
    this.lblRegisterNewAccount.click();
  }
}
