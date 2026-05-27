import {test , expect} from "../fixture/pageManager";
import { setAllureMetadata , setTestMetadata } from "../utils/allureMetadata";
import testData from "../testData/loginData";


setAllureMetadata({
    epic: "Swag Labs",
    feature: "UI User Management",
    story: "User Login",
    owner: "Tal3at",
    link: process.env.BASE_URL!
});

test.describe("Login Functionality" , () => {
    test("Valid Login" , async ({loginPage , page} , testInfo) => {
        setTestMetadata({
            tag: "Login",
            description: "Login with valid data",
            tmsLink: "TC_01",
            priority: 1,
            severity: "Critical"
        });
        
        await loginPage.login(testData.validLogin.username, testData.validLogin.password);

        await test.step(`Verify successful login by checking the URL and presence of inventory container for ${testInfo.title} `, async () => {
            await expect(page).toHaveURL(`${process.env.BASE_URL!}${testData.ProductEP}`);
        });
    });

    test("Invalid Login only Password" , async ({loginPage}) => {
        setTestMetadata({
            tag: "Login",
            description: "Login with Valid User and Invalid Password",
            tmsLink: "TC_02",
            priority: 2,
            severity: "Critical"
        });

        await loginPage.login(testData.validLogin.username, testData.invalidLogin.password);

        await test.step("Verify error message is displayed", async () => {
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText(testData.message.error_user_or_pass);
        });
    });

    test("Invalid Login only Username" , async({loginPage})=>{
        setTestMetadata({
            tag: "Login",
            description: "Login with Invalid User and Valid Password",
            tmsLink: "TC_03",
            priority: 3,
            severity: "Critical"
        });
        await loginPage.login(testData.invalidLogin.username , testData.validLogin.password);

        await test.step("Verify error message is displayed" , async()=>{
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText(testData.message.error_user_or_pass);
        })
    });

    test("Invaild Login both username and password" , async({loginPage})=>{
        setTestMetadata({
            tag: "Login",
            description: "Login with Invalid User and Invalid Password",
            tmsLink: "TC_04",
            priority: 4,
            severity: "Critical"
        });
        await loginPage.login(testData.invalidLogin.username , testData.invalidLogin.password);

        await test.step("Verify error message is displayed" , async()=>{
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText(testData.message.error_user_or_pass);
        })
    });

    test("Invalid Login with Locked User" , async({loginPage})=>{
        setTestMetadata({
            tag: "Login",
            description: "Login with Locked user",
            tmsLink:"TC_05",
            priority: 5,
            severity: "Critical"
        });
        await loginPage.login(testData.lockedLogin.username , testData.lockedLogin.password);
        await test.step(`verify Error message of locked user is${testData.message.locked_user}` , async()=>{
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText(testData.message.locked_user);
        });
    });

    test("Invalid Login with empty user and password" , async({loginPage})=>{
        setTestMetadata({
            tag: "Login",
            description: "Login with Empty User and Empty Password",
            tmsLink:"TC_06",
            priority: 6,
            severity: "Critical"
        });
        await loginPage.login(testData.emptyLogin.username , testData.emptyLogin.password);
        await test.step(`verify Error message of empty user is${testData.message.error_username_required}` , async()=>{
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText(testData.message.error_username_required);
        });
    });

    test("Invalid Login with empty user only" , async({loginPage})=>{
        setTestMetadata({
            tag: "Login",
            description: "Login with Empty User and valid Password",
            tmsLink:"TC_07",
            priority: 7,
            severity: "Critical"
        });
        await loginPage.login(testData.emptyLogin.username , testData.validLogin.password);
        await test.step(`verify Error message of empt user is${testData.message.error_username_required}` , async()=>{
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText(testData.message.error_username_required);
        });
    });

    test("Invalid Login with valid user and empty password" , async({loginPage})=>{
        setTestMetadata({
            tag: "Login",
            description: "Login with Valid User and Empty Password",
            tmsLink:"TC_08",
            priority: 8,
            severity: "Critical"
        });
        await loginPage.login(testData.validLogin.username , testData.emptyLogin.password);
        await test.step(`verify Error message of empt password is${testData.message.error_password_required}` , async()=>{
            await expect(loginPage.errorMessage).toBeVisible();
            await expect(loginPage.errorMessage).toHaveText(testData.message.error_password_required);
        });
    });


});