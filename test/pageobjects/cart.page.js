import { browser, expect } from "@wdio/globals";

class CartPage {
  get cartItem() {
    return $(".inventory_item_name");
  }

  get checkoutBtn() {
    return $("#checkout");
  }

  get checkoutForm() {
    return $(".checkout_info");
  }

  get inputFirstName() {
    return $("#first-name");
  }

  get inputLastName() {
    return $("#last-name");
  }

  get inputPostalCode() {
    return $("#postal-code");
  }

  get continueBtn() {
    return $("#continue");
  }

  get checkoutTitle() {
    return $(".title");
  }

  get priceTotalField() {
    return $(".summary_subtotal_label");
  }

  get finishBtn() {
    return $("#finish");
  }

  get informationMessage() {
    return $(".complete-header");
  }

  get backHomeBtn() {
    return $("#back-to-products");
  }

  get errorEmptyCartMessage() {
    return $("#error-cart-empty-message");
  }

  async verifyItemAdded() {
    await expect(this.cartItem).toHaveText("Sauce Labs Fleece Jacket");
  }

  async verifyCartPageOpened() {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
  }

  async clickCheckoutBtn() {
    await this.checkoutBtn.click();
  }

  async verifyCheckoutForm() {
    await expect(this.checkoutForm).toBeDisplayed();
  }

  async setFirstNameInput(value) {
    await this.inputFirstName.setValue(value);
  }

  async verifyFirstNamefield(value) {
    await expect(this.inputFirstName).toHaveValue(value);
  }

  async setLastNameInput(value) {
    await this.inputLastName.setValue(value);
  }

  async verifyLastNamefield(value) {
    await expect(this.inputLastName).toHaveValue(value);
  }

  async setPostalCodeInput(value) {
    await this.inputPostalCode.setValue(value);
  }

  async verifyPostalCodefield(value) {
    await expect(this.inputPostalCode).toHaveValue(value);
  }

  async clickContinueBtn() {
    await this.continueBtn.click();
  }

  async verifyCheckoutPageOpened(value) {
    await expect(this.checkoutTitle).toHaveText(value);
  }

  async verifyItemAdded() {
    await expect(this.cartItem).toHaveText("Sauce Labs Fleece Jacket");
  }

  async verifyTotalPrice() {
    await expect(this.priceTotalField).toHaveText(/49.99/);
  }

  async clickFinishBtn() {
    await this.finishBtn.click();
  }

  async verifyInformationMessage(value) {
    await expect(this.informationMessage).toBeDisplayed();
    await expect(this.informationMessage).toHaveText(value);
  }

  async clickBackHomeBtn() {
    await this.backHomeBtn.click();
  }

  async verifyCartEmpty() {
    await expect(this.cartItem).not.toBeExisting();
  }

  async verifyErrorEmptyCartMessage() {
    await expect(this.errorEmptyCartMessage).toBeDisplayed();
    await expect(this.errorEmptyCartMessage).toHaveText("Cart is empty");
  }
}
export default new CartPage();
