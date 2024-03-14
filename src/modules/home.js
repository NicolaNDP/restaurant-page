import {content} from "../index.js"
import { createHtmlElement, loadingPage, animate } from "../modules/functions.js"
import backgroundImage from "../img/cheesemirtilli.jpeg"

const dataArr = [
    'Your Restaurant',
    ' Indulge in our exquisite regional dishes, handcrafted pasta, and sustainable wines while surrounded by warmth, elegance, and genuine hospitality.',
    'Let us tantalize your senses and ignite your spirit as we bring Italy\'s rich gastronomic heritage to life. Arrive as strangers, depart as family.'
]

const render = () => {
    content.style.background = `url(${backgroundImage}) no-repeat top`;
    
    const div = createHtmlElement('div', 'home-div', null, null, null);
    content.appendChild(div);

    const h1 = createHtmlElement('h1', 'h1-home', ['h1-home'], null, dataArr[0]);
    div.appendChild(h1);

    const p1 = createHtmlElement('p', 'p1-home', ['p-home'], null, dataArr[1]);
    div.appendChild(p1);

    const p2 = createHtmlElement('p', 'p2-home', ['p-home'], null, dataArr[2]);
    div.appendChild(p2);

    animate('.h1-home', 'title-slow');
    animate('.p-home', 'curtain-fromleft');
}


export default render