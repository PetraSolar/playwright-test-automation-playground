import { Locator, Page, expect } from "@playwright/test";

export class CatsPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly addCatButton: Locator;
  readonly removeCatButton: Locator;
  readonly apocalypseButton: Locator;

  readonly catCards: Locator;

  readonly catCounter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Přidávání a odebírání elementů" });

    this.addCatButton = page.getByRole('button', { name: 'Přidej kočku' });
    this.removeCatButton = page.locator('[id="removeItem"]');
    this.apocalypseButton = page.getByRole('button', { name: 'Apokalypsa' });
    this.catCards = page.getByAltText("Kočka");
    this.catCounter = page.locator('[id="counter"]');
  }

  async visit() {
    await this.page.goto("/adding.html");
  }

  // or you can use expext(pages.catPage.catCards).toHaveCount(3)
  // or different number
  getCountOfCatCards = async () => {
    return await this.catCards.count();
  };
}
