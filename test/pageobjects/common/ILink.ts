export interface ILink {
    getValue(): Promise<any>
    waitForInputEnabled(): Promise<void>
    isDisplayed(): Promise<boolean>
}
