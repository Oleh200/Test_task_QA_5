import { loginPage } from "../pageobjects/login.page.js";
import { inventoryPage } from "../pageobjects/inventory.page.js";
import { cartPage } from "../pageobjects/cart.page.js";

describe("Test-case 005", () => {
  //Precondtion:
  beforeEach(async () => {
    await loginPage.goto();
    await loginPage.setUsernameInput("standard_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();
  });

  it("Saving the card after logout", async () => {
    //Test_steps:
    await inventoryPage.clickAddCartBtn();
    await inventoryPage.verifyCartIncreased();
    await inventoryPage.clickShoppingCartBtn();
    await cartPage.verifyItemAdded();
    await inventoryPage.clickBurgerButton();
    await inventoryPage.verifyMenuExpanded();
    await inventoryPage.verifyAllItemDisplayed();
    await inventoryPage.clickLogoutItem();
    await loginPage.verifyUserOnLoginPage();
    await loginPage.setUsernameInput("standard_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();
    await inventoryPage.verifyInventoryPageOpened("Products");
    await inventoryPage.clickShoppingCartBtn();
    await cartPage.verifyCartPageOpened();
    await cartPage.verifyItemAdded();
  });
});
