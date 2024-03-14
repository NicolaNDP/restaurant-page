/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    background-color: antiquewhite;
    margin: 0;
}

#content {
 max-width: 768px;
}

header {
    display: flex;
    width: 100%;
    height: 2.5rem;
    background-color: rgba(255, 228, 196, 0.716);
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    justify-content:space-between;
    align-items: center;
}

header > span {
    display: flex;
    align-items: center;
}

header > span > h1 {
    color: rgba(255, 228, 196, 0.396);
    margin-left: 0.6rem;
    font-style: italic;
    font-size: 1.1rem;
    cursor: pointer;
}

header > span > .head-icon {
    height: 2rem;
    cursor: pointer;
    padding: 0.1rem;
    opacity: 0.3;
} 

nav {
    display: flex;
}

nav > ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-inline-start: 0;
    margin-block: 0;
    height: 100%;
}

nav > ul > li {
    font-size: 0.7rem;
    color: rgba(255, 228, 196, 0.752);
    border-left: solid 0.1rem rgba(255, 228, 196, 0.917);
    margin: 0.2rem;
    padding: 0.2rem;
    display: block;
    cursor: pointer;
}

nav>ul>li:hover{
    color: #dfdfe2;
}
/* ------------------------home------------------------ */

#content > #home-div {
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   margin-top: 4rem;
   margin-bottom: 4rem;
}

#content > #home-div > h1 {
   font-size: 2rem;
   color: rgba(229, 202, 170, 0.917);
   font-style: italic;
   margin-top: 4rem;
   margin-bottom: 6rem;
}

#content > #home-div > p {
    background-color: rgba(228, 208, 183, 0.253);
    border-radius: 0.5rem;
    color: black;
    font-style: italic;
    margin: 1rem 4rem 1rem 4rem;
    padding: 1rem;
 }

/* ------------------------menu------------------------ */

#menu-div {
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px); /* Equal width columns */
  justify-content: space-between;
}

#menu-h2 {
  color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 100%;
}

#menu-div > #menu-subdiv{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 180px;
  height: auto;
  background-color: rgba(255, 228, 196, 0.488);
  border: solid 0.1rem rgb(255, 228, 196);
  border-radius: 0.4rem;
  margin: 0.4rem;
}

#menu-div > #menu-subdiv > h3{
  text-align: center;
  margin: 0.5rem;
  padding: 0.5rem;
}

#menu-div > #menu-subdiv > #menu-img {
  border: solid 0.1rem rgb(255, 228, 196);
  border-radius: 0.4rem;
  width: 150px;
  margin: 0 0 0 0;
}

#menu-div > #menu-subdiv > p {
  text-align: center;
  font-style: italic;
  padding: 0.1rem 0.1rem 0.1rem 0.1rem;
  margin: 0.4rem;
}

/* ------------------------about------------------------ */

#content > #about-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#content > #about-div > p {
   background-color: rgba(228, 208, 183, 0.253);
   border-radius: 0.5rem;
   color: black;
   font-style: italic;
   text-align: center;
   margin: 2rem 0rem 2rem 0rem;
   padding-left: 2rem;
   padding-right: 2rem;
   
}

#content > #about-div > img {
  margin: 1rem;
  border: solid 0.1rem rgb(255, 228, 196);
  border-radius: 0.4rem;
}

/* ------------------------footer------------------------ */
footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgba(255, 228, 196, 0.472);
    justify-content:center;
    align-items: center;
    margin: 0;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
}

footer > p {
    font-size: 0.7rem;
    margin: 0.1rem 0 0 0;
}

footer > a {
    font-size: 0.5rem;
    margin-bottom: 0.1rem;
    cursor: pointer;
}

/* ------------------------transitions and animations------------------------ */

.preload {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgb(127, 92, 48);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
}

.loaded {
  opacity: 0;
  pointer-events: none;
}

.hidden {
  opacity: 0;
}

.title-slow {
  animation: title-slow 3s ease;
}
.curtain-fromright {
  animation: curtain-fromright 2s ease;
}
.curtain-fromleft {
  animation: curtain-fromleft 2s ease;
}
.curtain-fromtop {
  animation: curtain-fromleft 2s ease;
}

