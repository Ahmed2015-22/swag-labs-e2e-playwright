import { test as base } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { OverviewPage } from '../pages/OverviewPage';
import { CompletePage } from "../pages/CompletePage";

type PageFixtures = {
    loginPage: LoginPage;
    productPage : ProductsPage;
    cartPage : CartPage;
    checkoutPage : CheckoutPage;
    overviewPage : OverviewPage;
    completePage : CompletePage;
    // Add more Pages-scoped fixtures here if needed
};

export const test  = base.extend<PageFixtures>({
    loginPage: async ({page} , use) =>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await use(loginPage);
    }, 
    
    productPage:async({page},use)=>{
        const productPage = new ProductsPage(page);
        await use(productPage);
    },

    cartPage:async({page},use)=>{
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutPage:async({page},use)=>{
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },

    overviewPage:async({page},use)=>{
        const overviewPage = new OverviewPage(page);
        await use(overviewPage);
    },
    completePage:async({page},use)=>{
        const completePage = new CompletePage(page);
        await use(completePage);
    }
    
});
export { expect } from '@playwright/test';