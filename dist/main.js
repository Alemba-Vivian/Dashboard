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
    
}`, "",{"version":3,"sources":["webpack://./src/Styles/style.css"],"names":[],"mappings":"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","sourcesContent":["\n:root{\n    --red-clr:#f13005;\n    --green-clr:#1abc7b;\n    --light-yellow-clr:#e0f64b;\n    --dark-clr:#121212;\n    --info-clr:#3498db;\n    --success-clr:#07bc0c;\n    --error-clr:#e74c3c;\n    --card-background-clr:#616161;\n    --text-clr:#ffffff;\n    --body-background-clr:#171717;\n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    /* font-family: Manrope,sans-serif; */\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: .75rem;\n    font-weight: 500;\n    background-color: var(--body-background-clr);\n    color: #ffffff;\n    min-height: 100vh;\n}\n\n/* DEFAULT STYLING */\nh1{\n        font-size: 1.3rem;\n        font-weight: 800;\n        line-height: 1.4;\n\n}\nh1.board{\n    font-size: 1.6875rem;\n    font-weight: 700;\n    line-height: 1.6;\n}\nh2 {\n    font-size: 1.125rem;\n    font-weight: 600;\n    line-height: 1.4;\n}\n\n/* working with the header */\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-top: 40px;\n    /* flex-wrap: wrap; */\n}\n.nav-container{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-left: 10px;\n}\n.nav-one{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #B8B8B8;\n \n}\n\n/* styling the range input */\n.slider{\n -webkit-appearance: none;\n  height: 2px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n}\n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 15px;\n    height: 15px;\n    background-color: var(--light-yellow-clr);\n    cursor: pointer;\n  }\n\n  /* styling the search input */\n\n  .nav-two{\n    position: relative;\n  }\n\n input[type=\"search\"]{\n    border: none;\n    padding: 8px;\n    border-radius: 8px;\n    background-color: #202020;  \n   \n}\ninput[type=\"search\"]:focus{\n    outline: none;\n    text-align: center;\n}\n::placeholder{\n    padding-left: 20px;\n}\n\n.nav-two #search{\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n\n/* styling the hamburger */\n.nav-three{\n    color: #e0f64b;\n    font-size: 1.6rem;\n    font-weight: bolder;\n}\n\n\n/* styling main section */\n.main{\n    padding: 50px 50px 0 50px;\n \n   \n   \n}\n\n/* grid container */\n.grid-container{\n    display: grid;\n    gap: 20px;\n    line-height: 1.6;\n    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */\n    /* height: calc(100vh - 10px); */\n    \n}\n\n\n/* RESPONSIVENESS */\n@media (min-width:50em) {\n    \n    .grid-span-2{\n        grid-column: span 2;\n    \n    }\n     .grid-container{\n        grid-template-columns: repeat(3,  1fr);\n     }\n  \n    \n}\n\n\n\n\n\n\n\n/* column one */\n.content-column-one{\n    height: 100%;\n     \n}\n/* wallet */\n.wallet{\n    padding: 10px;\n    padding-bottom: 20px;\n}\n.wallet span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n\n/* total assets */\n.total-assets{\n    border-radius: 20px;\n    background-color: #202020;\n    padding: 0 22px 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.assets-container>p{\n    color: #B8B8B8;\n}\n.assets select{\n    border: none;\n    background-color: #202020;\n    color: #B8B8B8;\n    cursor: pointer;\n}\n.assets select:focus{\n    outline: none;\n}\n.assets select:hover{\n    background-color: none;\n    cursor: pointer;\n}\n\nlabel.money-value{\n    font-size: 1.7rem;\n    font-weight: bold;\n}\nh4>small{\n    color: #B8B8B8;\n}\n\n.image-container{\n    /* color:rgba(23, 23, 23, 0) ; */\n}\n.asset-image{\n    opacity: 1;\n    /* position: relative;\n    z-index: 2; */\n    margin-top: -10px;\n    height: 140px;\n   \n}\n\n\n/* currencies */\n.currencies{\n    margin-top: 20px;\n    background-color: #202020;\n    padding: 16px;\n    border-radius: 20px;\n    /* allowing scrollable feature */\n    height: 940px;\n    overflow-y: scroll;\n}\n\n/* hiding the scrollbar */\n.currencies::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.currency-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: bold;\n    border-bottom: 1px solid #333;\n}\n.currency-one{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items: center;    \n    gap: 10px;\n}\n.currency-symbol>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h4{\n    color: #B8B8B8;\n}\n.currency-amount>h3{\n    float: right;\n   \n}\n\n.currency-icons{\n    /* padding:25px; */\n    font-weight: bold;\n    font-size: 2.0rem;\n    border: 1px solid #333;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    color: orange;\n    margin-bottom: 10px;\n    margin-top: 10px;\n   \n}\n#myIcons{\n    height: 30px;\n    width: 30px;\n}\n.fa-ethereum{\n    color: grey;\n}\n\n\n/* styling graph */\n.graph{\n    background-color: #202020;\n    display: flex;\n    gap: 20px;\n}\n\n\n/* column two */\n\n.content-column-two{\n    /* height: 100%; */\n    \n    \n}\n.action-container{\n    background-color: #202020;\n    border-radius: 20px;\n    padding: 10px;\n}\n\n.action-container>h2{\n    padding-bottom: 20px;\n}\n.rewards{\n    display: flex;\n    align-items: center;\n    background-color: var(--body-background-clr);\n    margin: 16px 0 24px;\n    border-radius: 10px;\n}\n.reward-one{\n    margin-left: 16px;\n    font-size: 1.1rem;\n}\n.reward-icon{\n    height: 140px;\n    margin-bottom: -12px;\n}\n\n/* grid container */\n.tools{\n    display: flex;\n    /* align-items: center; */\n    justify-content: space-around;\n    /* background-color: red; */\n    \n}\n.tool-flex{\n    display: flex;\n    border: 1px solid #333;\n    padding: 16px;\n    align-items: center;\n   font-weight: bold;\n   border-radius: 10px;\n  \n}\n.tool-flex:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.tools-two{\n    padding-left: 10px;\n}\n.tools-one{\n    padding-right: 30px;\n}\n.tools-one>i{\n   color: #e0f64b;\n   font-size: 1.2rem;\n}\n\n\n/* row two */\n.transaction-container-flex{\n    display: flex;\n    gap: 20px;\n    margin: 20px;\n    \n\n   \n}\n.transaction{\n    border: 1px solid #333;\n    padding: 8px;\n    font-weight: bold;\n    border-radius: 10px;\n    text-align: center;\n    height: 80px;\n    width: 80px;\n}\n.transaction:hover{\n    outline: 1px solid #e0f64b;\n    cursor: pointer;\n}\n.transaction>div>i{\n    color: #e0f64b;\n    font-size: 1.2rem;\n}\n\n\n/* row three */\n.notifications{\n    margin-top: 25px;\n    background-color: #202020;\n    border-radius: 20px;\n    padding: 20px;\n    /* scrollable container */\n    height: 610px;\n    overflow-y: scroll;\n\n}\n/* hiding the scrollbar */\n.notifications::-webkit-scrollbar{\n    width: 0 !important;\n}\n\n\n.notifications>p{\n    color: #B8B8B8;\n    /* padding: 20px; */\n}\n.para-one{\n    color: #848484;\n}\n.withdraw-success{\n    border: 1px solid #333;\n    padding: 16px;\n    margin-top: 10px;\n    border-radius: 10px;\n}\n.withdraw-success>h4>span{\n    padding-right: 10px;\n \n}\n.withdraw-success>h4>span>i{\n    color: red;\n}\n.withdraw-success>h4{\n    padding-bottom: 10px;\n}\n\n/* date */\n.date>p{\n    padding-top: 10px;\n}\n\n/* styling the third column */\n.content-column-three{\n    /* background-color: blue; */\n    /* height: 100% */\n   \n\n\n}\n.trophey{\n    padding: 10px;\n    padding-bottom: 20px;\n\n}\n.trophey span{\n    padding-right: 10px;\n    color: #e0f64b;\n}\n.leaders-row{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: var(--light-yellow-clr);\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle{\n    background-color: #171717;\n    color: #FAFAFA;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;\n}\n.leaders-name{\n    font-weight: bold;\n}\n.btn-percentage{\n    background-color: #1abc7b;\n    color: white;\n    border: none;\n    padding: 5px 8px;\n    border-radius: 5px;\n    font-weight: 800;\n}\n.leaders-row-dark{\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 16px;\n    background-color: #202020;\n    color: #171717;\n    border-radius: 10px;\n}\n\n.btn-circle-dark{\n    background-color:#e0f64b;\n    color: #171717;\n     font-size: 0.9rem;\n     padding: 5px 8px 5px 8px;\n     border: none;\n     border-radius: 15px;\n     margin: 8px;  \n}\n.leaders-name-dark{\n    font-weight: bold;\n    color: white;\n\n}\n.leaders-wallet-dark{\n    color: #848484;\n}\n\n.content-row-one{\n    display: grid;\n    background-color: #202020;\n    grid-template-columns: repeat(2, 1fr);\n    border-radius: 20px;\n    margin-bottom: 30px;\n \n}\n\n/* first column */\n.graph-bar{\n    border-right: 1px solid #333;\n   /* padding: 15px; */\n   margin: 15px;\n   padding: 5px;\n}\n.digits-container{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    /* padding-right: 10px; */\n}\n.details{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n \n  \n}\n.details-one h3{\n    font-size: 1.3rem;\n}\n.details-two h4{\n    color: #848484;\n}\n.time-analysis-container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.chart>i{\n    padding: 8px;\n    font-size: 1.6rem;\n    color: #B8B8B8;\n    font-weight: 600;\n    cursor: pointer;\n\n}\n#btn-one{\n  background-color: #e0f64b;\n  padding: 8px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.myButtons{\n    padding: 10px;\n    background-color: #171717;\n    color: #848484;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition:  0.3s;\n  \n}\n.myButtons:hover{\n    background-color: #e0f64b;\n}\n.line{\n    border-bottom: 1px solid #333;\n    height:10px;  \n    /* overflow: visible;       */\n    margin: 20px 0 15px 0;\n    padding: 10px;\n \n    \n}\n\n\n.value-analysis-container{\n    text-align: right;\n}\n.value-analysis-container:last-child{\n    padding-bottom: 20px;\n}\n.btn-graph{\n    padding: 5px 10px 5px 10px;\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    background-color: #1abc7b;\n    border: none;\n    border-radius: 10px;\n}\n\n\n\n.button-containers{\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    /* gap: 20px; */\n   \n}\n#btn-buy,\n#btn-sell{\n    font-size: 1.4rem;\n    font-weight: 700;\n    padding:10px 40px 10px 40px;\n    border: none;\n    border-radius: 10px;\n}\n\n#btn-buy{\n    background-color: #e0f64b;\n}\n#btn-sell{\n    background-color: #171717;\n    color: #ffffff;\n}\n\n\n/* second column */\n.graph-percentage{\n    /* border-left: 1px solid red; */\n    padding: 5px;\n}\n.percentage-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 40px;\n    color: #848484;\n}\n.price-container{\n    display: flex;\n     gap: 30px;\n     align-items: center;\n}\n.cards-container{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 16px;\n    border: 1px solid #333;\n    padding: 15px;\n    border-radius: 10px;\n}\n.cards-items{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n.cards-items-two{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n\n}\n\n\n.cards-container button{\n    padding: 8px;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    color: #ffffff;\n}\n.bg-green button{\n    background-color: #1abc7b;\n}\n.bg-red button{\n    background-color: var(--red-clr);\n}\n\n.yellow-star i{\n    color: #e0f64b;\n    font-size: 16px;\n}\n.dark-star{\n    color: #B8B8B8;\n    font-size: 16px;\n}\n\n.coins-container{\n    color: #848484;\n    \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsbUNBQW1DO0FBQ25DO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFFBQVEsWUFBWSxNQUFNLGVBQWUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLFFBQVEsWUFBWSxPQUFPLEtBQUssYUFBYSxNQUFNLEtBQUssWUFBWSxRQUFRLFlBQVksVUFBVSxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxPQUFPLFdBQVcsS0FBSyxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxZQUFZLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFh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QTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL1N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvU3R5bGVzL3N0eWxlLmNzcz9hZWU5Iiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbjpyb290e1xuICAgIC0tcmVkLWNscjojZjEzMDA1O1xuICAgIC0tZ3JlZW4tY2xyOiMxYWJjN2I7XG4gICAgLS1saWdodC15ZWxsb3ctY2xyOiNlMGY2NGI7XG4gICAgLS1kYXJrLWNscjojMTIxMjEyO1xuICAgIC0taW5mby1jbHI6IzM0OThkYjtcbiAgICAtLXN1Y2Nlc3MtY2xyOiMwN2JjMGM7XG4gICAgLS1lcnJvci1jbHI6I2U3NGMzYztcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jbHI6IzYxNjE2MTtcbiAgICAtLXRleHQtY2xyOiNmZmZmZmY7XG4gICAgLS1ib2R5LWJhY2tncm91bmQtY2xyOiMxNzE3MTc7XG59XG4qe1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5e1xuICAgIC8qIGZvbnQtZmFtaWx5OiBNYW5yb3BlLHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNscik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8qIERFRkFVTFQgU1RZTElORyAqL1xuaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuXG59XG5oMS5ib2FyZHtcbiAgICBmb250LXNpemU6IDEuNjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5oMiB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi8qIHdvcmtpbmcgd2l0aCB0aGUgaGVhZGVyICovXG4uaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xufVxuLm5hdi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uYXYtb25le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gXG59XG5cbi8qIHN0eWxpbmcgdGhlIHJhbmdlIGlucHV0ICovXG4uc2xpZGVye1xuIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xufVxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC15ZWxsb3ctY2xyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAvKiBzdHlsaW5nIHRoZSBzZWFyY2ggaW5wdXQgKi9cblxuICAubmF2LXR3b3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuIGlucHV0W3R5cGU9XCJzZWFyY2hcIl17XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDsgIFxuICAgXG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpwbGFjZWhvbGRlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5uYXYtdHdvICNzZWFyY2h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4vKiBzdHlsaW5nIHRoZSBoYW1idXJnZXIgKi9cbi5uYXYtdGhyZWV7XG4gICAgY29sb3I6ICNlMGY2NGI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuXG4vKiBzdHlsaW5nIG1haW4gc2VjdGlvbiAqL1xuLm1haW57XG4gICAgcGFkZGluZzogNTBweCA1MHB4IDAgNTBweDtcbiBcbiAgIFxuICAgXG59XG5cbi8qIGdyaWQgY29udGFpbmVyICovXG4uZ3JpZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgKi9cbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHB4KTsgKi9cbiAgICBcbn1cblxuXG4vKiBSRVNQT05TSVZFTkVTUyAqL1xuQG1lZGlhIChtaW4td2lkdGg6NTBlbSkge1xuICAgIFxuICAgIC5ncmlkLXNwYW4tMntcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgICBcbiAgICB9XG4gICAgIC5ncmlkLWNvbnRhaW5lcntcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgIDFmcik7XG4gICAgIH1cbiAgXG4gICAgXG59XG5cblxuXG5cblxuXG5cbi8qIGNvbHVtbiBvbmUgKi9cbi5jb250ZW50LWNvbHVtbi1vbmV7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICBcbn1cbi8qIHdhbGxldCAqL1xuLndhbGxldHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLndhbGxldCBzcGFue1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNlMGY2NGI7XG59XG5cbi8qIHRvdGFsIGFzc2V0cyAqL1xuLnRvdGFsLWFzc2V0c3tcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgcGFkZGluZzogMCAyMnB4IDAgMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFzc2V0cy1jb250YWluZXI+cHtcbiAgICBjb2xvcjogI0I4QjhCODtcbn1cbi5hc3NldHMgc2VsZWN0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGNvbG9yOiAjQjhCOEI4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hc3NldHMgc2VsZWN0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uYXNzZXRzIHNlbGVjdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGFiZWwubW9uZXktdmFsdWV7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5oND5zbWFsbHtcbiAgICBjb2xvcjogI0I4QjhCODtcbn1cblxuLmltYWdlLWNvbnRhaW5lcntcbiAgICAvKiBjb2xvcjpyZ2JhKDIzLCAyMywgMjMsIDApIDsgKi9cbn1cbi5hc3NldC1pbWFnZXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyOyAqL1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICBcbn1cblxuXG4vKiBjdXJyZW5jaWVzICovXG4uY3VycmVuY2llc3tcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC8qIGFsbG93aW5nIHNjcm9sbGFibGUgZmVhdHVyZSAqL1xuICAgIGhlaWdodDogOTQwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4vKiBoaWRpbmcgdGhlIHNjcm9sbGJhciAqL1xuLmN1cnJlbmNpZXM6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuLmN1cnJlbmN5LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xufVxuLmN1cnJlbmN5LW9uZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbiAgICBnYXA6IDEwcHg7XG59XG4uY3VycmVuY3ktc3ltYm9sPmg0e1xuICAgIGNvbG9yOiAjQjhCOEI4O1xufVxuLmN1cnJlbmN5LWFtb3VudD5oNHtcbiAgICBjb2xvcjogI0I4QjhCODtcbn1cbi5jdXJyZW5jeS1hbW91bnQ+aDN7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgXG59XG5cbi5jdXJyZW5jeS1pY29uc3tcbiAgICAvKiBwYWRkaW5nOjI1cHg7ICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyLjByZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICBcbn1cbiNteUljb25ze1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cbi5mYS1ldGhlcmV1bXtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuXG4vKiBzdHlsaW5nIGdyYXBoICovXG4uZ3JhcGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbn1cblxuXG4vKiBjb2x1bW4gdHdvICovXG5cbi5jb250ZW50LWNvbHVtbi10d297XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIFxuICAgIFxufVxuLmFjdGlvbi1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyPmgye1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnJld2FyZHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jbHIpO1xuICAgIG1hcmdpbjogMTZweCAwIDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5yZXdhcmQtb25le1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnJld2FyZC1pY29ue1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG59XG5cbi8qIGdyaWQgY29udGFpbmVyICovXG4udG9vbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgICBcbn1cbi50b29sLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgXG59XG4udG9vbC1mbGV4OmhvdmVye1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZTBmNjRiO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b29scy10d297XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnRvb2xzLW9uZXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuLnRvb2xzLW9uZT5pe1xuICAgY29sb3I6ICNlMGY2NGI7XG4gICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuXG4vKiByb3cgdHdvICovXG4udHJhbnNhY3Rpb24tY29udGFpbmVyLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIFxuXG4gICBcbn1cbi50cmFuc2FjdGlvbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG59XG4udHJhbnNhY3Rpb246aG92ZXJ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNlMGY2NGI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRyYW5zYWN0aW9uPmRpdj5pe1xuICAgIGNvbG9yOiAjZTBmNjRiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5cbi8qIHJvdyB0aHJlZSAqL1xuLm5vdGlmaWNhdGlvbnN7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvKiBzY3JvbGxhYmxlIGNvbnRhaW5lciAqL1xuICAgIGhlaWdodDogNjEwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG59XG4vKiBoaWRpbmcgdGhlIHNjcm9sbGJhciAqL1xuLm5vdGlmaWNhdGlvbnM6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuLm5vdGlmaWNhdGlvbnM+cHtcbiAgICBjb2xvcjogI0I4QjhCODtcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xufVxuLnBhcmEtb25le1xuICAgIGNvbG9yOiAjODQ4NDg0O1xufVxuLndpdGhkcmF3LXN1Y2Nlc3N7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53aXRoZHJhdy1zdWNjZXNzPmg0PnNwYW57XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiBcbn1cbi53aXRoZHJhdy1zdWNjZXNzPmg0PnNwYW4+aXtcbiAgICBjb2xvcjogcmVkO1xufVxuLndpdGhkcmF3LXN1Y2Nlc3M+aDR7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi8qIGRhdGUgKi9cbi5kYXRlPnB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi8qIHN0eWxpbmcgdGhlIHRoaXJkIGNvbHVtbiAqL1xuLmNvbnRlbnQtY29sdW1uLXRocmVle1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG4gICAgLyogaGVpZ2h0OiAxMDAlICovXG4gICBcblxuXG59XG4udHJvcGhleXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG59XG4udHJvcGhleSBzcGFue1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNlMGY2NGI7XG59XG4ubGVhZGVycy1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93LWNscik7XG4gICAgY29sb3I6ICMxNzE3MTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJ0bi1jaXJjbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgICBjb2xvcjogI0ZBRkFGQTtcbiAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBtYXJnaW46IDhweDtcbn1cbi5sZWFkZXJzLW5hbWV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnRuLXBlcmNlbnRhZ2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ubGVhZGVycy1yb3ctZGFya3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gICAgY29sb3I6ICMxNzE3MTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJ0bi1jaXJjbGUtZGFya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMGY2NGI7XG4gICAgY29sb3I6ICMxNzE3MTc7XG4gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICBwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgbWFyZ2luOiA4cHg7ICBcbn1cbi5sZWFkZXJzLW5hbWUtZGFya3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cbi5sZWFkZXJzLXdhbGxldC1kYXJre1xuICAgIGNvbG9yOiAjODQ4NDg0O1xufVxuXG4uY29udGVudC1yb3ctb25le1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiBcbn1cblxuLyogZmlyc3QgY29sdW1uICovXG4uZ3JhcGgtYmFye1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XG4gICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xuICAgbWFyZ2luOiAxNXB4O1xuICAgcGFkZGluZzogNXB4O1xufVxuLmRpZ2l0cy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxMHB4OyAqL1xufVxuLmRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiBcbiAgXG59XG4uZGV0YWlscy1vbmUgaDN7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uZGV0YWlscy10d28gaDR7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG59XG4udGltZS1hbmFseXNpcy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jaGFydD5pe1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBjb2xvcjogI0I4QjhCODtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuI2J0bi1vbmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGY2NGI7XG4gIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm15QnV0dG9uc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogIDAuM3M7XG4gIFxufVxuLm15QnV0dG9uczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNjRiO1xufVxuLmxpbmV7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG4gICAgaGVpZ2h0OjEwcHg7ICBcbiAgICAvKiBvdmVyZmxvdzogdmlzaWJsZTsgICAgICAgKi9cbiAgICBtYXJnaW46IDIwcHggMCAxNXB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiBcbiAgICBcbn1cblxuXG4udmFsdWUtYW5hbHlzaXMtY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnZhbHVlLWFuYWx5c2lzLWNvbnRhaW5lcjpsYXN0LWNoaWxke1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmJ0bi1ncmFwaHtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG5cbi5idXR0b24tY29udGFpbmVyc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgLyogZ2FwOiAyMHB4OyAqL1xuICAgXG59XG4jYnRuLWJ1eSxcbiNidG4tc2VsbHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6MTBweCA0MHB4IDEwcHggNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2J0bi1idXl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjY0Yjtcbn1cbiNidG4tc2VsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cbi8qIHNlY29uZCBjb2x1bW4gKi9cbi5ncmFwaC1wZXJjZW50YWdle1xuICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmVkOyAqL1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5wZXJjZW50YWdlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGNvbG9yOiAjODQ4NDg0O1xufVxuLnByaWNlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBnYXA6IDMwcHg7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZHMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jYXJkcy1pdGVtc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuLmNhcmRzLWl0ZW1zLXR3b3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuXG59XG5cblxuLmNhcmRzLWNvbnRhaW5lciBidXR0b257XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLWdyZWVuIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzdiO1xufVxuLmJnLXJlZCBidXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNscik7XG59XG5cbi55ZWxsb3ctc3RhciBpe1xuICAgIGNvbG9yOiAjZTBmNjRiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5kYXJrLXN0YXJ7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29pbnMtY29udGFpbmVye1xuICAgIGNvbG9yOiAjODQ4NDg0O1xuICAgIFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLG1KQUFtSjtJQUNuSixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBLG9CQUFvQjtBQUNwQjtRQUNRLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsZ0JBQWdCOztBQUV4QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFB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eUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7O0FBRW5CO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7OztBQUdBLGtCQUFrQjtBQUNsQjtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtLQUNaLFNBQVM7S0FDVCxtQkFBbUI7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7QUFFYjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjOztBQUVsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG46cm9vdHtcXG4gICAgLS1yZWQtY2xyOiNmMTMwMDU7XFxuICAgIC0tZ3JlZW4tY2xyOiMxYWJjN2I7XFxuICAgIC0tbGlnaHQteWVsbG93LWNscjojZTBmNjRiO1xcbiAgICAtLWRhcmstY2xyOiMxMjEyMTI7XFxuICAgIC0taW5mby1jbHI6IzM0OThkYjtcXG4gICAgLS1zdWNjZXNzLWNscjojMDdiYzBjO1xcbiAgICAtLWVycm9yLWNscjojZTc0YzNjO1xcbiAgICAtLWNhcmQtYmFja2dyb3VuZC1jbHI6IzYxNjE2MTtcXG4gICAgLS10ZXh0LWNscjojZmZmZmZmO1xcbiAgICAtLWJvZHktYmFja2dyb3VuZC1jbHI6IzE3MTcxNztcXG59XFxuKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5e1xcbiAgICAvKiBmb250LWZhbWlseTogTWFucm9wZSxzYW5zLXNlcmlmOyAqL1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY2xyKTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBERUZBVUxUIFNUWUxJTkcgKi9cXG5oMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuXFxufVxcbmgxLmJvYXJke1xcbiAgICBmb250LXNpemU6IDEuNjg3NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbn1cXG5cXG4vKiB3b3JraW5nIHdpdGggdGhlIGhlYWRlciAqL1xcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG4ubmF2LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLm5hdi1vbmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxuIFxcbn1cXG5cXG4vKiBzdHlsaW5nIHRoZSByYW5nZSBpbnB1dCAqL1xcbi5zbGlkZXJ7XFxuIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjc7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xcbn1cXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93LWNscik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC8qIHN0eWxpbmcgdGhlIHNlYXJjaCBpbnB1dCAqL1xcblxcbiAgLm5hdi10d297XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl17XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7ICBcXG4gICBcXG59XFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuOjpwbGFjZWhvbGRlcntcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubmF2LXR3byAjc2VhcmNoe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuLyogc3R5bGluZyB0aGUgaGFtYnVyZ2VyICovXFxuLm5hdi10aHJlZXtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIG1haW4gc2VjdGlvbiAqL1xcbi5tYWlue1xcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggMCA1MHB4O1xcbiBcXG4gICBcXG4gICBcXG59XFxuXFxuLyogZ3JpZCBjb250YWluZXIgKi9cXG4uZ3JpZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7ICovXFxuICAgIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcHgpOyAqL1xcbiAgICBcXG59XFxuXFxuXFxuLyogUkVTUE9OU0lWRU5FU1MgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDo1MGVtKSB7XFxuICAgIFxcbiAgICAuZ3JpZC1zcGFuLTJ7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBcXG4gICAgfVxcbiAgICAgLmdyaWQtY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgIDFmcik7XFxuICAgICB9XFxuICBcXG4gICAgXFxufVxcblxcblxcblxcblxcblxcblxcblxcbi8qIGNvbHVtbiBvbmUgKi9cXG4uY29udGVudC1jb2x1bW4tb25le1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICBcXG59XFxuLyogd2FsbGV0ICovXFxuLndhbGxldHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi53YWxsZXQgc3BhbntcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxufVxcblxcbi8qIHRvdGFsIGFzc2V0cyAqL1xcbi50b3RhbC1hc3NldHN7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIHBhZGRpbmc6IDAgMjJweCAwIDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmFzc2V0cy1jb250YWluZXI+cHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcbi5hc3NldHMgc2VsZWN0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGNvbG9yOiAjQjhCOEI4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hc3NldHMgc2VsZWN0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYXNzZXRzIHNlbGVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5sYWJlbC5tb25leS12YWx1ZXtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5oND5zbWFsbHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXJ7XFxuICAgIC8qIGNvbG9yOnJnYmEoMjMsIDIzLCAyMywgMCkgOyAqL1xcbn1cXG4uYXNzZXQtaW1hZ2V7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjsgKi9cXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgXFxufVxcblxcblxcbi8qIGN1cnJlbmNpZXMgKi9cXG4uY3VycmVuY2llc3tcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLyogYWxsb3dpbmcgc2Nyb2xsYWJsZSBmZWF0dXJlICovXFxuICAgIGhlaWdodDogOTQwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLyogaGlkaW5nIHRoZSBzY3JvbGxiYXIgKi9cXG4uY3VycmVuY2llczo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi5jdXJyZW5jeS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xcbn1cXG4uY3VycmVuY3ktb25le1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uY3VycmVuY3ktc3ltYm9sPmg0e1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG59XFxuLmN1cnJlbmN5LWFtb3VudD5oNHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxufVxcbi5jdXJyZW5jeS1hbW91bnQ+aDN7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICBcXG59XFxuXFxuLmN1cnJlbmN5LWljb25ze1xcbiAgICAvKiBwYWRkaW5nOjI1cHg7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIuMHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICBcXG59XFxuI215SWNvbnN7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi5mYS1ldGhlcmV1bXtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcblxcbi8qIHN0eWxpbmcgZ3JhcGggKi9cXG4uZ3JhcGh7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuXFxuLyogY29sdW1uIHR3byAqL1xcblxcbi5jb250ZW50LWNvbHVtbi10d297XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgXFxuICAgIFxcbn1cXG4uYWN0aW9uLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFjdGlvbi1jb250YWluZXI+aDJ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ucmV3YXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNscik7XFxuICAgIG1hcmdpbjogMTZweCAwIDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5yZXdhcmQtb25le1xcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi5yZXdhcmQtaWNvbntcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEycHg7XFxufVxcblxcbi8qIGdyaWQgY29udGFpbmVyICovXFxuLnRvb2xze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbiAgICBcXG59XFxuLnRvb2wtZmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBmb250LXdlaWdodDogYm9sZDtcXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgXFxufVxcbi50b29sLWZsZXg6aG92ZXJ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZTBmNjRiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b29scy10d297XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLnRvb2xzLW9uZXtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuLnRvb2xzLW9uZT5pe1xcbiAgIGNvbG9yOiAjZTBmNjRiO1xcbiAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4vKiByb3cgdHdvICovXFxuLnRyYW5zYWN0aW9uLWNvbnRhaW5lci1mbGV4e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgXFxuXFxuICAgXFxufVxcbi50cmFuc2FjdGlvbntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG4udHJhbnNhY3Rpb246aG92ZXJ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjZTBmNjRiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50cmFuc2FjdGlvbj5kaXY+aXtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG4vKiByb3cgdGhyZWUgKi9cXG4ubm90aWZpY2F0aW9uc3tcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogc2Nyb2xsYWJsZSBjb250YWluZXIgKi9cXG4gICAgaGVpZ2h0OiA2MTBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbn1cXG4vKiBoaWRpbmcgdGhlIHNjcm9sbGJhciAqL1xcbi5ub3RpZmljYXRpb25zOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuLm5vdGlmaWNhdGlvbnM+cHtcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxufVxcbi5wYXJhLW9uZXtcXG4gICAgY29sb3I6ICM4NDg0ODQ7XFxufVxcbi53aXRoZHJhdy1zdWNjZXNze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ud2l0aGRyYXctc3VjY2Vzcz5oND5zcGFue1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiBcXG59XFxuLndpdGhkcmF3LXN1Y2Nlc3M+aDQ+c3Bhbj5pe1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4ud2l0aGRyYXctc3VjY2Vzcz5oNHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qIGRhdGUgKi9cXG4uZGF0ZT5we1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLyogc3R5bGluZyB0aGUgdGhpcmQgY29sdW1uICovXFxuLmNvbnRlbnQtY29sdW1uLXRocmVle1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbiAgICAvKiBoZWlnaHQ6IDEwMCUgKi9cXG4gICBcXG5cXG5cXG59XFxuLnRyb3BoZXl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcbn1cXG4udHJvcGhleSBzcGFue1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogI2UwZjY0YjtcXG59XFxuLmxlYWRlcnMtcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQteWVsbG93LWNscik7XFxuICAgIGNvbG9yOiAjMTcxNzE3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnRuLWNpcmNsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXG4gICAgY29sb3I6ICNGQUZBRkE7XFxuICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcXG4gICAgIGJvcmRlcjogbm9uZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICBtYXJnaW46IDhweDtcXG59XFxuLmxlYWRlcnMtbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5idG4tcGVyY2VudGFnZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmxlYWRlcnMtcm93LWRhcmt7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBjb2xvcjogIzE3MTcxNztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ0bi1jaXJjbGUtZGFya3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTBmNjRiO1xcbiAgICBjb2xvcjogIzE3MTcxNztcXG4gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgcGFkZGluZzogNXB4IDhweCA1cHggOHB4O1xcbiAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgIG1hcmdpbjogOHB4OyAgXFxufVxcbi5sZWFkZXJzLW5hbWUtZGFya3tcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuLmxlYWRlcnMtd2FsbGV0LWRhcmt7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbn1cXG5cXG4uY29udGVudC1yb3ctb25le1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiBcXG59XFxuXFxuLyogZmlyc3QgY29sdW1uICovXFxuLmdyYXBoLWJhcntcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcXG4gICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xcbiAgIG1hcmdpbjogMTVweDtcXG4gICBwYWRkaW5nOiA1cHg7XFxufVxcbi5kaWdpdHMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgLyogcGFkZGluZy1yaWdodDogMTBweDsgKi9cXG59XFxuLmRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gXFxuICBcXG59XFxuLmRldGFpbHMtb25lIGgze1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmRldGFpbHMtdHdvIGg0e1xcbiAgICBjb2xvcjogIzg0ODQ4NDtcXG59XFxuLnRpbWUtYW5hbHlzaXMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jaGFydD5pe1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBjb2xvcjogI0I4QjhCODtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG4jYnRuLW9uZXtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGY2NGI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5teUJ1dHRvbnN7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAgMC4zcztcXG4gIFxcbn1cXG4ubXlCdXR0b25zOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmNjRiO1xcbn1cXG4ubGluZXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XFxuICAgIGhlaWdodDoxMHB4OyAgXFxuICAgIC8qIG92ZXJmbG93OiB2aXNpYmxlOyAgICAgICAqL1xcbiAgICBtYXJnaW46IDIwcHggMCAxNXB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuIFxcbiAgICBcXG59XFxuXFxuXFxuLnZhbHVlLWFuYWx5c2lzLWNvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi52YWx1ZS1hbmFseXNpcy1jb250YWluZXI6bGFzdC1jaGlsZHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5idG4tZ3JhcGh7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxuICAgXFxufVxcbiNidG4tYnV5LFxcbiNidG4tc2VsbHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6MTBweCA0MHB4IDEwcHggNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jYnRuLWJ1eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjY0YjtcXG59XFxuI2J0bi1zZWxse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuXFxuLyogc2Vjb25kIGNvbHVtbiAqL1xcbi5ncmFwaC1wZXJjZW50YWdle1xcbiAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4ucGVyY2VudGFnZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGNvbG9yOiAjODQ4NDg0O1xcbn1cXG4ucHJpY2UtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgZ2FwOiAzMHB4O1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNhcmRzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZHMtaXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmNhcmRzLWl0ZW1zLXR3b3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG5cXG4uY2FyZHMtY29udGFpbmVyIGJ1dHRvbntcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmJnLWdyZWVuIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM3YjtcXG59XFxuLmJnLXJlZCBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jbHIpO1xcbn1cXG5cXG4ueWVsbG93LXN0YXIgaXtcXG4gICAgY29sb3I6ICNlMGY2NGI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmRhcmstc3RhcntcXG4gICAgY29sb3I6ICNCOEI4Qjg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvaW5zLWNvbnRhaW5lcntcXG4gICAgY29sb3I6ICM4NDg0ODQ7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL1N0eWxlcy9zdHlsZS5jc3MnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==