import { IButton } from "../../common/IButton";

export class Button implements IButton<string> {
    e: WebdriverIO.Element;

    constructor(selector: string) {
        this.e = $(selector);
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