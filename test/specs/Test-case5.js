import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import CartPage from "../pageobjects/cart.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 005", () => {
  it("Saving the card after logout", async () => {
    //Precondtion:
    await LoginPage.goto();
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.clickLoginButton();
    await browser.pause(2000);

    //Test_steps
    await InventoryPage.clickAddCartBtn();
    await InventoryPage.verifyCartIncreased();
    await InventoryPage.clickShoppingCartBtn();
    await CartPage.verifyItemAdded();
    await InventoryPage.clickBurgerButton();
    await InventoryPage.verifyMenuExpanded();
    await InventoryPage.verifyAllItemDisplayed();
    await InventoryPage.clickLogoutItem();

    await LoginPage.verifyUserOnLoginPage();
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.clickLoginButton();

    await InventoryPage.verifyInventoryPageOpened("Products");
    await InventoryPage.clickShoppingCartBtn();
    await CartPage.verifyCartPageOpened();
    await CartPage.verifyItemAdded();
  });
});
