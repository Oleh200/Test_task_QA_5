class InventoryPage {
  get productsTitle() {
    return $(".title");
  }

  get shopping_cartLink() {
    return $(".shopping_cart_link");
  }

  get burgerBtn() {
    return $("#react-burger-menu-btn");
  }

  get inventoryItem() {
    return $("#inventory_sidebar_link");
  }

  get aboutItem() {
    return $("#about_sidebar_link");
  }

  get logoutItem() {
    return $("#logout_sidebar_link");
  }

  get resetItem() {
    return $("#reset_sidebar_link");
  }

  get burgerMenu() {
    return $("#menu_button_container .bm-menu-wrap");
  }

  get addCartBtn() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }

  get cartBadge() {
    return $(".shopping_cart_badge");
  }

  get shoppingCartBtn() {
    return $(".shopping_cart_link");
  }

  get productNames() {
    return $$(".inventory_item_name");
  }

  get productPrices() {
    return $$(".inventory_item_price");
  }

  get sortDropdown() {
    return $(".product_sort_container");
  }

  async verifyInventoryPageOpened(value) {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(this.productsTitle).toHaveText(value);
    await expect(this.shopping_cartLink).toBeDisplayed();
  }

  async clickBurgerButton() {
    await this.burgerBtn.click();
  }

  async verifyMenuExpanded() {
    await expect(this.burgerMenu).toHaveAttribute("aria-hidden", "false");
  }

  async verifyAllItemDisplayed() {
    await expect(this.inventoryItem).toBeDisplayed();
    await expect(this.aboutItem).toBeDisplayed();
    await expect(this.logoutItem).toBeDisplayed();
    await expect(this.resetItem).toBeDisplayed();
  }

  async clickLogoutItem() {
    await this.logoutItem.click();
  }

  async clickAddCartBtn() {
    await this.addCartBtn.click();
  }

  async verifyCartIncreased() {
    await expect(this.cartBadge).toHaveText("1");
  }

  async clickShoppingCartBtn() {
    await this.shoppingCartBtn.click();
  }

  async selectSort(optionValue) {
    const dropdown = await this.sortDropdown;
    await dropdown.selectByAttribute("value", optionValue);
  }

  async getNames() {
    const elements = await this.productNames;
    const names = [];
    for (const el of elements) {
      names.push(await el.getText());
    }
    return names;
  }

  async getPrices() {
    const elements = await this.productPrices;
    const prices = [];
    for (const el of elements) {
      const text = await el.getText();
      prices.push(Number(text.replace("$", "")));
    }
    return prices;
  }

  async sortAndCheck(optionValue, getElementsFn, compareFn, expectSortedFn) {
    await this.selectSort(optionValue);
    const values = await getElementsFn.call(this);
    expectSortedFn(values, compareFn);
  }

  async verifyIconCartEmpty() {
    await expect(this.cartBadge).not.toBeExisting();
  }
}

export const inventoryPage = new InventoryPage();
