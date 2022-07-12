import Page from './page';
import { Button } from '../storybook/atoms/Button';
import { Input } from '../storybook/atoms/Input';

class LoginPage extends Page {
    get username(): Input {
        return new Input('#username')
    }
    get password(): Input {
        return new Input('#password')
    }

    get submit(): Button {
        return new Button('button[type="submit"]');
    }


    async login(username: string, password: string): Promise<void> {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.submit.click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();
