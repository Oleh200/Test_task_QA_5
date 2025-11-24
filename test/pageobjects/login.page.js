import { expect } from "@wdio/globals";

class LoginPage {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnLogin() {
    return $("#login-button");
  }

  async goto() {
    await browser.url("https://www.saucedemo.com/");
  }

  async setUsernameInput(value) {
    await this.inputUsername.setValue(value);
  }

  async verifyLoginfield(value) {
    await expect(this.inputUsername).toHaveValue(value);
  }

  async setPasswordInput(value) {
    await this.inputPassword.setValue(value);
  }

  async verifyPasswordfield(value) {
    await expect(this.inputPassword).toHaveAttribute("type", "password");
    await expect(this.inputPassword).toHaveValue(value);
  }

  async clickLoginButton() {
    await this.btnLogin.click();
  }

  async verifyUserNotLoginPage(value) {
    const usernameErrorIcon = await $$(
      "#login_button_container svg.error_icon"
    )[0];
    const passwordErrorIcon = await $$(
      "#login_button_container svg.error_icon"
    )[1];
    const errorMessage = await $(
      "#login_button_container .error-message-container.error"
    );

    await expect(usernameErrorIcon).toBeDisplayed();
    await expect($("#user-name")).toHaveClassContaining("input_error");
    await expect(passwordErrorIcon).toBeDisplayed();
    await expect($("#password")).toHaveClassContaining("input_error");
    await expect(errorMessage).toBeDisplayed();
    await expect(errorMessage).toHaveText(value);
  }

  async verifyUserOnLoginPage(value) {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    await expect(this.inputUsername).toHaveValue("");
    await expect(this.inputPassword).toHaveValue("");
  }
}

export default new LoginPage();
