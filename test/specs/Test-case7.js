import LoginPage from "../pageobjects/login.page.js";
import Footer_InventoryPage from "../pageobjects/footer_inventory.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 007", () => {
  it("Footer Links", async () => {
    //Precondtion:
    await LoginPage.goto();
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.clickLoginButton();
    await browser.pause(2000);

    //Test_steps
    await Footer_InventoryPage.verifyOpenTwitterInNewTab();
    await Footer_InventoryPage.verifyOpenFacebookInNewTab();
    await Footer_InventoryPage.verifyOpenLinkedinInNewTab();
  });
});
