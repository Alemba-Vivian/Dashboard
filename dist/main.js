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
    /* font-family: Manrope,sans-serif; */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: .75rem;
    font-weight: 500;
    background-color: var(--body-background-clr);
    color: #ffffff;
    min-height: 100vh;
}

/* DEFAULT STYLING */
h1{
        font-size: 1.3rem;
        font-weight: 800;
        line-height: 1.4;

}
h1.board{
    font-size: 1.6875rem;
    font-weight: 700;
    line-height: 1.6;
}
h2 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
}

/* working with the header */
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 40px;
    flex-wrap: wrap;
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
    padding: 50px 50px 0 50px;
   
   
}

/* grid container */
.grid-container{
    display: grid;
    grid-template-columns: repeat(3,  1fr);
    gap: 20px;
    line-height: 1.6;
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    /* height: calc(100vh - 10px); */
    
}

/* column one */
.content-column-one{
    height: 100%;
     
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
    height: 940px;
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
    margin-top: 10px;
    margin-bottom: 10px;
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
    height: 100%;
    
    
}
.action-container{
    background-color: #202020;
    border-radius: 20px;
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
    padding: 8px;
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
    margin-top: 25px;
    background-color: #202020;
    border-radius: 20px;
    padding: 20px;
    /* scrollable container */
    height: 610px;
    overflow-y: scroll;

}
/* hiding the scrollbar */
.notifications::-webkit-scrollbar{
    width: 0 !important;
}


.notifications>p{
    color: #B8B8B8;
    /* padding: 20px; */
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
    /* height: 100% */
   


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
    display: grid;
    background-color: #202020;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 20px;
    margin-bottom: 30px;
 
}
/* first column */
.graph-bar{
    border-right: 1px solid #333;
   /* padding: 15px; */
   margin: 15px;
   padding: 5px;
}
.digits-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    /* padding-right: 10px; */
}
.details{
    display: flex;
    align-items: center;
    gap: 20px;
 
  
}
.details-one h3{
    font-size: 1.3rem;
}
.details-two h4{
    color: #848484;
}
.time-analysis-container{
    display: flex;
    justify-content: space-between;
}

.chart>i{
    padding: 8px;
    font-size: 1.6rem;
    color: #B8B8B8;
    font-weight: 600;
    cursor: pointer;

}
#btn-one{
  background-color: #e0f64b;
  padding: 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.myButtons{
    padding: 10px;
    background-color: #171717;
    color: #848484;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition:  0.3s;
  
}
.myButtons:hover{
    background-color: #e0f64b;
}
.line{
    border-bottom: 1px solid #333;
    height:10px;  
    /* overflow: visible;       */
    margin: 20px 0 15px 0;
    padding: 10px;
 
    
}


.value-analysis-container{
    text-align: right;
}
.value-analysis-container:last-child{
    padding-bottom: 20px;
}
.btn-graph{
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #1abc7b;
    border: none;
    border-radius: 10px;
}



.button-containers{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* gap: 20px; */
   
}
#btn-buy,
#btn-sell{
    font-size: 1.4rem;
    font-weight: 700;
    padding:10px 40px 10px 40px;
    border: none;
    border-radius: 10px;
}

#btn-buy{
    background-color: #e0f64b;
}
#btn-sell{
    background-color: #171717;
    color: #ffffff;
}


/* second column */
.graph-percentage{
    /* border-left: 1px solid red; */
    padding: 5px;
}
.percentage-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    color: #848484;
}
.price-container{
    display: flex;
     gap: 30px;
     align-items: center;
}
.cards-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    border: 1px solid #333;
    padding: 15px;
    border-radius: 10px;
}
.cards-items{
    display: flex;
    align-items: center;
    gap: 20px;
}
.cards-items-two{
    display: flex;
    align-items: center;
    gap: 20px;

}


.cards-container button{
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    color: #ffffff;
}
.bg-green button{
    background-color: #1abc7b;
}
.bg-red button{
    background-color: var(--red-clr);
}

.yellow-star i{
    color: #e0f64b;
    font-size: 16px;
}
.dark-star{
    color: #B8B8B8;
    font-size: 16px;
}

