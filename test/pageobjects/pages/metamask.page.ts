import { Button } from '../storybook/atoms/Button';
import { Input } from '../storybook/atoms/Input';
import Page from './page';

class MetaMaskPage extends Page {
    get password(): Input {
        return new Input('#password')
    }

    //await $('h1=Welcome to my Page')

    get unlockButton(): Button {
        return new Button('button');
    }

    async fillPasswordAndSubmit(): Promise<void> {
        await this.password.setValue('METAMASK_PASSWORD');
        await this.unlockButton.click();
    }

    open() {
        return browser.url('moz-extension://8fb22fd5-e2e0-4cf3-8048-a5df06d157ec/home.html#');
    }
}

export default new MetaMaskPage();
