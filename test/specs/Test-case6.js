import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import { expect } from "@wdio/globals";

describe("Test-case 006", () => {
  it("Sorting", async () => {
    //Precondtion:
    await LoginPage.goto();
    await LoginPage.setUsernameInput("standard_user");
    await LoginPage.setPasswordInput("secret_sauce");
    await LoginPage.clickLoginButton();
    await browser.pause(2000);

    //Test_steps
    await InventoryPage.selectSort("az");
    const namesAZ = await InventoryPage.getNames();
    const sortedAZ = [...namesAZ].sort();
    expect(namesAZ).toEqual(sortedAZ);

    await InventoryPage.selectSort("za");
    const namesZA = await InventoryPage.getNames();
    const sortedZA = [...namesZA].sort().reverse();
    expect(namesZA).toEqual(sortedZA);

    await InventoryPage.selectSort("lohi");
    const pricesLoHi = await InventoryPage.getPrices();
    const sortedLoHi = [...pricesLoHi].sort((a, b) => a - b);
    expect(pricesLoHi).toEqual(sortedLoHi);

    await InventoryPage.selectSort("hilo");
    const pricesHiLo = await InventoryPage.getPrices();
    const sortedHiLo = [...pricesHiLo].sort((a, b) => b - a);
    expect(pricesHiLo).toEqual(sortedHiLo);
  });
});
