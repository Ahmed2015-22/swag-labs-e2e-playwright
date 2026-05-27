import {test , expect} from "../fixture/pageManager";
import { setAllureMetadata , setTestMetadata } from "../utils/allureMetadata";
import testData from "../testData/loginData";
import checkoutData from "../testData/checkoutData";
import OverviewData from "../testData/OverviewData";

setAllureMetadata({
    epic: "Swag Labs",
    feature: "UI User Management",
    story: "Complete Page",
    owner: "Tal3at",
    link: process.env.BASE_URL!
});

test.describe("Complete Page Processing" , ()=>{
    test.beforeEach("Set Login for all tests and Preparation products and stay a complete page", async({loginPage , productPage , cartPage , checkoutPage , overviewPage})=>{
            await loginPage.login(testData.validLogin.username , testData.validLogin.password);
            await productPage.clickAddBackpack();
            await productPage.clickAddBoltTShirt();
            await productPage.clickAddOnesie();
            await productPage.clickAddFleeceJacket();
            await productPage.clickAddRedShirt();
            await productPage.clickAddBikeLight();
            await productPage.clickShoppingCartBadge();
            await cartPage.navigateToCheckoutPage();
            await checkoutPage.fillFirstName(checkoutData.validData.FirstName);
            await checkoutPage.fillLastName(checkoutData.validData.SecondName);
            await checkoutPage.fillZipCode(checkoutData.validData.ZIPCode);
            await checkoutPage.clickContinueOrder();
            await overviewPage.clickFineshButton();
    });
    
    test("Click Back to Home" , async({completePage , page})=>{

        setTestMetadata({
            tag: "Complete",
            description: "Back to home and validate product page URL",
            tmsLink: "TC_CMP_01",
            priority: 1,
            severity: "Critical"
        });
        await completePage.clickOnBackToHome();
        await test.step(`Validate Product page URL is${process.env.BASE_URL!}${testData.ProductEP}` , async()=>{
            await expect(page).toHaveURL(`${process.env.BASE_URL!}${testData.ProductEP}`);
        });
    });

    test("Full End to End Scenario" , async({completePage})=>{

        setTestMetadata({
            tag: "Complete",
            description: "E2E Scenarion For add Complete Order and validate Complete Message",
            tmsLink: "TC_CMP_02",
            priority: 2,
            severity: "Critical"
        });

        await test.step(`Validate Complete Message is is${OverviewData.successMessage}` , async()=>{
            await expect(completePage.completeMessage).toHaveText(`${OverviewData.successMessage}`);
        });
    });

    test("Complete Order and logout" , async({completePage , productPage , page})=>{

        setTestMetadata({
            tag: "Complete",
            description: "Complete Order and logout and validate login URL",
            tmsLink: "TC_CMP_03",
            priority: 3,
            severity: "Critical"
        });

        await completePage.clickOnBackToHome();
        await productPage.clickMenuButton();
        await productPage.clickLogoutLink();

        await test.step(`Validate Login page URL is${process.env.BASE_URL!}` , async()=>{
            await expect(page).toHaveURL(`${process.env.BASE_URL!}`);
        });
    });

    test("Finish Order and Reorder again" , async({completePage , productPage , cartPage ,checkoutPage , overviewPage })=>{

        setTestMetadata({
            tag: "Complete",
            description: "Complete Order and Reorder again and validate Complete Message",
            tmsLink: "TC_CMP_04",
            priority: 4,
            severity: "Critical"
        });

        await completePage.clickOnBackToHome();
        await productPage.clickAddRedShirt();
        await productPage.clickAddBikeLight();
        await productPage.clickShoppingCartBadge();
        await cartPage.navigateToCheckoutPage();
        await checkoutPage.fillFirstName(checkoutData.validData.FirstName);
        await checkoutPage.fillLastName(checkoutData.validData.SecondName);
        await checkoutPage.fillZipCode(checkoutData.validData.ZIPCode);
        await checkoutPage.clickContinueOrder();
        await overviewPage.clickFineshButton();
        

        await test.step(`Validate Complete Message is is${OverviewData.successMessage}` , async()=>{
            await expect(completePage.completeMessage).toHaveText(`${OverviewData.successMessage}`);
        });
    });
    
})