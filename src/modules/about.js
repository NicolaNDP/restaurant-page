import {content} from "../index.js"
import { createHtmlElement, importAll, loadingPage, animate } from "../modules/functions.js"
const images = importAll(require.context('../img/about/', false, /\.(png|jpe?g|svg)$/))
import backgroundImage from "../img/background2.jpeg"

const dataText = [
    'Nestled in the vibrant city center, our elegant establishment offers an intimate setting designed to evoke memories of Italy\'s sun-drenched countryside and warm family gatherings around the table. With a focus on farm-to-table dining, our team works tirelessly to source the highest quality organic produce, ethically raised meats, and line-caught seafood directly from small-scale, local suppliers committed to environmentally friendly farming practices.',
    'Our passionate Executive Chef, brings over two decades of expertise in preparing sumptuous regional Italian dishes that delight even the most discerning palates. Drawing inspiration from his grandmother\'s kitchen, he skillfully blends age-old cooking methods with innovative twists to create mouthwatering experiences that will transport you straight to the heart of Italy. Each day begins early in our open-plan pasta workshop, where our dedicated pasta makers lovingly knead, roll, cut, and shape various types of homemade pasta—from silky ribbons of tagliatelle to tiny pearls of orzo—all prepared with stone-ground flour and eggs laid by free-range hens.',
    'Beyond the plate, we take pride in creating an atmosphere where guests feel welcomed, valued, and inspired. Our knowledgeable sommelier meticulously curates an extensive wine list featuring rare labels alongside popular favorites, ensuring there\'s something for everyone to enjoy. Meanwhile, our hospitable front-of-house staff provides attentive yet unobtrusive service tailored to meet individual preferences, resulting in personalized dining experiences that foster lasting connections among friends, families, and colleagues alike.',
    'In addition to providing exceptional cuisine and hospitality, we also recognize the importance of giving back to the community. Through partnerships with local schools, charities, and organizations devoted to protecting Italy\'s precious ecosystems, we actively contribute to initiatives aimed at empowering young people, supporting marginalized communities, and safeguarding our country\'s natural resources. By choosing to dine with us, you become part of this collective effort towards positive change, enabling us to continue sharing the beauty and bounty of Italy\'s culinary landscape while cultivating a thriving, interconnected world built upon shared values of compassion, curiosity, and conviviality.',
    'Join us at Flavor of Tradition and embark on a journey steeped in culture, passion, and purpose, where every meal serves as a testament to the power of good food, good company, and a sincere desire to make a difference. Cheers!'
]

const sectionRender = (dataArr, appendEl) => {
    dataArr.forEach((data, index) => {
    
        const p = createHtmlElement('p', 'about-p', ['about-p'], null, data);
        appendEl.appendChild(p);

        const img = createHtmlElement('img', 'about-img', ['about-img'], images[`about${index+1}.jpeg`], null);
        appendEl.appendChild(img);
    });
}

const render = () => {

    content.style.background = `url(${backgroundImage})`;
    
    const div = createHtmlElement('div', 'about-div', null, null, null);
    content.appendChild(div);
    
    sectionRender(dataText, div);

    animate('.about-img', 'curtain-fromleft');
    animate('.about-p', 'title-slow' )
}

export default render