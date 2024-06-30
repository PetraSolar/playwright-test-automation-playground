import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Cats", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.catsPage.visit();
  });

  test("Přidání jedné kočky", async ({ page }) => {
    await page.getByRole('button', { name: 'Přidej kočku' }).click();
    await expect(pages.catsPage.catCards).toHaveCount(1);
    await expect(pages.catsPage.catCounter).toHaveText("1");
  });

  test("Odebrání jedné kočky", async ({ page }) => {
    await page.getByRole('button', { name: 'Přidej kočku' }).dblclick();
    await expect(pages.catsPage.catCards).toHaveCount(2);
    await page.locator('[id="removeItem"]').click();
    await expect(pages.catsPage.catCards).toHaveCount(1);
    await expect(pages.catsPage.catCounter).toHaveText("1");
  });

  test("Přidání 20 koček", async ({ page }) => {
    for (let i = 0; i < 20; i++) {
      await page.getByRole('button', { name: 'Přidej kočku' }).click();
    }
    await expect(pages.catsPage.catCards).toHaveCount(20);
    await expect(pages.catsPage.catCounter).toHaveText("20");
    });

  test("Apokalypsa", async ({ page }) => {
    for (let i = 0; i < 20; i++) {
      await page.getByRole('button', { name: 'Přidej kočku' }).click();
    }
    await expect(pages.catsPage.catCards).toHaveCount(20);
    await expect(pages.catsPage.catCounter).toHaveText("20");
    await page.getByRole('button', { name: 'Apokalypsa' }).click();
    await expect(pages.catsPage.catCards).toHaveCount(0);
    await expect(pages.catsPage.catCounter).toHaveText("0");
    });

    test ("Tlačítka odebrání neaktivní při žádných zobrazených kartách koček", async ({ page }) => {
      await expect(pages.catsPage.removeCatButton).toHaveClass(/disabled/);
      await expect(pages.catsPage.apocalypseButton).toHaveClass(/disabled/);
    })

    test ("Tlačítka odebrání deaktivována po smazání poslední karty kočky", async ({ page }) => {
      await page.getByRole('button', { name: 'Přidej kočku' }).click();
      await expect(pages.catsPage.removeCatButton).not.toHaveClass(/disabled/);
      await page.locator('[id="removeItem"]').click();
      await expect(pages.catsPage.removeCatButton).toHaveClass(/disabled/);
      await page.getByRole('button', { name: 'Přidej kočku' }).click();
      await expect(pages.catsPage.apocalypseButton).not.toHaveClass(/disabled/);
      await page.getByRole('button', { name: 'Apokalypsa' }).click();
      await expect(pages.catsPage.apocalypseButton).toHaveClass(/disabled/);
    })
})