@keyframes opacity-slow {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes title-slow {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes curtain-fromleft {
  from{
    opacity: 0;
    transform: translateX(-382px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes curtain-fromright {
  from{
    opacity: 0;
    transform: translateX(-382px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes curtain-fromtop {
  from {
    transform: translateY(-40px);
  }
  to {
    transform: translateY(0px);
  }
}

/* ------------------------media-query------------------------ */

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
    /* CSS */
    
  }
  
  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  
  @media (min-width: 1025px) and (max-width: 1280px) {
    
    /* CSS */
    
  }
  
  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
  
  @media (min-width: 768px) and (max-width: 1024px) {
    
    /* CSS */
    
  }
  
  /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
    /* CSS */
    
  }
  
  /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  
  @media (min-width: 481px) and (max-width: 767px) {
    
    /* CSS */
    
  }
  
  /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  
  @media (min-width: 320px) and (max-width: 480px) {
    
    /* CSS */
    
  }

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    font-size: 16px;\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: antiquewhite;\n    margin: 0;\n}\n\n#content {\n max-width: 768px;\n}\n\nheader {\n    display: flex;\n    width: 100%;\n    height: 2.5rem;\n    background-color: rgba(255, 228, 196, 0.716);\n    border-bottom-left-radius: 0.4rem;\n    border-bottom-right-radius: 0.4rem;\n    justify-content:space-between;\n    align-items: center;\n}\n\nheader > span {\n    display: flex;\n    align-items: center;\n}\n\nheader > span > h1 {\n    color: rgba(255, 228, 196, 0.396);\n    margin-left: 0.6rem;\n    font-style: italic;\n    font-size: 1.1rem;\n    cursor: pointer;\n}\n\nheader > span > .head-icon {\n    height: 2rem;\n    cursor: pointer;\n    padding: 0.1rem;\n    opacity: 0.3;\n} \n\nnav {\n    display: flex;\n}\n\nnav > ul {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    padding-inline-start: 0;\n    margin-block: 0;\n    height: 100%;\n}\n\nnav > ul > li {\n    font-size: 0.7rem;\n    color: rgba(255, 228, 196, 0.752);\n    border-left: solid 0.1rem rgba(255, 228, 196, 0.917);\n    margin: 0.2rem;\n    padding: 0.2rem;\n    display: block;\n    cursor: pointer;\n}\n\nnav>ul>li:hover{\n    color: #dfdfe2;\n}\n/* ------------------------home------------------------ */\n\n#content > #home-div {\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   text-align: center;\n   margin-top: 4rem;\n   margin-bottom: 4rem;\n}\n\n#content > #home-div > h1 {\n   font-size: 2rem;\n   color: rgba(229, 202, 170, 0.917);\n   font-style: italic;\n   margin-top: 4rem;\n   margin-bottom: 6rem;\n}\n\n#content > #home-div > p {\n    background-color: rgba(228, 208, 183, 0.253);\n    border-radius: 0.5rem;\n    color: black;\n    font-style: italic;\n    margin: 1rem 4rem 1rem 4rem;\n    padding: 1rem;\n }\n\n/* ------------------------menu------------------------ */\n\n#menu-div {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 180px); /* Equal width columns */\n  justify-content: space-between;\n}\n\n#menu-h2 {\n  color: antiquewhite;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  width: 100%;\n}\n\n#menu-div > #menu-subdiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 180px;\n  height: auto;\n  background-color: rgba(255, 228, 196, 0.488);\n  border: solid 0.1rem rgb(255, 228, 196);\n  border-radius: 0.4rem;\n  margin: 0.4rem;\n}\n\n#menu-div > #menu-subdiv > h3{\n  text-align: center;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n#menu-div > #menu-subdiv > #menu-img {\n  border: solid 0.1rem rgb(255, 228, 196);\n  border-radius: 0.4rem;\n  width: 150px;\n  margin: 0 0 0 0;\n}\n\n#menu-div > #menu-subdiv > p {\n  text-align: center;\n  font-style: italic;\n  padding: 0.1rem 0.1rem 0.1rem 0.1rem;\n  margin: 0.4rem;\n}\n\n/* ------------------------about------------------------ */\n\n#content > #about-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n#content > #about-div > p {\n   background-color: rgba(228, 208, 183, 0.253);\n   border-radius: 0.5rem;\n   color: black;\n   font-style: italic;\n   text-align: center;\n   margin: 2rem 0rem 2rem 0rem;\n   padding-left: 2rem;\n   padding-right: 2rem;\n   \n}\n\n#content > #about-div > img {\n  margin: 1rem;\n  border: solid 0.1rem rgb(255, 228, 196);\n  border-radius: 0.4rem;\n}\n\n/* ------------------------footer------------------------ */\nfooter {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    background-color: rgba(255, 228, 196, 0.472);\n    justify-content:center;\n    align-items: center;\n    margin: 0;\n    border-top-left-radius: 0.4rem;\n    border-top-right-radius: 0.4rem;\n}\n\nfooter > p {\n    font-size: 0.7rem;\n    margin: 0.1rem 0 0 0;\n}\n\nfooter > a {\n    font-size: 0.5rem;\n    margin-bottom: 0.1rem;\n    cursor: pointer;\n}\n\n/* ------------------------transitions and animations------------------------ */\n\n.preload {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgb(127, 92, 48);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.5s ease;\n}\n\n.loaded {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.title-slow {\n  animation: title-slow 3s ease;\n}\n.curtain-fromright {\n  animation: curtain-fromright 2s ease;\n}\n.curtain-fromleft {\n  animation: curtain-fromleft 2s ease;\n}\n.curtain-fromtop {\n  animation: curtain-fromleft 2s ease;\n}\n\n@keyframes opacity-slow {\n  from{\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n\n@keyframes title-slow {\n  from{\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n\n@keyframes curtain-fromleft {\n  from{\n    opacity: 0;\n    transform: translateX(-382px);\n  }\n  to{\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes curtain-fromright {\n  from{\n    opacity: 0;\n    transform: translateX(-382px);\n  }\n  to{\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes curtain-fromtop {\n  from {\n    transform: translateY(-40px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n\n/* ------------------------media-query------------------------ */\n\n/* \n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n\n@media (min-width: 1281px) {\n  \n    /* CSS */\n    \n  }\n  \n  /* \n    ##Device = Laptops, Desktops\n    ##Screen = B/w 1025px to 1280px\n  */\n  \n  @media (min-width: 1025px) and (max-width: 1280px) {\n    \n    /* CSS */\n    \n  }\n  \n  /* \n    ##Device = Tablets, Ipads (portrait)\n    ##Screen = B/w 768px to 1024px\n  */\n  \n  @media (min-width: 768px) and (max-width: 1024px) {\n    \n    /* CSS */\n    \n  }\n  \n  /* \n    ##Device = Tablets, Ipads (landscape)\n    ##Screen = B/w 768px to 1024px\n  */\n  \n  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    \n    /* CSS */\n    \n  }\n  \n  /* \n    ##Device = Low Resolution Tablets, Mobiles (Landscape)\n    ##Screen = B/w 481px to 767px\n  */\n  \n  @media (min-width: 481px) and (max-width: 767px) {\n    \n    /* CSS */\n    \n  }\n  \n  /* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n  */\n  \n  @media (min-width: 320px) and (max-width: 480px) {\n    \n    /* CSS */\n    \n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/about sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*****************************************************************!*\
  !*** ./src/img/about/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./about1.jpeg": "./src/img/about/about1.jpeg",
	"./about2.jpeg": "./src/img/about/about2.jpeg",
	"./about3.jpeg": "./src/img/about/about3.jpeg",
	"./about4.jpeg": "./src/img/about/about4.jpeg",
	"./about5.jpeg": "./src/img/about/about5.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/about sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/img/menu sync \\.(png%7Cjpe?g%7Csvg)$":
/*!****************************************************************!*\
  !*** ./src/img/menu/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bistecca-fiorentina.jpeg": "./src/img/menu/bistecca-fiorentina.jpeg",
	"./coniglio-cacciatora.jpeg": "./src/img/menu/coniglio-cacciatora.jpeg",
	"./cotoletta-milanese.jpeg": "./src/img/menu/cotoletta-milanese.jpeg",
	"./orecchiette-rapa.jpeg": "./src/img/menu/orecchiette-rapa.jpeg",
	"./pappardelle-lepre.jpeg": "./src/img/menu/pappardelle-lepre.jpeg",
	"./risotto-milanese.jpeg": "./src/img/menu/risotto-milanese.jpeg",
	"./trofie-pesto.jpeg": "./src/img/menu/trofie-pesto.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/menu sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");
/* harmony import */ var _modules_bottom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bottom.js */ "./src/modules/bottom.js");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/functions.js */ "./src/modules/functions.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const content = document.querySelector('#content');

let currentPage = 'nav-home'

const renderPage = (page) => {

    ;(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_5__.preloadingPage)();
    setTimeout(()=>{
    content.style = ''; //reset style (tocheck)
    while(content.children.length > 1) {
        content.children[1].remove(); //remove all except first child (header)
    }

    if(page) {
        switch (page){
            case 'nav-home':
                (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
                break;
            case 'nav-menu':
                (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                break;
            case 'nav-about':
                (0,_modules_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                break;
        }
    }
    (0,_modules_bottom_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_5__.loadingPage)();

    }, 500) 
};

(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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



/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/functions.js */ "./src/modules/functions.js");
/* harmony import */ var _img_background2_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background2.jpeg */ "./src/img/background2.jpeg");


const images = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.importAll)(__webpack_require__("./src/img/about sync \\.(png%7Cjpe?g%7Csvg)$"))
;

const dataText = [
    'Nestled in the vibrant city center, our elegant establishment offers an intimate setting designed to evoke memories of Italy\'s sun-drenched countryside and warm family gatherings around the table. With a focus on farm-to-table dining, our team works tirelessly to source the highest quality organic produce, ethically raised meats, and line-caught seafood directly from small-scale, local suppliers committed to environmentally friendly farming practices.',
    'Our passionate Executive Chef, brings over two decades of expertise in preparing sumptuous regional Italian dishes that delight even the most discerning palates. Drawing inspiration from his grandmother\'s kitchen, he skillfully blends age-old cooking methods with innovative twists to create mouthwatering experiences that will transport you straight to the heart of Italy. Each day begins early in our open-plan pasta workshop, where our dedicated pasta makers lovingly knead, roll, cut, and shape various types of homemade pasta—from silky ribbons of tagliatelle to tiny pearls of orzo—all prepared with stone-ground flour and eggs laid by free-range hens.',
    'Beyond the plate, we take pride in creating an atmosphere where guests feel welcomed, valued, and inspired. Our knowledgeable sommelier meticulously curates an extensive wine list featuring rare labels alongside popular favorites, ensuring there\'s something for everyone to enjoy. Meanwhile, our hospitable front-of-house staff provides attentive yet unobtrusive service tailored to meet individual preferences, resulting in personalized dining experiences that foster lasting connections among friends, families, and colleagues alike.',
    'In addition to providing exceptional cuisine and hospitality, we also recognize the importance of giving back to the community. Through partnerships with local schools, charities, and organizations devoted to protecting Italy\'s precious ecosystems, we actively contribute to initiatives aimed at empowering young people, supporting marginalized communities, and safeguarding our country\'s natural resources. By choosing to dine with us, you become part of this collective effort towards positive change, enabling us to continue sharing the beauty and bounty of Italy\'s culinary landscape while cultivating a thriving, interconnected world built upon shared values of compassion, curiosity, and conviviality.',
    'Join us at Flavor of Tradition and embark on a journey steeped in culture, passion, and purpose, where every meal serves as a testament to the power of good food, good company, and a sincere desire to make a difference. Cheers!'
]

const sectionRender = (dataArr, appendEl) => {
    dataArr.forEach((data, index) => {
    
        const p = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'about-p', ['about-p'], null, data);
        appendEl.appendChild(p);

        const img = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'about-img', ['about-img'], images[`about${index+1}.jpeg`], null);
        appendEl.appendChild(img);
    });
}

const render = () => {

    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.style.background = `url(${_img_background2_jpeg__WEBPACK_IMPORTED_MODULE_2__})`;
    
    const div = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'about-div', null, null, null);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div);
    
    sectionRender(dataText, div);

    (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.animate)('.about-img', 'curtain-fromleft');
    (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.animate)('.about-p', 'title-slow' )
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/modules/bottom.js":
/*!*******************************!*\
  !*** ./src/modules/bottom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/functions.js */ "./src/modules/functions.js");


//import {createHtmlElement} from "../modules/functions.js"

const render = () => {
    const foot = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('footer', 'div-footer',null, null, null);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(foot);

    const socName = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'footer', null, null, 'Your Restaurant © 2024');
    foot.appendChild(socName);

    const mySoc = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('a', 'footer', null, null, 'Created by TreTorri Web Design Studio');
    foot.appendChild(mySoc);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animate: () => (/* binding */ animate),
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement),
/* harmony export */   importAll: () => (/* binding */ importAll),
/* harmony export */   loadingPage: () => (/* binding */ loadingPage),
/* harmony export */   preloadingPage: () => (/* binding */ preloadingPage)
/* harmony export */ });
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



