import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Pohádka o Budulínkovi", () => {
  let pages: AllPages;
  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.selectorPage.visit();
  });

  test("Test zadání pohádky", async ({ page }) => {
    await expect(pages.selectorPage.elementByAtribute).toBeVisible();
    await expect(pages.selectorPage.elementById).toBeVisible();
    await expect(pages.selectorPage.elementByClass.first()).toBeVisible();
    await expect(pages.selectorPage.elementByImg).toBeVisible();
    await expect(pages.selectorPage.elementByXPath).toBeVisible();
    await expect(pages.selectorPage.elementByXPathClass.first()).toBeVisible();
    const count = await pages.selectorPage.paragraphs.count();
    console.log("Pohádka má celkem "+ count + " odstavců");
    for (let i = 1; i < 5; i++) {
      await pages.selectorPage.buttonByRole.click();
    }
    /*await clickButtonFourTimes(pages.selectorPage);*/ //alternative
    await expect(pages.selectorPage.counter).toHaveText("4");
});

//alternative
/*async function clickButtonFourTimes (page) {
  const button = pages.selectorPage.buttonByRole;
  for (let i = 1; i < 5; i++) {
    await button.click();
  }
}*/
})