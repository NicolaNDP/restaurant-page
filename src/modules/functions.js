function createHtmlElement(type, id, arrayClasses, source, content) {
    const element = document.createElement(type);
    if(id) element.id = id;
    if(arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));
    if(source) element.src = source;
    if(content) element.innerText = content;

    return element;
}

function importAll(r) {
    let file = {};
    r.keys().map((item, index) => {
         file[item.replace('./', '')] = r(item); 
        });
    return file;
}

function preloadingPage() {
    const preload = document.querySelector('.preload');
    preload.classList.remove('loaded');
}

function loadingPage() {
    let preload = document.querySelector('.preload');
    preload.classList.add('loaded');
}

function animate(elSelection, animationStyle){
    let elements = document.querySelectorAll(elSelection);
    if(elements){
        elements.forEach(element => {
            element.classList.add(animationStyle);
        })
    }
}

export {createHtmlElement, importAll, loadingPage, preloadingPage, animate}