/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/functions.js */ "./src/modules/functions.js");
/* harmony import */ var _img_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icon.png */ "./src/img/icon.png");




const render = () => {
    
    const header = document.createElement('header');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(header);

    const span = document.createElement('span');
    header.appendChild(span);

    const img = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'nav-items', ['nav-home', 'head-icon'], _img_icon_png__WEBPACK_IMPORTED_MODULE_2__, null);
    span.appendChild(img);

    const logo = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h1', 'nav-items', ['nav-home', 'head-logo'], null, 'Restaurant');
    span.appendChild(logo);

    const nav = document.createElement('nav');
    header.appendChild(nav);

    const ul = document.createElement('ul');
    nav.appendChild(ul);
    const navItems = ['home', 'menu', 'about'];
    navItems.forEach((item) => 
        ul.appendChild(
            (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('li', 'nav-items', [`nav-${item}`], null, `${item.toUpperCase()}`)
            )
    )
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/functions.js */ "./src/modules/functions.js");
/* harmony import */ var _img_cheesemirtilli_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/cheesemirtilli.jpeg */ "./src/img/cheesemirtilli.jpeg");




const dataArr = [
    'Your Restaurant',
    ' Indulge in our exquisite regional dishes, handcrafted pasta, and sustainable wines while surrounded by warmth, elegance, and genuine hospitality.',
    'Let us tantalize your senses and ignite your spirit as we bring Italy\'s rich gastronomic heritage to life. Arrive as strangers, depart as family.'
]

const render = () => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.style.background = `url(${_img_cheesemirtilli_jpeg__WEBPACK_IMPORTED_MODULE_2__}) no-repeat top`;
    
    const div = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'home-div', null, null, null);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div);

    const h1 = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h1', 'h1-home', ['h1-home'], null, dataArr[0]);
    div.appendChild(h1);

    const p1 = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'p1-home', ['p-home'], null, dataArr[1]);
    div.appendChild(p1);

    const p2 = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'p2-home', ['p-home'], null, dataArr[2]);
    div.appendChild(p2);

    (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.animate)('.h1-home', 'title-slow');
    (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.animate)('.p-home', 'curtain-fromleft');
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/modules/functions.js");
/* harmony import */ var _img_background2_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background2.jpeg */ "./src/img/background2.jpeg");


const images = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.importAll)(__webpack_require__("./src/img/menu sync \\.(png%7Cjpe?g%7Csvg)$"))
;

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
        const subDiv = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'menu-subdiv', null, null, null);
        appendEl.appendChild(subDiv);

        const title = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h3', 'menu-h3', null, null, plate.name);
        subDiv.appendChild(title);

        const img = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('img', 'menu-img', null, images[`${plate.image}`], null);
        subDiv.appendChild(img);

        const note = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'menu-p', null, null, plate.description);
        subDiv.appendChild(note);

        const price = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'menu-price', null, null, `$${plate.price}`);
        subDiv.appendChild(price);
    })
}

const render = () => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.style.background = `url(${_img_background2_jpeg__WEBPACK_IMPORTED_MODULE_2__})`;
    
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'menu-h2', null, null, 'Primi'))
    const div1 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'menu-div', null, null, null);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div1);

    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('h2', 'menu-h2', null, null, 'Secondi'))
    const div2 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'menu-div', null, null, null);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div2);

    
    sectionRender(dataPrimi, div1);
    sectionRender(dataSecondi, div2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);



/***/ }),

/***/ "./src/img/about/about1.jpeg":
/*!***********************************!*\
  !*** ./src/img/about/about1.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d4e4673c6159f5dd5248.jpeg";

/***/ }),

/***/ "./src/img/about/about2.jpeg":
/*!***********************************!*\
  !*** ./src/img/about/about2.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e5b281a9c1fa285aab61.jpeg";

/***/ }),

/***/ "./src/img/about/about3.jpeg":
/*!***********************************!*\
  !*** ./src/img/about/about3.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2e3b506aaf47ab3becc7.jpeg";

/***/ }),

/***/ "./src/img/about/about4.jpeg":
/*!***********************************!*\
  !*** ./src/img/about/about4.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "acd74c76f391608b6973.jpeg";

/***/ }),

/***/ "./src/img/about/about5.jpeg":
/*!***********************************!*\
  !*** ./src/img/about/about5.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5731f8c9dfd8467a18dd.jpeg";

/***/ }),

/***/ "./src/img/background2.jpeg":
/*!**********************************!*\
  !*** ./src/img/background2.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ec23673141ebef93b949.jpeg";

/***/ }),

/***/ "./src/img/cheesemirtilli.jpeg":
/*!*************************************!*\
  !*** ./src/img/cheesemirtilli.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c688ca843c97e2400b12.jpeg";

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d1e8677ddb3eb1fe7981.png";

/***/ }),

/***/ "./src/img/menu/bistecca-fiorentina.jpeg":
/*!***********************************************!*\
  !*** ./src/img/menu/bistecca-fiorentina.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "623c9d6f46ae9a445207.jpeg";

/***/ }),

/***/ "./src/img/menu/coniglio-cacciatora.jpeg":
/*!***********************************************!*\
  !*** ./src/img/menu/coniglio-cacciatora.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "490cb1cbc3330c43e808.jpeg";

/***/ }),

/***/ "./src/img/menu/cotoletta-milanese.jpeg":
/*!**********************************************!*\
  !*** ./src/img/menu/cotoletta-milanese.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b037eacb150bd854801a.jpeg";

/***/ }),

/***/ "./src/img/menu/orecchiette-rapa.jpeg":
/*!********************************************!*\
  !*** ./src/img/menu/orecchiette-rapa.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3d369d8d263803de2d1c.jpeg";

/***/ }),

/***/ "./src/img/menu/pappardelle-lepre.jpeg":
/*!*********************************************!*\
  !*** ./src/img/menu/pappardelle-lepre.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af8d5b7af49377756192.jpeg";

/***/ }),

/***/ "./src/img/menu/risotto-milanese.jpeg":
/*!********************************************!*\
  !*** ./src/img/menu/risotto-milanese.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "954d54c87e4d43db0257.jpeg";

/***/ }),

