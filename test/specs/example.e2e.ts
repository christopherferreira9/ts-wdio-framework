import { Utils } from '../utils';
import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import MenuPage from '../pageobjects/menu.page';
import logger from '@wdio/logger';

const log = logger('ExampleTestPackage')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        log.info("Starting Test...")
        Utils.logStep("Open Login Page");

        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should work with the menu component', async () => {
        log.info("Starting Test...")
        Utils.logStep("Open Login Page");
        await MenuPage.open();
        await expect(await MenuPage.menu.links.length).toBe(4);
        await Utils.takeScreenshot();
        Utils.logStep("Doing Stuff");
        expect(true).toBe(true);
    });
});
