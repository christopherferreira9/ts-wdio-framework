import { Link } from '../storybook/atoms/Link';

export class Menu {
    e: WebdriverIO.Element;
    links: Link[] = [];

    constructor(selector: string) {
        this.e = $(selector);
        this.links = $(selector).$$('a').map((e) => new Link(e));
    }

    async waitForClickable(): Promise<void> {
        await this.e.waitForExist();
        await this.e.waitForClickable();
    }

    async isDisplayed(): Promise<boolean> {
        return await this.e.isDisplayed();
    }

    async click(): Promise<void> {
        await this.e.click();
    }

    async getText(): Promise<string> {
        return await this.e.getText();
    }

    async isClickable(): Promise<boolean> {
        return this.e.isClickable();
    }
}