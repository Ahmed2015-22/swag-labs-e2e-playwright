import {test , type Page , type Locator ,} from "@playwright/test";
import { CartPage } from "../pages/CartPage";

export class CheckoutPage{
    readonly page : Page;
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly zipCode : Locator;
    readonly cancel : Locator;
    readonly continue : Locator;
    readonly error : Locator;

    constructor(page : Page){
        this.page = page;

        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.zipCode = page.locator("#postal-code");
        this.cancel = page.locator("#cancel");
        this.continue = page.locator("#continue");
        this.error = page.locator("[data-test = 'error']");
    }

    async fillFirstName(fName: string) {
    await test.step(`Fill First Name: ${fName}`, async () => {
        await this.firstName.fill(fName);
    });
}

async fillLastName(lName: string) {
    await test.step(`Fill Last Name: ${lName}`, async () => {
        await this.lastName.fill(lName);
    });
}

async fillZipCode(zCode: string) {
    await test.step(`Fill Zip Code: ${zCode}`, async () => {
        await this.zipCode.fill(zCode);
    });
}

    async clickCancelOrder(){
        await test.step("Cancel Order and back to Cart Page", async()=>{
            await this.cancel.click();
        });
    };

    async clickContinueOrder(){
        await test.step("Continue Order and goto to Overview Page", async()=>{
            await this.continue.click();
        });
    };
}