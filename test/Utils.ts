import allureReporter from '@wdio/allure-reporter'
import { type } from 'os';


export class Utils {

    static logStep(stepName: string): void {
        allureReporter.addStep(stepName);
    }

    static takeScreenshot(): void {
        allureReporter.addAttachment('Screenshot', browser.takeScreenshot(), 'image/png');
    }

}
