import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import CartPage from "../pageobjects/cart.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 009", () => {
  it("Checkout without products", async () => {
    //Precondtion:
    await LoginPage.goto();
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.clickLoginButton();
    await browser.pause(2000);

    //Test_steps
    await InventoryPage.clickShoppingCartBtn();
    await CartPage.verifyCartPageOpened();
    await CartPage.verifyCartEmpty();
    await CartPage.clickCheckoutBtn();
    await CartPage.verifyCartPageOpened();
    await CartPage.verifyErrorEmptyCartMessage();
  });
});
