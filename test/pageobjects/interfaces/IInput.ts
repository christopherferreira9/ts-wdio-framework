export interface IInputBase {
    setValue(value: any): Promise<void>
    clear(): Promise<void>
    getValue(): Promise<any>
    waitForInputEnabled(): Promise<void>
    isDisplayed(): Promise<boolean>
}

export interface IInput<T> extends IInputBase {
    setValue(value: T): Promise<void>
    getValue(): Promise<T>
}