/***/ "./src/img/menu/trofie-pesto.jpeg":
/*!****************************************!*\
  !*** ./src/img/menu/trofie-pesto.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "69adf726aeaf20e3773b.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLHdCQUF3QixhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFV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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2ltZy9hYm91dC8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbWcvbWVudS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvYm90dG9tLmpzIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMDVfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLzA1X3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8wNV9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY29udGVudCB7XG4gbWF4LXdpZHRoOiA3NjhweDtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43MTYpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNHJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40cmVtO1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyID4gc3BhbiA+IGgxIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjM5Nik7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oZWFkZXIgPiBzcGFuID4gLmhlYWQtaWNvbiB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjFyZW07XG4gICAgb3BhY2l0eTogMC4zO1xufSBcblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5uYXYgPiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAgIG1hcmdpbi1ibG9jazogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5hdiA+IHVsID4gbGkge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzUyKTtcbiAgICBib3JkZXItbGVmdDogc29saWQgMC4xcmVtIHJnYmEoMjU1LCAyMjgsIDE5NiwgMC45MTcpO1xuICAgIG1hcmdpbjogMC4ycmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdj51bD5saTpob3ZlcntcbiAgICBjb2xvcjogI2RmZGZlMjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWhvbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NvbnRlbnQgPiAjaG9tZS1kaXYge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIG1hcmdpbi10b3A6IDRyZW07XG4gICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4jY29udGVudCA+ICNob21lLWRpdiA+IGgxIHtcbiAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgIGNvbG9yOiByZ2JhKDIyOSwgMjAyLCAxNzAsIDAuOTE3KTtcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgIG1hcmdpbi10b3A6IDRyZW07XG4gICBtYXJnaW4tYm90dG9tOiA2cmVtO1xufVxuXG4jY29udGVudCA+ICNob21lLWRpdiA+IHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAyMDgsIDE4MywgMC4yNTMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbjogMXJlbSA0cmVtIDFyZW0gNHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuIH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jbWVudS1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDE4MHB4KTsgLyogRXF1YWwgd2lkdGggY29sdW1ucyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNtZW51LWgyIHtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI21lbnUtZGl2ID4gI21lbnUtc3ViZGl2e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjQ4OCk7XG4gIGJvcmRlcjogc29saWQgMC4xcmVtIHJnYigyNTUsIDIyOCwgMTk2KTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBtYXJnaW46IDAuNHJlbTtcbn1cblxuI21lbnUtZGl2ID4gI21lbnUtc3ViZGl2ID4gaDN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuI21lbnUtZGl2ID4gI21lbnUtc3ViZGl2ID4gI21lbnUtaW1nIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gcmdiKDI1NSwgMjI4LCAxOTYpO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xufVxuXG4jbWVudS1kaXYgPiAjbWVudS1zdWJkaXYgPiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjFyZW0gMC4xcmVtIDAuMXJlbTtcbiAgbWFyZ2luOiAwLjRyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWFib3V0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjb250ZW50ID4gI2Fib3V0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50ID4gI2Fib3V0LWRpdiA+IHAge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIwOCwgMTgzLCAwLjI1Myk7XG4gICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICBjb2xvcjogYmxhY2s7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBtYXJnaW46IDJyZW0gMHJlbSAycmVtIDByZW07XG4gICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgXG59XG5cbiNjb250ZW50ID4gI2Fib3V0LWRpdiA+IGltZyB7XG4gIG1hcmdpbjogMXJlbTtcbiAgYm9yZGVyOiBzb2xpZCAwLjFyZW0gcmdiKDI1NSwgMjI4LCAxOTYpO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjQ3Mik7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjRyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNHJlbTtcbn1cblxuZm9vdGVyID4gcCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgbWFyZ2luOiAwLjFyZW0gMCAwIDA7XG59XG5cbmZvb3RlciA+IGEge1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXRyYW5zaXRpb25zIGFuZCBhbmltYXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5wcmVsb2FkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTI3LCA5MiwgNDgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XG59XG5cbi5sb2FkZWQge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50aXRsZS1zbG93IHtcbiAgYW5pbWF0aW9uOiB0aXRsZS1zbG93IDNzIGVhc2U7XG59XG4uY3VydGFpbi1mcm9tcmlnaHQge1xuICBhbmltYXRpb246IGN1cnRhaW4tZnJvbXJpZ2h0IDJzIGVhc2U7XG59XG4uY3VydGFpbi1mcm9tbGVmdCB7XG4gIGFuaW1hdGlvbjogY3VydGFpbi1mcm9tbGVmdCAycyBlYXNlO1xufVxuLmN1cnRhaW4tZnJvbXRvcCB7XG4gIGFuaW1hdGlvbjogY3VydGFpbi1mcm9tbGVmdCAycyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIG9wYWNpdHktc2xvdyB7XG4gIGZyb217XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0b3tcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUtc2xvdyB7XG4gIGZyb217XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0b3tcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY3VydGFpbi1mcm9tbGVmdCB7XG4gIGZyb217XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM4MnB4KTtcbiAgfVxuICB0b3tcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY3VydGFpbi1mcm9tcmlnaHQge1xuICBmcm9te1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zODJweCk7XG4gIH1cbiAgdG97XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGN1cnRhaW4tZnJvbXRvcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLW1lZGlhLXF1ZXJ5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIFxuICAjI0RldmljZSA9IERlc2t0b3BzXG4gICMjU2NyZWVuID0gMTI4MXB4IHRvIGhpZ2hlciByZXNvbHV0aW9uIGRlc2t0b3BzXG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIFxuICAgIC8qIENTUyAqL1xuICAgIFxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxuICAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgIFxuICAgIC8qIENTUyAqL1xuICAgIFxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcbiAgICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcbiAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIFxuICAgIC8qIENTUyAqL1xuICAgIFxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4gICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIFxuICAgIC8qIENTUyAqL1xuICAgIFxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweFxuICAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBcbiAgICAvKiBDU1MgKi9cbiAgICBcbiAgfVxuICBcbiAgLyogXG4gICAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxuICAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBcbiAgICAvKiBDU1MgKi9cbiAgICBcbiAgfVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCw0Q0FBNEM7SUFDNUMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIs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VTtJQUNWLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBLGdFQUFnRTs7QUFFaEU7OztDQUdDOztBQUVEOztJQUVJLFFBQVE7O0VBRVY7O0VBRUE7OztHQUdDOztFQUVEOztJQUVFLFFBQVE7O0VBRVY7O0VBRUE7OztHQUdDOztFQUVEOztJQUVFLFFBQVE7O0VBRVY7O0VBRUE7OztHQUdDOztFQUVEOztJQUVFLFFBQVE7O0VBRVY7O0VBRUE7OztHQUdDOztFQUVEOztJQUVFLFFBQVE7O0VBRVY7O0VBRUE7OztHQUdDOztFQUVEOztJQUVFLFFBQVE7O0VBRVZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiBtYXgtd2lkdGg6IDc2OHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC43MTYpO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjRyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjRyZW07XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgPiBzcGFuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyID4gc3BhbiA+IGgxIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC4zOTYpO1xcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciA+IHNwYW4gPiAuaGVhZC1pY29uIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn0gXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIG1hcmdpbi1ibG9jazogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5uYXYgPiB1bCA+IGxpIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuNzUyKTtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuMXJlbSByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuOTE3KTtcXG4gICAgbWFyZ2luOiAwLjJyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2PnVsPmxpOmhvdmVye1xcbiAgICBjb2xvcjogI2RmZGZlMjtcXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0taG9tZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250ZW50ID4gI2hvbWUtZGl2IHtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG59XFxuXFxuI2NvbnRlbnQgPiAjaG9tZS1kaXYgPiBoMSB7XFxuICAgZm9udC1zaXplOiAycmVtO1xcbiAgIGNvbG9yOiByZ2JhKDIyOSwgMjAyLCAxNzAsIDAuOTE3KTtcXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICBtYXJnaW4tYm90dG9tOiA2cmVtO1xcbn1cXG5cXG4jY29udGVudCA+ICNob21lLWRpdiA+IHAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMjA4LCAxODMsIDAuMjUzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiAxcmVtIDRyZW0gMXJlbSA0cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiB9XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNtZW51LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxODBweCk7IC8qIEVxdWFsIHdpZHRoIGNvbHVtbnMgKi9cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI21lbnUtaDIge1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbWVudS1kaXYgPiAjbWVudS1zdWJkaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyOCwgMTk2LCAwLjQ4OCk7XFxuICBib3JkZXI6IHNvbGlkIDAuMXJlbSByZ2IoMjU1LCAyMjgsIDE5Nik7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBtYXJnaW46IDAuNHJlbTtcXG59XFxuXFxuI21lbnUtZGl2ID4gI21lbnUtc3ViZGl2ID4gaDN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI21lbnUtZGl2ID4gI21lbnUtc3ViZGl2ID4gI21lbnUtaW1nIHtcXG4gIGJvcmRlcjogc29saWQgMC4xcmVtIHJnYigyNTUsIDIyOCwgMTk2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuXFxuI21lbnUtZGl2ID4gI21lbnUtc3ViZGl2ID4gcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBwYWRkaW5nOiAwLjFyZW0gMC4xcmVtIDAuMXJlbSAwLjFyZW07XFxuICBtYXJnaW46IDAuNHJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYWJvdXQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGVudCA+ICNhYm91dC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgPiAjYWJvdXQtZGl2ID4gcCB7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDIwOCwgMTgzLCAwLjI1Myk7XFxuICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgIGNvbG9yOiBibGFjaztcXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIG1hcmdpbjogMnJlbSAwcmVtIDJyZW0gMHJlbTtcXG4gICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICBcXG59XFxuXFxuI2NvbnRlbnQgPiAjYWJvdXQtZGl2ID4gaW1nIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlcjogc29saWQgMC4xcmVtIHJnYigyNTUsIDIyOCwgMTk2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZm9vdGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC40NzIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNHJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuZm9vdGVyID4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICBtYXJnaW46IDAuMXJlbSAwIDAgMDtcXG59XFxuXFxuZm9vdGVyID4gYSB7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tdHJhbnNpdGlvbnMgYW5kIGFuaW1hdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJlbG9hZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTI3LCA5MiwgNDgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG5cXG4ubG9hZGVkIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udGl0bGUtc2xvdyB7XFxuICBhbmltYXRpb246IHRpdGxlLXNsb3cgM3MgZWFzZTtcXG59XFxuLmN1cnRhaW4tZnJvbXJpZ2h0IHtcXG4gIGFuaW1hdGlvbjogY3VydGFpbi1mcm9tcmlnaHQgMnMgZWFzZTtcXG59XFxuLmN1cnRhaW4tZnJvbWxlZnQge1xcbiAgYW5pbWF0aW9uOiBjdXJ0YWluLWZyb21sZWZ0IDJzIGVhc2U7XFxufVxcbi5jdXJ0YWluLWZyb210b3Age1xcbiAgYW5pbWF0aW9uOiBjdXJ0YWluLWZyb21sZWZ0IDJzIGVhc2U7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BhY2l0eS1zbG93IHtcXG4gIGZyb217XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0b3tcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aXRsZS1zbG93IHtcXG4gIGZyb217XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0b3tcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjdXJ0YWluLWZyb21sZWZ0IHtcXG4gIGZyb217XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzgycHgpO1xcbiAgfVxcbiAgdG97XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGN1cnRhaW4tZnJvbXJpZ2h0IHtcXG4gIGZyb217XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzgycHgpO1xcbiAgfVxcbiAgdG97XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGN1cnRhaW4tZnJvbXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLW1lZGlhLXF1ZXJ5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogXFxuICAjI0RldmljZSA9IERlc2t0b3BzXFxuICAjI1NjcmVlbiA9IDEyODFweCB0byBoaWdoZXIgcmVzb2x1dGlvbiBkZXNrdG9wc1xcbiovXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xcbiAgXFxuICAgIC8qIENTUyAqL1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogXFxuICAgICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHNcXG4gICAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxcbiAgKi9cXG4gIFxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcbiAgICBcXG4gICAgLyogQ1NTICovXFxuICAgIFxcbiAgfVxcbiAgXFxuICAvKiBcXG4gICAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXFxuICAgICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxcbiAgKi9cXG4gIFxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIFxcbiAgICAvKiBDU1MgKi9cXG4gICAgXFxuICB9XFxuICBcXG4gIC8qIFxcbiAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXFxuICAgICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxcbiAgKi9cXG4gIFxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gICAgXFxuICAgIC8qIENTUyAqL1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogXFxuICAgICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxcbiAgICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweFxcbiAgKi9cXG4gIFxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgXFxuICAgIC8qIENTUyAqL1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLyogXFxuICAgICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXFxuICAgICMjU2NyZWVuID0gQi93IDMyMHB4IHRvIDQ3OXB4XFxuICAqL1xcbiAgXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICBcXG4gICAgLyogQ1NTICovXFxuICAgIFxcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWJvdXQxLmpwZWdcIjogXCIuL3NyYy9pbWcvYWJvdXQvYWJvdXQxLmpwZWdcIixcblx0XCIuL2Fib3V0Mi5qcGVnXCI6IFwiLi9zcmMvaW1nL2Fib3V0L2Fib3V0Mi5qcGVnXCIsXG5cdFwiLi9hYm91dDMuanBlZ1wiOiBcIi4vc3JjL2ltZy9hYm91dC9hYm91dDMuanBlZ1wiLFxuXHRcIi4vYWJvdXQ0LmpwZWdcIjogXCIuL3NyYy9pbWcvYWJvdXQvYWJvdXQ0LmpwZWdcIixcblx0XCIuL2Fib3V0NS5qcGVnXCI6IFwiLi9zcmMvaW1nL2Fib3V0L2Fib3V0NS5qcGVnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZy9hYm91dCBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmlzdGVjY2EtZmlvcmVudGluYS5qcGVnXCI6IFwiLi9zcmMvaW1nL21lbnUvYmlzdGVjY2EtZmlvcmVudGluYS5qcGVnXCIsXG5cdFwiLi9jb25pZ2xpby1jYWNjaWF0b3JhLmpwZWdcIjogXCIuL3NyYy9pbWcvbWVudS9jb25pZ2xpby1jYWNjaWF0b3JhLmpwZWdcIixcblx0XCIuL2NvdG9sZXR0YS1taWxhbmVzZS5qcGVnXCI6IFwiLi9zcmMvaW1nL21lbnUvY290b2xldHRhLW1pbGFuZXNlLmpwZWdcIixcblx0XCIuL29yZWNjaGlldHRlLXJhcGEuanBlZ1wiOiBcIi4vc3JjL2ltZy9tZW51L29yZWNjaGlldHRlLXJhcGEuanBlZ1wiLFxuXHRcIi4vcGFwcGFyZGVsbGUtbGVwcmUuanBlZ1wiOiBcIi4vc3JjL2ltZy9tZW51L3BhcHBhcmRlbGxlLWxlcHJlLmpwZWdcIixcblx0XCIuL3Jpc290dG8tbWlsYW5lc2UuanBlZ1wiOiBcIi4vc3JjL2ltZy9tZW51L3Jpc290dG8tbWlsYW5lc2UuanBlZ1wiLFxuXHRcIi4vdHJvZmllLXBlc3RvLmpwZWdcIjogXCIuL3NyYy9pbWcvbWVudS90cm9maWUtcGVzdG8uanBlZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcvbWVudSBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJpbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gXCIuL21vZHVsZXMvaGVhZGVyLmpzXCI7XG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnUuanNcIjtcbmltcG9ydCByZW5kZXJBYm91dCBmcm9tIFwiLi9tb2R1bGVzL2Fib3V0LmpzXCI7XG5pbXBvcnQgcmVuZGVyQm90dG9tIGZyb20gXCIuL21vZHVsZXMvYm90dG9tLmpzXCI7XG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWUuanNcIjtcbmltcG9ydCB7IHByZWxvYWRpbmdQYWdlLCBsb2FkaW5nUGFnZX0gZnJvbSBcIi4vbW9kdWxlcy9mdW5jdGlvbnMuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sZXQgY3VycmVudFBhZ2UgPSAnbmF2LWhvbWUnXG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAocGFnZSkgPT4ge1xuXG4gICAgcHJlbG9hZGluZ1BhZ2UoKTtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgY29udGVudC5zdHlsZSA9ICcnOyAvL3Jlc2V0IHN0eWxlICh0b2NoZWNrKVxuICAgIHdoaWxlKGNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICBjb250ZW50LmNoaWxkcmVuWzFdLnJlbW92ZSgpOyAvL3JlbW92ZSBhbGwgZXhjZXB0IGZpcnN0IGNoaWxkIChoZWFkZXIpXG4gICAgfVxuXG4gICAgaWYocGFnZSkge1xuICAgICAgICBzd2l0Y2ggKHBhZ2Upe1xuICAgICAgICAgICAgY2FzZSAnbmF2LWhvbWUnOlxuICAgICAgICAgICAgICAgIHJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25hdi1tZW51JzpcbiAgICAgICAgICAgICAgICByZW5kZXJNZW51KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICduYXYtYWJvdXQnOlxuICAgICAgICAgICAgICAgIHJlbmRlckFib3V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyQm90dG9tKCk7XG4gICAgbG9hZGluZ1BhZ2UoKTtcblxuICAgIH0sIDUwMCkgXG59O1xuXG5yZW5kZXJIZWFkZXIoKTtcbnJlbmRlclBhZ2UoJ25hdi1ob21lJyk7XG5cblxuXG5jb25zdCBuYXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25hdi1pdGVtcycpO1xuXG5uYXZzLmZvckVhY2goKG5hdikgPT4ge1xuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgaWYoY3VycmVudFBhZ2UgIT09IG5hdi5jbGFzc0xpc3RbMF0pe1xuICAgICAgICByZW5kZXJQYWdlKG5hdi5jbGFzc0xpc3RbMF0pIC8vc2VsZWN0aW9uIG9mIHRoZSBmaXJzdCBjbGFzc1xuICAgICAgICBjdXJyZW50UGFnZSA9IG5hdi5jbGFzc0xpc3RbMF07XG4gICAgICAgfVxuICAgIH0pXG59KVxuXG4iLCJpbXBvcnQge2NvbnRlbnR9IGZyb20gXCIuLi9pbmRleC5qc1wiXG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCwgaW1wb3J0QWxsLCBsb2FkaW5nUGFnZSwgYW5pbWF0ZSB9IGZyb20gXCIuLi9tb2R1bGVzL2Z1bmN0aW9ucy5qc1wiXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9pbWcvYWJvdXQvJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpXG5pbXBvcnQgYmFja2dyb3VuZEltYWdlIGZyb20gXCIuLi9pbWcvYmFja2dyb3VuZDIuanBlZ1wiXG5cbmNvbnN0IGRhdGFUZXh0ID0gW1xuICAgICdOZXN0bGVkIGluIHRoZSB2aWJyYW50IGNpdHkgY2VudGVyLCBvdXIgZWxlZ2FudCBlc3RhYmxpc2htZW50IG9mZmVycyBhbiBpbnRpbWF0ZSBzZXR0aW5nIGRlc2lnbmVkIHRvIGV2b2tlIG1lbW9yaWVzIG9mIEl0YWx5XFwncyBzdW4tZHJlbmNoZWQgY291bnRyeXNpZGUgYW5kIHdhcm0gZmFtaWx5IGdhdGhlcmluZ3MgYXJvdW5kIHRoZSB0YWJsZS4gV2l0aCBhIGZvY3VzIG9uIGZhcm0tdG8tdGFibGUgZGluaW5nLCBvdXIgdGVhbSB3b3JrcyB0aXJlbGVzc2x5IHRvIHNvdXJjZSB0aGUgaGlnaGVzdCBxdWFsaXR5IG9yZ2FuaWMgcHJvZHVjZSwgZXRoaWNhbGx5IHJhaXNlZCBtZWF0cywgYW5kIGxpbmUtY2F1Z2h0IHNlYWZvb2QgZGlyZWN0bHkgZnJvbSBzbWFsbC1zY2FsZSwgbG9jYWwgc3VwcGxpZXJzIGNvbW1pdHRlZCB0byBlbnZpcm9ubWVudGFsbHkgZnJpZW5kbHkgZmFybWluZyBwcmFjdGljZXMuJyxcbiAgICAnT3VyIHBhc3Npb25hdGUgRXhlY3V0aXZlIENoZWYsIGJyaW5ncyBvdmVyIHR3byBkZWNhZGVzIG9mIGV4cGVydGlzZSBpbiBwcmVwYXJpbmcgc3VtcHR1b3VzIHJlZ2lvbmFsIEl0YWxpYW4gZGlzaGVzIHRoYXQgZGVsaWdodCBldmVuIHRoZSBtb3N0IGRpc2Nlcm5pbmcgcGFsYXRlcy4gRHJhd2luZyBpbnNwaXJhdGlvbiBmcm9tIGhpcyBncmFuZG1vdGhlclxcJ3Mga2l0Y2hlbiwgaGUgc2tpbGxmdWxseSBibGVuZHMgYWdlLW9sZCBjb29raW5nIG1ldGhvZHMgd2l0aCBpbm5vdmF0aXZlIHR3aXN0cyB0byBjcmVhdGUgbW91dGh3YXRlcmluZyBleHBlcmllbmNlcyB0aGF0IHdpbGwgdHJhbnNwb3J0IHlvdSBzdHJhaWdodCB0byB0aGUgaGVhcnQgb2YgSXRhbHkuIEVhY2ggZGF5IGJlZ2lucyBlYXJseSBpbiBvdXIgb3Blbi1wbGFuIHBhc3RhIHdvcmtzaG9wLCB3aGVyZSBvdXIgZGVkaWNhdGVkIHBhc3RhIG1ha2VycyBsb3ZpbmdseSBrbmVhZCwgcm9sbCwgY3V0LCBhbmQgc2hhcGUgdmFyaW91cyB0eXBlcyBvZiBob21lbWFkZSBwYXN0YeKAlGZyb20gc2lsa3kgcmliYm9ucyBvZiB0YWdsaWF0ZWxsZSB0byB0aW55IHBlYXJscyBvZiBvcnpv4oCUYWxsIHByZXBhcmVkIHdpdGggc3RvbmUtZ3JvdW5kIGZsb3VyIGFuZCBlZ2dzIGxhaWQgYnkgZnJlZS1yYW5nZSBoZW5zLicsXG4gICAgJ0JleW9uZCB0aGUgcGxhdGUsIHdlIHRha2UgcHJpZGUgaW4gY3JlYXRpbmcgYW4gYXRtb3NwaGVyZSB3aGVyZSBndWVzdHMgZmVlbCB3ZWxjb21lZCwgdmFsdWVkLCBhbmQgaW5zcGlyZWQuIE91ciBrbm93bGVkZ2VhYmxlIHNvbW1lbGllciBtZXRpY3Vsb3VzbHkgY3VyYXRlcyBhbiBleHRlbnNpdmUgd2luZSBsaXN0IGZlYXR1cmluZyByYXJlIGxhYmVscyBhbG9uZ3NpZGUgcG9wdWxhciBmYXZvcml0ZXMsIGVuc3VyaW5nIHRoZXJlXFwncyBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lIHRvIGVuam95LiBNZWFud2hpbGUsIG91ciBob3NwaXRhYmxlIGZyb250LW9mLWhvdXNlIHN0YWZmIHByb3ZpZGVzIGF0dGVudGl2ZSB5ZXQgdW5vYnRydXNpdmUgc2VydmljZSB0YWlsb3JlZCB0byBtZWV0IGluZGl2aWR1YWwgcHJlZmVyZW5jZXMsIHJlc3VsdGluZyBpbiBwZXJzb25hbGl6ZWQgZGluaW5nIGV4cGVyaWVuY2VzIHRoYXQgZm9zdGVyIGxhc3RpbmcgY29ubmVjdGlvbnMgYW1vbmcgZnJpZW5kcywgZmFtaWxpZXMsIGFuZCBjb2xsZWFndWVzIGFsaWtlLicsXG4gICAgJ0luIGFkZGl0aW9uIHRvIHByb3ZpZGluZyBleGNlcHRpb25hbCBjdWlzaW5lIGFuZCBob3NwaXRhbGl0eSwgd2UgYWxzbyByZWNvZ25pemUgdGhlIGltcG9ydGFuY2Ugb2YgZ2l2aW5nIGJhY2sgdG8gdGhlIGNvbW11bml0eS4gVGhyb3VnaCBwYXJ0bmVyc2hpcHMgd2l0aCBsb2NhbCBzY2hvb2xzLCBjaGFyaXRpZXMsIGFuZCBvcmdhbml6YXRpb25zIGRldm90ZWQgdG8gcHJvdGVjdGluZyBJdGFseVxcJ3MgcHJlY2lvdXMgZWNvc3lzdGVtcywgd2UgYWN0aXZlbHkgY29udHJpYnV0ZSB0byBpbml0aWF0aXZlcyBhaW1lZCBhdCBlbXBvd2VyaW5nIHlvdW5nIHBlb3BsZSwgc3VwcG9ydGluZyBtYXJnaW5hbGl6ZWQgY29tbXVuaXRpZXMsIGFuZCBzYWZlZ3VhcmRpbmcgb3VyIGNvdW50cnlcXCdzIG5hdHVyYWwgcmVzb3VyY2VzLiBCeSBjaG9vc2luZyB0byBkaW5lIHdpdGggdXMsIHlvdSBiZWNvbWUgcGFydCBvZiB0aGlzIGNvbGxlY3RpdmUgZWZmb3J0IHRvd2FyZHMgcG9zaXRpdmUgY2hhbmdlLCBlbmFibGluZyB1cyB0byBjb250aW51ZSBzaGFyaW5nIHRoZSBiZWF1dHkgYW5kIGJvdW50eSBvZiBJdGFseVxcJ3MgY3VsaW5hcnkgbGFuZHNjYXBlIHdoaWxlIGN1bHRpdmF0aW5nIGEgdGhyaXZpbmcsIGludGVyY29ubmVjdGVkIHdvcmxkIGJ1aWx0IHVwb24gc2hhcmVkIHZhbHVlcyBvZiBjb21wYXNzaW9uLCBjdXJpb3NpdHksIGFuZCBjb252aXZpYWxpdHkuJyxcbiAgICAnSm9pbiB1cyBhdCBGbGF2b3Igb2YgVHJhZGl0aW9uIGFuZCBlbWJhcmsgb24gYSBqb3VybmV5IHN0ZWVwZWQgaW4gY3VsdHVyZSwgcGFzc2lvbiwgYW5kIHB1cnBvc2UsIHdoZXJlIGV2ZXJ5IG1lYWwgc2VydmVzIGFzIGEgdGVzdGFtZW50IHRvIHRoZSBwb3dlciBvZiBnb29kIGZvb2QsIGdvb2QgY29tcGFueSwgYW5kIGEgc2luY2VyZSBkZXNpcmUgdG8gbWFrZSBhIGRpZmZlcmVuY2UuIENoZWVycyEnXG5dXG5cbmNvbnN0IHNlY3Rpb25SZW5kZXIgPSAoZGF0YUFyciwgYXBwZW5kRWwpID0+IHtcbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgXG4gICAgICAgIGNvbnN0IHAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdhYm91dC1wJywgWydhYm91dC1wJ10sIG51bGwsIGRhdGEpO1xuICAgICAgICBhcHBlbmRFbC5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVIdG1sRWxlbWVudCgnaW1nJywgJ2Fib3V0LWltZycsIFsnYWJvdXQtaW1nJ10sIGltYWdlc1tgYWJvdXQke2luZGV4KzF9LmpwZWdgXSwgbnVsbCk7XG4gICAgICAgIGFwcGVuZEVsLmFwcGVuZENoaWxkKGltZyk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcblxuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWA7XG4gICAgXG4gICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdhYm91dC1kaXYnLCBudWxsLCBudWxsLCBudWxsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgXG4gICAgc2VjdGlvblJlbmRlcihkYXRhVGV4dCwgZGl2KTtcblxuICAgIGFuaW1hdGUoJy5hYm91dC1pbWcnLCAnY3VydGFpbi1mcm9tbGVmdCcpO1xuICAgIGFuaW1hdGUoJy5hYm91dC1wJywgJ3RpdGxlLXNsb3cnIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyIiwiaW1wb3J0IHtjb250ZW50fSBmcm9tIFwiLi4vaW5kZXguanNcIlxuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi4vbW9kdWxlcy9mdW5jdGlvbnMuanNcIlxuLy9pbXBvcnQge2NyZWF0ZUh0bWxFbGVtZW50fSBmcm9tIFwiLi4vbW9kdWxlcy9mdW5jdGlvbnMuanNcIlxuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdmb290ZXInLCAnZGl2LWZvb3RlcicsbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290KTtcblxuICAgIGNvbnN0IHNvY05hbWUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdmb290ZXInLCBudWxsLCBudWxsLCAnWW91ciBSZXN0YXVyYW50IMKpIDIwMjQnKTtcbiAgICBmb290LmFwcGVuZENoaWxkKHNvY05hbWUpO1xuXG4gICAgY29uc3QgbXlTb2MgPSBjcmVhdGVIdG1sRWxlbWVudCgnYScsICdmb290ZXInLCBudWxsLCBudWxsLCAnQ3JlYXRlZCBieSBUcmVUb3JyaSBXZWIgRGVzaWduIFN0dWRpbycpO1xuICAgIGZvb3QuYXBwZW5kQ2hpbGQobXlTb2MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXIiLCJmdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudCh0eXBlLCBpZCwgYXJyYXlDbGFzc2VzLCBzb3VyY2UsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZihpZCkgZWxlbWVudC5pZCA9IGlkO1xuICAgIGlmKGFycmF5Q2xhc3NlcykgYXJyYXlDbGFzc2VzLmZvckVhY2goKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gICAgaWYoc291cmNlKSBlbGVtZW50LnNyYyA9IHNvdXJjZTtcbiAgICBpZihjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgICBsZXQgZmlsZSA9IHt9O1xuICAgIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgIGZpbGVbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyBcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGZpbGU7XG59XG5cbmZ1bmN0aW9uIHByZWxvYWRpbmdQYWdlKCkge1xuICAgIGNvbnN0IHByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZCcpO1xuICAgIHByZWxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVkJyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdQYWdlKCkge1xuICAgIGxldCBwcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWQnKTtcbiAgICBwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlKGVsU2VsZWN0aW9uLCBhbmltYXRpb25TdHlsZSl7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbFNlbGVjdGlvbik7XG4gICAgaWYoZWxlbWVudHMpe1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvblN0eWxlKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7Y3JlYXRlSHRtbEVsZW1lbnQsIGltcG9ydEFsbCwgbG9hZGluZ1BhZ2UsIHByZWxvYWRpbmdQYWdlLCBhbmltYXRlfSIsImltcG9ydCB7Y29udGVudH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuLi9tb2R1bGVzL2Z1bmN0aW9ucy5qc1wiXG5pbXBvcnQgaWNvbiBmcm9tIFwiLi4vaW1nL2ljb24ucG5nXCI7XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGNvbnN0IGltZyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdpbWcnLCAnbmF2LWl0ZW1zJywgWyduYXYtaG9tZScsICdoZWFkLWljb24nXSwgaWNvbiwgbnVsbCk7XG4gICAgc3Bhbi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgY29uc3QgbG9nbyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMScsICduYXYtaXRlbXMnLCBbJ25hdi1ob21lJywgJ2hlYWQtbG9nbyddLCBudWxsLCAnUmVzdGF1cmFudCcpO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gWydob21lJywgJ21lbnUnLCAnYWJvdXQnXTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjcmVhdGVIdG1sRWxlbWVudCgnbGknLCAnbmF2LWl0ZW1zJywgW2BuYXYtJHtpdGVtfWBdLCBudWxsLCBgJHtpdGVtLnRvVXBwZXJDYXNlKCl9YClcbiAgICAgICAgICAgIClcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclxuIiwiaW1wb3J0IHtjb250ZW50fSBmcm9tIFwiLi4vaW5kZXguanNcIlxuaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQsIGxvYWRpbmdQYWdlLCBhbmltYXRlIH0gZnJvbSBcIi4uL21vZHVsZXMvZnVuY3Rpb25zLmpzXCJcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSBcIi4uL2ltZy9jaGVlc2VtaXJ0aWxsaS5qcGVnXCJcblxuY29uc3QgZGF0YUFyciA9IFtcbiAgICAnWW91ciBSZXN0YXVyYW50JyxcbiAgICAnIEluZHVsZ2UgaW4gb3VyIGV4cXVpc2l0ZSByZWdpb25hbCBkaXNoZXMsIGhhbmRjcmFmdGVkIHBhc3RhLCBhbmQgc3VzdGFpbmFibGUgd2luZXMgd2hpbGUgc3Vycm91bmRlZCBieSB3YXJtdGgsIGVsZWdhbmNlLCBhbmQgZ2VudWluZSBob3NwaXRhbGl0eS4nLFxuICAgICdMZXQgdXMgdGFudGFsaXplIHlvdXIgc2Vuc2VzIGFuZCBpZ25pdGUgeW91ciBzcGlyaXQgYXMgd2UgYnJpbmcgSXRhbHlcXCdzIHJpY2ggZ2FzdHJvbm9taWMgaGVyaXRhZ2UgdG8gbGlmZS4gQXJyaXZlIGFzIHN0cmFuZ2VycywgZGVwYXJ0IGFzIGZhbWlseS4nXG5dXG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSkgbm8tcmVwZWF0IHRvcGA7XG4gICAgXG4gICAgY29uc3QgZGl2ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsICdob21lLWRpdicsIG51bGwsIG51bGwsIG51bGwpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGNvbnN0IGgxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gxJywgJ2gxLWhvbWUnLCBbJ2gxLWhvbWUnXSwgbnVsbCwgZGF0YUFyclswXSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IHAxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCAncDEtaG9tZScsIFsncC1ob21lJ10sIG51bGwsIGRhdGFBcnJbMV0pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwMSk7XG5cbiAgICBjb25zdCBwMiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ3AyLWhvbWUnLCBbJ3AtaG9tZSddLCBudWxsLCBkYXRhQXJyWzJdKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocDIpO1xuXG4gICAgYW5pbWF0ZSgnLmgxLWhvbWUnLCAndGl0bGUtc2xvdycpO1xuICAgIGFuaW1hdGUoJy5wLWhvbWUnLCAnY3VydGFpbi1mcm9tbGVmdCcpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlciIsImltcG9ydCB7Y29udGVudH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcbmltcG9ydCB7IGNyZWF0ZUh0bWxFbGVtZW50LCBpbXBvcnRBbGwsIGxvYWRpbmdQYWdlIH0gZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCJcbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltZy9tZW51LycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKVxuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tIFwiLi4vaW1nL2JhY2tncm91bmQyLmpwZWdcIlxuXG5jb25zdCBkYXRhUHJpbWkgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnUmlzb3R0byBhbGxhIE1pbGFuZXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICAncmlzbyBhbGxvIHphZmZlcmFubyBjb24gYnVycm8gZSBHcmFuYSBQYWRhbm8nLFxuICAgICAgICBwcmljZTogJzE4JyxcbiAgICAgICAgaW1hZ2U6ICdyaXNvdHRvLW1pbGFuZXNlLmpwZWcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGFwcGFyZGVsbGUgYWxsZSBMZXByZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAgJ3Bhc3RhIGFsbFxcJ3Vvdm8gY29uZGl0YSBjb24gcmFnw7kgZGkgbGVwcmUnLFxuICAgICAgICBwcmljZTogJzE3JyxcbiAgICAgICAgaW1hZ2U6ICdwYXBwYXJkZWxsZS1sZXByZS5qcGVnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1Ryb2ZpZSBhbCBQZXN0bycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAgJ3Bhc3RhIGNvcnRhIGNvbiBwZXN0byBnZW5vdmVzZSBmYXR0byBpbiBjYXNhJyxcbiAgICAgICAgcHJpY2U6ICcxNCcsXG4gICAgICAgIGltYWdlOiAndHJvZmllLXBlc3RvLmpwZWcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnT3JlY2NoaWV0dGUgY29uIENpbWUgZGkgUmFwYScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAgJ29yZWNjaGlldHRlIGNvbiByYXBlIHNlbHZhdGljaGUgc2FsdGF0ZSBpbiBwYWRlbGxhIGNvbiBhZ2xpbyBlIHBlcGVyb25jaW5vJyxcbiAgICAgICAgcHJpY2U6ICcxNCcsXG4gICAgICAgIGltYWdlOiAnb3JlY2NoaWV0dGUtcmFwYS5qcGVnJyxcbiAgICB9XG5dXG5cbmNvbnN0IGRhdGFTZWNvbmRpID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvdG9sZXR0YSBhbGxhIE1pbGFuZXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICAnY290b2xldHRhIGltcGFuYXRhIGUgZnJpdHRhIG5lbGxhIHRyYWRpemlvbmUgbWlsYW5lc2UnLFxuICAgICAgICBwcmljZTogJzE5JyxcbiAgICAgICAgaW1hZ2U6ICdjb3RvbGV0dGEtbWlsYW5lc2UuanBlZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCaXN0ZWNjYSBhbGxhIEZpb3JlbnRpbmEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogICd0YWdsaWF0YSBkaSBtYW56bywgY3VjaW5hdGEgYWwgc2FuZ3VlIHN1IGJyYWNlIGRpIGxlZ25hIGRpIHF1ZXJjaWEnLFxuICAgICAgICBwcmljZTogJzI0JyxcbiAgICAgICAgaW1hZ2U6ICdiaXN0ZWNjYS1maW9yZW50aW5hLmpwZWcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29uaWdsaW8gYWxsYSBDYWNjaWF0b3JhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICAnY29uaWdsaW8gc3R1ZmF0byBjb24gdmVyZHVyZSwgZXJiZSBhcm9tYXRpY2hlIGUgdmlubyBiaWFuY28nLFxuICAgICAgICBwcmljZTogJzIyJyxcbiAgICAgICAgaW1hZ2U6ICdjb25pZ2xpby1jYWNjaWF0b3JhLmpwZWcnLFxuICAgIH0sXG5dXG5cbmNvbnN0IHNlY3Rpb25SZW5kZXIgPSAoZGF0YUFyciwgYXBwZW5kRWwpID0+IHtcbiAgICBcbiAgICBkYXRhQXJyLmZvckVhY2goKHBsYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YkRpdiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCAnbWVudS1zdWJkaXYnLCBudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgYXBwZW5kRWwuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMycsICdtZW51LWgzJywgbnVsbCwgbnVsbCwgcGxhdGUubmFtZSk7XG4gICAgICAgIHN1YkRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycsICdtZW51LWltZycsIG51bGwsIGltYWdlc1tgJHtwbGF0ZS5pbWFnZX1gXSwgbnVsbCk7XG4gICAgICAgIHN1YkRpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IG5vdGUgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsICdtZW51LXAnLCBudWxsLCBudWxsLCBwbGF0ZS5kZXNjcmlwdGlvbik7XG4gICAgICAgIHN1YkRpdi5hcHBlbmRDaGlsZChub3RlKTtcblxuICAgICAgICBjb25zdCBwcmljZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgJ21lbnUtcHJpY2UnLCBudWxsLCBudWxsLCBgJCR7cGxhdGUucHJpY2V9YCk7XG4gICAgICAgIHN1YkRpdi5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgfSlcbn1cblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWA7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIdG1sRWxlbWVudCgnaDInLCAnbWVudS1oMicsIG51bGwsIG51bGwsICdQcmltaScpKVxuICAgIGNvbnN0IGRpdjEgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ21lbnUtZGl2JywgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYxKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSHRtbEVsZW1lbnQoJ2gyJywgJ21lbnUtaDInLCBudWxsLCBudWxsLCAnU2Vjb25kaScpKVxuICAgIGNvbnN0IGRpdjIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgJ21lbnUtZGl2JywgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYyKTtcblxuICAgIFxuICAgIHNlY3Rpb25SZW5kZXIoZGF0YVByaW1pLCBkaXYxKTtcbiAgICBzZWN0aW9uUmVuZGVyKGRhdGFTZWNvbmRpLCBkaXYyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==