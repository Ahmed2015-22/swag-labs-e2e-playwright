import {test , type Page , type Locator ,} from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    //readonly url: string = "https://www.saucedemo.com/";

    constructor(page: Page){
        this.page = page;
        this.userName = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator("[data-test='error']");
    }

    async navigateToLoginPage(){
        await test.step('Navigate to SauceDemo Login Page', async () => {
            //await this.page.goto(this.url);
            await this.page.goto('/');
        });
    }
    async login(username: string , password: string){
        await test.step(`Attempt to login with username: "${username}" , password: "${password}"`, async () => {
            await this.userName.fill(username);
            await this.password.fill(password);
            await this.loginButton.click();
        });
    }
}