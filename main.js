"use strict";
(self["webpackChunkodin_todolist"] = self["webpackChunkodin_todolist"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  outline: orange 5px auto;\n}\n.nav {\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 200px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #000000;\n  overflow: auto;\n}\n.nav-top {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 100%;\n}\n.nav-profile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.nf-icon {\n  font-size: 48;\n}\n\n.shrink-nav {\n  cursor: pointer;\n}\n.nav-separator {\n  border-top: 1px solid black;\n  width: calc(100% - 40%);\n}\n.container {\n  display: flex;\n  height: 100%;\n}\n\n.main-area {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  padding: 0px 30px 0px 30px;\n  gap: 5px;\n}\n\n.todo-holder {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n\n.nav-filters {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.nav-filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.nf-everything {\n  background-color: rgb(202, 202, 202);\n  border-radius: 5px;\n}\n\n.footer {\n  bottom: 0;\n}\n\n.todo-item {\n  display: grid;\n  grid-template: auto auto / 1.8rem repeat(3, 1fr);\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border: 1px solid #000000;\n}\n.todo-check {\n  grid-row: 1 / 3;\n  align-items: center;\n  align-self: center;\n  height: 24px;\n  cursor: pointer;\n}\n\n.todo-title {\n  background-color: aquamarine;\n  grid-row: 1;\n  grid-column: 2 / span 3;\n}\n\n.todo-due {\n  background-color: aqua;\n  grid-column: 2;\n}\n\n.todo-priority {\n  background-color: bisque;\n  grid-column: 4;\n  display: flex;\n  align-self: center;\n  justify-self: right;\n  font-size: small;\n}\n\n#add-todo {\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  display: grid;\n  grid-template: 1fr / 1fr 30px;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 250px; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-form {\n  display: flex;\n  flex-direction: column;\n}\n#new-todo {\n  display: grid;\n  gap: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;;EAEE,wBAAwB;AAC1B;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,cAAc;AAChB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;AACT;AACA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;AACA;EACE,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,yBAAyB;EACzB,uBAAuB;EACvB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA,2BAA2B;AAC3B;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,YAAY,EAAE,oDAAoD;AACpE;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,QAAQ;AACV","sourcesContent":["html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  outline: orange 5px auto;\n}\n.nav {\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 200px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #000000;\n  overflow: auto;\n}\n.nav-top {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 100%;\n}\n.nav-profile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.nf-icon {\n  font-size: 48;\n}\n\n.shrink-nav {\n  cursor: pointer;\n}\n.nav-separator {\n  border-top: 1px solid black;\n  width: calc(100% - 40%);\n}\n.container {\n  display: flex;\n  height: 100%;\n}\n\n.main-area {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  padding: 0px 30px 0px 30px;\n  gap: 5px;\n}\n\n.todo-holder {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n\n.nav-filters {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.nav-filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.nf-everything {\n  background-color: rgb(202, 202, 202);\n  border-radius: 5px;\n}\n\n.footer {\n  bottom: 0;\n}\n\n.todo-item {\n  display: grid;\n  grid-template: auto auto / 1.8rem repeat(3, 1fr);\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border: 1px solid #000000;\n}\n.todo-check {\n  grid-row: 1 / 3;\n  align-items: center;\n  align-self: center;\n  height: 24px;\n  cursor: pointer;\n}\n\n.todo-title {\n  background-color: aquamarine;\n  grid-row: 1;\n  grid-column: 2 / span 3;\n}\n\n.todo-due {\n  background-color: aqua;\n  grid-column: 2;\n}\n\n.todo-priority {\n  background-color: bisque;\n  grid-column: 4;\n  display: flex;\n  align-self: center;\n  justify-self: right;\n  font-size: small;\n}\n\n#add-todo {\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  display: grid;\n  grid-template: 1fr / 1fr 30px;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 250px; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-form {\n  display: flex;\n  flex-direction: column;\n}\n#new-todo {\n  display: grid;\n  gap: 5px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ }),

/***/ "./src/domFunctions.js":
/*!*****************************!*\
  !*** ./src/domFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domFunctions": () => (/* binding */ domFunctions)
/* harmony export */ });
const domFunctions = (name, date) => {
  function buildElement(elementType, id, classList, innerHTML) {
    const element = document.createElement(elementType);
    if (id === undefined) {
      id = "";
    }
    if (classList === undefined) {
      classList = "";
    }
    if (innerHTML === undefined) {
      innerHTML = "";
    }
    element.id = id;
    element.classList.add(...classList);
    element.innerHTML = innerHTML;
    return element;
  }
  function nav() {
    const nav = buildElement("div", "", ["nav"]);
    // top section including profile
    const navTop = buildElement("div", "", ["nav-top"]);
    //profile section
    const navProfile = buildElement("div", "", ["nav-profile"]);
    navTop.append(navProfile);
    //profile icon
    const profileIcon = buildElement(
      "button",
      "",
      ["profile-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">account_circle</span>'
    );
    navProfile.appendChild(profileIcon);
    //profile name
    const profileName = buildElement(
      "div",
      "",
      ["profile-name"],
      "Profile Name"
    );
    navProfile.appendChild(profileName);
    //shrink nav menu icon
    const shrinkNav = buildElement(
      "button",
      "",
      ["shrink-nav"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">chevron_left</span>'
    );
    navTop.appendChild(shrinkNav);
    nav.append(navTop);
    const navSeparator1 = buildElement("div", "", ["nav-separator"]);
    nav.append(navSeparator1);
    const navFilters = buildElement("div", "", ["nav-filters"]);
    nav.append(navFilters);
    const navFilterEverything = buildElement("button", "", [
      "nav-filter",
      "nf-everything",
    ]);
    const navFilterEverythingIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">all_inbox</span>'
    );
    navFilterEverything.append(navFilterEverythingIcon);
    const navFilterEverythingLabel = buildElement(
      "div",
      "",
      ["nf-label"],
      "Everything"
    );
    navFilterEverything.append(navFilterEverythingLabel);
    navFilters.append(navFilterEverything);
    const navFilterToday = buildElement("button", "", [
      "nav-filter",
      "nf-today",
    ]);
    const navFilterTodayIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">today</span>'
    );
    navFilterToday.append(navFilterTodayIcon);
    const navFilterTodayLabel = buildElement("div", "", ["nf-label"], "Today");
    navFilterToday.append(navFilterTodayLabel);
    navFilters.append(navFilterToday);

    const navFilterUpcoming = buildElement("button", "", [
      "nav-filter",
      "nf-upcoming",
    ]);
    const navFilterUpcomingIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">event_upcoming</span>'
    );
    navFilterUpcoming.append(navFilterUpcomingIcon);
    const navFilterUpcomingLabel = buildElement(
      "div",
      "",
      ["nf-label"],
      "Upcoming"
    );
    navFilterUpcoming.append(navFilterUpcomingLabel);
    navFilters.append(navFilterUpcoming);

    const navFilterArchive = buildElement(
      "button",
      "",
      ["nav-filter", "nf-archive"],
      ""
    );
    const navFilterArchiveIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">folder_open</span>'
    );
    const navFilterArchiveLabel = buildElement(
      "div",
      "",
      ["nf-label"],
      "Archive"
    );
    navFilterArchive.append(navFilterArchiveIcon);
    navFilterArchive.append(navFilterArchiveLabel);
    navFilters.append(navFilterArchive);

    const navSeparator2 = buildElement("div", "", ["nav-separator"], "");
    nav.append(navSeparator2);

    //TODO load projects here
    const navProjects = buildElement(
      "div",
      "",
      ["nav-projects"],
      "Nav Projects"
    );
    nav.append(navProjects);

    // create the footer
    const footer = buildElement("div", "", ["footer"], "Footer");
    nav.append(footer);
    return nav;
  }

  function buildBase() {
    // create the grid contianer
    const element = buildElement(
      "div",
      "",
      ["container"],
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />'
    );

    // create the nav menu
    element.append(nav());

    // create the main area
    const main = buildElement("div", "display", ["main-area"]);
    element.append(main);
    const title = buildElement("h1", "", [], "Everything");
    main.append(title);
    const todoDisplay = buildElement("div", "display-todos", ["todo-holder"]);
    main.appendChild(todoDisplay);
    const addTodoIcon = buildElement(
      "div",
      "add-todo",
      [],
      '<span class="material-symbols-outlined" style="font-size: 2rem;">add_box</span>'
    );
    main.appendChild(addTodoIcon);
    document.body.append(element);

    //create the modal - hidden by default
    const modal = buildElement("div", "myModal", ["modal"]);

    const modalContent = buildElement("div", "", ["modal-content"]);

    const modalForm = buildElement(
      "div",
      "",
      ["modal-form"],
      '<form action="" method="post" id="new-todo">' +
        '<label for="newTitle">Title<input type="text" name="newTitle" id="new-title" required /></label>' +
        '<label for="newDescription">Description<input type="text" name="new-description" id="new-description" required /></label>' +
        '<label for="new-due">Due:<input type="date" name="new-due" id="new-due" required /></label>' +
        '<label for="high-priority">High Priority<input type="radio" name="new-priority" id="high" class="new-priority"/></label>' +
        '<label for="medium-priority">Medium Priority<input type="radio" name="new-priority" id="medium" checked="true"  class="new-priority"/></label>' +
        '<label for="low-priority">Low Priority<input type="radio" name="new-priority" id="low"  class="new-priority"/></label>' +
        '<label for="submit"><input type="button" value="Submit" id="new-submit" /></label>' +
        "</form>"
    );
    modalContent.append(modalForm);
    const modalClose = buildElement("span", "", ["close"], "&times;");
    modalContent.append(modalClose);
    modal.append(modalContent);
    main.append(modal);
    return;
  }

  function renderTodoList(todoList) {
    let display = document.getElementById("display-todos");
    display.innerHTML = "";
    todoList.forEach((item, index) => {
      //create the container for the item
      const todoContainer = buildElement("button", "", ["todo-item"]);
      todoContainer.dataset.index = index;
      display.append(todoContainer);
      //add the checkbox icon
      let todoCheck = null;
      if (item.getArchiveStatus() === true) {
        todoCheck = buildElement(
          "button",
          "",
          ["todo-check"],
          '<span class="material-symbols-outlined"style="font-size: 1.5rem;">check_box</span>'
        );
      } else {
        todoCheck = buildElement(
          "button",
          "",
          ["todo-check"],
          '<span class="material-symbols-outlined"style="font-size: 1.5rem;">check_box_outline_blank</span>'
        );
      }
      todoContainer.append(todoCheck);
      // add the title */
      const todoTitle = buildElement(
        "button",
        "",
        ["todo-title"],
        item.getTitle()
      );

      todoContainer.appendChild(todoTitle);
      //add the due date
      const todoDue = buildElement("button", "", ["todo-due"], item.getDue());
      todoContainer.appendChild(todoDue);
      // add the priority
      const todoPriority = buildElement(
        "button",
        "",
        ["todo-priority"],
        item.getPriority()
      );
      todoContainer.appendChild(todoPriority);
    });
  }
  function openModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  return {
    nav,
    buildBase,
    renderTodoList,
    openModal,
    closeModal,
  };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFunctions.js */ "./src/todoFunctions.js");
