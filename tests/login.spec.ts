import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Login", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.loginPage.visit();
  });

  test("Login", async ({ page }) => {
    await pages.loginPage.inputByPlaceholder.fill("czechitas");
    await pages.loginPage.inputByLabel.fill("budoucnost");
    await pages.loginPage.buttonByRole.click();
    await expect(pages.loginPage.header).toHaveText("LOGGED!");
  });
});
