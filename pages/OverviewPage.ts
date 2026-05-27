import {test , type Page , type Locator ,} from "@playwright/test";

export class OverviewPage{
    readonly page : Page;

    readonly finish : Locator;
    readonly cancel : Locator;
    readonly paymentCode : Locator;
    readonly ShipInfo : Locator;

    constructor(page : Page){
        this.page = page;
        this.finish = page.locator("#finish");
        this.cancel = page.locator("#cancel");
        this.paymentCode = page.locator("[data-test='payment-info-value']");
        this.ShipInfo = page.locator("[data-test='shipping-info-value']");
    }

    async clickFineshButton (){
        await test.step("Click Finish Button" , async()=>{
            await this.finish.click();
        });
    };

    async clickCancelButton (){
        await test.step("Click Cancel Button" , async()=>{
            await this.cancel.click();
        });
    };

}