/* harmony import */ var _domFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domFunctions.js */ "./src/domFunctions.js");
/* harmony import */ var _storageFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageFunctions */ "./src/storageFunctions.js");





const domHandler = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.domFunctions)();
const storageHandler = (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_3__.storageFunctions)();

const listHandler = (0,_todoFunctions_js__WEBPACK_IMPORTED_MODULE_1__.todoFunctions)(storageHandler.retreiveStorage());
//storageHandler.populateStorage();
domHandler.buildBase();
domHandler.renderTodoList(listHandler.getList());
refreshListeners();
//TODO add a pub/sub module which will allow the domFunctions and todofunctions to interact through a mediator
//TODO add  a module for projects
//TODO implement localstorage to save and retreive the todo items
//TODO refactor the tasks so that they are included as part of projects
//TODO make the nav filters filter through the projects to only show todo's with the correct properties e.g. date

function refreshListeners() {
  let todoChecks = [...document.getElementsByClassName("todo-check")];
  todoChecks.forEach((element) => {
    element.addEventListener(
      "click",
      (e) =>
        listHandler.toggleArchiveStatus(element.parentElement.dataset.index),
      domHandler.renderTodoList(listHandler.getList())
    );
  });
  let addTodo = document.querySelector("#add-todo");
  addTodo.addEventListener("click", (e) => domHandler.openModal());
  //TODO this is maybe not the way to submit the form correctly. need to rework this.
  let newSubmit = document.querySelector("#new-submit");
  let newTitle = document.querySelector("#new-title");
  let newDescription = document.querySelector("#new-description");
  let newDue = document.querySelector("#new-due");
  function getPrioritySelected() {
    var checkRadio = document.querySelector(
      'input[name="new-priority"]:checked'
    );
    if (checkRadio != null) {
      return checkRadio.parentNode.textContent;
    } else {
      return "No one selected";
    }
  }

  newSubmit.onclick = function () {
    listHandler.newTodo(
      newTitle.value,
      newDescription.value,
      newDue.value,
      getPrioritySelected(),
      "",
      false
    );
    domHandler.renderTodoList(listHandler.getList());
    domHandler.closeModal();
    console.log(listHandler.getList());
    storageHandler.populateStorage(listHandler.getList());
    refreshListeners();
  };
}

