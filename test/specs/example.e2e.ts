import Utils from '../Utils';
import LoginPage from '../pageobjects/pages/login.page';
import SecurePage from '../pageobjects/pages/secure.page';
import MenuPage from '../pageobjects/pages/menu.page';
import logger from '@wdio/logger';

const log = logger('ExampleTestPackage')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        log.info("Starting Test...")
        Utils.logStep("Open Login Page");

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
