import { loginPage } from "../pageobjects/login.page.js";
import { inventoryPage } from "../pageobjects/inventory.page.js";

describe("Test-case 006", () => {
  //Precondtion:
  beforeEach(async () => {
    await loginPage.goto();
    await loginPage.setUsernameInput("standard_user");
    await loginPage.setPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();
  });
  it("Sorting", async () => {
    const expectSorted = (actual, compareFn) => {
      const expected = [...actual].sort(compareFn);
      expect(actual).toEqual(expected);
    };

    await inventoryPage.sortAndCheck(
      "az",
      inventoryPage.getNames,
      (a, b) => a.localeCompare(b),
      expectSorted
    );
    await inventoryPage.sortAndCheck(
      "za",
      inventoryPage.getNames,
      (a, b) => b.localeCompare(a),
      expectSorted
    );
    await inventoryPage.sortAndCheck(
      "lohi",
      inventoryPage.getPrices,
      (a, b) => a - b,
      expectSorted
    );
    await inventoryPage.sortAndCheck(
      "hilo",
      inventoryPage.getPrices,
      (a, b) => b - a,
      expectSorted
    );
  });
});
