import allureReporter from '@wdio/allure-reporter'

export class Utils {

    static logStep(stepName: string): void {
        allureReporter.addStep(stepName);
    }

    static async takeScreenshot(): Promise<void> {
        await browser.takeScreenshot();
        // await allureReporter.addAttachment('Screenshot', s, 'image/png');
    }

}
