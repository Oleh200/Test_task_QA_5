import { loginPage } from "../pageobjects/login.page.js";
import { footerInventoryPage } from "../pageobjects/footerinventory.page.js";

describe("Test-case 007", () => {
  //Precondtion:
  beforeEach(async () => {
    await loginPage.goto();
    await loginPage.setUsernameInput("standard_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();
  });

  it("Footer Links", async () => {
    //Test_steps:
    await footerInventoryPage.verifyOpenTwitterInNewTab();
    await footerInventoryPage.verifyOpenFacebookInNewTab();
    await footerInventoryPage.verifyOpenLinkedinInNewTab();
  });
});
