import { ILink } from "../../common/ILink";


export class Link implements ILink {
    e: WebdriverIO.Element

    constructor(selector: WebdriverIO.Element) {
        this.e = selector;
    }

    getValue(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    waitForInputEnabled(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    isDisplayed(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
