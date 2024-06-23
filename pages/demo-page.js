export class DemoPage{

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page)
    {
        this.page = page;
        this.baseUrl = 'https://demoqa.com/';
        this.elementslink = page.getByRole("heading", { name: "elements" });
        this.textboxlink = page.locator("span", { hasText: "Text Box" });
    }

    async goto()
    {
         await page.goto(this.baseUrl);
         await this.elementslink.click();
         await this.textboxlink.click();
    }

}
