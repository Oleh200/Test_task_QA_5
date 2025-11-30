import { loginPage } from "../pageobjects/login.page.js";
import { inventoryPage } from "../pageobjects/inventory.page.js";

describe("Test-case 001-003", () => {
  //Precondtion:
  beforeEach(async () => {
    await loginPage.goto();
  });

  it("Valid Login, Login with invalid password, Login with invalid login", async () => {
    //Test_steps:
    //Test-case 001
    await loginPage.setUsernameInput("standard_user");
    await loginPage.verifyLoginfield("standard_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.verifyPasswordfield("secret_sauce");
    await loginPage.clickLoginButton();
    await inventoryPage.verifyInventoryPageOpened("Products");

    //Test-case 002
    await loginPage.goto();
    await loginPage.setUsernameInput("standard_user");
    await loginPage.verifyLoginfield("standard_user");
    await loginPage.setPasswordInput("password_value");
    await loginPage.verifyPasswordfield("password_value");
    await loginPage.clickLoginButton();
    await loginPage.verifyUserNotLoginPage(
      "Epic sadface: Username and password do not match any user in this service"
    );

    //Test-case 003
    await loginPage.setUsernameInput("standarD_user");
    await loginPage.verifyLoginfield("standarD_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.verifyPasswordfield("secret_sauce");
    await loginPage.clickLoginButton();
    await loginPage.verifyUserNotLoginPage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
