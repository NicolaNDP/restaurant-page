import {content} from "../index.js"
import { createHtmlElement } from "../modules/functions.js"
//import {createHtmlElement} from "../modules/functions.js"

const render = () => {
    const foot = createHtmlElement('footer', 'div-footer',null, null, null);
    content.appendChild(foot);

    const socName = createHtmlElement('p', 'footer', null, null, 'Your Restaurant © 2024');
    foot.appendChild(socName);

    const mySoc = createHtmlElement('a', 'footer', null, null, 'Created by TreTorri Web Design Studio');
    foot.appendChild(mySoc);
}

export default render