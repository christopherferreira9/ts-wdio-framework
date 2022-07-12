import { Menu } from '../components/Menu';
import Page from './page';

class MenuPage extends Page {
    get menu(): Menu {
        return new Menu('#menu');
    }

    open() {
        return super.open('floating_menu');
    }
}

export default new MenuPage();
