import LoginPage from "../pageobjects/login.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 002", () => {
  it("Login with invalid password", async () => {
    //Precondtion:
    await LoginPage.goto();
    await browser.pause(2000);

    //Test_steps
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.verifyLoginfield("standard_user");
    await browser.pause(2000);

    await LoginPage.setPasswordInput("password_value");
    await LoginPage.verifyPasswordfield("password_value");
    await browser.pause(2000);

    await LoginPage.clickLoginButton();
    await LoginPage.verifyUserNotLoginPage(
      "Epic sadface: Username and password do not match any user in this service"
    );
    await browser.pause(2000);
  });
});
