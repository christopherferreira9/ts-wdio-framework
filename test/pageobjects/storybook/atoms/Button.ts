

export class Button {
    e: WebdriverIO.Element;

    constructor(selector: string) {
        this.e = $(selector);
    }

    async click(): Promise<void> {
        await this.e.click();
    }

    async text(): Promise<string> {
        return await this.e.getText();
    }

    async isClickable(): Promise<boolean> {
        return this.e.isClickable();
    }
}