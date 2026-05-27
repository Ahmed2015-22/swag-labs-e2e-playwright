import {test , expect} from "../fixture/pageManager";
import { setAllureMetadata , setTestMetadata } from "../utils/allureMetadata";
import testData from "../testData/loginData";
import checkoutData from "../testData/checkoutData";

setAllureMetadata({
    epic: "Swag Labs",
    feature: "UI User Management",
    story: "Check Page",
    owner: "Tal3at",
    link: process.env.BASE_URL!
});

test.describe("CheckOut Processing Page" , ()=>{

    test.beforeEach("Set Login for all tests and Preparation products and stay a Filling Ifo", async({loginPage , productPage , cartPage})=>{
            await loginPage.login(testData.validLogin.username , testData.validLogin.password);
            await productPage.clickAddBackpack();
            await productPage.clickAddBoltTShirt();
            await productPage.clickAddOnesie();
            await productPage.clickShoppingCartBadge();
            await cartPage.navigateToCheckoutPage();
    });

    test("Fill Checkout Information" , async({checkoutPage, page})=>{
            setTestMetadata({
            tag: "CheckOut",
            description: "Fill Delivery Information and validate Overview URL",
            tmsLink: "TC_CHK_01",
            priority: 1,
            severity: "Critical"
        });

        await checkoutPage.fillFirstName(checkoutData.validData.FirstName);
        await checkoutPage.fillLastName(checkoutData.validData.SecondName);
        await checkoutPage.fillZipCode(checkoutData.validData.ZIPCode);
        await checkoutPage.clickContinueOrder();

        await test.step(`Validate Overview URL ${process.env.BASE_URL!}${checkoutData.overViewEP}` , async()=>{
            await expect(page).toHaveURL(`${process.env.BASE_URL!}${checkoutData.overViewEP}`);
        });
    });

    test("Fill Checkout Information Without First Name" , async({checkoutPage, page})=>{
            setTestMetadata({
            tag: "CheckOut",
            description: "Fill Checkout Information Without First Name and Validate error message",
            tmsLink: "TC_CHK_02",
            priority: 2,
            severity: "Critical"
        });

        await checkoutPage.fillLastName(checkoutData.validData.SecondName);
        await checkoutPage.fillZipCode(checkoutData.validData.ZIPCode);
        await checkoutPage.clickContinueOrder();

        await test.step(`Validate Error Message of missing first name ${checkoutData.errorMessage.fName}` , async()=>{
            await expect(checkoutPage.error).toHaveText(checkoutData.errorMessage.fName);
        });
    });

    test("Fill Checkout Information Without Second Name" , async({checkoutPage, page})=>{
            setTestMetadata({
            tag: "CheckOut",
            description: "Fill Checkout Information Without Second Name and Validate error message",
            tmsLink: "TC_CHK_03",
            priority: 3,
            severity: "Critical"
        });

        await checkoutPage.fillFirstName(checkoutData.validData.FirstName);
        await checkoutPage.fillZipCode(checkoutData.validData.ZIPCode);
        await checkoutPage.clickContinueOrder();

        await test.step(`Validate Error Message of missing Second name ${checkoutData.errorMessage.lName}` , async()=>{
            await expect(checkoutPage.error).toHaveText(checkoutData.errorMessage.lName);
        });
    });

    test("Fill Checkout Information Without Zip Code" , async({checkoutPage, page})=>{
            setTestMetadata({
            tag: "CheckOut",
            description: "Fill Checkout Information Without Zip Code and Validate error message",
            tmsLink: "TC_CHK_04",
            priority: 4,
            severity: "Critical"
        });

        await checkoutPage.fillFirstName(checkoutData.validData.FirstName);
        await checkoutPage.fillLastName(checkoutData.validData.SecondName);
        await checkoutPage.clickContinueOrder();

        await test.step(`Validate Error Message of missing first name ${checkoutData.errorMessage.postal}` , async()=>{
            await expect(checkoutPage.error).toHaveText(checkoutData.errorMessage.postal);
        });
    });


})