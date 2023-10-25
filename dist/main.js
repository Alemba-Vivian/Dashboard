/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root{
    --red-clr:#f13005;
    --green-clr:#1abc7b;
    --light-yellow-clr:#e0f64b;
    --dark-clr:#121212;
    --info-clr:#3498db;
    --success-clr:#07bc0c;
    --error-clr:#e74c3c;
    --card-background-clr:#616161;
    --text-clr:#ffffff;
    --body-background-clr:#171717;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    font-family: Manrope,sans-serif;
    font-size: .75rem;
    font-weight: 500;
    line-height: 1.6;
    background-color: var(--body-background-clr);
    color: #ffffff;
    height: 100vh;
    /* min-height: 100vh; */
}

/* working with the header */
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 40px;
}
.nav-container{
    display: flex;
    align-items: center;
    gap: 10px;
}
.nav-one{
    display: flex;
    align-items: center;
    gap: 10px;
    color: #B8B8B8;
 
}

/* styling the range input */
.slider{
 -webkit-appearance: none;
  height: 2px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: var(--light-yellow-clr);
    cursor: pointer;
  }

  /* styling the search input */

  .nav-two{
    position: relative;
  }

 input[type="search"]{
    border: none;
    padding: 8px;
    border-radius: 8px;
    background-color: #202020;  
   
}
input[type="search"]:focus{
    outline: none;
    text-align: center;
}
::placeholder{
    padding-left: 20px;
}

.nav-two #search{
    position: absolute;
    top: 10px;
    left: 10px;
}

/* styling the hamburger */
.nav-three{
    color: #e0f64b;
    font-size: 1.6rem;
    font-weight: bolder;
}


/* styling main section */
.main{
    padding: 60px;
   
}

/* grid container */
.grid-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
}

/* column one */
.content-column-one{
    /* background-color: red; */
}
/* wallet */
.wallet{
    padding: 10px;
    padding-bottom: 20px;
}
.wallet span{
    padding-right: 10px;
    color: #e0f64b;
}

/* total assets */
.total-assets{
    border-radius: 20px;
    background-color: #202020;
    padding: 0 22px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.assets-container>p{
    color: #B8B8B8;
}
.assets select{
    border: none;
    background-color: #202020;
    color: #B8B8B8;
    cursor: pointer;
}
.assets select:focus{
    outline: none;
}
.assets select:hover{
    background-color: none;
    cursor: pointer;
}

label.money-value{
    font-size: 1.7rem;
    font-weight: bold;
}
h4>small{
    color: #B8B8B8;
}

.image-container{
    /* color:rgba(23, 23, 23, 0) ; */
}
.asset-image{
    opacity: 1;
    /* position: relative;
    z-index: 2; */
    margin-top: -10px;
    height: 140px;
   
}


/* currencies */
.currencies{
    margin-top: 20px;
    background-color: #202020;
    padding: 16px;
    border-radius: 20px;
    /* allowing scrollable feature */
    height: 63%;
    overflow-y: scroll;
}

/* hiding the scrollbar */
.currencies::-webkit-scrollbar{
    width: 0 !important;
}


.currency-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    border-bottom: 1px solid #333;
}
.currency-one{
    display: flex;
    align-items: center;    
    gap: 10px;
}
.currency-symbol>h4{
    color: #B8B8B8;
}
.currency-amount>h4{
    color: #B8B8B8;
}
.currency-amount>h3{
    float: right;
   
}

.currency-icons{
    /* padding:25px; */
    font-weight: bold;
    font-size: 2.0rem;
    border: 1px solid #333;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    color: orange;
    margin-bottom: 10px;
    margin-top: 10px;
   
}
#myIcons{
    height: 30px;
    width: 30px;
}
.fa-ethereum{
    color: grey;
}


/* styling graph */
.graph{
    background-color: #202020;
    display: flex;
    gap: 20px;
}


/* column two */

.content-column-two{
    /* background-color: green; */
    
}
.action-container{
    background-color: #202020;
    border-radius: 20px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
}

