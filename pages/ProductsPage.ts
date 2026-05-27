import {test , type Page , type Locator ,} from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;
    readonly pageTitle: Locator;
    readonly aboutPage: Locator;
    readonly shoppingCartBadge: Locator;
    readonly productNumber: Locator;
    readonly copyRight: Locator;

    // Add Products
    readonly addBackpack: Locator;
    readonly addBikeLight: Locator;
    readonly addBoltTShirt: Locator;
    readonly addFleeceJacket: Locator;
    readonly addOnesie: Locator;
    readonly addRedShirt: Locator;

    // Remove Products
    readonly removeBackpack: Locator;
    readonly removeBikeLight: Locator;
    readonly removeBoltTShirt: Locator;
    readonly removeFleeceJacket: Locator;
    readonly removeOnesie: Locator;
    readonly removeRedShirt: Locator;

    // Product Prices
    readonly backpackPrice: Locator;
    readonly bikeLightPrice: Locator;
    readonly boltTShirtPrice: Locator;
    readonly fleeceJacketPrice: Locator;
    readonly onesiePrice: Locator;
    readonly redShirtPrice: Locator;

    // Filters & Social Media
    readonly sorting: Locator;
    readonly linkedin: Locator;
    readonly twitter: Locator;
    readonly facebook: Locator;



    constructor(page: Page){
        this.page = page;
        this.menuButton = page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("#logout_sidebar_link");
        this.pageTitle = page.locator(".title");
        this.aboutPage = page.locator("#about_sidebar_link");
        this.shoppingCartBadge = page.locator("#shopping_cart_container");
        this.productNumber = page.locator(".shopping_cart_badge");
        this.copyRight = page.locator("[data-test='footer-copy']");

        this.addBackpack = page.locator("#add-to-cart-sauce-labs-backpack");
        this.addBikeLight = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.addBoltTShirt = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.addFleeceJacket = page.locator("#add-to-cart-sauce-labs-fleece-jacket");
        this.addOnesie = page.locator("#add-to-cart-sauce-labs-onesie");
        this.addRedShirt = page.locator("#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");

        this.removeBackpack = page.locator("#remove-sauce-labs-backpack");
        this.removeBikeLight = page.locator("#remove-sauce-labs-bike-light");
        this.removeBoltTShirt = page.locator("#remove-sauce-labs-bolt-t-shirt");
        this.removeFleeceJacket = page.locator("#remove-sauce-labs-fleece-jacket");
        this.removeOnesie = page.locator("#remove-sauce-labs-onesie");
        this.removeRedShirt = page.locator("#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");

        this.backpackPrice = page.locator("//div[@data-test='inventory-item-price' and text()='29.99']");
        this.bikeLightPrice = page.locator("//div[@data-test='inventory-item-price' and text()='9.99']");
        this.boltTShirtPrice = page.locator("//div[@data-test='inventory-item-price' and text()='15.99']");
        this.fleeceJacketPrice = page.locator("//div[@data-test='inventory-item-price' and text()='49.99']");
        this.onesiePrice = page.locator("//div[@data-test='inventory-item-price' and text()='7.99']");
        this.redShirtPrice = page.locator("//div[@data-test='inventory-item-price' and text()='15.99']")

        this.sorting = page.locator("[data-test='product-sort-container']");

        this.linkedin = page.locator(".social_linkedin");
        this.twitter = page.locator(".social_twitter");
        this.facebook = page.locator(".social_facebook");        

    }

    async clickMenuButton() {
        await test.step("Click menu button", async () => {
            await this.menuButton.click();
        });
    }

    async clickLogoutLink()
    {
        await test.step("Click logout link" , async()=>{
            await this.logoutLink.click();
        })
    }

    async clickAboutLink() {
        await test.step("Navigate to About page", async () => {
            await this.aboutPage.click();
        });
    }

    // Add Products Actions
    async clickAddBackpack() {
        await test.step("Add product one to cart", async () => {
            await this.addBackpack.click();
        });
    }

    async clickAddBikeLight() {
        await test.step("Add product two to cart", async () => {
            await this.addBikeLight.click();
        });
    }

    async clickAddBoltTShirt() {
        await test.step("Add product three to cart", async () => {
            await this.addBoltTShirt.click();
        });
    }

    async clickAddFleeceJacket() {
        await test.step("Add product four to cart", async () => {
            await this.addFleeceJacket.click();
        });
    }

    async clickAddOnesie() {
        await test.step("Add product five to cart", async () => {
            await this.addOnesie.click();
        });
    }

    async clickAddRedShirt() {
        await test.step("Add product six to cart", async () => {
            await this.addRedShirt.click();
        });
    }

    // Remove Products Actions
    async clickRemoveBackpack() {
        await test.step("Remove product one from cart", async () => {
            await this.removeBackpack.click();
        });
    }

    async clickRemoveBikeLight() {
        await test.step("Remove product Two from cart", async () => {
            await this.removeBikeLight.click();
        });
    }

    async clickRemoveBoltTShirt() {
        await test.step("Remove product Three from cart", async () => {
            await this.removeBoltTShirt.click();
        });
    }

    async clickRemoveFleeceJacket() {
        await test.step("Remove product Four from cart", async () => {
            await this.removeFleeceJacket.click();
        });
    }

    async clickRemoveOnesie() {
        await test.step("Remove product Five from cart", async () => {
            await this.removeOnesie.click();
        });
    }

    async clickRemoveRedShirt() {
        await test.step("Remove product Six from cart", async () => {
            await this.removeRedShirt.click();
        });
    }

    async sortProductsBy(optionValue: string) {
        await test.step(`Sort products by ${optionValue}`, async () => {
            await this.sorting.selectOption(optionValue);
        });
    }

    // التعامل مع فتح تبويبات (Tabs) جديدة في Playwright
    async navigateToTwitter() {
        return await test.step("Navigate to Twitter", async () => {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent("page"),
                this.twitter.click()
            ]);
            return newPage;
        });
    }

    async navigateToLinkedIn() {
        return await test.step("Navigate to LinkedIn", async () => {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent("page"),
                this.linkedin.click()
            ]);
            return newPage;
        });
    }

    async navigateToFacebook() {
        return await test.step("Navigate to Facebook", async () => {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent("page"),
                this.facebook.click()
            ]);
            return newPage;
        });
    }

    async clickShoppingCartBadge() {
        await test.step("Click shopping cart badge", async () => {
            await this.shoppingCartBadge.click();
        });
    }
}