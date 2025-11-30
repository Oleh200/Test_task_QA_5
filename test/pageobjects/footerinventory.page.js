class FooterInventoryPage {
  get twitterIcon() {
    return $(".social_twitter");
  }

  get facebookIcon() {
    return $(".social_facebook");
  }

  get linkedinIcon() {
    return $(".social_linkedin");
  }

  async verifyOpenTwitterInNewTab() {
    const mainTab = await browser.getWindowHandle();
    await this.twitterIcon.click();
    const allTabs = await browser.getWindowHandles();
    const twitterTab = allTabs[allTabs.length - 1];
    await browser.switchToWindow(twitterTab);
    await expect(browser).toHaveUrl("https://x.com/saucelabs");
    await browser.switchToWindow(mainTab);
  }

  async verifyOpenFacebookInNewTab() {
    const mainTab = await browser.getWindowHandle();
    await this.facebookIcon.click();
    const allTabs = await browser.getWindowHandles();
    const facebookTab = allTabs[allTabs.length - 1];
    await browser.switchToWindow(facebookTab);
    await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
    await browser.switchToWindow(mainTab);
  }

  async verifyOpenLinkedinInNewTab() {
    const mainTab = await browser.getWindowHandle();
    await this.linkedinIcon.click();
    const allTabs = await browser.getWindowHandles();
    const linkedinTab = allTabs[allTabs.length - 1];
    await browser.switchToWindow(linkedinTab);
    await expect(browser).toHaveUrl(
      "https://www.linkedin.com/company/sauce-labs/"
    );
  }
}

export const footerInventoryPage = new FooterInventoryPage();
