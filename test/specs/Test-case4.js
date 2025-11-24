import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 004", () => {
  it("Logout", async () => {
    //Precondtion:
    await LoginPage.goto();
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.clickLoginButton();
    await browser.pause(2000);

    //Test_steps
    await InventoryPage.clickBurgerButton();
    await InventoryPage.verifyMenuExpanded();
    await InventoryPage.verifyAllItemDisplayed();
    await InventoryPage.clickLogoutItem();
    await LoginPage.verifyUserOnLoginPage();
    await browser.pause(2000);
  });
});
