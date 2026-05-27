import {test , expect} from "../fixture/pageManager";
import { setAllureMetadata , setTestMetadata } from "../utils/allureMetadata";
import testData from "../testData/loginData";
import checkoutData from "../testData/checkoutData";
import completeData from "../testData/OverviewData";
import testProductData from "../testData/productData";


setAllureMetadata({
    epic: "Swag Labs",
    feature: "UI User Management",
    story: "Overview Page",
    owner: "Tal3at",
    link: process.env.BASE_URL!
});

test.describe("Complete Processing Page" , ()=>{
    test.beforeEach("Set Login for all tests and Preparation products and stay a Filling Ifo", async({loginPage , productPage , cartPage , checkoutPage})=>{
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
    });

    test("Finish Order" , async({overviewPage , page})=>{
        setTestMetadata({
            tag: "Overview",
            description: "Finish Order and validate Complete URL",
            tmsLink: "TC_OVR_01",
            priority: 1,
            severity: "Critical"
        });

        await overviewPage.clickFineshButton();
        
        await test.step(`Validate Complete Page Url${process.env.BASE_URL!}${completeData.completePageEP}` , async()=>{
            await expect(page).toHaveURL(`${process.env.BASE_URL!}${completeData.completePageEP}`);
        })
        
    });


    test("Find Shipping Information" , async({overviewPage})=>{
        setTestMetadata({
            tag: "Overview",
            description: "Find Shipping Information and validate tt",
            tmsLink: "TC_OVR_02",
            priority: 2,
            severity: "Critical"
        });
        
        await test.step(`Validate Shipping Information is ${completeData.ShippingInfo}` , async()=>{
            await expect(overviewPage.ShipInfo).toHaveText(completeData.ShippingInfo);

        })
        
    });


    test("Find Payment Information" , async({overviewPage})=>{
        setTestMetadata({
            tag: "Overview",
            description: "Find Payment Information and validate tt",
            tmsLink: "TC_OVR_03",
            priority: 3,
            severity: "Critical"
        });
        
        await test.step(`Validate Payment Information is ${completeData.PaymentInfo}` , async()=>{
            await expect(overviewPage.paymentCode).toHaveText(completeData.PaymentInfo);

        })
        
    });

    test("Find Backpack Price" , async({overviewPage , productPage})=>{
        setTestMetadata({
            tag: "Overview",
            description: "Find Backpack Price and validate it's price",
            tmsLink: "TC_OVR_04",
            priority: 4,
            severity: "Critical"
        });
        
        await test.step("Validate Backpack Price" , async()=>{
            await expect(productPage.backpackPrice).toHaveText(testProductData.Price.backpack);

        });
        
    });

    test("Find BikeLight Price" , async({overviewPage , productPage})=>{
        setTestMetadata({
            tag: "Overview",
            description: "Find BikeLight Price and validate it's price",
            tmsLink: "TC_OVR_05",
            priority: 5,
            severity: "Critical"
        });
        
        await test.step("Validate BikeLight Price" , async()=>{
            await expect(productPage.bikeLightPrice).toHaveText(testProductData.Price.bikeLight);

        });
        
    });

    test("Find FleeceJacket Price" , async({overviewPage , productPage})=>{
        setTestMetadata({
            tag: "Overview",
            description: "Find FleeceJacket Price and validate it's price",
            tmsLink: "TC_OVR_06",
            priority: 6,
            severity: "Critical"
        });
        
        await test.step("Validate FleeceJacket Price" , async()=>{
            await expect(productPage.fleeceJacketPrice).toHaveText(testProductData.Price.fleeceJacket);

        });
        
    });

    test("Find Onesie Price" , async({overviewPage , productPage})=>{
        setTestMetadata({
            tag: "Overview",
            description: "Find Onesie Price and validate it's price",
            tmsLink: "TC_OVR_07",
            priority: 7,
            severity: "Critical"
        });
        
        await test.step("Validate Onesie Price" , async()=>{
            await expect(productPage.onesiePrice).toHaveText(testProductData.Price.onesie);

        });
        
    });

    
})