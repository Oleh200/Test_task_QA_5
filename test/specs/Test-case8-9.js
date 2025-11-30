import { loginPage } from "../pageobjects/login.page.js";
import { inventoryPage } from "../pageobjects/inventory.page.js";
import { cartPage } from "../pageobjects/cart.page.js";
import { generateCheckoutData } from "../../utils/checkoutData.js";

describe("Test-case 008-009", () => {
  //Precondtion:
  beforeEach(async () => {
    await loginPage.goto();
    await loginPage.setUsernameInput("standard_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();
  });

  it("Valid Checkout, Checkout without products", async () => {
    //Test_steps:
    //Test-case 008
    const data = generateCheckoutData();
    await inventoryPage.clickAddCartBtn();
    await inventoryPage.verifyCartIncreased();
    await inventoryPage.clickShoppingCartBtn();
    await cartPage.verifyCartPageOpened();
    await cartPage.verifyItemAdded();
    await cartPage.clickCheckoutBtn();
    await cartPage.setFirstNameInput(data.firstName);
    await cartPage.verifyFirstNamefield(data.firstName);
    await cartPage.setLastNameInput(data.lastName);
    await cartPage.verifyLastNamefield(data.lastName);
    await cartPage.setPostalCodeInput(data.postalCode);
    await cartPage.verifyPostalCodefield(data.postalCode);
    await cartPage.clickContinueBtn();
    await cartPage.verifyCheckoutPageOpened("Checkout: Overview");
    await cartPage.verifyItemAdded();
    await cartPage.verifyTotalPrice();
    await cartPage.clickFinishBtn();
    await cartPage.verifyCheckoutPageOpened("Checkout: Complete!");
    await cartPage.verifyInformationMessage("Thank you for your order!");
    await cartPage.clickBackHomeBtn();
    await inventoryPage.verifyInventoryPageOpened("Products");
    await inventoryPage.verifyIconCartEmpty();

    //Test-case 009
    await inventoryPage.clickShoppingCartBtn();
    await cartPage.verifyCartPageOpened();
    await cartPage.verifyCartEmpty();
    await cartPage.clickCheckoutBtn();
    await cartPage.verifyCartPageOpened();
    await cartPage.verifyErrorEmptyCartMessage();
  });
});
