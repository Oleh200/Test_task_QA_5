import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 001", () => {
  it("Valid Login", async () => {
    //Precondtion:
    await LoginPage.goto();
    await browser.pause(2000);

    //Test_steps
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.verifyLoginfield("standard_user");
    await browser.pause(2000);

    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.verifyPasswordfield("secret_sauce");
    await browser.pause(2000);

    await LoginPage.clickLoginButton();
    await browser.pause(2000);
    await InventoryPage.verifyInventoryPageOpened("Products");
    await browser.pause(2000);
  });
});
