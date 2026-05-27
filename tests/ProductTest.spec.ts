import {test , expect} from "../fixture/pageManager";
import { setAllureMetadata , setTestMetadata } from "../utils/allureMetadata";
import testData from "../testData/loginData";
import testProductData from "../testData/productData";
// import productData from "../testData/productData";
// import { ProductsPage } from "../pages/ProductsPage";

setAllureMetadata({
    epic: "Swag Labs",
    feature: "UI User Management",
    story: "Products Landing Page",
    owner: "Tal3at",
    link: process.env.BASE_URL!
});

test.describe("Processing Products" , ()=>{

    test.beforeEach("Set Login for all tests", async({loginPage})=>{
        await loginPage.login(testData.validLogin.username , testData.validLogin.password);
    });

    test("Change Sorting Highest price to Lowest " , async({productPage , page})=>{
        setTestMetadata({
            tag: "Product",
            description: "Change Sorting By Descending Price and Checking the First Product Price",
            tmsLink: "TC_PROD_01",
            priority: 1,
            severity: "Normal"
        });
        await productPage.sortProductsBy(testProductData.sorting.DescPrice);
        await test.step(`Verify product price is ${testProductData.Price.fleeceJacket}`, async()=>{
            await expect(productPage.fleeceJacketPrice).toHaveText(testProductData.Price.fleeceJacket);
        });
    });

    test("Change Sorting Lowest to Highest" , async({productPage})=>{
        setTestMetadata({
            tag: "Product",
            description: "Change Sorting By Descending Price and Checking the First Product Price",
            tmsLink: "TC_PROD_02",
            priority: 2,
            severity: "Normal"
        });
        await productPage.sortProductsBy(testProductData.sorting.ASCPrice);
        await test.step(`Verify product price is ${testProductData.Price.onesie}`, async()=>{
            await expect(productPage.onesiePrice).toHaveText(testProductData.Price.onesie);
        });
    });

    test("Add To Cart Then Logout" , async({productPage , page})=>{
        setTestMetadata({
            tag: "Product",
            description: "Adding products to cart then Logout",
            tmsLink: "TC_PROD_03",
            priority: 3,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickMenuButton();
        await productPage.clickLogoutLink();

        await test.step(`Verify Logout Page Link ${process.env.BASE_URL!}`, async({})=>{
            await expect(page).toHaveURL(process.env.BASE_URL!);
        });
    });

    test("Find Copy Rights Year" , async({productPage})=>{
        setTestMetadata({
            tag: "Product",
            description: "Adding products to cart then Logout",
            tmsLink: "TC_PROD_04",
            priority: 4,
            severity: "Normal"
        });
        

        await test.step(`Verify Copy Right message ${testProductData.copyRightText}`, async({})=>{
            await expect(productPage.copyRight).toHaveText(testProductData.copyRightText);
        });
    });

    test("Navigate to about page" , async({productPage , page})=>{
        setTestMetadata({
            tag: "Product",
            description: "Navigate to about page",
            tmsLink: "TC_PROD_05",
            priority: 5,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickMenuButton();
        await productPage.clickAboutLink();

        await test.step(`Verify About Page Link ${testProductData.aboutLink}`, async({})=>{
            await expect(page).toHaveURL(testProductData.aboutLink);
        });

    });    

    test("Navigate to Twitter Page", async({productPage , page})=>{
        setTestMetadata({
            tag:"Product",
            description:"Vavigate to Twitter Page and Validate URL",
            tmsLink:"TC_PRD_06",
            priority: 6,
            severity: "Normal"
        });

        const newPage = await productPage.navigateToTwitter();
        await test.step(`Validate Twitter URL is : ${testProductData.socialMediaLinks.twitter}` , async()=>{
            await expect(newPage).toHaveURL(testProductData.socialMediaLinks.twitter);
        });
    });

    test("Navigate to Facebook Page", async({productPage , page})=>{
        setTestMetadata({
            tag:"Product",
            description:"Vavigate to Facebook Page and Validate URL",
            tmsLink:"TC_PRD_07",
            priority: 7,
            severity: "Normal"
        });

        const newPage = await productPage.navigateToFacebook();
        await test.step(`Validate Facebook URL is : ${testProductData.socialMediaLinks.facebook}` , async()=>{
            await expect(newPage).toHaveURL(testProductData.socialMediaLinks.facebook);
        });
    });

    test("Navigate to LinkedIN Page", async({productPage , page})=>{
        setTestMetadata({
            tag:"Product",
            description:"Vavigate to LinkedIN Page and Validate URL",
            tmsLink:"TC_PRD_08",
            priority: 8,
            severity: "Normal"
        });

        const newPage = await productPage.navigateToLinkedIn();
        await test.step(`Validate LinkedIN URL is : ${testProductData.socialMediaLinks.linkedIn}` , async()=>{
            await expect(newPage).toHaveURL(testProductData.socialMediaLinks.linkedIn);
        });
    });

    test("Add All Products to Cart" , async({productPage})=>{
        setTestMetadata({
            tag:"Product",
            description:"Add All Products to Cart and verify thier number",
            tmsLink:"TC_PRD_09",
            priority: 9,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickAddBoltTShirt();
        await productPage.clickAddFleeceJacket();
        await productPage.clickAddOnesie();
        await productPage.clickAddRedShirt();
        
        await test.step("Vrify number of Products at Cart" , async()=>{
            await expect(productPage.productNumber).toHaveText("6");
        });

    });

    test("Add All Products to Cart then remove some" , async({productPage})=>{
        setTestMetadata({
            tag:"Product",
            description:"Add All Products to Cart then remove some and verify thier number in cart",
            tmsLink:"TC_PRD_010",
            priority: 10,
            severity: "Normal"
        });
        await productPage.clickAddBackpack();
        await productPage.clickAddBikeLight();
        await productPage.clickAddBoltTShirt();
        await productPage.clickAddFleeceJacket();
        await productPage.clickAddOnesie();
        await productPage.clickAddRedShirt();
        await productPage.clickRemoveBackpack();
        await productPage.clickRemoveBikeLight();
        await productPage.clickRemoveFleeceJacket();
        
        await test.step("Vrify number of Products at Cart" , async()=>{
            await expect(productPage.productNumber).toHaveText("3");
        });

    });

    test("Add top 3 products to cart" , async({productPage})=>{
        setTestMetadata({
            tag:"Product",
            description:"Add top 3 products to cart with price(High to Low) sorting",
            tmsLink:"TC_PRD_011",
            priority: 11,
            severity: "Normal"
        });

        await productPage.clickAddFleeceJacket();
        await productPage.clickAddBackpack();
        await productPage.clickAddBoltTShirt();
        
        await test.step("Vrify number of Products at Cart" , async()=>{
            await expect(productPage.productNumber).toHaveText("3");
        });

    });

    test("Add lower 3 products to cart" , async({productPage})=>{
        setTestMetadata({
            tag:"Product",
            description:"Add lower 3 products to cart with price(High to Low) sorting",
            tmsLink:"TC_PRD_012",
            priority: 12,
            severity: "Normal"
        });

        await productPage.clickAddRedShirt();
        await productPage.clickAddBikeLight();
        await productPage.clickAddOnesie();
        
        await test.step("Vrify number of Products at Cart" , async()=>{
            await expect(productPage.productNumber).toHaveText("3");
        });

    });

    test("Add Products to cart then Logout" , async({productPage , page})=>{
        setTestMetadata({
            tag:"Product",
            description:"Add Products to cart then Logout the verify Login Page URL",
            tmsLink:"TC_PRD_013",
            priority: 13,
            severity: "Normal"
        });

        await productPage.clickAddFleeceJacket();
        await productPage.clickAddBackpack();
        await productPage.clickAddBoltTShirt();
        await productPage.clickMenuButton();
        await productPage.clickLogoutLink();

        await test.step(`verify Login Page URL ${process.env.BASE_URL!}` , async()=>{
            await expect(page).toHaveURL(process.env.BASE_URL!);
        });
    });

    test("Add Products and Open Cart Page" , async({productPage , page})=>{
        setTestMetadata({
            tag:"Product",
            description:"Add Products and Navigate to Cart Page and verify URL",
            tmsLink:"TC_PRD_014",
            priority: 14,
            severity: "Critical"
        });

        await productPage.clickAddBackpack();
        await productPage.clickAddOnesie();
        await productPage.clickShoppingCartBadge();

        await test.step(`Verify CART Page URL is ${process.env.BASE_URL!}${testProductData.CartEP}` , async()=>{
            await expect(page).toHaveURL(`${process.env.BASE_URL!}${testProductData.CartEP}`);
        })

    });
    



});