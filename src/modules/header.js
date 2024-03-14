import {content} from "../index.js";
import { createHtmlElement } from "../modules/functions.js"
import icon from "../img/icon.png";

const render = () => {
    
    const header = document.createElement('header');
    content.appendChild(header);

    const span = document.createElement('span');
    header.appendChild(span);

    const img = createHtmlElement('img', 'nav-items', ['nav-home', 'head-icon'], icon, null);
    span.appendChild(img);

    const logo = createHtmlElement('h1', 'nav-items', ['nav-home', 'head-logo'], null, 'Restaurant');
    span.appendChild(logo);

    const nav = document.createElement('nav');
    header.appendChild(nav);

    const ul = document.createElement('ul');
    nav.appendChild(ul);
    const navItems = ['home', 'menu', 'about'];
    navItems.forEach((item) => 
        ul.appendChild(
            createHtmlElement('li', 'nav-items', [`nav-${item}`], null, `${item.toUpperCase()}`)
            )
    )
}

export default render
