import {test , expect} from "../fixture/pageManager";
import { setAllureMetadata , setTestMetadata } from "../utils/allureMetadata";
import testData from "../testData/loginData";
import testProductData from "../testData/productData";

setAllureMetadata({
    epic: "Swag Labs",
    feature: "UI User Management",
    story: "Cart Page",
    owner: "Tal3at",
    link: process.env.BASE_URL!
});

test.describe("Processing Cart Page" , ()=>{

    test.beforeEach("Set Login for all tests", async({loginPage})=>{
        await loginPage.login(testData.validLogin.username , testData.validLogin.password);
    });

    test("Add All Products to Cart" , async({productPage , cartPage , page})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Add All Products to Cart and verify cart page URL",
            tmsLink:"TC_CRT_01",
            priority: 1,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickAddBoltTShirt();
        await productPage.clickAddFleeceJacket();
        await productPage.clickAddOnesie();
        await productPage.clickAddRedShirt();
        await cartPage.navigateToCartPage();
        
        await test.step(`Valodate Checkout Page URL ${process.env.BASE_URL!}${testProductData.CartEP}` , async()=>{
            await expect(page).toHaveURL(`${process.env.BASE_URL!}${testProductData.CartEP}`);
        });

    });

    test("Add All Products to Cart than remove them" , async({productPage , cartPage})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Add All Products to Cart then remove them from cart page",
            tmsLink:"TC_CRT_02",
            priority: 2,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickAddBoltTShirt();
        await productPage.clickAddFleeceJacket();
        await productPage.clickAddOnesie();
        await productPage.clickAddRedShirt();
        await cartPage.navigateToCartPage();
        await cartPage.removeBackpackFromCart();
        await cartPage.removeBoltTShirtFromCart();
        await cartPage.removeRedShirtFromCart();
        
        await test.step("validate number of product" , async()=>{
            await expect(productPage.productNumber).toHaveText("3");
        });

    });

    test("Add All Products to Cart than remove then add" , async({productPage , cartPage})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Adding All products to cart then remove them than add all",
            tmsLink:"TC_CRT_03",
            priority: 3,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickAddBoltTShirt();
        await productPage.clickAddFleeceJacket();
        await productPage.clickAddOnesie();
        await productPage.clickAddRedShirt();
        await cartPage.navigateToCartPage();
        await cartPage.removeBikeLightFromCart();
        await cartPage.removeBackpackFromCart();
        await cartPage.removeBoltTShirtFromCart();
        await cartPage.removeRedShirtFromCart();
        await cartPage.removeFleeceJacketFromCart();
        await cartPage.removeOnesieFromCart();
        await cartPage.backToProductsPage();
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickAddBoltTShirt();
        await productPage.clickAddFleeceJacket();
        await productPage.clickAddOnesie();
        await productPage.clickAddRedShirt();

        
        await test.step("validate number of product" , async()=>{
            await expect(productPage.productNumber).toHaveText("6");
        });

    });


    test("Add Backpack product and find price" , async({productPage , cartPage , page})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Adding Backpack products to cart then find price",
            tmsLink:"TC_CRT_04",
            priority: 4,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await cartPage.navigateToCartPage();
        
        await test.step(`validate product price ${testProductData.Price.backpack}` , async()=>{
            await expect(productPage.backpackPrice).toHaveText(testProductData.Price.backpack);
        });

    });

    test("Add BikeLight product and find price" , async({productPage , cartPage , page})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Adding BikeLight products to cart then find price",
            tmsLink:"TC_CRT_05",
            priority: 5,
            severity: "Normal"
        });
        await productPage.clickAddBikeLight();
        await cartPage.navigateToCartPage();
        
        await test.step(`validate product price ${testProductData.Price.bikeLight}` , async()=>{
            await expect(productPage.bikeLightPrice).toHaveText(testProductData.Price.bikeLight);
        });

    });


    test("Add BoltTShirt product and find price" , async({productPage , cartPage , page})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Adding BoltTShirt products to cart then find price",
            tmsLink:"TC_CRT_06",
            priority: 6,
            severity: "Normal"
        });
        await productPage.clickAddBoltTShirt();
        await cartPage.navigateToCartPage();
        
        await test.step(`validate product price ${testProductData.Price.boltTShirt}` , async()=>{
            await expect(productPage.boltTShirtPrice).toHaveText(testProductData.Price.boltTShirt);
        });

    });

    test("Add FleeceJacket product and find price" , async({productPage , cartPage , page})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Adding FleeceJacket products to cart then find price",
            tmsLink:"TC_CRT_07",
            priority: 7,
            severity: "Normal"
        });
        await productPage.clickAddFleeceJacket();
        await cartPage.navigateToCartPage();
        
        await test.step(`validate product price ${testProductData.Price.fleeceJacket}` , async()=>{
            await expect(productPage.fleeceJacketPrice).toHaveText(testProductData.Price.fleeceJacket);
        });

    });

    test("Add Onesie product and find price" , async({productPage , cartPage , page})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Adding Onesie products to cart then find price",
            tmsLink:"TC_CRT_08",
            priority: 8,
            severity: "Normal"
        });
        await productPage.clickAddOnesie();
        await cartPage.navigateToCartPage();
        
        await test.step(`validate product price ${testProductData.Price.onesie}` , async()=>{
            await expect(productPage.onesiePrice).toHaveText(testProductData.Price.onesie);
        });

    });

    test("Add RedShirt product and find price" , async({productPage , cartPage , page})=>{
        setTestMetadata({
            tag:"Cart",
            description:"Adding RedShirt products to cart then find price",
            tmsLink:"TC_CRT_09",
            priority: 9,
            severity: "Normal"
        });
        await productPage.clickAddRedShirt();
        await cartPage.navigateToCartPage();
        
        await test.step(`validate product price ${testProductData.Price.redShirt}` , async()=>{
            await expect(productPage.redShirtPrice).toHaveText(testProductData.Price.redShirt);
        });

    });

})