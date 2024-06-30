import { Page } from "@playwright/test";
import { ButtonPage } from "./buttons";
import { LoginPage } from "./login";
import { SelectorPage } from "./selectors";
import { CatsPage } from "./cats";
import { TablePage } from "./table";
import { InputPage } from "./inputs";
import { HoverPage } from "./hover";
import { ModalPage } from "./modal";
import { LoadingPage } from "./loading";
import { FindfoxPage } from "./findfox";

export class AllPages {
  readonly buttonPage: ButtonPage;
  readonly loginPage: LoginPage;
  readonly selectorPage: SelectorPage;
  readonly catsPage: CatsPage;
  readonly tablePage: TablePage;
  readonly inputPage: InputPage;
  readonly hoverPage: HoverPage;
  readonly modalPage: ModalPage;
  readonly loadingPage: LoadingPage;
  readonly FindfoxPage: FindfoxPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.buttonPage = new ButtonPage(page);
    this.loginPage = new LoginPage(page);
    this.selectorPage = new SelectorPage(page);
    this.catsPage = new CatsPage(page);
    this.tablePage = new TablePage(page);
    this.inputPage = new InputPage(page);
    this.hoverPage = new HoverPage(page);
    this.modalPage = new ModalPage(page);
    this.loadingPage = new LoadingPage(page);
    this.FindfoxPage = new FindfoxPage(page);
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
