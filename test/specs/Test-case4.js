import { loginPage } from "../pageobjects/login.page.js";
import { inventoryPage } from "../pageobjects/inventory.page.js";

describe("Test-case 004", () => {
  //Precondtion:
  beforeEach(async () => {
    await loginPage.goto();
    await loginPage.setUsernameInput("standard_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();
  });

  it("Logout", async () => {
    //Test_steps:
    await inventoryPage.clickBurgerButton();
    await inventoryPage.verifyMenuExpanded();
    await inventoryPage.verifyAllItemDisplayed();
    await inventoryPage.clickLogoutItem();
    await loginPage.verifyUserOnLoginPage();
  });
});