.coins-container{
    color: #848484;
    
}`, "",{"version":3,"sources":["webpack://./src/Styles/style.css"],"names":[],"mappings":";AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,6BAA6B;AACjC;AACA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,qCAAqC;IACrC,mJAAmJ;IACnJ,iBAAiB;IACjB,gBAAgB;IAChB,4CAA4C;IAC5C,cAAc;IACd,iBAAiB;AACrB;;AAEA,oBAAoB;AACpB;QACQ,iBAAiB;QACjB,gBAAgB;QAChB,gBAAgB;;AAExB;AACA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA,4BAA4B;AAC5B;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,cAAc;;AAElB;;AAEA,4BAA4B;AAC5B;CACC,wBAAwB;EACvB,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;AACA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,eAAe;EACjB;;EAEA,6BAA6B;;EAE7B;IACE,kBAAkB;EACpB;;CAED;IACG,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;;AAE7B;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA,0BAA0B;AAC1B;IACI,cAAc;IACd,iBAAiB;IACjB,mBAAmB;AACvB;;;AAGA,yBAAyB;AACzB;IACI,yBAAyB;;;AAG7B;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,sCAAsC;IACtC,SAAS;IACT,gBAAgB;IAChB,iEAAiE;IACjE,gCAAgC;;AAEpC;;AAEA,eAAe;AACf;IACI,YAAY;;AAEhB;AACA,WAAW;AACX;IACI,aAAa;IACb,oBAAoB;AACxB;AACA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA,iBAAiB;AACjB;IACI,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,cAAc;AAClB;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,gCAAgC;AACpC;AACA;IACI,UAAU;IACV;iBACa;IACb,iBAAiB;IACjB,aAAa;;AAEjB;;;AAGA,eAAe;AACf;IACI,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,gCAAgC;IAChC,aAAa;IACb,kBAAkB;AACtB;;AAEA,yBAAyB;AACzB;IACI,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,YAAY;;AAEhB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,sBAAsB;IACtB,0BAA0B;IAC1B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,gBAAgB;;AAEpB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,WAAW;AACf;;;AAGA,kBAAkB;AAClB;IACI,yBAAyB;IACzB,aAAa;IACb,SAAS;AACb;;;AAGA,eAAe;;AAEf;IACI,YAAY;;;AAGhB;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,4CAA4C;IAC5C,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,yBAAyB;IACzB,6BAA6B;IAC7B,2BAA2B;;AAE/B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;GACpB,iBAAiB;GACjB,mBAAmB;;AAEtB;AACA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;GACG,cAAc;GACd,iBAAiB;AACpB;;;AAGA,YAAY;AACZ;IACI,aAAa;IACb,SAAS;IACT,YAAY;;;;AAIhB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;AACA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,cAAc;IACd,iBAAiB;AACrB;;;AAGA,cAAc;AACd;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,kBAAkB;;AAEtB;AACA,yBAAyB;AACzB;IACI,mBAAmB;AACvB;;;AAGA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,mBAAmB;;AAEvB;AACA;IACI,UAAU;AACd;AACA;IACI,oBAAoB;AACxB;;AAEA,SAAS;AACT;IACI,iBAAiB;AACrB;;AAEA,6BAA6B;AAC7B;IACI,4BAA4B;IAC5B,iBAAiB;;;;AAIrB;AACA;IACI,aAAa;IACb,oBAAoB;;AAExB;AACA;IACI,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,yCAAyC;IACzC,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;KACb,iBAAiB;KACjB,wBAAwB;KACxB,YAAY;KACZ,mBAAmB;KACnB,WAAW;AAChB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,cAAc;KACb,iBAAiB;KACjB,wBAAwB;KACxB,YAAY;KACZ,mBAAmB;KACnB,WAAW;AAChB;AACA;IACI,iBAAiB;IACjB,YAAY;;AAEhB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,qCAAqC;IACrC,mBAAmB;IACnB,mBAAmB;;AAEvB;AACA,iBAAiB;AACjB;IACI,4BAA4B;GAC7B,mBAAmB;GACnB,YAAY;GACZ,YAAY;AACf;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;;AAGb;AACA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,eAAe;;AAEnB;AACA;EACE,yBAAyB;EACzB,YAAY;IACV,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;;AAErB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,6BAA6B;IAC7B,WAAW;IACX,6BAA6B;IAC7B,qBAAqB;IACrB,aAAa;;;AAGjB;;;AAGA;IACI,iBAAiB;AACrB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;AACvB;;;;AAIA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;;AAEnB;AACA;;IAEI,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;IAC3B,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,cAAc;AAClB;;;AAGA,kBAAkB;AAClB;IACI,gCAAgC;IAChC,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,aAAa;KACZ,SAAS;KACT,mBAAmB;AACxB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;AAEb;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,cAAc;AAClB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;AACA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;;AAElB","sourcesContent":["\n:root{\n    --red-clr:#f13005;\n    --green-clr:#1abc7b;\n    --light-yellow-clr:#e0f64b;\n    --dark-clr:#121212;\n    --info-clr:#3498db;\n    --success-clr:#07bc0c;\n    --error-clr:#e74c3c;\n    --card-background-clr:#616161;\n    --text-clr:#ffffff;\n    --body-background-clr:#171717;\n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    /* font-family: Manrope,sans-serif; */\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: .75rem;\n    font-weight: 500;\n    background-color: var(--body-background-clr);\n    color: #ffffff;\n    min-height: 100vh;\n}\n\n/* DEFAULT STYLING */\nh1{\n        font-size: 1.3rem;\n        font-weight: 800;\n        line-height: 1.4;\n\n}\nh1.board{\n    font-size: 1.6875rem;\n    font-weight: 700;\n    line-height: 1.6;\n}\nh2 {\n    font-size: 1.125rem;\n    font-weight: 600;\n    line-height: 1.4;\n}\n\n/* working with the header */\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 40px;\n    flex-wrap: wrap;\n}\n.nav-container{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n.nav-one{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #B8B8B8;\n \n}\n\n/* styling the range input */\n.slider{\n -webkit-appearance: none;\n  height: 2px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n}\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 15px;\n    height: 15px;\n    background-color: var(--light-yellow-clr);\n    cursor: pointer;\n  }\n\n  /* styling the search input */\n\n  .nav-two{\n    position: relative;\n  }\n\n input[type=\"search\"]{\n    border: none;\n    padding: 8px;\n    border-radius: 8px;\n    background-color: #202020;  \n   \n}\ninput[type=\"search\"]:focus{\n    outline: none;\n    text-align: center;\n}\n::placeholder{\n    padding-left: 20px;\n}\n\n.nav-two #search{\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n\n/* styling the hamburger */\n.nav-three{\n    color: #e0f64b;\n    font-size: 1.6rem;\n    font-weight: bolder;\n}\n\n\n/* styling main section */\n.main{\n    padding: 50px 50px 0 50px;\n   \n   \n}\n\n/* grid container */\n.grid-container{\n    display: grid;\n    grid-template-columns: repeat(3,  1fr);\n    gap: 20px;\n    line-height: 1.6;\n    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */\n    /* height: calc(100vh - 10px); */\n    \n}\n\n/* column one */\n.content-column-one{\n    height: 100%;\n     \n}\n/* wallet */\n.wallet{\n    padding: 10px;\n    padding-bottom: 20px;\n}\n.wallet span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n\n/* total assets */\n.total-assets{\n    border-radius: 20px;\n    background-color: #202020;\n    padding: 0 22px 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.assets-container>p{\n    color: #B8B8B8;\n}\n.assets select{\n    border: none;\n    background-color: #202020;\n    color: #B8B8B8;\n    cursor: pointer;\n}\n.assets select:focus{\n    outline: none;\n}\n.assets select:hover{\n    background-color: none;\n    cursor: pointer;\n}\n\nlabel.money-value{\n    font-size: 1.7rem;\n    font-weight: bold;\n}\nh4>small{\n    color: #B8B8B8;\n}\n\n.image-container{\n    /* color:rgba(23, 23, 23, 0) ; */\n}\n.asset-image{\n    opacity: 1;\n    /* position: relative;\n    z-index: 2; */\n    margin-top: -10px;\n    height: 140px;\n   \n}\n\n\n/* currencies */\n.currencies{\n    margin-top: 20px;\n    background-color: #202020;\n    padding: 16px;\n    border-radius: 20px;\n    /* allowing scrollable feature */\n    height: 940px;\n    overflow-y: scroll;\n}\n\n/* hiding the scrollbar */\n.currencies::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.currency-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: bold;\n    border-bottom: 1px solid #333;\n}\n.currency-one{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: center;    \n    gap: 10px;\n}\n.currency-symbol>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h3{\n    float: right;\n   \n}\n\n.currency-icons{\n    /* padding:25px; */\n    font-weight: bold;\n    font-size: 2.0rem;\n    border: 1px solid #333;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    color: orange;\n    margin-bottom: 10px;\n    margin-top: 10px;\n   \n}\n#myIcons{\n    height: 30px;\n    width: 30px;\n}\n.fa-ethereum{\n    color: grey;\n}\n\n\n/* styling graph */\n.graph{\n    background-color: #202020;\n    display: flex;\n    gap: 20px;\n}\n\n\n/* column two */\n\n.content-column-two{\n    height: 100%;\n    \n    \n}\n.action-container{\n    background-color: #202020;\n    border-radius: 20px;\n    padding: 10px;\n}\n\n.action-container>h2{\n    padding-bottom: 20px;\n}\n.rewards{\n    display: flex;\n    align-items: center;\n    background-color: var(--body-background-clr);\n    margin: 16px 0 24px;\n    border-radius: 10px;\n}\n.reward-one{\n    margin-left: 16px;\n    font-size: 1.1rem;\n}\n.reward-icon{\n    height: 140px;\n    margin-bottom: -12px;\n}\n\n/* grid container */\n.tools{\n    display: flex;\n    /* align-items: center; */\n    justify-content: space-around;\n    /* background-color: red; */\n    \n}\n.tool-flex{\n    display: flex;\n    border: 1px solid #333;\n    padding: 16px;\n    align-items: center;\n   font-weight: bold;\n   border-radius: 10px;\n  \n}\n.tool-flex:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.tools-two{\n    padding-left: 10px;\n}\n.tools-one{\n    padding-right: 30px;\n}\n.tools-one>i{\n   color: #e0f64b;\n   font-size: 1.2rem;\n}\n\n\n/* row two */\n.transaction-container-flex{\n    display: flex;\n    gap: 20px;\n    margin: 20px;\n    \n\n   \n}\n.transaction{\n    border: 1px solid #333;\n    padding: 8px;\n    font-weight: bold;\n    border-radius: 10px;\n    text-align: center;\n    height: 80px;\n    width: 80px;\n}\n.transaction:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.transaction>div>i{\n    color: #e0f64b;\n    font-size: 1.2rem;\n}\n\n\n/* row three */\n.notifications{\n    margin-top: 25px;\n    background-color: #202020;\n    border-radius: 20px;\n    padding: 20px;\n    /* scrollable container */\n    height: 610px;\n    overflow-y: scroll;\n\n}\n/* hiding the scrollbar */\n.notifications::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.notifications>p{\n    color: #B8B8B8;\n    /* padding: 20px; */\n}\n.para-one{\n    color: #848484;\n}\n.withdraw-success{\n    border: 1px solid #333;\n    padding: 16px;\n    margin-top: 10px;\n    border-radius: 10px;\n}\n.withdraw-success>h4>span{\n    padding-right: 10px;\n \n}\n.withdraw-success>h4>span>i{\n    color: red;\n}\n.withdraw-success>h4{\n    padding-bottom: 10px;\n}\n\n/* date */\n.date>p{\n    padding-top: 10px;\n}\n\n/* styling the third column */\n.content-column-three{\n    /* background-color: blue; */\n    /* height: 100% */\n   \n\n\n}\n.trophey{\n    padding: 10px;\n    padding-bottom: 20px;\n\n}\n.trophey span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n.leaders-row{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: var(--light-yellow-clr);\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle{\n    background-color: #171717;\n    color: #FAFAFA;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;\n}\n.leaders-name{\n    font-weight: bold;\n}\n.btn-percentage{\n    background-color: #1abc7b;\n    color: white;\n    border: none;\n    padding: 5px 8px;\n    border-radius: 5px;\n    font-weight: 800;\n}\n.leaders-row-dark{\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: #202020;\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle-dark{\n    background-color:#e0f64b;\n    color: #171717;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;  \n}\n.leaders-name-dark{\n    font-weight: bold;\n    color: white;\n\n}\n.leaders-wallet-dark{\n    color: #848484;\n}\n\n.content-row-one{\n    grid-column: span 2;\n    display: grid;\n    background-color: #202020;\n    grid-template-columns: repeat(2, 1fr);\n    border-radius: 20px;\n    margin-bottom: 30px;\n \n}\n/* first column */\n.graph-bar{\n    border-right: 1px solid #333;\n   /* padding: 15px; */\n   margin: 15px;\n   padding: 5px;\n}\n.digits-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    /* padding-right: 10px; */\n}\n.details{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n \n  \n}\n.details-one h3{\n    font-size: 1.3rem;\n}\n.details-two h4{\n    color: #848484;\n}\n.time-analysis-container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.chart>i{\n    padding: 8px;\n    font-size: 1.6rem;\n    color: #B8B8B8;\n    font-weight: 600;\n    cursor: pointer;\n\n}\n#btn-one{\n  background-color: #e0f64b;\n  padding: 8px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.myButtons{\n    padding: 10px;\n    background-color: #171717;\n    color: #848484;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition:  0.3s;\n  \n}\n.myButtons:hover{\n    background-color: #e0f64b;\n}\n.line{\n    border-bottom: 1px solid #333;\n    height:10px;  \n    /* overflow: visible;       */\n    margin: 20px 0 15px 0;\n    padding: 10px;\n \n    \n}\n\n\n.value-analysis-container{\n    text-align: right;\n}\n.value-analysis-container:last-child{\n    padding-bottom: 20px;\n}\n.btn-graph{\n    padding: 5px 10px 5px 10px;\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    background-color: #1abc7b;\n    border: none;\n    border-radius: 10px;\n}\n\n\n\n.button-containers{\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    /* gap: 20px; */\n   \n}\n#btn-buy,\n#btn-sell{\n    font-size: 1.4rem;\n    font-weight: 700;\n    padding:10px 40px 10px 40px;\n    border: none;\n    border-radius: 10px;\n}\n\n#btn-buy{\n    background-color: #e0f64b;\n}\n#btn-sell{\n    background-color: #171717;\n    color: #ffffff;\n}\n\n\n/* second column */\n.graph-percentage{\n    /* border-left: 1px solid red; */\n    padding: 5px;\n}\n.percentage-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 40px;\n    color: #848484;\n}\n.price-container{\n    display: flex;\n     gap: 30px;\n     align-items: center;\n}\n.cards-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 16px;\n    border: 1px solid #333;\n    padding: 15px;\n    border-radius: 10px;\n}\n.cards-items{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n.cards-items-two{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n\n}\n\n\n.cards-container button{\n    padding: 8px;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    color: #ffffff;\n}\n.bg-green button{\n    background-color: #1abc7b;\n}\n.bg-red button{\n    background-color: var(--red-clr);\n}\n\n.yellow-star i{\n    color: #e0f64b;\n    font-size: 16px;\n}\n.dark-star{\n    color: #B8B8B8;\n    font-size: 16px;\n}\n\n.coins-container{\n    color: #848484;\n    \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxRQUFRLFlBQVksTUFBTSxjQUFjLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sVUFBVSxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZ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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL1N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvU3R5bGVzL3N0eWxlLmNzcz9hZWU5Iiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbjpyb290e1xuICAgIC0tcmVkLWNscjojZjEzMDA1O1xuICAgIC0tZ3JlZW4tY2xyOiMxYWJjN2I7XG4gICAgLS1saWdodC15ZWxsb3ctY2xyOiNlMGY2NGI7XG4gICAgLS1kYXJrLWNscjojMTIxMjEyO1xuICAgIC0taW5mby1jbHI6IzM0OThkYjtcbiAgICAtLXN1Y2Nlc3MtY2xyOiMwN2JjMGM7XG4gICAgLS1lcnJvci1jbHI6I2U3NGMzYztcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jbHI6IzYxNjE2MTtcbiAgICAtLXRleHQtY2xyOiNmZmZmZmY7XG4gICAgLS1ib2R5LWJhY2tncm91bmQtY2xyOiMxNzE3MTc7XG59XG4qe1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5e1xuICAgIC8qIGZvbnQtZmFtaWx5OiBNYW5yb3BlLHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNscik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8qIERFRkFVTFQgU1RZTElORyAqL1xuaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuXG59XG5oMS5ib2FyZHtcbiAgICBmb250LXNpemU6IDEuNjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5oMiB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi8qIHdvcmtpbmcgd2l0aCB0aGUgaGVhZGVyICovXG4uaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLm5hdi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbi5uYXYtb25le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gXG59XG5cbi8qIHN0eWxpbmcgdGhlIHJhbmdlIGlucHV0ICovXG4uc2xpZGVye1xuIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xufVxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAvKiBzdHlsaW5nIHRoZSBzZWFyY2ggaW5wdXQgKi9cblxuICAubmF2LXR3b3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuIGlucHV0W3R5cGU9XCJzZWFyY2hcIl17XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDsgIFxuICAgXG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpwbGFjZWhvbGRlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5uYXYtdHdvICNzZWFyY2h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4vKiBzdHlsaW5nIHRoZSBoYW1idXJnZXIgKi9cbi5uYXYtdGhyZWV7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuXG4vKiBzdHlsaW5nIG1haW4gc2VjdGlvbiAqL1xuLm1haW57XG4gICAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcbiAgIFxuICAgXG59XG5cbi8qIGdyaWQgY29udGFpbmVyICovXG4uZ3JpZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAgMWZyKTtcbiAgICBnYXA6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgKi9cbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHB4KTsgKi9cbiAgICBcbn1cblxuLyogY29sdW1uIG9uZSAqL1xuLmNvbnRlbnQtY29sdW1uLW9uZXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgIFxufVxuLyogd2FsbGV0ICovXG4ud2FsbGV0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ud2FsbGV0IHNwYW57XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogI2UwZjY0Yjtcbn1cblxuLyogdG90YWwgYXNzZXRzICovXG4udG90YWwtYXNzZXRze1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBwYWRkaW5nOiAwIDIycHggMCAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYXNzZXRzLWNvbnRhaW5lcj5we1xuICAgIGNvbG9yOiAjQjhCOEI4O1xufVxuLmFzc2V0cyBzZWxlY3R7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFzc2V0cyBzZWxlY3Q6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5hc3NldHMgc2VsZWN0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sYWJlbC5tb25leS12YWx1ZXtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmg0PnNtYWxse1xuICAgIGNvbG9yOiAjQjhCOEI4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVye1xuICAgIC8qIGNvbG9yOnJnYmEoMjMsIDIzLCAyMywgMCkgOyAqL1xufVxuLmFzc2V0LWltYWdle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7ICovXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgIFxufVxuXG5cbi8qIGN1cnJlbmNpZXMgKi9cbi5jdXJyZW5jaWVze1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLyogYWxsb3dpbmcgc2Nyb2xsYWJsZSBmZWF0dXJlICovXG4gICAgaGVpZ2h0OiA5NDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi8qIGhpZGluZyB0aGUgc2Nyb2xsYmFyICovXG4uY3VycmVuY2llczo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuXG4uY3VycmVuY3ktY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG59XG4uY3VycmVuY3ktb25le1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuICAgIGdhcDogMTBweDtcbn1cbi5jdXJyZW5jeS1zeW1ib2w+aDR7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG59XG4uY3VycmVuY3ktYW1vdW50Pmg0e1xuICAgIGNvbG9yOiAjQjhCOEI4O1xufVxuLmN1cnJlbmN5LWFtb3VudD5oM3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICBcbn1cblxuLmN1cnJlbmN5LWljb25ze1xuICAgIC8qIHBhZGRpbmc6MjVweDsgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIuMHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIFxufVxuI215SWNvbnN7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuLmZhLWV0aGVyZXVte1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG5cbi8qIHN0eWxpbmcgZ3JhcGggKi9cbi5ncmFwaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5cbi8qIGNvbHVtbiB0d28gKi9cblxuLmNvbnRlbnQtY29sdW1uLXR3b3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgXG4gICAgXG59XG4uYWN0aW9uLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmFjdGlvbi1jb250YWluZXI+aDJ7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ucmV3YXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNscik7XG4gICAgbWFyZ2luOiAxNnB4IDAgMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnJld2FyZC1vbmV7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ucmV3YXJkLWljb257XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcbn1cblxuLyogZ3JpZCBjb250YWluZXIgKi9cbi50b29sc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIFxufVxuLnRvb2wtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbn1cbi50b29sLWZsZXg6aG92ZXJ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNlMGY2NGI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvb2xzLXR3b3tcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4udG9vbHMtb25le1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4udG9vbHMtb25lPml7XG4gICBjb2xvcjogI2UwZjY0YjtcbiAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5cbi8qIHJvdyB0d28gKi9cbi50cmFuc2FjdGlvbi1jb250YWluZXItZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgXG5cbiAgIFxufVxuLnRyYW5zYWN0aW9ue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbn1cbi50cmFuc2FjdGlvbjpob3ZlcntcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2UwZjY0YjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udHJhbnNhY3Rpb24+ZGl2Pml7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cblxuLyogcm93IHRocmVlICovXG4ubm90aWZpY2F0aW9uc3tcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC8qIHNjcm9sbGFibGUgY29udGFpbmVyICovXG4gICAgaGVpZ2h0OiA2MTBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbn1cbi8qIGhpZGluZyB0aGUgc2Nyb2xsYmFyICovXG4ubm90aWZpY2F0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuXG4ubm90aWZpY2F0aW9ucz5we1xuICAgIGNvbG9yOiAjQjhCOEI4O1xuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXG59XG4ucGFyYS1vbmV7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG4ud2l0aGRyYXctc3VjY2Vzc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3BhbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuIFxufVxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3Bhbj5pe1xuICAgIGNvbG9yOiByZWQ7XG59XG4ud2l0aGRyYXctc3VjY2Vzcz5oNHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLyogZGF0ZSAqL1xuLmRhdGU+cHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLyogc3R5bGluZyB0aGUgdGhpcmQgY29sdW1uICovXG4uY29udGVudC1jb2x1bW4tdGhyZWV7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICAvKiBoZWlnaHQ6IDEwMCUgKi9cbiAgIFxuXG5cbn1cbi50cm9waGV5e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbn1cbi50cm9waGV5IHNwYW57XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogI2UwZjY0Yjtcbn1cbi5sZWFkZXJzLXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcbiAgICBjb2xvcjogIzE3MTcxNztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnRuLWNpcmNsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgIGNvbG9yOiAjRkFGQUZBO1xuICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgcGFkZGluZzogNXB4IDhweCA1cHggOHB4O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgIG1hcmdpbjogOHB4O1xufVxuLmxlYWRlcnMtbmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idG4tcGVyY2VudGFnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzdiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5sZWFkZXJzLXJvdy1kYXJre1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBjb2xvcjogIzE3MTcxNztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnRuLWNpcmNsZS1kYXJre1xuICAgIGJhY2tncm91bmQtY29sb3I6I2UwZjY0YjtcbiAgICBjb2xvcjogIzE3MTcxNztcbiAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBtYXJnaW46IDhweDsgIFxufVxuLmxlYWRlcnMtbmFtZS1kYXJre1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuLmxlYWRlcnMtd2FsbGV0LWRhcmt7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG5cbi5jb250ZW50LXJvdy1vbmV7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gXG59XG4vKiBmaXJzdCBjb2x1bW4gKi9cbi5ncmFwaC1iYXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcbiAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXG4gICBtYXJnaW46IDE1cHg7XG4gICBwYWRkaW5nOiA1cHg7XG59XG4uZGlnaXRzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICovXG59XG4uZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuIFxuICBcbn1cbi5kZXRhaWxzLW9uZSBoM3tcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5kZXRhaWxzLXR3byBoNHtcbiAgICBjb2xvcjogIzg0ODQ4NDtcbn1cbi50aW1lLWFuYWx5c2lzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNoYXJ0Pml7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAjQjhCOEI4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4jYnRuLW9uZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjY0YjtcbiAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXlCdXR0b25ze1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgICBjb2xvcjogIzg0ODQ4NDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAgMC4zcztcbiAgXG59XG4ubXlCdXR0b25zOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGY2NGI7XG59XG4ubGluZXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgICBoZWlnaHQ6MTBweDsgIFxuICAgIC8qIG92ZXJmbG93OiB2aXNpYmxlOyAgICAgICAqL1xuICAgIG1hcmdpbjogMjBweCAwIDE1cHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuIFxuICAgIFxufVxuXG5cbi52YWx1ZS1hbmFseXNpcy1jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udmFsdWUtYW5hbHlzaXMtY29udGFpbmVyOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYnRuLWdyYXBoe1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzdiO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cblxuLmJ1dHRvbi1jb250YWluZXJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAvKiBnYXA6IDIwcHg7ICovXG4gICBcbn1cbiNidG4tYnV5LFxuI2J0bi1zZWxse1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzoxMHB4IDQwcHggMTBweCA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jYnRuLWJ1eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNjRiO1xufVxuI2J0bi1zZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cblxuLyogc2Vjb25kIGNvbHVtbiAqL1xuLmdyYXBoLXBlcmNlbnRhZ2V7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgcGFkZGluZzogNXB4O1xufVxuLnBlcmNlbnRhZ2UtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG4ucHJpY2UtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGdhcDogMzBweDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkcy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmRzLWl0ZW1ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG4uY2FyZHMtaXRlbXMtdHdve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbn1cblxuXG4uY2FyZHMtY29udGFpbmVyIGJ1dHRvbntcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmctZ3JlZW4gYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjN2I7XG59XG4uYmctcmVkIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcbn1cblxuLnllbGxvdy1zdGFyIGl7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmRhcmstc3RhcntcbiAgICBjb2xvcjogI0I4QjhCODtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb2lucy1jb250YWluZXJ7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsbUpBQW1KO0lBQ25KLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO1FBQ1EsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7O0FBRXhCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGNBQWM7O0FBRWxCOztBQUVBLDRCQUE0QjtBQUM1QjtDQUNDLHdCQUF3QjtFQUN2QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixX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QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7QUFFYjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjOztBQUVsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG46cm9vdHtcXG4gICAgLS1yZWQtY2xyOiNmMTMwMDU7XFxuICAgIC0tZ3JlZW4tY2xyOiMxYWJjN2I7XFxuICAgIC0tbGlnaHQteWVsbG93LWNscjojZTBmNjRiO1xcbiAgICAtLWRhcmstY2xyOiMxMjEyMTI7XFxuICAgIC0taW5mby1jbHI6IzM0OThkYjtcXG4gICAgLS1zdWNjZXNzLWNscjojMDdiYzBjO1xcbiAgICAtLWVycm9yLWNscjojZTc0YzNjO1xcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jbHI6IzYxNjE2MTtcXG4gICAgLS10ZXh0LWNscjojZmZmZmZmO1xcbiAgICAtLWJvZHktYmFja2dyb3VuZC1jbHI6IzE3MTcxNztcXG59XFxuKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5e1xcbiAgICAvKiBmb250LWZhbWlseTogTWFucm9wZSxzYW5zLXNlcmlmOyAqL1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY2xyKTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBERUZBVUxUIFNUWUxJTkcgKi9cXG5oMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuXFxufVxcbmgxLmJvYXJke1xcbiAgICBmb250LXNpemU6IDEuNjg3NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbn1cXG5cXG4vKiB3b3JraW5nIHdpdGggdGhlIGhlYWRlciAqL1xcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubmF2LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubmF2LW9uZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG4gXFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIHJhbmdlIGlucHV0ICovXFxuLnNsaWRlcntcXG4gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XFxufVxcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLyogc3R5bGluZyB0aGUgc2VhcmNoIGlucHV0ICovXFxuXFxuICAubmF2LXR3b3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiBpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDsgIFxcbiAgIFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG46OnBsYWNlaG9sZGVye1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uYXYtdHdvICNzZWFyY2h7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4vKiBzdHlsaW5nIHRoZSBoYW1idXJnZXIgKi9cXG4ubmF2LXRocmVle1xcbiAgICBjb2xvcjogI2UwZjY0YjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcblxcbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXFxuLm1haW57XFxuICAgIHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XFxuICAgXFxuICAgXFxufVxcblxcbi8qIGdyaWQgY29udGFpbmVyICovXFxuLmdyaWQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAgMWZyKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgKi9cXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTBweCk7ICovXFxuICAgIFxcbn1cXG5cXG4vKiBjb2x1bW4gb25lICovXFxuLmNvbnRlbnQtY29sdW1uLW9uZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgXFxufVxcbi8qIHdhbGxldCAqL1xcbi53YWxsZXR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ud2FsbGV0IHNwYW57XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiAjZTBmNjRiO1xcbn1cXG5cXG4vKiB0b3RhbCBhc3NldHMgKi9cXG4udG90YWwtYXNzZXRze1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBwYWRkaW5nOiAwIDIycHggMCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hc3NldHMtY29udGFpbmVyPnB7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbn1cXG4uYXNzZXRzIHNlbGVjdHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYXNzZXRzIHNlbGVjdDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLmFzc2V0cyBzZWxlY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGFiZWwubW9uZXktdmFsdWV7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuaDQ+c21hbGx7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVye1xcbiAgICAvKiBjb2xvcjpyZ2JhKDIzLCAyMywgMjMsIDApIDsgKi9cXG59XFxuLmFzc2V0LWltYWdle1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7ICovXFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgIFxcbn1cXG5cXG5cXG4vKiBjdXJyZW5jaWVzICovXFxuLmN1cnJlbmNpZXN7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIC8qIGFsbG93aW5nIHNjcm9sbGFibGUgZmVhdHVyZSAqL1xcbiAgICBoZWlnaHQ6IDk0MHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi8qIGhpZGluZyB0aGUgc2Nyb2xsYmFyICovXFxuLmN1cnJlbmNpZXM6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG5cXG4uY3VycmVuY3ktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcXG59XFxuLmN1cnJlbmN5LW9uZXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxuICAgIGdhcDogMTBweDtcXG59XFxuLmN1cnJlbmN5LXN5bWJvbD5oNHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcbi5jdXJyZW5jeS1hbW91bnQ+aDR7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbn1cXG4uY3VycmVuY3ktYW1vdW50Pmgze1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgXFxufVxcblxcbi5jdXJyZW5jeS1pY29uc3tcXG4gICAgLyogcGFkZGluZzoyNXB4OyAqL1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyLjByZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgXFxufVxcbiNteUljb25ze1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG4uZmEtZXRoZXJldW17XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIGdyYXBoICovXFxuLmdyYXBoe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi8qIGNvbHVtbiB0d28gKi9cXG5cXG4uY29udGVudC1jb2x1bW4tdHdve1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbiAgICBcXG59XFxuLmFjdGlvbi1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hY3Rpb24tY29udGFpbmVyPmgye1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLnJld2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jbHIpO1xcbiAgICBtYXJnaW46IDE2cHggMCAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucmV3YXJkLW9uZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4ucmV3YXJkLWljb257XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xcbn1cXG5cXG4vKiBncmlkIGNvbnRhaW5lciAqL1xcbi50b29sc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG4gICAgXFxufVxcbi50b29sLWZsZXh7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIFxcbn1cXG4udG9vbC1mbGV4OmhvdmVye1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2UwZjY0YjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9vbHMtdHdve1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi50b29scy1vbmV7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcbi50b29scy1vbmU+aXtcXG4gICBjb2xvcjogI2UwZjY0YjtcXG4gICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuXFxuLyogcm93IHR3byAqL1xcbi50cmFuc2FjdGlvbi1jb250YWluZXItZmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIFxcblxcbiAgIFxcbn1cXG4udHJhbnNhY3Rpb257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuLnRyYW5zYWN0aW9uOmhvdmVye1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2UwZjY0YjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udHJhbnNhY3Rpb24+ZGl2Pml7XFxuICAgIGNvbG9yOiAjZTBmNjRiO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuXFxuLyogcm93IHRocmVlICovXFxuLm5vdGlmaWNhdGlvbnN7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIC8qIHNjcm9sbGFibGUgY29udGFpbmVyICovXFxuICAgIGhlaWdodDogNjEwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG59XFxuLyogaGlkaW5nIHRoZSBzY3JvbGxiYXIgKi9cXG4ubm90aWZpY2F0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi5ub3RpZmljYXRpb25zPnB7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG4ucGFyYS1vbmV7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbn1cXG4ud2l0aGRyYXctc3VjY2Vzc3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3BhbntcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gXFxufVxcbi53aXRoZHJhdy1zdWNjZXNzPmg0PnNwYW4+aXtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLndpdGhkcmF3LXN1Y2Nlc3M+aDR7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBkYXRlICovXFxuLmRhdGU+cHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIHRoaXJkIGNvbHVtbiAqL1xcbi5jb250ZW50LWNvbHVtbi10aHJlZXtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG4gICAgLyogaGVpZ2h0OiAxMDAlICovXFxuICAgXFxuXFxuXFxufVxcbi50cm9waGV5e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG5cXG59XFxuLnRyb3BoZXkgc3BhbntcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxufVxcbi5sZWFkZXJzLXJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXllbGxvdy1jbHIpO1xcbiAgICBjb2xvcjogIzE3MTcxNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bi1jaXJjbGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICAgIGNvbG9yOiAjRkFGQUZBO1xcbiAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICBwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XFxuICAgICBib3JkZXI6IG5vbmU7XFxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgbWFyZ2luOiA4cHg7XFxufVxcbi5sZWFkZXJzLW5hbWV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYnRuLXBlcmNlbnRhZ2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjN2I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5sZWFkZXJzLXJvdy1kYXJre1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgY29sb3I6ICMxNzE3MTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idG4tY2lyY2xlLWRhcmt7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2UwZjY0YjtcXG4gICAgY29sb3I6ICMxNzE3MTc7XFxuICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcXG4gICAgIGJvcmRlcjogbm9uZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICBtYXJnaW46IDhweDsgIFxcbn1cXG4ubGVhZGVycy1uYW1lLWRhcmt7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcbi5sZWFkZXJzLXdhbGxldC1kYXJre1xcbiAgICBjb2xvcjogIzg0ODQ4NDtcXG59XFxuXFxuLmNvbnRlbnQtcm93LW9uZXtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gXFxufVxcbi8qIGZpcnN0IGNvbHVtbiAqL1xcbi5ncmFwaC1iYXJ7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XFxuICAgLyogcGFkZGluZzogMTVweDsgKi9cXG4gICBtYXJnaW46IDE1cHg7XFxuICAgcGFkZGluZzogNXB4O1xcbn1cXG4uZGlnaXRzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICovXFxufVxcbi5kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuIFxcbiAgXFxufVxcbi5kZXRhaWxzLW9uZSBoM3tcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5kZXRhaWxzLXR3byBoNHtcXG4gICAgY29sb3I6ICM4NDg0ODQ7XFxufVxcbi50aW1lLWFuYWx5c2lzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2hhcnQ+aXtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuI2J0bi1vbmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNjRiO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubXlCdXR0b25ze1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgICBjb2xvcjogIzg0ODQ4NDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogIDAuM3M7XFxuICBcXG59XFxuLm15QnV0dG9uczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjY0YjtcXG59XFxuLmxpbmV7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xcbiAgICBoZWlnaHQ6MTBweDsgIFxcbiAgICAvKiBvdmVyZmxvdzogdmlzaWJsZTsgICAgICAgKi9cXG4gICAgbWFyZ2luOiAyMHB4IDAgMTVweCAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiBcXG4gICAgXFxufVxcblxcblxcbi52YWx1ZS1hbmFseXNpcy1jb250YWluZXJ7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4udmFsdWUtYW5hbHlzaXMtY29udGFpbmVyOmxhc3QtY2hpbGR7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4uYnRuLWdyYXBoe1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjN2I7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuXFxuLmJ1dHRvbi1jb250YWluZXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgLyogZ2FwOiAyMHB4OyAqL1xcbiAgIFxcbn1cXG4jYnRuLWJ1eSxcXG4jYnRuLXNlbGx7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nOjEwcHggNDBweCAxMHB4IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2J0bi1idXl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGY2NGI7XFxufVxcbiNidG4tc2VsbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcblxcbi8qIHNlY29uZCBjb2x1bW4gKi9cXG4uZ3JhcGgtcGVyY2VudGFnZXtcXG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLnBlcmNlbnRhZ2UtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBjb2xvcjogIzg0ODQ4NDtcXG59XFxuLnByaWNlLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgIGdhcDogMzBweDtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJkcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmRzLWl0ZW1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5jYXJkcy1pdGVtcy10d297XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuXFxuLmNhcmRzLWNvbnRhaW5lciBidXR0b257XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5iZy1ncmVlbiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjN2I7XFxufVxcbi5iZy1yZWQgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcXG59XFxuXFxuLnllbGxvdy1zdGFyIGl7XFxuICAgIGNvbG9yOiAjZTBmNjRiO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5kYXJrLXN0YXJ7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb2lucy1jb250YWluZXJ7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbiAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9TdHlsZXMvc3R5bGUuY3NzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=