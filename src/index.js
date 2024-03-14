import renderHeader from "./modules/header.js";
import renderMenu from "./modules/menu.js";
import renderAbout from "./modules/about.js";
import renderBottom from "./modules/bottom.js";
import renderHome from "./modules/home.js";
import { preloadingPage, loadingPage} from "./modules/functions.js";
import "./style.css"

export const content = document.querySelector('#content');

let currentPage = 'nav-home'

const renderPage = (page) => {

    preloadingPage();
    setTimeout(()=>{
    content.style = ''; //reset style (tocheck)
    while(content.children.length > 1) {
        content.children[1].remove(); //remove all except first child (header)
    }

    if(page) {
        switch (page){
            case 'nav-home':
                renderHome();
                break;
            case 'nav-menu':
                renderMenu();
                break;
            case 'nav-about':
                renderAbout();
                break;
        }
    }
    renderBottom();
    loadingPage();

    }, 500) 
};

renderHeader();
renderPage('nav-home');



const navs = document.querySelectorAll('#nav-items');

navs.forEach((nav) => {
    nav.addEventListener('click', (e) => {
       if(currentPage !== nav.classList[0]){
        renderPage(nav.classList[0]) //selection of the first class
        currentPage = nav.classList[0];
       }
    })
})

