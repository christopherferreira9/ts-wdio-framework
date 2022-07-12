export interface IButtonBase {
    getText(): Promise<any>
    waitForClickable(): Promise<void>
    isDisplayed(): Promise<boolean>
    isClickable(): Promise<boolean>
}

export interface IButton<T> extends IButtonBase {
    getText(): Promise<T>
}
