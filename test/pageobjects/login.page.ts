import Page from './page';
import { Button } from './storybook/atoms/Button';
import { Input } from './storybook/atoms/Input';

class LoginPage extends Page {
    private username: Input = new Input('#username');
    private password: Input = new Input('#password');
    private submit: Button = new Button('button[type = "submit"]');

    public async login(username: string, password: string): Promise<void> {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.submit.click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
