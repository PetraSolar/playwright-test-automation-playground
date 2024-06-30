import { Locator, Page, expect } from "@playwright/test";

export class SelectorPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;
  readonly elementByAtribute: Locator;
  readonly elementById: Locator;
  readonly elementByClass: Locator;
  readonly elementByImg: Locator;
  readonly elementByXPath: Locator;
  readonly elementByXPathClass: Locator;
  readonly paragraphs: Locator;
  readonly buttonByRole: Locator;
  readonly counter: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Lokátory" });

    this.elementByAtribute = page.getByTestId("selector-by-dataQA");
    this.elementById = page.locator("#zapletka");
    this.elementByClass = page.locator('.this-is-interesting-paragraph');
    this.elementByImg = page.getByAltText("Ilustrace Budulínka");
    this.elementByXPath = page.locator('//*[@id="zapletka"]');
    this.elementByXPathClass = page.locator('//*[@class="this-is-interesting-paragraph"]');
    this.paragraphs = page.getByRole("paragraph");
    this.buttonByRole = page.getByRole("button");
    this.counter = page.locator("#lvlAwesome");
  }

  async visit() {
    await this.page.goto("/selectors.html");
  }
}