//local storage functions from mdn web docs https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
//console.log("Session storage available: " + storageAvailable("sessionStorage"));
//console.log("Local storage available: " + storageAvailable("localStorage"));

//some example todos


/***/ }),

/***/ "./src/storageFunctions.js":
/*!*********************************!*\
  !*** ./src/storageFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageFunctions": () => (/* binding */ storageFunctions)
/* harmony export */ });
/* harmony import */ var _todoFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFunctions.js */ "./src/todoFunctions.js");


const storageFunctions = () => {
  function populateStorage(unsavedList) {
    console.log(unsavedList);
    let x = [];
    for (let index = 0; index < unsavedList.length; index++) {
      x.push(unsavedList[index].getAllDetails());
    }
    window.localStorage.setItem("list", JSON.stringify(x));
    console.log("saved to storage");
  }
  const retreiveStorage = () => {
    let loadedList = JSON.parse(window.localStorage.getItem("list"));
    //console.log(newobjectslist[3].todoTitle);
    if (loadedList != null) {
      console.log("List retreived from storage. Length: " + loadedList.length);
      return loadedList;
    }
  };
  return {
    populateStorage,
    retreiveStorage,
  };
};




/***/ }),

/***/ "./src/todoFunctions.js":
/*!******************************!*\
  !*** ./src/todoFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo),
/* harmony export */   "todoFunctions": () => (/* binding */ todoFunctions)
/* harmony export */ });
//module for managing lists
//factory function for creating projects
const todo = (
  title,
  description,
  dueDate,
  priority,
  project,
  archiveStatus
) => {
  let todoTitle = title;
  let todoDescription = description;
  let todoDue = dueDate;
  let todoPriority = priority;
  let todoProject = project;
  let todoArchiveStatus = archiveStatus;
  const getTitle = () => todoTitle;
  const getDescription = () => todoDescription;
  const getDue = () => todoDue;
  const getPriority = () => todoPriority;
  const getProject = () => todoProject;
  const getArchiveStatus = () => todoArchiveStatus;
  const getAllDetails = () => {
    return {
      todoTitle,
      todoDescription,
      todoDue,
      todoPriority,
      todoProject,
      todoArchiveStatus,
    };
  };
  const setArchiveStatus = (newStatus) => (todoArchiveStatus = newStatus);
  function newTodo() {}
  return {
    newTodo,
    getTitle,
    getDescription,
    getDue,
    getPriority,
    getProject,
    getArchiveStatus,
    setArchiveStatus,
    getAllDetails,
  };
};
const todoFunctions = (loadedList) => {
  let todoList = [];
  console.log(loadedList);
  const loadDefaults = () => {
    let testy = todo(
      "This is a test title",
      "This is a todo description",
      "2023-01-18",
      "High Priority",
      "",
      false
    );
    let testy2 = todo(
      "Here is another todo item",
      "This is a todo description",
      "2023-01-18",
      "Low Priority",
      "",
      true
    );
    todoList.push(testy, testy2);
    console.log("populated with defaults");
  };
  if (loadedList === undefined) {
    console.log("no list found so loading defaults");
    loadDefaults();
  } else {
    for (let index = 0; index < loadedList.length; index++) {
      let item = todo(
        loadedList[index].todoTitle,
        loadedList[index].todoDescription,
        loadedList[index].todoDue,
        loadedList[index].todoPriority,
        loadedList[index].todoProject,
        loadedList[index].todoArchiveStatus
      );
      todoList.push(item);
    }
    console.log("current list" + todoList);
    let x = [];
    for (let index = 0; index < todoList.length; index++) {
      x.push(todoList[index].getAllDetails());
    }
    localStorage.setItem("list", JSON.stringify(x));
  }

  const getList = () => {
    return todoList;
  };
  const toggleArchiveStatus = (index) => {
    if (todoList[index].getArchiveStatus()) {
      todoList[index].setArchiveStatus(false);
      console.log("archive status set to false");
    } else {
      todoList[index].setArchiveStatus(true);
      console.log("archive status set to true");
    }
  };
  const newTodo = (
    title,
    description,
    dueDate,
    priority,
    project,
    archiveStatus
  ) => {
    let newtitle = todo(
      title,
      description,
      dueDate,
      priority,
      project,
      archiveStatus
    );
    todoList.push(newtitle);
  };

  return { getList, toggleArchiveStatus, newTodo };
};


/* class MenuItem {
  constructor(title, description, imageName) {
    this.title = title;
    this.description = description;
    this.imageName = imageName;
  }
}
let burrito = new MenuItem(
  "Vegan Burritos",
  "Featuring cilantro-lime rice, chipotle-spiced black beans, sautéed peppers and onions, and a zesty avocado cream sauce",
  burritoImage
);
 */
