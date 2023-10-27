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
    /* flex-wrap: wrap; */
}
.nav-container{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
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
    background-color: red;
   
   
}

/* grid container */
.grid-container{
    display: grid;
    gap: 20px;
    line-height: 1.6;
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    /* height: calc(100vh - 10px); */
    
}


/* RESPONSIVENESS */
@media (min-width:50em) {
    
    .grid-span-2{
        grid-column: span 2;
    
    }
     .grid-container{
        grid-template-columns: repeat(3,  1fr);
     }
  
    
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
    /* height: 100%; */
    
    
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
    
}`, "",{"version":3,"sources":["webpack://./src/Styles/style.css"],"names":[],"mappings":"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","sourcesContent":["\n:root{\n    --red-clr:#f13005;\n    --green-clr:#1abc7b;\n    --light-yellow-clr:#e0f64b;\n    --dark-clr:#121212;\n    --info-clr:#3498db;\n    --success-clr:#07bc0c;\n    --error-clr:#e74c3c;\n    --card-background-clr:#616161;\n    --text-clr:#ffffff;\n    --body-background-clr:#171717;\n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    /* font-family: Manrope,sans-serif; */\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: .75rem;\n    font-weight: 500;\n    background-color: var(--body-background-clr);\n    color: #ffffff;\n    min-height: 100vh;\n}\n\n/* DEFAULT STYLING */\nh1{\n        font-size: 1.3rem;\n        font-weight: 800;\n        line-height: 1.4;\n\n}\nh1.board{\n    font-size: 1.6875rem;\n    font-weight: 700;\n    line-height: 1.6;\n}\nh2 {\n    font-size: 1.125rem;\n    font-weight: 600;\n    line-height: 1.4;\n}\n\n/* working with the header */\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 40px;\n    /* flex-wrap: wrap; */\n}\n.nav-container{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-left: 10px;\n}\n.nav-one{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #B8B8B8;\n \n}\n\n/* styling the range input */\n.slider{\n -webkit-appearance: none;\n  height: 2px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n}\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 15px;\n    height: 15px;\n    background-color: var(--light-yellow-clr);\n    cursor: pointer;\n  }\n\n  /* styling the search input */\n\n  .nav-two{\n    position: relative;\n  }\n\n input[type=\"search\"]{\n    border: none;\n    padding: 8px;\n    border-radius: 8px;\n    background-color: #202020;  \n   \n}\ninput[type=\"search\"]:focus{\n    outline: none;\n    text-align: center;\n}\n::placeholder{\n    padding-left: 20px;\n}\n\n.nav-two #search{\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n\n/* styling the hamburger */\n.nav-three{\n    color: #e0f64b;\n    font-size: 1.6rem;\n    font-weight: bolder;\n}\n\n\n/* styling main section */\n.main{\n    padding: 50px 50px 0 50px;\n    background-color: red;\n   \n   \n}\n\n/* grid container */\n.grid-container{\n    display: grid;\n    gap: 20px;\n    line-height: 1.6;\n    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */\n    /* height: calc(100vh - 10px); */\n    \n}\n\n\n/* RESPONSIVENESS */\n@media (min-width:50em) {\n    \n    .grid-span-2{\n        grid-column: span 2;\n    \n    }\n     .grid-container{\n        grid-template-columns: repeat(3,  1fr);\n     }\n  \n    \n}\n\n\n\n\n\n\n\n/* column one */\n.content-column-one{\n    height: 100%;\n     \n}\n/* wallet */\n.wallet{\n    padding: 10px;\n    padding-bottom: 20px;\n}\n.wallet span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n\n/* total assets */\n.total-assets{\n    border-radius: 20px;\n    background-color: #202020;\n    padding: 0 22px 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.assets-container>p{\n    color: #B8B8B8;\n}\n.assets select{\n    border: none;\n    background-color: #202020;\n    color: #B8B8B8;\n    cursor: pointer;\n}\n.assets select:focus{\n    outline: none;\n}\n.assets select:hover{\n    background-color: none;\n    cursor: pointer;\n}\n\nlabel.money-value{\n    font-size: 1.7rem;\n    font-weight: bold;\n}\nh4>small{\n    color: #B8B8B8;\n}\n\n.image-container{\n    /* color:rgba(23, 23, 23, 0) ; */\n}\n.asset-image{\n    opacity: 1;\n    /* position: relative;\n    z-index: 2; */\n    margin-top: -10px;\n    height: 140px;\n   \n}\n\n\n/* currencies */\n.currencies{\n    margin-top: 20px;\n    background-color: #202020;\n    padding: 16px;\n    border-radius: 20px;\n    /* allowing scrollable feature */\n    height: 940px;\n    overflow-y: scroll;\n}\n\n/* hiding the scrollbar */\n.currencies::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.currency-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: bold;\n    border-bottom: 1px solid #333;\n}\n.currency-one{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: center;    \n    gap: 10px;\n}\n.currency-symbol>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h3{\n    float: right;\n   \n}\n\n.currency-icons{\n    /* padding:25px; */\n    font-weight: bold;\n    font-size: 2.0rem;\n    border: 1px solid #333;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    color: orange;\n    margin-bottom: 10px;\n    margin-top: 10px;\n   \n}\n#myIcons{\n    height: 30px;\n    width: 30px;\n}\n.fa-ethereum{\n    color: grey;\n}\n\n\n/* styling graph */\n.graph{\n    background-color: #202020;\n    display: flex;\n    gap: 20px;\n}\n\n\n/* column two */\n\n.content-column-two{\n    /* height: 100%; */\n    \n    \n}\n.action-container{\n    background-color: #202020;\n    border-radius: 20px;\n    padding: 10px;\n}\n\n.action-container>h2{\n    padding-bottom: 20px;\n}\n.rewards{\n    display: flex;\n    align-items: center;\n    background-color: var(--body-background-clr);\n    margin: 16px 0 24px;\n    border-radius: 10px;\n}\n.reward-one{\n    margin-left: 16px;\n    font-size: 1.1rem;\n}\n.reward-icon{\n    height: 140px;\n    margin-bottom: -12px;\n}\n\n/* grid container */\n.tools{\n    display: flex;\n    /* align-items: center; */\n    justify-content: space-around;\n    /* background-color: red; */\n    \n}\n.tool-flex{\n    display: flex;\n    border: 1px solid #333;\n    padding: 16px;\n    align-items: center;\n   font-weight: bold;\n   border-radius: 10px;\n  \n}\n.tool-flex:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.tools-two{\n    padding-left: 10px;\n}\n.tools-one{\n    padding-right: 30px;\n}\n.tools-one>i{\n   color: #e0f64b;\n   font-size: 1.2rem;\n}\n\n\n/* row two */\n.transaction-container-flex{\n    display: flex;\n    gap: 20px;\n    margin: 20px;\n    \n\n   \n}\n.transaction{\n    border: 1px solid #333;\n    padding: 8px;\n    font-weight: bold;\n    border-radius: 10px;\n    text-align: center;\n    height: 80px;\n    width: 80px;\n}\n.transaction:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.transaction>div>i{\n    color: #e0f64b;\n    font-size: 1.2rem;\n}\n\n\n/* row three */\n.notifications{\n    margin-top: 25px;\n    background-color: #202020;\n    border-radius: 20px;\n    padding: 20px;\n    /* scrollable container */\n    height: 610px;\n    overflow-y: scroll;\n\n}\n/* hiding the scrollbar */\n.notifications::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.notifications>p{\n    color: #B8B8B8;\n    /* padding: 20px; */\n}\n.para-one{\n    color: #848484;\n}\n.withdraw-success{\n    border: 1px solid #333;\n    padding: 16px;\n    margin-top: 10px;\n    border-radius: 10px;\n}\n.withdraw-success>h4>span{\n    padding-right: 10px;\n \n}\n.withdraw-success>h4>span>i{\n    color: red;\n}\n.withdraw-success>h4{\n    padding-bottom: 10px;\n}\n\n/* date */\n.date>p{\n    padding-top: 10px;\n}\n\n/* styling the third column */\n.content-column-three{\n    /* background-color: blue; */\n    /* height: 100% */\n   \n\n\n}\n.trophey{\n    padding: 10px;\n    padding-bottom: 20px;\n\n}\n.trophey span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n.leaders-row{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: var(--light-yellow-clr);\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle{\n    background-color: #171717;\n    color: #FAFAFA;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;\n}\n.leaders-name{\n    font-weight: bold;\n}\n.btn-percentage{\n    background-color: #1abc7b;\n    color: white;\n    border: none;\n    padding: 5px 8px;\n    border-radius: 5px;\n    font-weight: 800;\n}\n.leaders-row-dark{\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: #202020;\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle-dark{\n    background-color:#e0f64b;\n    color: #171717;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;  \n}\n.leaders-name-dark{\n    font-weight: bold;\n    color: white;\n\n}\n.leaders-wallet-dark{\n    color: #848484;\n}\n\n.content-row-one{\n    display: grid;\n    background-color: #202020;\n    grid-template-columns: repeat(2, 1fr);\n    border-radius: 20px;\n    margin-bottom: 30px;\n \n}\n\n/* first column */\n.graph-bar{\n    border-right: 1px solid #333;\n   /* padding: 15px; */\n   margin: 15px;\n   padding: 5px;\n}\n.digits-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    /* padding-right: 10px; */\n}\n.details{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n \n  \n}\n.details-one h3{\n    font-size: 1.3rem;\n}\n.details-two h4{\n    color: #848484;\n}\n.time-analysis-container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.chart>i{\n    padding: 8px;\n    font-size: 1.6rem;\n    color: #B8B8B8;\n    font-weight: 600;\n    cursor: pointer;\n\n}\n#btn-one{\n  background-color: #e0f64b;\n  padding: 8px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.myButtons{\n    padding: 10px;\n    background-color: #171717;\n    color: #848484;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition:  0.3s;\n  \n}\n.myButtons:hover{\n    background-color: #e0f64b;\n}\n.line{\n    border-bottom: 1px solid #333;\n    height:10px;  \n    /* overflow: visible;       */\n    margin: 20px 0 15px 0;\n    padding: 10px;\n \n    \n}\n\n\n.value-analysis-container{\n    text-align: right;\n}\n.value-analysis-container:last-child{\n    padding-bottom: 20px;\n}\n.btn-graph{\n    padding: 5px 10px 5px 10px;\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    background-color: #1abc7b;\n    border: none;\n    border-radius: 10px;\n}\n\n\n\n.button-containers{\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    /* gap: 20px; */\n   \n}\n#btn-buy,\n#btn-sell{\n    font-size: 1.4rem;\n    font-weight: 700;\n    padding:10px 40px 10px 40px;\n    border: none;\n    border-radius: 10px;\n}\n\n#btn-buy{\n    background-color: #e0f64b;\n}\n#btn-sell{\n    background-color: #171717;\n    color: #ffffff;\n}\n\n\n/* second column */\n.graph-percentage{\n    /* border-left: 1px solid red; */\n    padding: 5px;\n}\n.percentage-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 40px;\n    color: #848484;\n}\n.price-container{\n    display: flex;\n     gap: 30px;\n     align-items: center;\n}\n.cards-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 16px;\n    border: 1px solid #333;\n    padding: 15px;\n    border-radius: 10px;\n}\n.cards-items{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n.cards-items-two{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n\n}\n\n\n.cards-container button{\n    padding: 8px;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    color: #ffffff;\n}\n.bg-green button{\n    background-color: #1abc7b;\n}\n.bg-red button{\n    background-color: var(--red-clr);\n}\n\n.yellow-star i{\n    color: #e0f64b;\n    font-size: 16px;\n}\n.dark-star{\n    color: #B8B8B8;\n    font-size: 16px;\n}\n\n.coins-container{\n    color: #848484;\n    \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsbUNBQW1DO0FBQ25DO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFFBQVEsWUFBWSxNQUFNLFlBQVksZUFBZSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsUUFBUSxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLFFBQVEsWUFBWSxVQUFVLEtBQUssV0FBVyxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksWUFBWSxRQUFRLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sV0FBVyxLQUFLLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGdCQUFnQixNQUFNLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFh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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9TdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL1N0eWxlcy9zdHlsZS5jc3M/YWVlOSIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG46cm9vdHtcbiAgICAtLXJlZC1jbHI6I2YxMzAwNTtcbiAgICAtLWdyZWVuLWNscjojMWFiYzdiO1xuICAgIC0tbGlnaHQteWVsbG93LWNscjojZTBmNjRiO1xuICAgIC0tZGFyay1jbHI6IzEyMTIxMjtcbiAgICAtLWluZm8tY2xyOiMzNDk4ZGI7XG4gICAgLS1zdWNjZXNzLWNscjojMDdiYzBjO1xuICAgIC0tZXJyb3ItY2xyOiNlNzRjM2M7XG4gICAgLS1jYXJkLWJhY2tncm91bmQtY2xyOiM2MTYxNjE7XG4gICAgLS10ZXh0LWNscjojZmZmZmZmO1xuICAgIC0tYm9keS1iYWNrZ3JvdW5kLWNscjojMTcxNzE3O1xufVxuKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keXtcbiAgICAvKiBmb250LWZhbWlseTogTWFucm9wZSxzYW5zLXNlcmlmOyAqL1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jbHIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBERUZBVUxUIFNUWUxJTkcgKi9cbmgxe1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcblxufVxuaDEuYm9hcmR7XG4gICAgZm9udC1zaXplOiAxLjY4NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuaDIge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4vKiB3b3JraW5nIHdpdGggdGhlIGhlYWRlciAqL1xuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cbn1cbi5uYXYtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubmF2LW9uZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOiAjQjhCOEI4O1xuIFxufVxuXG4vKiBzdHlsaW5nIHRoZSByYW5nZSBpbnB1dCAqL1xuLnNsaWRlcntcbiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAwLjc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbn1cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93LWNscik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLyogc3R5bGluZyB0aGUgc2VhcmNoIGlucHV0ICovXG5cbiAgLm5hdi10d297XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiBpbnB1dFt0eXBlPVwic2VhcmNoXCJde1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7ICBcbiAgIFxufVxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6cGxhY2Vob2xkZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ubmF2LXR3byAjc2VhcmNoe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbn1cblxuLyogc3R5bGluZyB0aGUgaGFtYnVyZ2VyICovXG4ubmF2LXRocmVle1xuICAgIGNvbG9yOiAjZTBmNjRiO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cblxuLyogc3R5bGluZyBtYWluIHNlY3Rpb24gKi9cbi5tYWlue1xuICAgIHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgXG4gICBcbn1cblxuLyogZ3JpZCBjb250YWluZXIgKi9cbi5ncmlkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpOyAqL1xuICAgIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcHgpOyAqL1xuICAgIFxufVxuXG5cbi8qIFJFU1BPTlNJVkVORVNTICovXG5AbWVkaWEgKG1pbi13aWR0aDo1MGVtKSB7XG4gICAgXG4gICAgLmdyaWQtc3Bhbi0ye1xuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIFxuICAgIH1cbiAgICAgLmdyaWQtY29udGFpbmVye1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAgMWZyKTtcbiAgICAgfVxuICBcbiAgICBcbn1cblxuXG5cblxuXG5cblxuLyogY29sdW1uIG9uZSAqL1xuLmNvbnRlbnQtY29sdW1uLW9uZXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgIFxufVxuLyogd2FsbGV0ICovXG4ud2FsbGV0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ud2FsbGV0IHNwYW57XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogI2UwZjY0Yjtcbn1cblxuLyogdG90YWwgYXNzZXRzICovXG4udG90YWwtYXNzZXRze1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBwYWRkaW5nOiAwIDIycHggMCAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYXNzZXRzLWNvbnRhaW5lcj5we1xuICAgIGNvbG9yOiAjQjhCOEI4O1xufVxuLmFzc2V0cyBzZWxlY3R7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFzc2V0cyBzZWxlY3Q6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5hc3NldHMgc2VsZWN0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sYWJlbC5tb25leS12YWx1ZXtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmg0PnNtYWxse1xuICAgIGNvbG9yOiAjQjhCOEI4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVye1xuICAgIC8qIGNvbG9yOnJnYmEoMjMsIDIzLCAyMywgMCkgOyAqL1xufVxuLmFzc2V0LWltYWdle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7ICovXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgIFxufVxuXG5cbi8qIGN1cnJlbmNpZXMgKi9cbi5jdXJyZW5jaWVze1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLyogYWxsb3dpbmcgc2Nyb2xsYWJsZSBmZWF0dXJlICovXG4gICAgaGVpZ2h0OiA5NDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi8qIGhpZGluZyB0aGUgc2Nyb2xsYmFyICovXG4uY3VycmVuY2llczo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuXG4uY3VycmVuY3ktY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG59XG4uY3VycmVuY3ktb25le1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuICAgIGdhcDogMTBweDtcbn1cbi5jdXJyZW5jeS1zeW1ib2w+aDR7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG59XG4uY3VycmVuY3ktYW1vdW50Pmg0e1xuICAgIGNvbG9yOiAjQjhCOEI4O1xufVxuLmN1cnJlbmN5LWFtb3VudD5oM3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICBcbn1cblxuLmN1cnJlbmN5LWljb25ze1xuICAgIC8qIHBhZGRpbmc6MjVweDsgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIuMHJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIFxufVxuI215SWNvbnN7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuLmZhLWV0aGVyZXVte1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG5cbi8qIHN0eWxpbmcgZ3JhcGggKi9cbi5ncmFwaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5cbi8qIGNvbHVtbiB0d28gKi9cblxuLmNvbnRlbnQtY29sdW1uLXR3b3tcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgXG4gICAgXG59XG4uYWN0aW9uLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmFjdGlvbi1jb250YWluZXI+aDJ7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ucmV3YXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNscik7XG4gICAgbWFyZ2luOiAxNnB4IDAgMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnJld2FyZC1vbmV7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ucmV3YXJkLWljb257XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcbn1cblxuLyogZ3JpZCBjb250YWluZXIgKi9cbi50b29sc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIFxufVxuLnRvb2wtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbn1cbi50b29sLWZsZXg6aG92ZXJ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNlMGY2NGI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvb2xzLXR3b3tcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4udG9vbHMtb25le1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4udG9vbHMtb25lPml7XG4gICBjb2xvcjogI2UwZjY0YjtcbiAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5cbi8qIHJvdyB0d28gKi9cbi50cmFuc2FjdGlvbi1jb250YWluZXItZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgXG5cbiAgIFxufVxuLnRyYW5zYWN0aW9ue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbn1cbi50cmFuc2FjdGlvbjpob3ZlcntcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2UwZjY0YjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udHJhbnNhY3Rpb24+ZGl2Pml7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cblxuLyogcm93IHRocmVlICovXG4ubm90aWZpY2F0aW9uc3tcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC8qIHNjcm9sbGFibGUgY29udGFpbmVyICovXG4gICAgaGVpZ2h0OiA2MTBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbn1cbi8qIGhpZGluZyB0aGUgc2Nyb2xsYmFyICovXG4ubm90aWZpY2F0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuXG4ubm90aWZpY2F0aW9ucz5we1xuICAgIGNvbG9yOiAjQjhCOEI4O1xuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXG59XG4ucGFyYS1vbmV7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG4ud2l0aGRyYXctc3VjY2Vzc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3BhbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuIFxufVxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3Bhbj5pe1xuICAgIGNvbG9yOiByZWQ7XG59XG4ud2l0aGRyYXctc3VjY2Vzcz5oNHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLyogZGF0ZSAqL1xuLmRhdGU+cHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLyogc3R5bGluZyB0aGUgdGhpcmQgY29sdW1uICovXG4uY29udGVudC1jb2x1bW4tdGhyZWV7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICAvKiBoZWlnaHQ6IDEwMCUgKi9cbiAgIFxuXG5cbn1cbi50cm9waGV5e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbn1cbi50cm9waGV5IHNwYW57XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogI2UwZjY0Yjtcbn1cbi5sZWFkZXJzLXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcbiAgICBjb2xvcjogIzE3MTcxNztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnRuLWNpcmNsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgIGNvbG9yOiAjRkFGQUZBO1xuICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgcGFkZGluZzogNXB4IDhweCA1cHggOHB4O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgIG1hcmdpbjogOHB4O1xufVxuLmxlYWRlcnMtbmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idG4tcGVyY2VudGFnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzdiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5sZWFkZXJzLXJvdy1kYXJre1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBjb2xvcjogIzE3MTcxNztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnRuLWNpcmNsZS1kYXJre1xuICAgIGJhY2tncm91bmQtY29sb3I6I2UwZjY0YjtcbiAgICBjb2xvcjogIzE3MTcxNztcbiAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBtYXJnaW46IDhweDsgIFxufVxuLmxlYWRlcnMtbmFtZS1kYXJre1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuLmxlYWRlcnMtd2FsbGV0LWRhcmt7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG5cbi5jb250ZW50LXJvdy1vbmV7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuIFxufVxuXG4vKiBmaXJzdCBjb2x1bW4gKi9cbi5ncmFwaC1iYXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcbiAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXG4gICBtYXJnaW46IDE1cHg7XG4gICBwYWRkaW5nOiA1cHg7XG59XG4uZGlnaXRzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICovXG59XG4uZGV0YWlsc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuIFxuICBcbn1cbi5kZXRhaWxzLW9uZSBoM3tcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5kZXRhaWxzLXR3byBoNHtcbiAgICBjb2xvcjogIzg0ODQ4NDtcbn1cbi50aW1lLWFuYWx5c2lzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNoYXJ0Pml7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGNvbG9yOiAjQjhCOEI4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4jYnRuLW9uZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjY0YjtcbiAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubXlCdXR0b25ze1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgICBjb2xvcjogIzg0ODQ4NDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAgMC4zcztcbiAgXG59XG4ubXlCdXR0b25zOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGY2NGI7XG59XG4ubGluZXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgICBoZWlnaHQ6MTBweDsgIFxuICAgIC8qIG92ZXJmbG93OiB2aXNpYmxlOyAgICAgICAqL1xuICAgIG1hcmdpbjogMjBweCAwIDE1cHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuIFxuICAgIFxufVxuXG5cbi52YWx1ZS1hbmFseXNpcy1jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udmFsdWUtYW5hbHlzaXMtY29udGFpbmVyOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYnRuLWdyYXBoe1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzdiO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cblxuLmJ1dHRvbi1jb250YWluZXJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAvKiBnYXA6IDIwcHg7ICovXG4gICBcbn1cbiNidG4tYnV5LFxuI2J0bi1zZWxse1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzoxMHB4IDQwcHggMTBweCA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jYnRuLWJ1eXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNjRiO1xufVxuI2J0bi1zZWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cblxuLyogc2Vjb25kIGNvbHVtbiAqL1xuLmdyYXBoLXBlcmNlbnRhZ2V7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgcGFkZGluZzogNXB4O1xufVxuLnBlcmNlbnRhZ2UtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG4ucHJpY2UtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGdhcDogMzBweDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkcy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmRzLWl0ZW1ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG4uY2FyZHMtaXRlbXMtdHdve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbn1cblxuXG4uY2FyZHMtY29udGFpbmVyIGJ1dHRvbntcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmctZ3JlZW4gYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjN2I7XG59XG4uYmctcmVkIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcbn1cblxuLnllbGxvdy1zdGFyIGl7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmRhcmstc3RhcntcbiAgICBjb2xvcjogI0I4QjhCODtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb2lucy1jb250YWluZXJ7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsbUpBQW1KO0lBQ25KLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO1FBQ1EsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7O0FBRXhCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdCQUFn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LDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTs7QUFFbkI7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7O0FBR0Esa0JBQWtCO0FBQ2xCO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0tBQ1osU0FBUztLQUNULG1CQUFtQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztBQUViOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290e1xcbiAgICAtLXJlZC1jbHI6I2YxMzAwNTtcXG4gICAgLS1ncmVlbi1jbHI6IzFhYmM3YjtcXG4gICAgLS1saWdodC15ZWxsb3ctY2xyOiNlMGY2NGI7XFxuICAgIC0tZGFyay1jbHI6IzEyMTIxMjtcXG4gICAgLS1pbmZvLWNscjojMzQ5OGRiO1xcbiAgICAtLXN1Y2Nlc3MtY2xyOiMwN2JjMGM7XFxuICAgIC0tZXJyb3ItY2xyOiNlNzRjM2M7XFxuICAgIC0tY2FyZC1iYWNrZ3JvdW5kLWNscjojNjE2MTYxO1xcbiAgICAtLXRleHQtY2xyOiNmZmZmZmY7XFxuICAgIC0tYm9keS1iYWNrZ3JvdW5kLWNscjojMTcxNzE3O1xcbn1cXG4qe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHl7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiBNYW5yb3BlLHNhbnMtc2VyaWY7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jbHIpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIERFRkFVTFQgU1RZTElORyAqL1xcbmgxe1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogODAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcXG5cXG59XFxuaDEuYm9hcmR7XFxuICAgIGZvbnQtc2l6ZTogMS42ODc1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbi8qIHdvcmtpbmcgd2l0aCB0aGUgaGVhZGVyICovXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxufVxcbi5uYXYtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ubmF2LW9uZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG4gXFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIHJhbmdlIGlucHV0ICovXFxuLnNsaWRlcntcXG4gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XFxufVxcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLyogc3R5bGluZyB0aGUgc2VhcmNoIGlucHV0ICovXFxuXFxuICAubmF2LXR3b3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiBpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDsgIFxcbiAgIFxcbn1cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG46OnBsYWNlaG9sZGVye1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uYXYtdHdvICNzZWFyY2h7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4vKiBzdHlsaW5nIHRoZSBoYW1idXJnZXIgKi9cXG4ubmF2LXRocmVle1xcbiAgICBjb2xvcjogI2UwZjY0YjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcblxcbi8qIHN0eWxpbmcgbWFpbiBzZWN0aW9uICovXFxuLm1haW57XFxuICAgIHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICBcXG4gICBcXG59XFxuXFxuLyogZ3JpZCBjb250YWluZXIgKi9cXG4uZ3JpZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7ICovXFxuICAgIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcHgpOyAqL1xcbiAgICBcXG59XFxuXFxuXFxuLyogUkVTUE9OU0lWRU5FU1MgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDo1MGVtKSB7XFxuICAgIFxcbiAgICAuZ3JpZC1zcGFuLTJ7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBcXG4gICAgfVxcbiAgICAgLmdyaWQtY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgIDFmcik7XFxuICAgICB9XFxuICBcXG4gICAgXFxufVxcblxcblxcblxcblxcblxcblxcblxcbi8qIGNvbHVtbiBvbmUgKi9cXG4uY29udGVudC1jb2x1bW4tb25le1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICBcXG59XFxuLyogd2FsbGV0ICovXFxuLndhbGxldHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi53YWxsZXQgc3BhbntcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxufVxcblxcbi8qIHRvdGFsIGFzc2V0cyAqL1xcbi50b3RhbC1hc3NldHN7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIHBhZGRpbmc6IDAgMjJweCAwIDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmFzc2V0cy1jb250YWluZXI+cHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcbi5hc3NldHMgc2VsZWN0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hc3NldHMgc2VsZWN0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYXNzZXRzIHNlbGVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5sYWJlbC5tb25leS12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5oND5zbWFsbHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXJ7XFxuICAgIC8qIGNvbG9yOnJnYmEoMjMsIDIzLCAyMywgMCkgOyAqL1xcbn1cXG4uYXNzZXQtaW1hZ2V7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjsgKi9cXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgXFxufVxcblxcblxcbi8qIGN1cnJlbmNpZXMgKi9cXG4uY3VycmVuY2llc3tcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLyogYWxsb3dpbmcgc2Nyb2xsYWJsZSBmZWF0dXJlICovXFxuICAgIGhlaWdodDogOTQwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLyogaGlkaW5nIHRoZSBzY3JvbGxiYXIgKi9cXG4uY3VycmVuY2llczo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi5jdXJyZW5jeS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xcbn1cXG4uY3VycmVuY3ktb25le1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uY3VycmVuY3ktc3ltYm9sPmg0e1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG59XFxuLmN1cnJlbmN5LWFtb3VudD5oNHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcbi5jdXJyZW5jeS1hbW91bnQ+aDN7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICBcXG59XFxuXFxuLmN1cnJlbmN5LWljb25ze1xcbiAgICAvKiBwYWRkaW5nOjI1cHg7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIuMHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICBcXG59XFxuI215SWNvbnN7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi5mYS1ldGhlcmV1bXtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcblxcbi8qIHN0eWxpbmcgZ3JhcGggKi9cXG4uZ3JhcGh7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuXFxuLyogY29sdW1uIHR3byAqL1xcblxcbi5jb250ZW50LWNvbHVtbi10d297XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgXFxuICAgIFxcbn1cXG4uYWN0aW9uLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFjdGlvbi1jb250YWluZXI+aDJ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ucmV3YXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG1hcmdpbjogMTZweCAwIDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5yZXdhcmQtb25le1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi5yZXdhcmQtaWNvbntcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEycHg7XFxufVxcblxcbi8qIGdyaWQgY29udGFpbmVyICovXFxuLnRvb2xze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgICBcXG59XFxuLnRvb2wtZmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBmb250LXdlaWdodDogYm9sZDtcXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgXFxufVxcbi50b29sLWZsZXg6aG92ZXJ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZTBmNjRiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b29scy10d297XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLnRvb2xzLW9uZXtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuLnRvb2xzLW9uZT5pe1xcbiAgIGNvbG9yOiAjZTBmNjRiO1xcbiAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4vKiByb3cgdHdvICovXFxuLnRyYW5zYWN0aW9uLWNvbnRhaW5lci1mbGV4e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgXFxuXFxuICAgXFxufVxcbi50cmFuc2FjdGlvbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG4udHJhbnNhY3Rpb246aG92ZXJ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZTBmNjRiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50cmFuc2FjdGlvbj5kaXY+aXtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4vKiByb3cgdGhyZWUgKi9cXG4ubm90aWZpY2F0aW9uc3tcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogc2Nyb2xsYWJsZSBjb250YWluZXIgKi9cXG4gICAgaGVpZ2h0OiA2MTBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbn1cXG4vKiBoaWRpbmcgdGhlIHNjcm9sbGJhciAqL1xcbi5ub3RpZmljYXRpb25zOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuLm5vdGlmaWNhdGlvbnM+cHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxufVxcbi5wYXJhLW9uZXtcXG4gICAgY29sb3I6ICM4NDg0ODQ7XFxufVxcbi53aXRoZHJhdy1zdWNjZXNze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ud2l0aGRyYXctc3VjY2Vzcz5oND5zcGFue1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiBcXG59XFxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3Bhbj5pe1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4ud2l0aGRyYXctc3VjY2Vzcz5oNHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGRhdGUgKi9cXG4uZGF0ZT5we1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLyogc3R5bGluZyB0aGUgdGhpcmQgY29sdW1uICovXFxuLmNvbnRlbnQtY29sdW1uLXRocmVle1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbiAgICAvKiBoZWlnaHQ6IDEwMCUgKi9cXG4gICBcXG5cXG5cXG59XFxuLnRyb3BoZXl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcbn1cXG4udHJvcGhleSBzcGFue1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogI2UwZjY0YjtcXG59XFxuLmxlYWRlcnMtcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93LWNscik7XFxuICAgIGNvbG9yOiAjMTcxNzE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnRuLWNpcmNsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gICAgY29sb3I6ICNGQUZBRkE7XFxuICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcXG4gICAgIGJvcmRlcjogbm9uZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICBtYXJnaW46IDhweDtcXG59XFxuLmxlYWRlcnMtbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5idG4tcGVyY2VudGFnZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmxlYWRlcnMtcm93LWRhcmt7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBjb2xvcjogIzE3MTcxNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bi1jaXJjbGUtZGFya3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTBmNjRiO1xcbiAgICBjb2xvcjogIzE3MTcxNztcXG4gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgcGFkZGluZzogNXB4IDhweCA1cHggOHB4O1xcbiAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgIG1hcmdpbjogOHB4OyAgXFxufVxcbi5sZWFkZXJzLW5hbWUtZGFya3tcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuLmxlYWRlcnMtd2FsbGV0LWRhcmt7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbn1cXG5cXG4uY29udGVudC1yb3ctb25le1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiBcXG59XFxuXFxuLyogZmlyc3QgY29sdW1uICovXFxuLmdyYXBoLWJhcntcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcXG4gICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xcbiAgIG1hcmdpbjogMTVweDtcXG4gICBwYWRkaW5nOiA1cHg7XFxufVxcbi5kaWdpdHMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgLyogcGFkZGluZy1yaWdodDogMTBweDsgKi9cXG59XFxuLmRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gXFxuICBcXG59XFxuLmRldGFpbHMtb25lIGgze1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmRldGFpbHMtdHdvIGg0e1xcbiAgICBjb2xvcjogIzg0ODQ4NDtcXG59XFxuLnRpbWUtYW5hbHlzaXMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jaGFydD5pe1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG4jYnRuLW9uZXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGY2NGI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5teUJ1dHRvbnN7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAgMC4zcztcXG4gIFxcbn1cXG4ubXlCdXR0b25zOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNjRiO1xcbn1cXG4ubGluZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XFxuICAgIGhlaWdodDoxMHB4OyAgXFxuICAgIC8qIG92ZXJmbG93OiB2aXNpYmxlOyAgICAgICAqL1xcbiAgICBtYXJnaW46IDIwcHggMCAxNXB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuIFxcbiAgICBcXG59XFxuXFxuXFxuLnZhbHVlLWFuYWx5c2lzLWNvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi52YWx1ZS1hbmFseXNpcy1jb250YWluZXI6bGFzdC1jaGlsZHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5idG4tZ3JhcGh7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxuICAgXFxufVxcbiNidG4tYnV5LFxcbiNidG4tc2VsbHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6MTBweCA0MHB4IDEwcHggNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jYnRuLWJ1eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjY0YjtcXG59XFxuI2J0bi1zZWxse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuXFxuLyogc2Vjb25kIGNvbHVtbiAqL1xcbi5ncmFwaC1wZXJjZW50YWdle1xcbiAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4ucGVyY2VudGFnZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbn1cXG4ucHJpY2UtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgZ2FwOiAzMHB4O1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNhcmRzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZHMtaXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmNhcmRzLWl0ZW1zLXR3b3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG5cXG4uY2FyZHMtY29udGFpbmVyIGJ1dHRvbntcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmJnLWdyZWVuIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcXG59XFxuLmJnLXJlZCBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jbHIpO1xcbn1cXG5cXG4ueWVsbG93LXN0YXIgaXtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmRhcmstc3RhcntcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvaW5zLWNvbnRhaW5lcntcXG4gICAgY29sb3I6ICM4NDg0ODQ7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL1N0eWxlcy9zdHlsZS5jc3MnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==