.action-container>h2{
    padding-bottom: 20px;
}
.rewards{
    display: flex;
    align-items: center;
    background-color: var(--body-background-clr);
    margin: 16px 0 24px;
    border-radius: 10px;
}
.reward-one{
    margin-left: 16px;
    font-size: 1.1rem;
}
.reward-icon{
    height: 140px;
    margin-bottom: -12px;
}

/* grid container */
.tools{
    display: flex;
    /* align-items: center; */
    justify-content: space-around;
    /* background-color: red; */
    
}
.tool-flex{
    display: flex;
    border: 1px solid #333;
    padding: 16px;
    align-items: center;
   font-weight: bold;
   border-radius: 10px;
  
}
.tool-flex:hover{
    outline: 1px solid #e0f64b;
    cursor: pointer;
}
.tools-two{
    padding-left: 10px;
}
.tools-one{
    padding-right: 30px;
}
.tools-one>i{
   color: #e0f64b;
   font-size: 1.2rem;
}


/* row two */
.transaction-container-flex{
    display: flex;
    gap: 20px;
    margin: 20px;
    

   
}
.transaction{
    border: 1px solid #333;
    padding: 16px;
    font-weight: bold;
    border-radius: 10px;
    text-align: center;
    height: 80px;
    width: 80px;
}
.transaction:hover{
    outline: 1px solid #e0f64b;
    cursor: pointer;
}
.transaction>div>i{
    color: #e0f64b;
    font-size: 1.2rem;
}


/* row three */
.notifications{
    margin-top: 20px;
    background-color: #202020;
    border-radius: 20px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    /* scrollable container */
    height: 41%;
    overflow-y: scroll;

}
/* hiding the scrollbar */
.notifications::-webkit-scrollbar{
    width: 0 !important;
}


.notifications p{
    color: #B8B8B8;
}
.para-one{
    color: #848484;
}
.withdraw-success{
    border: 1px solid #333;
    padding: 16px;
    margin-top: 10px;
    border-radius: 10px;
}
.withdraw-success>h4>span{
    padding-right: 10px;
 
}
.withdraw-success>h4>span>i{
    color: red;
}
.withdraw-success>h4{
    padding-bottom: 10px;
}

/* date */
.date>p{
    padding-top: 10px;
}

/* styling the third column */
.content-column-three{
    /* background-color: blue; */

}
.trophey{
    padding: 10px;
    padding-bottom: 20px;

}
.trophey span{
    padding-right: 10px;
    color: #e0f64b;
}
.leaders-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    background-color: var(--light-yellow-clr);
    color: #171717;
    border-radius: 10px;
}

.btn-circle{
    background-color: #171717;
    color: #FAFAFA;
     font-size: 0.9rem;
     padding: 5px 8px 5px 8px;
     border: none;
     border-radius: 15px;
     margin: 8px;
}
.leaders-name{
    font-weight: bold;
}
.btn-percentage{
    background-color: #1abc7b;
    color: white;
    border: none;
    padding: 5px 8px;
    border-radius: 5px;
    font-weight: 800;
}
.leaders-row-dark{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    background-color: #202020;
    color: #171717;
    border-radius: 10px;
}

.btn-circle-dark{
    background-color:#e0f64b;
    color: #171717;
     font-size: 0.9rem;
     padding: 5px 8px 5px 8px;
     border: none;
     border-radius: 15px;
     margin: 8px;  
}
.leaders-name-dark{
    font-weight: bold;
    color: white;

}
.leaders-wallet-dark{
    color: #848484;
}

.content-row-one{
    grid-column: span 2;
 
    

}

