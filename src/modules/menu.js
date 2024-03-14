import {content} from "../index.js"
import { createHtmlElement, importAll, loadingPage } from "./functions.js"
const images = importAll(require.context('../img/menu/', false, /\.(png|jpe?g|svg)$/))
import backgroundImage from "../img/background2.jpeg"

const dataPrimi = [
    {
        name: 'Risotto alla Milanese',
        description:  'riso allo zafferano con burro e Grana Padano',
        price: '18',
        image: 'risotto-milanese.jpeg',
    },
    {
        name: 'Pappardelle alle Lepre',
        description:  'pasta all\'uovo condita con ragù di lepre',
        price: '17',
        image: 'pappardelle-lepre.jpeg',
    },
    {
        name: 'Trofie al Pesto',
        description:  'pasta corta con pesto genovese fatto in casa',
        price: '14',
        image: 'trofie-pesto.jpeg',
    },
    {
        name: 'Orecchiette con Cime di Rapa',
        description:  'orecchiette con rape selvatiche saltate in padella con aglio e peperoncino',
        price: '14',
        image: 'orecchiette-rapa.jpeg',
    }
]

const dataSecondi = [
    {
        name: 'Cotoletta alla Milanese',
        description:  'cotoletta impanata e fritta nella tradizione milanese',
        price: '19',
        image: 'cotoletta-milanese.jpeg',
    },
    {
        name: 'Bistecca alla Fiorentina',
        description:  'tagliata di manzo, cucinata al sangue su brace di legna di quercia',
        price: '24',
        image: 'bistecca-fiorentina.jpeg',
    },
    {
        name: 'Coniglio alla Cacciatora',
        description:  'coniglio stufato con verdure, erbe aromatiche e vino bianco',
        price: '22',
        image: 'coniglio-cacciatora.jpeg',
    },
]

const sectionRender = (dataArr, appendEl) => {
    
    dataArr.forEach((plate) => {
        const subDiv = createHtmlElement('div', 'menu-subdiv', null, null, null);
        appendEl.appendChild(subDiv);

        const title = createHtmlElement('h3', 'menu-h3', null, null, plate.name);
        subDiv.appendChild(title);

        const img = createHtmlElement('img', 'menu-img', null, images[`${plate.image}`], null);
        subDiv.appendChild(img);

        const note = createHtmlElement('p', 'menu-p', null, null, plate.description);
        subDiv.appendChild(note);

        const price = createHtmlElement('p', 'menu-price', null, null, `$${plate.price}`);
        subDiv.appendChild(price);
    })
}

const render = () => {
    content.style.background = `url(${backgroundImage})`;
    
    content.appendChild(createHtmlElement('h2', 'menu-h2', null, null, 'Primi'))
    const div1 = createHtmlElement('div', 'menu-div', null, null, null);
    content.appendChild(div1);

    content.appendChild(createHtmlElement('h2', 'menu-h2', null, null, 'Secondi'))
    const div2 = createHtmlElement('div', 'menu-div', null, null, null);
    content.appendChild(div2);

    
    sectionRender(dataPrimi, div1);
    sectionRender(dataSecondi, div2);
}

export default render

