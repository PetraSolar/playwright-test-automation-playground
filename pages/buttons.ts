import { Locator, Page, expect } from "@playwright/test";

export class ButtonPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;
  readonly buttonById: Locator;
  readonly buttonByName: Locator;
  readonly buttonByClass: Locator;
  readonly buttonByText: Locator;
  readonly buttonByXPath: Locator;
  readonly buttonByPartialText: Locator;
  readonly buttonByDataQA: Locator;
  readonly buttonOutsideDiv: Locator;
  readonly expectToAllButtonsAreClicked: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });
    this.buttonById = page.locator("#button1");
    this.buttonByName = page.locator('[name="clickingOnMe"]');
    this.buttonByClass = page.locator('.click-click-click');
    this.buttonByText = page.getByText("This is THE button");
    this.buttonByXPath = page.getByText("XPATH");
    this.buttonByPartialText = page.getByText("Partial link text", { exact: true });
    this.buttonByDataQA = page.getByTestId("customAttribute-button");
    this.buttonOutsideDiv = page.getByRole("button", { name: "Button mimo" });
    this.expectToAllButtonsAreClicked = page.locator('.btn-success');
  }

  async visit() {
    await this.page.goto("/selectorsButtons.html");
  }}

  /* async function expectToAllButtonsAreClicked() {
    const successButtonsCount = await this.page.locator('.btn-success').count();
    expect(successButtonsCount).toBe(8);
  }*/
