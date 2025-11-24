import LoginPage from "../pageobjects/login.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 003", () => {
  it("Login with invalid login", async () => {
    //Precondtion:
    await LoginPage.goto();
    await browser.pause(2000);

    //Test_steps
    await LoginPage.setUsernameInput("standarD_user");
    await LoginPage.verifyLoginfield("standarD_user");

    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.verifyPasswordfield("secret_sauce");

    await LoginPage.clickLoginButton();
    await LoginPage.verifyUserNotLoginPage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
