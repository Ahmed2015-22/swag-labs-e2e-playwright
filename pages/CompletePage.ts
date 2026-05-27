import {test , type Page , type Locator ,} from "@playwright/test";

export class CompletePage{
    readonly page : Page;
    readonly completeMessage : Locator;
    readonly backHome : Locator;

    constructor(page : Page)
    {
        this.page = page;
        this.completeMessage = page.locator("[data-test='complete-header']");
        this.backHome = page.locator("#back-to-products");
    }

    async clickOnBackToHome(){
        await test.step("Back to home page after finishing order" , async()=>{
            await this.backHome.click();
        })
    }
}