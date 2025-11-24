import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import CartPage from "../pageobjects/cart.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 008", () => {
  it("Valid Checkout", async () => {
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
    await CartPage.verifyCartPageOpened();
    await CartPage.verifyItemAdded();
    await CartPage.clickCheckoutBtn();
    await CartPage.setFirstNameInput("Ivan");
    await CartPage.verifyFirstNamefield("Ivan");
    await CartPage.setLastNameInput("Petrenko");
    await CartPage.verifyLastNamefield("Petrenko");
    await CartPage.setPostalCodeInput("79000");
    await CartPage.verifyPostalCodefield("79000");
    await CartPage.clickContinueBtn();
    await CartPage.verifyCheckoutPageOpened("Checkout: Overview");
    await CartPage.verifyItemAdded();
    await CartPage.verifyTotalPrice();
    await CartPage.clickFinishBtn();
    await CartPage.verifyCheckoutPageOpened("Checkout: Complete!");
    await CartPage.verifyInformationMessage("Thank you for your order!");
    await CartPage.clickBackHomeBtn();
    await InventoryPage.verifyInventoryPageOpened("Products");
    await InventoryPage.verifyIconCartEmpty();
    await InventoryPage.clickShoppingCartBtn();
    await CartPage.verifyCartEmpty();
  });
});