`, "",{"version":3,"sources":["webpack://./src/Styles/style.css"],"names":[],"mappings":"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","sourcesContent":["\n:root{\n    --red-clr:#f13005;\n    --green-clr:#1abc7b;\n    --light-yellow-clr:#e0f64b;\n    --dark-clr:#121212;\n    --info-clr:#3498db;\n    --success-clr:#07bc0c;\n    --error-clr:#e74c3c;\n    --card-background-clr:#616161;\n    --text-clr:#ffffff;\n    --body-background-clr:#171717;\n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    font-family: Manrope,sans-serif;\n    font-size: .75rem;\n    font-weight: 500;\n    line-height: 1.6;\n    background-color: var(--body-background-clr);\n    color: #ffffff;\n    height: 100vh;\n    /* min-height: 100vh; */\n}\n\n/* working with the header */\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 40px;\n}\n.nav-container{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n.nav-one{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #B8B8B8;\n \n}\n\n/* styling the range input */\n.slider{\n -webkit-appearance: none;\n  height: 2px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n}\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 15px;\n    height: 15px;\n    background-color: var(--light-yellow-clr);\n    cursor: pointer;\n  }\n\n  /* styling the search input */\n\n  .nav-two{\n    position: relative;\n  }\n\n input[type=\"search\"]{\n    border: none;\n    padding: 8px;\n    border-radius: 8px;\n    background-color: #202020;  \n   \n}\ninput[type=\"search\"]:focus{\n    outline: none;\n    text-align: center;\n}\n::placeholder{\n    padding-left: 20px;\n}\n\n.nav-two #search{\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n\n/* styling the hamburger */\n.nav-three{\n    color: #e0f64b;\n    font-size: 1.6rem;\n    font-weight: bolder;\n}\n\n\n/* styling main section */\n.main{\n    padding: 60px;\n   \n}\n\n/* grid container */\n.grid-container{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    \n}\n\n/* column one */\n.content-column-one{\n    /* background-color: red; */\n}\n/* wallet */\n.wallet{\n    padding: 10px;\n    padding-bottom: 20px;\n}\n.wallet span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n\n/* total assets */\n.total-assets{\n    border-radius: 20px;\n    background-color: #202020;\n    padding: 0 22px 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.assets-container>p{\n    color: #B8B8B8;\n}\n.assets select{\n    border: none;\n    background-color: #202020;\n    color: #B8B8B8;\n    cursor: pointer;\n}\n.assets select:focus{\n    outline: none;\n}\n.assets select:hover{\n    background-color: none;\n    cursor: pointer;\n}\n\nlabel.money-value{\n    font-size: 1.7rem;\n    font-weight: bold;\n}\nh4>small{\n    color: #B8B8B8;\n}\n\n.image-container{\n    /* color:rgba(23, 23, 23, 0) ; */\n}\n.asset-image{\n    opacity: 1;\n    /* position: relative;\n    z-index: 2; */\n    margin-top: -10px;\n    height: 140px;\n   \n}\n\n\n/* currencies */\n.currencies{\n    margin-top: 20px;\n    background-color: #202020;\n    padding: 16px;\n    border-radius: 20px;\n    /* allowing scrollable feature */\n    height: 63%;\n    overflow-y: scroll;\n}\n\n/* hiding the scrollbar */\n.currencies::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.currency-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: bold;\n    border-bottom: 1px solid #333;\n}\n.currency-one{\n    display: flex;\n    align-items: center;    \n    gap: 10px;\n}\n.currency-symbol>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h3{\n    float: right;\n   \n}\n\n.currency-icons{\n    /* padding:25px; */\n    font-weight: bold;\n    font-size: 2.0rem;\n    border: 1px solid #333;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    color: orange;\n    margin-bottom: 10px;\n    margin-top: 10px;\n   \n}\n#myIcons{\n    height: 30px;\n    width: 30px;\n}\n.fa-ethereum{\n    color: grey;\n}\n\n\n/* styling graph */\n.graph{\n    background-color: #202020;\n    display: flex;\n    gap: 20px;\n}\n\n\n/* column two */\n\n.content-column-two{\n    /* background-color: green; */\n    \n}\n.action-container{\n    background-color: #202020;\n    border-radius: 20px;\n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 10px;\n}\n\n.action-container>h2{\n    padding-bottom: 20px;\n}\n.rewards{\n    display: flex;\n    align-items: center;\n    background-color: var(--body-background-clr);\n    margin: 16px 0 24px;\n    border-radius: 10px;\n}\n.reward-one{\n    margin-left: 16px;\n    font-size: 1.1rem;\n}\n.reward-icon{\n    height: 140px;\n    margin-bottom: -12px;\n}\n\n/* grid container */\n.tools{\n    display: flex;\n    /* align-items: center; */\n    justify-content: space-around;\n    /* background-color: red; */\n    \n}\n.tool-flex{\n    display: flex;\n    border: 1px solid #333;\n    padding: 16px;\n    align-items: center;\n   font-weight: bold;\n   border-radius: 10px;\n  \n}\n.tool-flex:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.tools-two{\n    padding-left: 10px;\n}\n.tools-one{\n    padding-right: 30px;\n}\n.tools-one>i{\n   color: #e0f64b;\n   font-size: 1.2rem;\n}\n\n\n/* row two */\n.transaction-container-flex{\n    display: flex;\n    gap: 20px;\n    margin: 20px;\n    \n\n   \n}\n.transaction{\n    border: 1px solid #333;\n    padding: 16px;\n    font-weight: bold;\n    border-radius: 10px;\n    text-align: center;\n    height: 80px;\n    width: 80px;\n}\n.transaction:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.transaction>div>i{\n    color: #e0f64b;\n    font-size: 1.2rem;\n}\n\n\n/* row three */\n.notifications{\n    margin-top: 20px;\n    background-color: #202020;\n    border-radius: 20px;\n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 10px;\n    /* scrollable container */\n    height: 41%;\n    overflow-y: scroll;\n\n}\n/* hiding the scrollbar */\n.notifications::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.notifications p{\n    color: #B8B8B8;\n}\n.para-one{\n    color: #848484;\n}\n.withdraw-success{\n    border: 1px solid #333;\n    padding: 16px;\n    margin-top: 10px;\n    border-radius: 10px;\n}\n.withdraw-success>h4>span{\n    padding-right: 10px;\n \n}\n.withdraw-success>h4>span>i{\n    color: red;\n}\n.withdraw-success>h4{\n    padding-bottom: 10px;\n}\n\n/* date */\n.date>p{\n    padding-top: 10px;\n}\n\n/* styling the third column */\n.content-column-three{\n    /* background-color: blue; */\n\n}\n.trophey{\n    padding: 10px;\n    padding-bottom: 20px;\n\n}\n.trophey span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n.leaders-row{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: var(--light-yellow-clr);\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle{\n    background-color: #171717;\n    color: #FAFAFA;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;\n}\n.leaders-name{\n    font-weight: bold;\n}\n.btn-percentage{\n    background-color: #1abc7b;\n    color: white;\n    border: none;\n    padding: 5px 8px;\n    border-radius: 5px;\n    font-weight: 800;\n}\n.leaders-row-dark{\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: #202020;\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle-dark{\n    background-color:#e0f64b;\n    color: #171717;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;  \n}\n.leaders-name-dark{\n    font-weight: bold;\n    color: white;\n\n}\n.leaders-wallet-dark{\n    color: #848484;\n}\n\n.content-row-one{\n    grid-column: span 2;\n \n    \n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/Styles/style.css":
/*!******************************!*\
  !*** ./src/Styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Styles/style.css");

      
      
      
      
      
      
      
      
      

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styles/style.css */ "./src/Styles/style.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPLG1GQUFtRixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsUUFBUSxZQUFZLE1BQU0sV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksWUFBWSxRQUFRLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxXQUFXLEtBQUssYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxN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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9TdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL1N0eWxlcy9zdHlsZS5jc3M/YWVlOSIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG46cm9vdHtcbiAgICAtLXJlZC1jbHI6I2YxMzAwNTtcbiAgICAtLWdyZWVuLWNscjojMWFiYzdiO1xuICAgIC0tbGlnaHQteWVsbG93LWNscjojZTBmNjRiO1xuICAgIC0tZGFyay1jbHI6IzEyMTIxMjtcbiAgICAtLWluZm8tY2xyOiMzNDk4ZGI7XG4gICAgLS1zdWNjZXNzLWNscjojMDdiYzBjO1xuICAgIC0tZXJyb3ItY2xyOiNlNzRjM2M7XG4gICAgLS1jYXJkLWJhY2tncm91bmQtY2xyOiM2MTYxNjE7XG4gICAgLS10ZXh0LWNscjojZmZmZmZmO1xuICAgIC0tYm9keS1iYWNrZ3JvdW5kLWNscjojMTcxNzE3O1xufVxuKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keXtcbiAgICBmb250LWZhbWlseTogTWFucm9wZSxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY2xyKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xufVxuXG4vKiB3b3JraW5nIHdpdGggdGhlIGhlYWRlciAqL1xuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLm5hdi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbi5uYXYtb25le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gXG59XG5cbi8qIHN0eWxpbmcgdGhlIHJhbmdlIGlucHV0ICovXG4uc2xpZGVye1xuIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xufVxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAvKiBzdHlsaW5nIHRoZSBzZWFyY2ggaW5wdXQgKi9cblxuICAubmF2LXR3b3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuIGlucHV0W3R5cGU9XCJzZWFyY2hcIl17XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDsgIFxuICAgXG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpwbGFjZWhvbGRlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5uYXYtdHdvICNzZWFyY2h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4vKiBzdHlsaW5nIHRoZSBoYW1idXJnZXIgKi9cbi5uYXYtdGhyZWV7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuXG4vKiBzdHlsaW5nIG1haW4gc2VjdGlvbiAqL1xuLm1haW57XG4gICAgcGFkZGluZzogNjBweDtcbiAgIFxufVxuXG4vKiBncmlkIGNvbnRhaW5lciAqL1xuLmdyaWQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBcbn1cblxuLyogY29sdW1uIG9uZSAqL1xuLmNvbnRlbnQtY29sdW1uLW9uZXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG59XG4vKiB3YWxsZXQgKi9cbi53YWxsZXR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi53YWxsZXQgc3BhbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjZTBmNjRiO1xufVxuXG4vKiB0b3RhbCBhc3NldHMgKi9cbi50b3RhbC1hc3NldHN7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIHBhZGRpbmc6IDAgMjJweCAwIDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hc3NldHMtY29udGFpbmVyPnB7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG59XG4uYXNzZXRzIHNlbGVjdHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBjb2xvcjogI0I4QjhCODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXNzZXRzIHNlbGVjdDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmFzc2V0cyBzZWxlY3Q6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsLm1vbmV5LXZhbHVle1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaDQ+c21hbGx7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG59XG5cbi5pbWFnZS1jb250YWluZXJ7XG4gICAgLyogY29sb3I6cmdiYSgyMywgMjMsIDIzLCAwKSA7ICovXG59XG4uYXNzZXQtaW1hZ2V7XG4gICAgb3BhY2l0eTogMTtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjsgKi9cbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgXG59XG5cblxuLyogY3VycmVuY2llcyAqL1xuLmN1cnJlbmNpZXN7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvKiBhbGxvd2luZyBzY3JvbGxhYmxlIGZlYXR1cmUgKi9cbiAgICBoZWlnaHQ6IDYzJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi8qIGhpZGluZyB0aGUgc2Nyb2xsYmFyICovXG4uY3VycmVuY2llczo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuXG4uY3VycmVuY3ktY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG59XG4uY3VycmVuY3ktb25le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXG4gICAgZ2FwOiAxMHB4O1xufVxuLmN1cnJlbmN5LXN5bWJvbD5oNHtcbiAgICBjb2xvcjogI0I4QjhCODtcbn1cbi5jdXJyZW5jeS1hbW91bnQ+aDR7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG59XG4uY3VycmVuY3ktYW1vdW50Pmgze1xuICAgIGZsb2F0OiByaWdodDtcbiAgIFxufVxuXG4uY3VycmVuY3ktaWNvbnN7XG4gICAgLyogcGFkZGluZzoyNXB4OyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgXG59XG4jbXlJY29uc3tcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG4uZmEtZXRoZXJldW17XG4gICAgY29sb3I6IGdyZXk7XG59XG5cblxuLyogc3R5bGluZyBncmFwaCAqL1xuLmdyYXBoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG59XG5cblxuLyogY29sdW1uIHR3byAqL1xuXG4uY29udGVudC1jb2x1bW4tdHdve1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xuICAgIFxufVxuLmFjdGlvbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lcj5oMntcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5yZXdhcmRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY2xyKTtcbiAgICBtYXJnaW46IDE2cHggMCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucmV3YXJkLW9uZXtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5yZXdhcmQtaWNvbntcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xufVxuXG4vKiBncmlkIGNvbnRhaW5lciAqL1xuLnRvb2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgXG59XG4udG9vbC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFxufVxuLnRvb2wtZmxleDpob3ZlcntcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2UwZjY0YjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9vbHMtdHdve1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50b29scy1vbmV7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi50b29scy1vbmU+aXtcbiAgIGNvbG9yOiAjZTBmNjRiO1xuICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cblxuLyogcm93IHR3byAqL1xuLnRyYW5zYWN0aW9uLWNvbnRhaW5lci1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBcblxuICAgXG59XG4udHJhbnNhY3Rpb257XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbn1cbi50cmFuc2FjdGlvbjpob3ZlcntcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2UwZjY0YjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udHJhbnNhY3Rpb24+ZGl2Pml7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cblxuLyogcm93IHRocmVlICovXG4ubm90aWZpY2F0aW9uc3tcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKiBzY3JvbGxhYmxlIGNvbnRhaW5lciAqL1xuICAgIGhlaWdodDogNDElO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLyogaGlkaW5nIHRoZSBzY3JvbGxiYXIgKi9cbi5ub3RpZmljYXRpb25zOjotd2Via2l0LXNjcm9sbGJhcntcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG5cbi5ub3RpZmljYXRpb25zIHB7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG59XG4ucGFyYS1vbmV7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG4ud2l0aGRyYXctc3VjY2Vzc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3BhbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuIFxufVxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3Bhbj5pe1xuICAgIGNvbG9yOiByZWQ7XG59XG4ud2l0aGRyYXctc3VjY2Vzcz5oNHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLyogZGF0ZSAqL1xuLmRhdGU+cHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLyogc3R5bGluZyB0aGUgdGhpcmQgY29sdW1uICovXG4uY29udGVudC1jb2x1bW4tdGhyZWV7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cblxufVxuLnRyb3BoZXl7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxufVxuLnRyb3BoZXkgc3BhbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjZTBmNjRiO1xufVxuLmxlYWRlcnMtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdy1jbHIpO1xuICAgIGNvbG9yOiAjMTcxNzE3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tY2lyY2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgY29sb3I6ICNGQUZBRkE7XG4gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICBwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgbWFyZ2luOiA4cHg7XG59XG4ubGVhZGVycy1uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bi1wZXJjZW50YWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjN2I7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuLmxlYWRlcnMtcm93LWRhcmt7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGNvbG9yOiAjMTcxNzE3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tY2lyY2xlLWRhcmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTBmNjRiO1xuICAgIGNvbG9yOiAjMTcxNzE3O1xuICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgcGFkZGluZzogNXB4IDhweCA1cHggOHB4O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgIG1hcmdpbjogOHB4OyAgXG59XG4ubGVhZGVycy1uYW1lLWRhcmt7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG4ubGVhZGVycy13YWxsZXQtZGFya3tcbiAgICBjb2xvcjogIzg0ODQ4NDtcbn1cblxuLmNvbnRlbnQtcm93LW9uZXtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuIFxuICAgIFxuXG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGNBQWM7O0FBRWxCOztBQUVBLDRCQUE0QjtBQUM1QjtDQUNDLHdCQUF3QjtFQUN2QixX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Q0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9COztBQUV4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0tBQ2IsaUJBQWlCO0tBQ2pCLHdCQUF3QjtLQUN4QixZQUFZO0tBQ1osbUJBQW1CO0tBQ25CLFdBQVc7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztLQUNiLGlCQUFpQjtLQUNqQix3QkFBd0I7S0FDeEIsWUFBWTtLQUNaLG1CQUFtQjtLQUNuQixXQUFXO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7Ozs7QUFJdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3R7XFxuICAgIC0tcmVkLWNscjojZjEzMDA1O1xcbiAgICAtLWdyZWVuLWNscjojMWFiYzdiO1xcbiAgICAtLWxpZ2h0LXllbGxvdy1jbHI6I2UwZjY0YjtcXG4gICAgLS1kYXJrLWNscjojMTIxMjEyO1xcbiAgICAtLWluZm8tY2xyOiMzNDk4ZGI7XFxuICAgIC0tc3VjY2Vzcy1jbHI6IzA3YmMwYztcXG4gICAgLS1lcnJvci1jbHI6I2U3NGMzYztcXG4gICAgLS1jYXJkLWJhY2tncm91bmQtY2xyOiM2MTYxNjE7XFxuICAgIC0tdGV4dC1jbHI6I2ZmZmZmZjtcXG4gICAgLS1ib2R5LWJhY2tncm91bmQtY2xyOiMxNzE3MTc7XFxufVxcbip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGUsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXFxufVxcblxcbi8qIHdvcmtpbmcgd2l0aCB0aGUgaGVhZGVyICovXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG4ubmF2LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubmF2LW9uZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG4gXFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIHJhbmdlIGlucHV0ICovXFxuLnNsaWRlcntcXG4gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XFxufVxcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLyogc3R5bGluZyB0aGUgc2VhcmNoIGlucHV0ICovXFxuXFxuICAubmF2LXR3b3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiBpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDsgIFxcbiAgIFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG46OnBsYWNlaG9sZGVye1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uYXYtdHdvICNzZWFyY2h7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4vKiBzdHlsaW5nIHRoZSBoYW1idXJnZXIgKi9cXG4ubmF2LXRocmVle1xcbiAgICBjb2xvcjogI2UwZjY0YjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcblxcbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXFxuLm1haW57XFxuICAgIHBhZGRpbmc6IDYwcHg7XFxuICAgXFxufVxcblxcbi8qIGdyaWQgY29udGFpbmVyICovXFxuLmdyaWQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBcXG59XFxuXFxuLyogY29sdW1uIG9uZSAqL1xcbi5jb250ZW50LWNvbHVtbi1vbmV7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG59XFxuLyogd2FsbGV0ICovXFxuLndhbGxldHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi53YWxsZXQgc3BhbntcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxufVxcblxcbi8qIHRvdGFsIGFzc2V0cyAqL1xcbi50b3RhbC1hc3NldHN7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIHBhZGRpbmc6IDAgMjJweCAwIDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmFzc2V0cy1jb250YWluZXI+cHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcbi5hc3NldHMgc2VsZWN0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hc3NldHMgc2VsZWN0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYXNzZXRzIHNlbGVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5sYWJlbC5tb25leS12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5oND5zbWFsbHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXJ7XFxuICAgIC8qIGNvbG9yOnJnYmEoMjMsIDIzLCAyMywgMCkgOyAqL1xcbn1cXG4uYXNzZXQtaW1hZ2V7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjsgKi9cXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgXFxufVxcblxcblxcbi8qIGN1cnJlbmNpZXMgKi9cXG4uY3VycmVuY2llc3tcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLyogYWxsb3dpbmcgc2Nyb2xsYWJsZSBmZWF0dXJlICovXFxuICAgIGhlaWdodDogNjMlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi8qIGhpZGluZyB0aGUgc2Nyb2xsYmFyICovXFxuLmN1cnJlbmNpZXM6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG5cXG4uY3VycmVuY3ktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcXG59XFxuLmN1cnJlbmN5LW9uZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxuICAgIGdhcDogMTBweDtcXG59XFxuLmN1cnJlbmN5LXN5bWJvbD5oNHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcbi5jdXJyZW5jeS1hbW91bnQ+aDR7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbn1cXG4uY3VycmVuY3ktYW1vdW50Pmgze1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgXFxufVxcblxcbi5jdXJyZW5jeS1pY29uc3tcXG4gICAgLyogcGFkZGluZzoyNXB4OyAqL1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyLjByZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgXFxufVxcbiNteUljb25ze1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG4uZmEtZXRoZXJldW17XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIGdyYXBoICovXFxuLmdyYXBoe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi8qIGNvbHVtbiB0d28gKi9cXG5cXG4uY29udGVudC1jb2x1bW4tdHdve1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG4gICAgXFxufVxcbi5hY3Rpb24tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWN0aW9uLWNvbnRhaW5lcj5oMntcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5yZXdhcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY2xyKTtcXG4gICAgbWFyZ2luOiAxNnB4IDAgMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnJld2FyZC1vbmV7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuLnJld2FyZC1pY29ue1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG59XFxuXFxuLyogZ3JpZCBjb250YWluZXIgKi9cXG4udG9vbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuICAgIFxcbn1cXG4udG9vbC1mbGV4e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBcXG59XFxuLnRvb2wtZmxleDpob3ZlcntcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNlMGY2NGI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvb2xzLXR3b3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4udG9vbHMtb25le1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG4udG9vbHMtb25lPml7XFxuICAgY29sb3I6ICNlMGY2NGI7XFxuICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcblxcbi8qIHJvdyB0d28gKi9cXG4udHJhbnNhY3Rpb24tY29udGFpbmVyLWZsZXh7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBcXG5cXG4gICBcXG59XFxuLnRyYW5zYWN0aW9ue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG4udHJhbnNhY3Rpb246aG92ZXJ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZTBmNjRiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50cmFuc2FjdGlvbj5kaXY+aXtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4vKiByb3cgdGhyZWUgKi9cXG4ubm90aWZpY2F0aW9uc3tcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogc2Nyb2xsYWJsZSBjb250YWluZXIgKi9cXG4gICAgaGVpZ2h0OiA0MSU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG59XFxuLyogaGlkaW5nIHRoZSBzY3JvbGxiYXIgKi9cXG4ubm90aWZpY2F0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi5ub3RpZmljYXRpb25zIHB7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbn1cXG4ucGFyYS1vbmV7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbn1cXG4ud2l0aGRyYXctc3VjY2Vzc3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3BhbntcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gXFxufVxcbi53aXRoZHJhdy1zdWNjZXNzPmg0PnNwYW4+aXtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLndpdGhkcmF3LXN1Y2Nlc3M+aDR7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBkYXRlICovXFxuLmRhdGU+cHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIHRoaXJkIGNvbHVtbiAqL1xcbi5jb250ZW50LWNvbHVtbi10aHJlZXtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG5cXG59XFxuLnRyb3BoZXl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcbn1cXG4udHJvcGhleSBzcGFue1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogI2UwZjY0YjtcXG59XFxuLmxlYWRlcnMtcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93LWNscik7XFxuICAgIGNvbG9yOiAjMTcxNzE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnRuLWNpcmNsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gICAgY29sb3I6ICNGQUZBRkE7XFxuICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcXG4gICAgIGJvcmRlcjogbm9uZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICBtYXJnaW46IDhweDtcXG59XFxuLmxlYWRlcnMtbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5idG4tcGVyY2VudGFnZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmxlYWRlcnMtcm93LWRhcmt7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBjb2xvcjogIzE3MTcxNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bi1jaXJjbGUtZGFya3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTBmNjRiO1xcbiAgICBjb2xvcjogIzE3MTcxNztcXG4gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgcGFkZGluZzogNXB4IDhweCA1cHggOHB4O1xcbiAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgIG1hcmdpbjogOHB4OyAgXFxufVxcbi5sZWFkZXJzLW5hbWUtZGFya3tcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuLmxlYWRlcnMtd2FsbGV0LWRhcmt7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbn1cXG5cXG4uY29udGVudC1yb3ctb25le1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiBcXG4gICAgXFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vU3R5bGVzL3N0eWxlLmNzcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9