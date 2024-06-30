import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;
  readonly inputByPlaceholder: Locator;
  readonly inputByLabel: Locator;
  readonly buttonByRole: Locator;


  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "LOGGED!" });
    this.inputByPlaceholder = page.getByPlaceholder("mamamia@czechitas.cz");
    this.inputByLabel = page.getByLabel("Password");
    this.buttonByRole = page.getByRole("button", { name: "Log in!" });
  }

  async visit() {
    await this.page.goto("/login.html");
  }
}
