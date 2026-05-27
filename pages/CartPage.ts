import {test , type Page , type Locator ,} from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";

export class CartPage{
    readonly page : Page;
    readonly productPage: ProductsPage;

    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page : Page){
        this.page = page;
        this.productPage = new ProductsPage(page);

        this.continueShoppingButton = page.locator("#continue-shopping");
        this.checkoutButton = page.locator("#checkout");
    }

    async removeBackpackFromCart(){
        await test.step("Remove Backpack from cart" , async()=>{
            await this.productPage.clickRemoveBackpack();
        });
    };

    async removeBikeLightFromCart(){
        await test.step("Remove Backpack from cart" , async()=>{
            await this.productPage.clickRemoveBikeLight();
        });
    };

    async removeBoltTShirtFromCart() {
        await test.step("Remove BoltTShirt from cart", async () => {
            await this.productPage.clickRemoveBoltTShirt();
        });
    }

    async removeFleeceJacketFromCart() {
        await test.step("Remove FleeceJacket from cart", async () => {
            await this.productPage.clickRemoveFleeceJacket();
        });
    };

    async removeOnesieFromCart() {
        await test.step("Remove Onesie from cart", async () => {
            await this.productPage.clickRemoveOnesie();
        });
    };

    async removeRedShirtFromCart() {
        await test.step("Remove RedShirt from cart", async () => {
            await this.productPage.clickRemoveRedShirt();
        });
    };

    async navigateToCartPage(){
        await test.step("Go to Cart Page" ,async()=>{
            await this.productPage.clickShoppingCartBadge();
        });
    }

    async backToProductsPage() {
        await test.step("Back to Products Page", async () => {
            await this.continueShoppingButton.click();
        });
    };

    async navigateToCheckoutPage() {
        await test.step("Navigate to Checkout Page", async () => {
            await this.checkoutButton.click();
        });
    };




}