/* Projects contain multiple todo lists which contain multiple todo items */


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFD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QUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUMrQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9kb21GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy90b2RvRnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG9yYW5nZSA1cHggYXV0bztcXG59XFxuLm5hdiB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLm5hdi10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdi1wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleDogMTtcXG59XFxuLm5mLWljb24ge1xcbiAgZm9udC1zaXplOiA0ODtcXG59XFxuXFxuLnNocmluay1uYXYge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2LXNlcGFyYXRvciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNDAlKTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwcHggMzBweCAwcHggMzBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ubmF2LWZpbHRlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdi1maWx0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZi1ldmVyeXRoaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIDEuOHJlbSByZXBlYXQoMywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbn1cXG4udG9kby1jaGVjayB7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMztcXG59XFxuXFxuLnRvZG8tZHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbiNhZGQtdG9kbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogMjUwcHg7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jbmV3LXRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsT0FBTztBQUNUO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsOEJBQThCLEVBQUUsbUJBQW1CO0VBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM3RDs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZLEVBQUUsb0RBQW9EO0FBQ3BFOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBvcmFuZ2UgNXB4IGF1dG87XFxufVxcbi5uYXYge1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5uYXYtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXYtcHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXg6IDE7XFxufVxcbi5uZi1pY29uIHtcXG4gIGZvbnQtc2l6ZTogNDg7XFxufVxcblxcbi5zaHJpbmstbmF2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1zZXBhcmF0b3Ige1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwJSk7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4tYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDMwcHggMHB4IDMwcHg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLm5hdi1maWx0ZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtZmlsdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmYtZXZlcnl0aGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyAxLjhyZW0gcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XFxuLnRvZG8tY2hlY2sge1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDM7XFxufVxcblxcbi50b2RvLWR1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4jYWRkLXRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDI1MHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI25ldy10b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZG9tRnVuY3Rpb25zID0gKG5hbWUsIGRhdGUpID0+IHtcbiAgZnVuY3Rpb24gYnVpbGRFbGVtZW50KGVsZW1lbnRUeXBlLCBpZCwgY2xhc3NMaXN0LCBpbm5lckhUTUwpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlkID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGNsYXNzTGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGFzc0xpc3QgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoaW5uZXJIVE1MID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICBmdW5jdGlvbiBuYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5hdlwiXSk7XG4gICAgLy8gdG9wIHNlY3Rpb24gaW5jbHVkaW5nIHByb2ZpbGVcbiAgICBjb25zdCBuYXZUb3AgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wibmF2LXRvcFwiXSk7XG4gICAgLy9wcm9maWxlIHNlY3Rpb25cbiAgICBjb25zdCBuYXZQcm9maWxlID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5hdi1wcm9maWxlXCJdKTtcbiAgICBuYXZUb3AuYXBwZW5kKG5hdlByb2ZpbGUpO1xuICAgIC8vcHJvZmlsZSBpY29uXG4gICAgY29uc3QgcHJvZmlsZUljb24gPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcInByb2ZpbGUtaWNvblwiXSxcbiAgICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDhweDtcIj5hY2NvdW50X2NpcmNsZTwvc3Bhbj4nXG4gICAgKTtcbiAgICBuYXZQcm9maWxlLmFwcGVuZENoaWxkKHByb2ZpbGVJY29uKTtcbiAgICAvL3Byb2ZpbGUgbmFtZVxuICAgIGNvbnN0IHByb2ZpbGVOYW1lID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJwcm9maWxlLW5hbWVcIl0sXG4gICAgICBcIlByb2ZpbGUgTmFtZVwiXG4gICAgKTtcbiAgICBuYXZQcm9maWxlLmFwcGVuZENoaWxkKHByb2ZpbGVOYW1lKTtcbiAgICAvL3NocmluayBuYXYgbWVudSBpY29uXG4gICAgY29uc3Qgc2hyaW5rTmF2ID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJzaHJpbmstbmF2XCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmNoZXZyb25fbGVmdDwvc3Bhbj4nXG4gICAgKTtcbiAgICBuYXZUb3AuYXBwZW5kQ2hpbGQoc2hyaW5rTmF2KTtcbiAgICBuYXYuYXBwZW5kKG5hdlRvcCk7XG4gICAgY29uc3QgbmF2U2VwYXJhdG9yMSA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuYXYtc2VwYXJhdG9yXCJdKTtcbiAgICBuYXYuYXBwZW5kKG5hdlNlcGFyYXRvcjEpO1xuICAgIGNvbnN0IG5hdkZpbHRlcnMgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wibmF2LWZpbHRlcnNcIl0pO1xuICAgIG5hdi5hcHBlbmQobmF2RmlsdGVycyk7XG4gICAgY29uc3QgbmF2RmlsdGVyRXZlcnl0aGluZyA9IGJ1aWxkRWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBbXG4gICAgICBcIm5hdi1maWx0ZXJcIixcbiAgICAgIFwibmYtZXZlcnl0aGluZ1wiLFxuICAgIF0pO1xuICAgIGNvbnN0IG5hdkZpbHRlckV2ZXJ5dGhpbmdJY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuZi1pY29uXCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmFsbF9pbmJveDwvc3Bhbj4nXG4gICAgKTtcbiAgICBuYXZGaWx0ZXJFdmVyeXRoaW5nLmFwcGVuZChuYXZGaWx0ZXJFdmVyeXRoaW5nSWNvbik7XG4gICAgY29uc3QgbmF2RmlsdGVyRXZlcnl0aGluZ0xhYmVsID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuZi1sYWJlbFwiXSxcbiAgICAgIFwiRXZlcnl0aGluZ1wiXG4gICAgKTtcbiAgICBuYXZGaWx0ZXJFdmVyeXRoaW5nLmFwcGVuZChuYXZGaWx0ZXJFdmVyeXRoaW5nTGFiZWwpO1xuICAgIG5hdkZpbHRlcnMuYXBwZW5kKG5hdkZpbHRlckV2ZXJ5dGhpbmcpO1xuICAgIGNvbnN0IG5hdkZpbHRlclRvZGF5ID0gYnVpbGRFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFtcbiAgICAgIFwibmF2LWZpbHRlclwiLFxuICAgICAgXCJuZi10b2RheVwiLFxuICAgIF0pO1xuICAgIGNvbnN0IG5hdkZpbHRlclRvZGF5SWNvbiA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmYtaWNvblwiXSxcbiAgICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDhweDtcIj50b2RheTwvc3Bhbj4nXG4gICAgKTtcbiAgICBuYXZGaWx0ZXJUb2RheS5hcHBlbmQobmF2RmlsdGVyVG9kYXlJY29uKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJUb2RheUxhYmVsID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5mLWxhYmVsXCJdLCBcIlRvZGF5XCIpO1xuICAgIG5hdkZpbHRlclRvZGF5LmFwcGVuZChuYXZGaWx0ZXJUb2RheUxhYmVsKTtcbiAgICBuYXZGaWx0ZXJzLmFwcGVuZChuYXZGaWx0ZXJUb2RheSk7XG5cbiAgICBjb25zdCBuYXZGaWx0ZXJVcGNvbWluZyA9IGJ1aWxkRWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBbXG4gICAgICBcIm5hdi1maWx0ZXJcIixcbiAgICAgIFwibmYtdXBjb21pbmdcIixcbiAgICBdKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJVcGNvbWluZ0ljb24gPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm5mLWljb25cIl0sXG4gICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgc3R5bGU9XCJmb250LXNpemU6IDQ4cHg7XCI+ZXZlbnRfdXBjb21pbmc8L3NwYW4+J1xuICAgICk7XG4gICAgbmF2RmlsdGVyVXBjb21pbmcuYXBwZW5kKG5hdkZpbHRlclVwY29taW5nSWNvbik7XG4gICAgY29uc3QgbmF2RmlsdGVyVXBjb21pbmdMYWJlbCA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmYtbGFiZWxcIl0sXG4gICAgICBcIlVwY29taW5nXCJcbiAgICApO1xuICAgIG5hdkZpbHRlclVwY29taW5nLmFwcGVuZChuYXZGaWx0ZXJVcGNvbWluZ0xhYmVsKTtcbiAgICBuYXZGaWx0ZXJzLmFwcGVuZChuYXZGaWx0ZXJVcGNvbWluZyk7XG5cbiAgICBjb25zdCBuYXZGaWx0ZXJBcmNoaXZlID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuYXYtZmlsdGVyXCIsIFwibmYtYXJjaGl2ZVwiXSxcbiAgICAgIFwiXCJcbiAgICApO1xuICAgIGNvbnN0IG5hdkZpbHRlckFyY2hpdmVJY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuZi1pY29uXCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmZvbGRlcl9vcGVuPC9zcGFuPidcbiAgICApO1xuICAgIGNvbnN0IG5hdkZpbHRlckFyY2hpdmVMYWJlbCA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmYtbGFiZWxcIl0sXG4gICAgICBcIkFyY2hpdmVcIlxuICAgICk7XG4gICAgbmF2RmlsdGVyQXJjaGl2ZS5hcHBlbmQobmF2RmlsdGVyQXJjaGl2ZUljb24pO1xuICAgIG5hdkZpbHRlckFyY2hpdmUuYXBwZW5kKG5hdkZpbHRlckFyY2hpdmVMYWJlbCk7XG4gICAgbmF2RmlsdGVycy5hcHBlbmQobmF2RmlsdGVyQXJjaGl2ZSk7XG5cbiAgICBjb25zdCBuYXZTZXBhcmF0b3IyID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5hdi1zZXBhcmF0b3JcIl0sIFwiXCIpO1xuICAgIG5hdi5hcHBlbmQobmF2U2VwYXJhdG9yMik7XG5cbiAgICAvL1RPRE8gbG9hZCBwcm9qZWN0cyBoZXJlXG4gICAgY29uc3QgbmF2UHJvamVjdHMgPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm5hdi1wcm9qZWN0c1wiXSxcbiAgICAgIFwiTmF2IFByb2plY3RzXCJcbiAgICApO1xuICAgIG5hdi5hcHBlbmQobmF2UHJvamVjdHMpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBmb290ZXJcbiAgICBjb25zdCBmb290ZXIgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wiZm9vdGVyXCJdLCBcIkZvb3RlclwiKTtcbiAgICBuYXYuYXBwZW5kKGZvb3Rlcik7XG4gICAgcmV0dXJuIG5hdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkQmFzZSgpIHtcbiAgICAvLyBjcmVhdGUgdGhlIGdyaWQgY29udGlhbmVyXG4gICAgY29uc3QgZWxlbWVudCA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wiY29udGFpbmVyXCJdLFxuICAgICAgJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcIiAvPidcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBuYXYgbWVudVxuICAgIGVsZW1lbnQuYXBwZW5kKG5hdigpKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgbWFpbiBhcmVhXG4gICAgY29uc3QgbWFpbiA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcImRpc3BsYXlcIiwgW1wibWFpbi1hcmVhXCJdKTtcbiAgICBlbGVtZW50LmFwcGVuZChtYWluKTtcbiAgICBjb25zdCB0aXRsZSA9IGJ1aWxkRWxlbWVudChcImgxXCIsIFwiXCIsIFtdLCBcIkV2ZXJ5dGhpbmdcIik7XG4gICAgbWFpbi5hcHBlbmQodGl0bGUpO1xuICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiZGlzcGxheS10b2Rvc1wiLCBbXCJ0b2RvLWhvbGRlclwiXSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheSk7XG4gICAgY29uc3QgYWRkVG9kb0ljb24gPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJhZGQtdG9kb1wiLFxuICAgICAgW10sXG4gICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgc3R5bGU9XCJmb250LXNpemU6IDJyZW07XCI+YWRkX2JveDwvc3Bhbj4nXG4gICAgKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRvZG9JY29uKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtZW50KTtcblxuICAgIC8vY3JlYXRlIHRoZSBtb2RhbCAtIGhpZGRlbiBieSBkZWZhdWx0XG4gICAgY29uc3QgbW9kYWwgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJteU1vZGFsXCIsIFtcIm1vZGFsXCJdKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJtb2RhbC1jb250ZW50XCJdKTtcblxuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibW9kYWwtZm9ybVwiXSxcbiAgICAgICc8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJuZXctdG9kb1wiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cIm5ld1RpdGxlXCI+VGl0bGU8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmV3VGl0bGVcIiBpZD1cIm5ldy10aXRsZVwiIHJlcXVpcmVkIC8+PC9sYWJlbD4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJuZXdEZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5ldy1kZXNjcmlwdGlvblwiIGlkPVwibmV3LWRlc2NyaXB0aW9uXCIgcmVxdWlyZWQgLz48L2xhYmVsPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cIm5ldy1kdWVcIj5EdWU6PGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cIm5ldy1kdWVcIiBpZD1cIm5ldy1kdWVcIiByZXF1aXJlZCAvPjwvbGFiZWw+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwiaGlnaC1wcmlvcml0eVwiPkhpZ2ggUHJpb3JpdHk8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldy1wcmlvcml0eVwiIGlkPVwiaGlnaFwiIGNsYXNzPVwibmV3LXByaW9yaXR5XCIvPjwvbGFiZWw+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwibWVkaXVtLXByaW9yaXR5XCI+TWVkaXVtIFByaW9yaXR5PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXctcHJpb3JpdHlcIiBpZD1cIm1lZGl1bVwiIGNoZWNrZWQ9XCJ0cnVlXCIgIGNsYXNzPVwibmV3LXByaW9yaXR5XCIvPjwvbGFiZWw+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwibG93LXByaW9yaXR5XCI+TG93IFByaW9yaXR5PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXctcHJpb3JpdHlcIiBpZD1cImxvd1wiICBjbGFzcz1cIm5ldy1wcmlvcml0eVwiLz48L2xhYmVsPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cInN1Ym1pdFwiPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIiBpZD1cIm5ldy1zdWJtaXRcIiAvPjwvbGFiZWw+JyArXG4gICAgICAgIFwiPC9mb3JtPlwiXG4gICAgKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsRm9ybSk7XG4gICAgY29uc3QgbW9kYWxDbG9zZSA9IGJ1aWxkRWxlbWVudChcInNwYW5cIiwgXCJcIiwgW1wiY2xvc2VcIl0sIFwiJnRpbWVzO1wiKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsQ2xvc2UpO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpO1xuICAgIG1haW4uYXBwZW5kKG1vZGFsKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUb2RvTGlzdCh0b2RvTGlzdCkge1xuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LXRvZG9zXCIpO1xuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgLy9jcmVhdGUgdGhlIGNvbnRhaW5lciBmb3IgdGhlIGl0ZW1cbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgW1widG9kby1pdGVtXCJdKTtcbiAgICAgIHRvZG9Db250YWluZXIuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgZGlzcGxheS5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG4gICAgICAvL2FkZCB0aGUgY2hlY2tib3ggaWNvblxuICAgICAgbGV0IHRvZG9DaGVjayA9IG51bGw7XG4gICAgICBpZiAoaXRlbS5nZXRBcmNoaXZlU3RhdHVzKCkgPT09IHRydWUpIHtcbiAgICAgICAgdG9kb0NoZWNrID0gYnVpbGRFbGVtZW50KFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJcIixcbiAgICAgICAgICBbXCJ0b2RvLWNoZWNrXCJdLFxuICAgICAgICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcInN0eWxlPVwiZm9udC1zaXplOiAxLjVyZW07XCI+Y2hlY2tfYm94PC9zcGFuPidcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9DaGVjayA9IGJ1aWxkRWxlbWVudChcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgW1widG9kby1jaGVja1wiXSxcbiAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCJzdHlsZT1cImZvbnQtc2l6ZTogMS41cmVtO1wiPmNoZWNrX2JveF9vdXRsaW5lX2JsYW5rPC9zcGFuPidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9DaGVjayk7XG4gICAgICAvLyBhZGQgdGhlIHRpdGxlICovXG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBidWlsZEVsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtcInRvZG8tdGl0bGVcIl0sXG4gICAgICAgIGl0ZW0uZ2V0VGl0bGUoKVxuICAgICAgKTtcblxuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgLy9hZGQgdGhlIGR1ZSBkYXRlXG4gICAgICBjb25zdCB0b2RvRHVlID0gYnVpbGRFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFtcInRvZG8tZHVlXCJdLCBpdGVtLmdldER1ZSgpKTtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0R1ZSk7XG4gICAgICAvLyBhZGQgdGhlIHByaW9yaXR5XG4gICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBidWlsZEVsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFtcInRvZG8tcHJpb3JpdHlcIl0sXG4gICAgICAgIGl0ZW0uZ2V0UHJpb3JpdHkoKVxuICAgICAgKTtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgLy8gR2V0IHRoZSBtb2RhbFxuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAvLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbiAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYXYsXG4gICAgYnVpbGRCYXNlLFxuICAgIHJlbmRlclRvZG9MaXN0LFxuICAgIG9wZW5Nb2RhbCxcbiAgICBjbG9zZU1vZGFsLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZG9tRnVuY3Rpb25zIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgdG9kb0Z1bmN0aW9ucyB9IGZyb20gXCIuL3RvZG9GdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7IGRvbUZ1bmN0aW9ucyB9IGZyb20gXCIuL2RvbUZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUZ1bmN0aW9ucyB9IGZyb20gXCIuL3N0b3JhZ2VGdW5jdGlvbnNcIjtcblxuY29uc3QgZG9tSGFuZGxlciA9IGRvbUZ1bmN0aW9ucygpO1xuY29uc3Qgc3RvcmFnZUhhbmRsZXIgPSBzdG9yYWdlRnVuY3Rpb25zKCk7XG5cbmNvbnN0IGxpc3RIYW5kbGVyID0gdG9kb0Z1bmN0aW9ucyhzdG9yYWdlSGFuZGxlci5yZXRyZWl2ZVN0b3JhZ2UoKSk7XG4vL3N0b3JhZ2VIYW5kbGVyLnBvcHVsYXRlU3RvcmFnZSgpO1xuZG9tSGFuZGxlci5idWlsZEJhc2UoKTtcbmRvbUhhbmRsZXIucmVuZGVyVG9kb0xpc3QobGlzdEhhbmRsZXIuZ2V0TGlzdCgpKTtcbnJlZnJlc2hMaXN0ZW5lcnMoKTtcbi8vVE9ETyBhZGQgYSBwdWIvc3ViIG1vZHVsZSB3aGljaCB3aWxsIGFsbG93IHRoZSBkb21GdW5jdGlvbnMgYW5kIHRvZG9mdW5jdGlvbnMgdG8gaW50ZXJhY3QgdGhyb3VnaCBhIG1lZGlhdG9yXG4vL1RPRE8gYWRkICBhIG1vZHVsZSBmb3IgcHJvamVjdHNcbi8vVE9ETyBpbXBsZW1lbnQgbG9jYWxzdG9yYWdlIHRvIHNhdmUgYW5kIHJldHJlaXZlIHRoZSB0b2RvIGl0ZW1zXG4vL1RPRE8gcmVmYWN0b3IgdGhlIHRhc2tzIHNvIHRoYXQgdGhleSBhcmUgaW5jbHVkZWQgYXMgcGFydCBvZiBwcm9qZWN0c1xuLy9UT0RPIG1ha2UgdGhlIG5hdiBmaWx0ZXJzIGZpbHRlciB0aHJvdWdoIHRoZSBwcm9qZWN0cyB0byBvbmx5IHNob3cgdG9kbydzIHdpdGggdGhlIGNvcnJlY3QgcHJvcGVydGllcyBlLmcuIGRhdGVcblxuZnVuY3Rpb24gcmVmcmVzaExpc3RlbmVycygpIHtcbiAgbGV0IHRvZG9DaGVja3MgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG8tY2hlY2tcIildO1xuICB0b2RvQ2hlY2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoZSkgPT5cbiAgICAgICAgbGlzdEhhbmRsZXIudG9nZ2xlQXJjaGl2ZVN0YXR1cyhlbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleCksXG4gICAgICBkb21IYW5kbGVyLnJlbmRlclRvZG9MaXN0KGxpc3RIYW5kbGVyLmdldExpc3QoKSlcbiAgICApO1xuICB9KTtcbiAgbGV0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvXCIpO1xuICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gZG9tSGFuZGxlci5vcGVuTW9kYWwoKSk7XG4gIC8vVE9ETyB0aGlzIGlzIG1heWJlIG5vdCB0aGUgd2F5IHRvIHN1Ym1pdCB0aGUgZm9ybSBjb3JyZWN0bHkuIG5lZWQgdG8gcmV3b3JrIHRoaXMuXG4gIGxldCBuZXdTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1zdWJtaXRcIik7XG4gIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRpdGxlXCIpO1xuICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1kZXNjcmlwdGlvblwiKTtcbiAgbGV0IG5ld0R1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWR1ZVwiKTtcbiAgZnVuY3Rpb24gZ2V0UHJpb3JpdHlTZWxlY3RlZCgpIHtcbiAgICB2YXIgY2hlY2tSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW5wdXRbbmFtZT1cIm5ldy1wcmlvcml0eVwiXTpjaGVja2VkJ1xuICAgICk7XG4gICAgaWYgKGNoZWNrUmFkaW8gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNoZWNrUmFkaW8ucGFyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiTm8gb25lIHNlbGVjdGVkXCI7XG4gICAgfVxuICB9XG5cbiAgbmV3U3VibWl0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGlzdEhhbmRsZXIubmV3VG9kbyhcbiAgICAgIG5ld1RpdGxlLnZhbHVlLFxuICAgICAgbmV3RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBuZXdEdWUudmFsdWUsXG4gICAgICBnZXRQcmlvcml0eVNlbGVjdGVkKCksXG4gICAgICBcIlwiLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGRvbUhhbmRsZXIucmVuZGVyVG9kb0xpc3QobGlzdEhhbmRsZXIuZ2V0TGlzdCgpKTtcbiAgICBkb21IYW5kbGVyLmNsb3NlTW9kYWwoKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0SGFuZGxlci5nZXRMaXN0KCkpO1xuICAgIHN0b3JhZ2VIYW5kbGVyLnBvcHVsYXRlU3RvcmFnZShsaXN0SGFuZGxlci5nZXRMaXN0KCkpO1xuICAgIHJlZnJlc2hMaXN0ZW5lcnMoKTtcbiAgfTtcbn1cblxuLy9sb2NhbCBzdG9yYWdlIGZ1bmN0aW9ucyBmcm9tIG1kbiB3ZWIgZG9jcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViX1N0b3JhZ2VfQVBJL1VzaW5nX3RoZV9XZWJfU3RvcmFnZV9BUElcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuLy9jb25zb2xlLmxvZyhcIlNlc3Npb24gc3RvcmFnZSBhdmFpbGFibGU6IFwiICsgc3RvcmFnZUF2YWlsYWJsZShcInNlc3Npb25TdG9yYWdlXCIpKTtcbi8vY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIGF2YWlsYWJsZTogXCIgKyBzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKTtcblxuLy9zb21lIGV4YW1wbGUgdG9kb3NcbiIsImltcG9ydCB7IHRvZG9GdW5jdGlvbnMgfSBmcm9tIFwiLi90b2RvRnVuY3Rpb25zLmpzXCI7XG5cbmNvbnN0IHN0b3JhZ2VGdW5jdGlvbnMgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSh1bnNhdmVkTGlzdCkge1xuICAgIGNvbnNvbGUubG9nKHVuc2F2ZWRMaXN0KTtcbiAgICBsZXQgeCA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB1bnNhdmVkTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHgucHVzaCh1bnNhdmVkTGlzdFtpbmRleF0uZ2V0QWxsRGV0YWlscygpKTtcbiAgICB9XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBKU09OLnN0cmluZ2lmeSh4KSk7XG4gICAgY29uc29sZS5sb2coXCJzYXZlZCB0byBzdG9yYWdlXCIpO1xuICB9XG4gIGNvbnN0IHJldHJlaXZlU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsZXQgbG9hZGVkTGlzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFwiKSk7XG4gICAgLy9jb25zb2xlLmxvZyhuZXdvYmplY3RzbGlzdFszXS50b2RvVGl0bGUpO1xuICAgIGlmIChsb2FkZWRMaXN0ICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTGlzdCByZXRyZWl2ZWQgZnJvbSBzdG9yYWdlLiBMZW5ndGg6IFwiICsgbG9hZGVkTGlzdC5sZW5ndGgpO1xuICAgICAgcmV0dXJuIGxvYWRlZExpc3Q7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIHBvcHVsYXRlU3RvcmFnZSxcbiAgICByZXRyZWl2ZVN0b3JhZ2UsXG4gIH07XG59O1xuXG5leHBvcnQgeyBzdG9yYWdlRnVuY3Rpb25zIH07XG4iLCIvL21vZHVsZSBmb3IgbWFuYWdpbmcgbGlzdHNcbi8vZmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcHJvamVjdHNcbmNvbnN0IHRvZG8gPSAoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3QsXG4gIGFyY2hpdmVTdGF0dXNcbikgPT4ge1xuICBsZXQgdG9kb1RpdGxlID0gdGl0bGU7XG4gIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbGV0IHRvZG9EdWUgPSBkdWVEYXRlO1xuICBsZXQgdG9kb1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGxldCB0b2RvUHJvamVjdCA9IHByb2plY3Q7XG4gIGxldCB0b2RvQXJjaGl2ZVN0YXR1cyA9IGFyY2hpdmVTdGF0dXM7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdG9kb1RpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHRvZG9EZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlID0gKCkgPT4gdG9kb0R1ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB0b2RvUHJpb3JpdHk7XG4gIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiB0b2RvUHJvamVjdDtcbiAgY29uc3QgZ2V0QXJjaGl2ZVN0YXR1cyA9ICgpID0+IHRvZG9BcmNoaXZlU3RhdHVzO1xuICBjb25zdCBnZXRBbGxEZXRhaWxzID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0b2RvVGl0bGUsXG4gICAgICB0b2RvRGVzY3JpcHRpb24sXG4gICAgICB0b2RvRHVlLFxuICAgICAgdG9kb1ByaW9yaXR5LFxuICAgICAgdG9kb1Byb2plY3QsXG4gICAgICB0b2RvQXJjaGl2ZVN0YXR1cyxcbiAgICB9O1xuICB9O1xuICBjb25zdCBzZXRBcmNoaXZlU3RhdHVzID0gKG5ld1N0YXR1cykgPT4gKHRvZG9BcmNoaXZlU3RhdHVzID0gbmV3U3RhdHVzKTtcbiAgZnVuY3Rpb24gbmV3VG9kbygpIHt9XG4gIHJldHVybiB7XG4gICAgbmV3VG9kbyxcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0UHJvamVjdCxcbiAgICBnZXRBcmNoaXZlU3RhdHVzLFxuICAgIHNldEFyY2hpdmVTdGF0dXMsXG4gICAgZ2V0QWxsRGV0YWlscyxcbiAgfTtcbn07XG5jb25zdCB0b2RvRnVuY3Rpb25zID0gKGxvYWRlZExpc3QpID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gW107XG4gIGNvbnNvbGUubG9nKGxvYWRlZExpc3QpO1xuICBjb25zdCBsb2FkRGVmYXVsdHMgPSAoKSA9PiB7XG4gICAgbGV0IHRlc3R5ID0gdG9kbyhcbiAgICAgIFwiVGhpcyBpcyBhIHRlc3QgdGl0bGVcIixcbiAgICAgIFwiVGhpcyBpcyBhIHRvZG8gZGVzY3JpcHRpb25cIixcbiAgICAgIFwiMjAyMy0wMS0xOFwiLFxuICAgICAgXCJIaWdoIFByaW9yaXR5XCIsXG4gICAgICBcIlwiLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGxldCB0ZXN0eTIgPSB0b2RvKFxuICAgICAgXCJIZXJlIGlzIGFub3RoZXIgdG9kbyBpdGVtXCIsXG4gICAgICBcIlRoaXMgaXMgYSB0b2RvIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcIjIwMjMtMDEtMThcIixcbiAgICAgIFwiTG93IFByaW9yaXR5XCIsXG4gICAgICBcIlwiLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgdG9kb0xpc3QucHVzaCh0ZXN0eSwgdGVzdHkyKTtcbiAgICBjb25zb2xlLmxvZyhcInBvcHVsYXRlZCB3aXRoIGRlZmF1bHRzXCIpO1xuICB9O1xuICBpZiAobG9hZGVkTGlzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5sb2coXCJubyBsaXN0IGZvdW5kIHNvIGxvYWRpbmcgZGVmYXVsdHNcIik7XG4gICAgbG9hZERlZmF1bHRzKCk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvYWRlZExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRvZG8oXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9UaXRsZSxcbiAgICAgICAgbG9hZGVkTGlzdFtpbmRleF0udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICBsb2FkZWRMaXN0W2luZGV4XS50b2RvRHVlLFxuICAgICAgICBsb2FkZWRMaXN0W2luZGV4XS50b2RvUHJpb3JpdHksXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9Qcm9qZWN0LFxuICAgICAgICBsb2FkZWRMaXN0W2luZGV4XS50b2RvQXJjaGl2ZVN0YXR1c1xuICAgICAgKTtcbiAgICAgIHRvZG9MaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBsaXN0XCIgKyB0b2RvTGlzdCk7XG4gICAgbGV0IHggPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9kb0xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB4LnB1c2godG9kb0xpc3RbaW5kZXhdLmdldEFsbERldGFpbHMoKSk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBKU09OLnN0cmluZ2lmeSh4KSk7XG4gIH1cblxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQXJjaGl2ZVN0YXR1cyA9IChpbmRleCkgPT4ge1xuICAgIGlmICh0b2RvTGlzdFtpbmRleF0uZ2V0QXJjaGl2ZVN0YXR1cygpKSB7XG4gICAgICB0b2RvTGlzdFtpbmRleF0uc2V0QXJjaGl2ZVN0YXR1cyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImFyY2hpdmUgc3RhdHVzIHNldCB0byBmYWxzZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0xpc3RbaW5kZXhdLnNldEFyY2hpdmVTdGF0dXModHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImFyY2hpdmUgc3RhdHVzIHNldCB0byB0cnVlXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbmV3VG9kbyA9IChcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHByb2plY3QsXG4gICAgYXJjaGl2ZVN0YXR1c1xuICApID0+IHtcbiAgICBsZXQgbmV3dGl0bGUgPSB0b2RvKFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIHByb2plY3QsXG4gICAgICBhcmNoaXZlU3RhdHVzXG4gICAgKTtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld3RpdGxlKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRMaXN0LCB0b2dnbGVBcmNoaXZlU3RhdHVzLCBuZXdUb2RvIH07XG59O1xuZXhwb3J0IHsgdG9kbywgdG9kb0Z1bmN0aW9ucyB9O1xuXG4vKiBjbGFzcyBNZW51SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2VOYW1lKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgfVxufVxubGV0IGJ1cnJpdG8gPSBuZXcgTWVudUl0ZW0oXG4gIFwiVmVnYW4gQnVycml0b3NcIixcbiAgXCJGZWF0dXJpbmcgY2lsYW50cm8tbGltZSByaWNlLCBjaGlwb3RsZS1zcGljZWQgYmxhY2sgYmVhbnMsIHNhdXTDqWVkIHBlcHBlcnMgYW5kIG9uaW9ucywgYW5kIGEgemVzdHkgYXZvY2FkbyBjcmVhbSBzYXVjZVwiLFxuICBidXJyaXRvSW1hZ2Vcbik7XG4gKi9cbi8qIFByb2plY3RzIGNvbnRhaW4gbXVsdGlwbGUgdG9kbyBsaXN0cyB3aGljaCBjb250YWluIG11bHRpcGxlIHRvZG8gaXRlbXMgKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==