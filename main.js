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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  outline: orange 5px auto;\n}\n.nav {\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 200px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #000000;\n  overflow: auto;\n}\n.nav-top {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 100%;\n}\n.nav-profile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.nf-icon {\n  font-size: 48;\n}\n\n.shrink-nav {\n  cursor: pointer;\n}\n.nav-separator {\n  border-top: 1px solid black;\n  width: calc(100% - 40%);\n}\n.container {\n  display: flex;\n}\n\n.main-area {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n}\n\n.todo-holder {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n\n.nav-filters {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.nav-filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.nf-everything {\n  background-color: rgb(202, 202, 202);\n  border-radius: 5px;\n}\n\n.footer {\n  bottom: 0;\n}\n\n#display {\n  display: flex;\n  flex-direction: column;\n  margin: 30px;\n  gap: 5px;\n}\n\n.todo-item {\n  display: grid;\n  grid-template: auto auto / 1.8rem repeat(3, 1fr);\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border: 1px solid #000000;\n}\n.todo-check {\n  grid-row: 1 / 3;\n  align-items: center;\n  align-self: center;\n  height: 24px;\n  cursor: pointer;\n}\n\n.todo-title {\n  background-color: aquamarine;\n  grid-row: 1;\n  grid-column: 2 / span 3;\n}\n\n.todo-due {\n  background-color: aqua;\n  grid-column: 2;\n}\n\n.todo-priority {\n  background-color: bisque;\n  grid-column: 4;\n  display: flex;\n  align-self: center;\n  justify-self: right;\n  font-size: small;\n}\n\n#add-todo {\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  display: grid;\n  grid-template: 1fr / 1fr 30px;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-form {\n  display: flex;\n  flex-direction: column;\n}\n#new-todo {\n  display: grid;\n  gap: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;;EAEE,wBAAwB;AAC1B;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,cAAc;AAChB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;AACT;AACA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;AACA;EACE,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,yBAAyB;EACzB,uBAAuB;EACvB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA,2BAA2B;AAC3B;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,oDAAoD;AAClE;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,QAAQ;AACV","sourcesContent":["html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  outline: orange 5px auto;\n}\n.nav {\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 200px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #000000;\n  overflow: auto;\n}\n.nav-top {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 100%;\n}\n.nav-profile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.nf-icon {\n  font-size: 48;\n}\n\n.shrink-nav {\n  cursor: pointer;\n}\n.nav-separator {\n  border-top: 1px solid black;\n  width: calc(100% - 40%);\n}\n.container {\n  display: flex;\n}\n\n.main-area {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n}\n\n.todo-holder {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n\n.nav-filters {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.nav-filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.nf-everything {\n  background-color: rgb(202, 202, 202);\n  border-radius: 5px;\n}\n\n.footer {\n  bottom: 0;\n}\n\n#display {\n  display: flex;\n  flex-direction: column;\n  margin: 30px;\n  gap: 5px;\n}\n\n.todo-item {\n  display: grid;\n  grid-template: auto auto / 1.8rem repeat(3, 1fr);\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border: 1px solid #000000;\n}\n.todo-check {\n  grid-row: 1 / 3;\n  align-items: center;\n  align-self: center;\n  height: 24px;\n  cursor: pointer;\n}\n\n.todo-title {\n  background-color: aquamarine;\n  grid-row: 1;\n  grid-column: 2 / span 3;\n}\n\n.todo-due {\n  background-color: aqua;\n  grid-column: 2;\n}\n\n.todo-priority {\n  background-color: bisque;\n  grid-column: 4;\n  display: flex;\n  align-self: center;\n  justify-self: right;\n  font-size: small;\n}\n\n#add-todo {\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  display: grid;\n  grid-template: 1fr / 1fr 30px;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-form {\n  display: flex;\n  flex-direction: column;\n}\n#new-todo {\n  display: grid;\n  gap: 5px;\n}\n"],"sourceRoot":""}]);
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

    //create the model - hidden by default
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
      const todoContainer = buildElement("div", "", ["todo-item"]);
      todoContainer.dataset.index = index;
      display.append(todoContainer);
      //add the checkbox icon
      const todoCheck = buildElement(
        "button",
        "",
        ["todo-check"],
        '<span class="material-symbols-outlined"style="font-size: 1.5rem;">check_box_outline_blank</span>'
      );
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




const domHandler = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.domFunctions)();

function retreiveStorage() {
  let loadedList = JSON.parse(window.localStorage.getItem("list"));
  //console.log(newobjectslist[3].todoTitle);
  if (loadedList != null) {
    console.log("List retreived from storage. Length: " + loadedList.length);
    return loadedList;
  }
}
const listHandler = (0,_todoFunctions_js__WEBPACK_IMPORTED_MODULE_1__.todoFunctions)(retreiveStorage());
domHandler.buildBase();
domHandler.renderTodoList(listHandler.getList());
refreshListeners();
//TODO add a pub/sub module which will allow the domFunctions and todofunctions to interact through a mediator
//TODO add  a module for projects
//TODO Everything clickable should be a button
//TODO implement localstorage to save and retreive the todo items
//TODO refactor the tasks so that they are included as part of projects
//TODO make the nav filters filter through the projects to only show todo's with the correct properties e.g. date
function populateStorage() {
  let x = [];
  for (let index = 0; index < listHandler.getList().length; index++) {
    x.push(listHandler.getList()[index].getAllDetails());
  }
  localStorage.setItem("list", JSON.stringify(x));
  console.log("saved to storage");
}

function refreshListeners() {
  let todoChecks = [...document.getElementsByClassName("todo-check")];
  todoChecks.forEach((element) => {
    element.addEventListener("click", (e) =>
      listHandler.toggleArchiveStatus(element.parentElement.dataset.index)
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
      return checkRadio.id;
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
    populateStorage();
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
      "07/04/2023",
      "High Priority",
      "",
      false
    );
    let testy2 = todo(
      "Here is another todo item",
      "This is a todo description",
      "12/02/2021",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7QUMvUUg7QUFDOEI7QUFDRjs7QUFFakQsbUJBQW1CLDhEQUFZOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0NBQXNDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQytCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2RvbUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvdG9kb0Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBvcmFuZ2UgNXB4IGF1dG87XFxufVxcbi5uYXYge1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5uYXYtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXYtcHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXg6IDE7XFxufVxcbi5uZi1pY29uIHtcXG4gIGZvbnQtc2l6ZTogNDg7XFxufVxcblxcbi5zaHJpbmstbmF2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1zZXBhcmF0b3Ige1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwJSk7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4tYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ubmF2LWZpbHRlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdi1maWx0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZi1ldmVyeXRoaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBib3R0b206IDA7XFxufVxcblxcbiNkaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIDEuOHJlbSByZXBlYXQoMywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbn1cXG4udG9kby1jaGVjayB7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMztcXG59XFxuXFxuLnRvZG8tZHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbiNhZGQtdG9kbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI25ldy10b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULE9BQU87QUFDVDtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7QUFDN0Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUUsa0NBQWtDO0VBQ3BELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogb3JhbmdlIDVweCBhdXRvO1xcbn1cXG4ubmF2IHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4ubmF2LXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2LXByb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG4ubmYtaWNvbiB7XFxuICBmb250LXNpemU6IDQ4O1xcbn1cXG5cXG4uc2hyaW5rLW5hdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYtc2VwYXJhdG9yIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MCUpO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLm5hdi1maWx0ZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtZmlsdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmYtZXZlcnl0aGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4jZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMzBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyAxLjhyZW0gcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XFxuLnRvZG8tY2hlY2sge1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDM7XFxufVxcblxcbi50b2RvLWR1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4jYWRkLXRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNuZXctdG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGRvbUZ1bmN0aW9ucyA9IChuYW1lLCBkYXRlKSA9PiB7XG4gIGZ1bmN0aW9uIGJ1aWxkRWxlbWVudChlbGVtZW50VHlwZSwgaWQsIGNsYXNzTGlzdCwgaW5uZXJIVE1MKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChjbGFzc0xpc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xhc3NMaXN0ID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGlubmVySFRNTCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgZnVuY3Rpb24gbmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuYXZcIl0pO1xuICAgIC8vIHRvcCBzZWN0aW9uIGluY2x1ZGluZyBwcm9maWxlXG4gICAgY29uc3QgbmF2VG9wID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5hdi10b3BcIl0pO1xuICAgIC8vcHJvZmlsZSBzZWN0aW9uXG4gICAgY29uc3QgbmF2UHJvZmlsZSA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuYXYtcHJvZmlsZVwiXSk7XG4gICAgbmF2VG9wLmFwcGVuZChuYXZQcm9maWxlKTtcbiAgICAvL3Byb2ZpbGUgaWNvblxuICAgIGNvbnN0IHByb2ZpbGVJY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJwcm9maWxlLWljb25cIl0sXG4gICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgc3R5bGU9XCJmb250LXNpemU6IDQ4cHg7XCI+YWNjb3VudF9jaXJjbGU8L3NwYW4+J1xuICAgICk7XG4gICAgbmF2UHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxlSWNvbik7XG4gICAgLy9wcm9maWxlIG5hbWVcbiAgICBjb25zdCBwcm9maWxlTmFtZSA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wicHJvZmlsZS1uYW1lXCJdLFxuICAgICAgXCJQcm9maWxlIE5hbWVcIlxuICAgICk7XG4gICAgbmF2UHJvZmlsZS5hcHBlbmRDaGlsZChwcm9maWxlTmFtZSk7XG4gICAgLy9zaHJpbmsgbmF2IG1lbnUgaWNvblxuICAgIGNvbnN0IHNocmlua05hdiA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wic2hyaW5rLW5hdlwiXSxcbiAgICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDhweDtcIj5jaGV2cm9uX2xlZnQ8L3NwYW4+J1xuICAgICk7XG4gICAgbmF2VG9wLmFwcGVuZENoaWxkKHNocmlua05hdik7XG4gICAgbmF2LmFwcGVuZChuYXZUb3ApO1xuICAgIGNvbnN0IG5hdlNlcGFyYXRvcjEgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wibmF2LXNlcGFyYXRvclwiXSk7XG4gICAgbmF2LmFwcGVuZChuYXZTZXBhcmF0b3IxKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJzID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5hdi1maWx0ZXJzXCJdKTtcbiAgICBuYXYuYXBwZW5kKG5hdkZpbHRlcnMpO1xuICAgIGNvbnN0IG5hdkZpbHRlckV2ZXJ5dGhpbmcgPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgW1xuICAgICAgXCJuYXYtZmlsdGVyXCIsXG4gICAgICBcIm5mLWV2ZXJ5dGhpbmdcIixcbiAgICBdKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJFdmVyeXRoaW5nSWNvbiA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmYtaWNvblwiXSxcbiAgICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDhweDtcIj5hbGxfaW5ib3g8L3NwYW4+J1xuICAgICk7XG4gICAgbmF2RmlsdGVyRXZlcnl0aGluZy5hcHBlbmQobmF2RmlsdGVyRXZlcnl0aGluZ0ljb24pO1xuICAgIGNvbnN0IG5hdkZpbHRlckV2ZXJ5dGhpbmdMYWJlbCA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmYtbGFiZWxcIl0sXG4gICAgICBcIkV2ZXJ5dGhpbmdcIlxuICAgICk7XG4gICAgbmF2RmlsdGVyRXZlcnl0aGluZy5hcHBlbmQobmF2RmlsdGVyRXZlcnl0aGluZ0xhYmVsKTtcbiAgICBuYXZGaWx0ZXJzLmFwcGVuZChuYXZGaWx0ZXJFdmVyeXRoaW5nKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJUb2RheSA9IGJ1aWxkRWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBbXG4gICAgICBcIm5hdi1maWx0ZXJcIixcbiAgICAgIFwibmYtdG9kYXlcIixcbiAgICBdKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJUb2RheUljb24gPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm5mLWljb25cIl0sXG4gICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgc3R5bGU9XCJmb250LXNpemU6IDQ4cHg7XCI+dG9kYXk8L3NwYW4+J1xuICAgICk7XG4gICAgbmF2RmlsdGVyVG9kYXkuYXBwZW5kKG5hdkZpbHRlclRvZGF5SWNvbik7XG4gICAgY29uc3QgbmF2RmlsdGVyVG9kYXlMYWJlbCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuZi1sYWJlbFwiXSwgXCJUb2RheVwiKTtcbiAgICBuYXZGaWx0ZXJUb2RheS5hcHBlbmQobmF2RmlsdGVyVG9kYXlMYWJlbCk7XG4gICAgbmF2RmlsdGVycy5hcHBlbmQobmF2RmlsdGVyVG9kYXkpO1xuXG4gICAgY29uc3QgbmF2RmlsdGVyVXBjb21pbmcgPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgW1xuICAgICAgXCJuYXYtZmlsdGVyXCIsXG4gICAgICBcIm5mLXVwY29taW5nXCIsXG4gICAgXSk7XG4gICAgY29uc3QgbmF2RmlsdGVyVXBjb21pbmdJY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuZi1pY29uXCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmV2ZW50X3VwY29taW5nPC9zcGFuPidcbiAgICApO1xuICAgIG5hdkZpbHRlclVwY29taW5nLmFwcGVuZChuYXZGaWx0ZXJVcGNvbWluZ0ljb24pO1xuICAgIGNvbnN0IG5hdkZpbHRlclVwY29taW5nTGFiZWwgPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm5mLWxhYmVsXCJdLFxuICAgICAgXCJVcGNvbWluZ1wiXG4gICAgKTtcbiAgICBuYXZGaWx0ZXJVcGNvbWluZy5hcHBlbmQobmF2RmlsdGVyVXBjb21pbmdMYWJlbCk7XG4gICAgbmF2RmlsdGVycy5hcHBlbmQobmF2RmlsdGVyVXBjb21pbmcpO1xuXG4gICAgY29uc3QgbmF2RmlsdGVyQXJjaGl2ZSA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmF2LWZpbHRlclwiLCBcIm5mLWFyY2hpdmVcIl0sXG4gICAgICBcIlwiXG4gICAgKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJBcmNoaXZlSWNvbiA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmYtaWNvblwiXSxcbiAgICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDhweDtcIj5mb2xkZXJfb3Blbjwvc3Bhbj4nXG4gICAgKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJBcmNoaXZlTGFiZWwgPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm5mLWxhYmVsXCJdLFxuICAgICAgXCJBcmNoaXZlXCJcbiAgICApO1xuICAgIG5hdkZpbHRlckFyY2hpdmUuYXBwZW5kKG5hdkZpbHRlckFyY2hpdmVJY29uKTtcbiAgICBuYXZGaWx0ZXJBcmNoaXZlLmFwcGVuZChuYXZGaWx0ZXJBcmNoaXZlTGFiZWwpO1xuICAgIG5hdkZpbHRlcnMuYXBwZW5kKG5hdkZpbHRlckFyY2hpdmUpO1xuXG4gICAgY29uc3QgbmF2U2VwYXJhdG9yMiA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuYXYtc2VwYXJhdG9yXCJdLCBcIlwiKTtcbiAgICBuYXYuYXBwZW5kKG5hdlNlcGFyYXRvcjIpO1xuXG4gICAgLy9UT0RPIGxvYWQgcHJvamVjdHMgaGVyZVxuICAgIGNvbnN0IG5hdlByb2plY3RzID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuYXYtcHJvamVjdHNcIl0sXG4gICAgICBcIk5hdiBQcm9qZWN0c1wiXG4gICAgKTtcbiAgICBuYXYuYXBwZW5kKG5hdlByb2plY3RzKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcImZvb3RlclwiXSwgXCJGb290ZXJcIik7XG4gICAgbmF2LmFwcGVuZChmb290ZXIpO1xuICAgIHJldHVybiBuYXY7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEJhc2UoKSB7XG4gICAgLy8gY3JlYXRlIHRoZSBncmlkIGNvbnRpYW5lclxuICAgIGNvbnN0IGVsZW1lbnQgPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcImNvbnRhaW5lclwiXSxcbiAgICAgICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXCIgLz4nXG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgbmF2IG1lbnVcbiAgICBlbGVtZW50LmFwcGVuZChuYXYoKSk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIG1haW4gYXJlYVxuICAgIGNvbnN0IG1haW4gPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJkaXNwbGF5XCIsIFtcIm1haW4tYXJlYVwiXSk7XG4gICAgZWxlbWVudC5hcHBlbmQobWFpbik7XG4gICAgY29uc3QgdGl0bGUgPSBidWlsZEVsZW1lbnQoXCJoMVwiLCBcIlwiLCBbXSwgXCJFdmVyeXRoaW5nXCIpO1xuICAgIG1haW4uYXBwZW5kKHRpdGxlKTtcbiAgICBjb25zdCB0b2RvRGlzcGxheSA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcImRpc3BsYXktdG9kb3NcIiwgW1widG9kby1ob2xkZXJcIl0pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXkpO1xuICAgIGNvbnN0IGFkZFRvZG9JY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiYWRkLXRvZG9cIixcbiAgICAgIFtdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiAycmVtO1wiPmFkZF9ib3g8L3NwYW4+J1xuICAgICk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRUb2RvSWNvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAvL2NyZWF0ZSB0aGUgbW9kZWwgLSBoaWRkZW4gYnkgZGVmYXVsdFxuICAgIGNvbnN0IG1vZGFsID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwibXlNb2RhbFwiLCBbXCJtb2RhbFwiXSk7XG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wibW9kYWwtY29udGVudFwiXSk7XG5cbiAgICBjb25zdCBtb2RhbEZvcm0gPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm1vZGFsLWZvcm1cIl0sXG4gICAgICAnPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwicG9zdFwiIGlkPVwibmV3LXRvZG9cIj4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJuZXdUaXRsZVwiPlRpdGxlPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5ld1RpdGxlXCIgaWQ9XCJuZXctdGl0bGVcIiByZXF1aXJlZCAvPjwvbGFiZWw+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwibmV3RGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuZXctZGVzY3JpcHRpb25cIiBpZD1cIm5ldy1kZXNjcmlwdGlvblwiIHJlcXVpcmVkIC8+PC9sYWJlbD4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJuZXctZHVlXCI+RHVlOjxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJuZXctZHVlXCIgaWQ9XCJuZXctZHVlXCIgcmVxdWlyZWQgLz48L2xhYmVsPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cImhpZ2gtcHJpb3JpdHlcIj5IaWdoIFByaW9yaXR5PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXctcHJpb3JpdHlcIiBpZD1cImhpZ2hcIiBjbGFzcz1cIm5ldy1wcmlvcml0eVwiLz48L2xhYmVsPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cIm1lZGl1bS1wcmlvcml0eVwiPk1lZGl1bSBQcmlvcml0eTxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibmV3LXByaW9yaXR5XCIgaWQ9XCJtZWRpdW1cIiBjaGVja2VkPVwidHJ1ZVwiICBjbGFzcz1cIm5ldy1wcmlvcml0eVwiLz48L2xhYmVsPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cImxvdy1wcmlvcml0eVwiPkxvdyBQcmlvcml0eTxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibmV3LXByaW9yaXR5XCIgaWQ9XCJsb3dcIiAgY2xhc3M9XCJuZXctcHJpb3JpdHlcIi8+PC9sYWJlbD4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJzdWJtaXRcIj48aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCIgaWQ9XCJuZXctc3VibWl0XCIgLz48L2xhYmVsPicgK1xuICAgICAgICBcIjwvZm9ybT5cIlxuICAgICk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZChtb2RhbEZvcm0pO1xuICAgIGNvbnN0IG1vZGFsQ2xvc2UgPSBidWlsZEVsZW1lbnQoXCJzcGFuXCIsIFwiXCIsIFtcImNsb3NlXCJdLCBcIiZ0aW1lcztcIik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZChtb2RhbENsb3NlKTtcbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDb250ZW50KTtcbiAgICBtYWluLmFwcGVuZChtb2RhbCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3QodG9kb0xpc3QpIHtcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS10b2Rvc1wiKTtcbiAgICBkaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdG9kb0xpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vY3JlYXRlIHRoZSBjb250YWluZXIgZm9yIHRoZSBpdGVtXG4gICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcInRvZG8taXRlbVwiXSk7XG4gICAgICB0b2RvQ29udGFpbmVyLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICAgIGRpc3BsYXkuYXBwZW5kKHRvZG9Db250YWluZXIpO1xuICAgICAgLy9hZGQgdGhlIGNoZWNrYm94IGljb25cbiAgICAgIGNvbnN0IHRvZG9DaGVjayA9IGJ1aWxkRWxlbWVudChcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1widG9kby1jaGVja1wiXSxcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwic3R5bGU9XCJmb250LXNpemU6IDEuNXJlbTtcIj5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvc3Bhbj4nXG4gICAgICApO1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kb0NoZWNrKTtcbiAgICAgIC8vIGFkZCB0aGUgdGl0bGUgKi9cbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGJ1aWxkRWxlbWVudChcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1widG9kby10aXRsZVwiXSxcbiAgICAgICAgaXRlbS5nZXRUaXRsZSgpXG4gICAgICApO1xuXG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAvL2FkZCB0aGUgZHVlIGRhdGVcbiAgICAgIGNvbnN0IHRvZG9EdWUgPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgW1widG9kby1kdWVcIl0sIGl0ZW0uZ2V0RHVlKCkpO1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRHVlKTtcbiAgICAgIC8vIGFkZCB0aGUgcHJpb3JpdHlcbiAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGJ1aWxkRWxlbWVudChcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgW1widG9kby1wcmlvcml0eVwiXSxcbiAgICAgICAgaXRlbS5nZXRQcmlvcml0eSgpXG4gICAgICApO1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICAvLyBHZXQgdGhlIG1vZGFsXG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgIC8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hdixcbiAgICBidWlsZEJhc2UsXG4gICAgcmVuZGVyVG9kb0xpc3QsXG4gICAgb3Blbk1vZGFsLFxuICAgIGNsb3NlTW9kYWwsXG4gIH07XG59O1xuXG5leHBvcnQgeyBkb21GdW5jdGlvbnMgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB0b2RvRnVuY3Rpb25zIH0gZnJvbSBcIi4vdG9kb0Z1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgZG9tRnVuY3Rpb25zIH0gZnJvbSBcIi4vZG9tRnVuY3Rpb25zLmpzXCI7XG5cbmNvbnN0IGRvbUhhbmRsZXIgPSBkb21GdW5jdGlvbnMoKTtcblxuZnVuY3Rpb24gcmV0cmVpdmVTdG9yYWdlKCkge1xuICBsZXQgbG9hZGVkTGlzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFwiKSk7XG4gIC8vY29uc29sZS5sb2cobmV3b2JqZWN0c2xpc3RbM10udG9kb1RpdGxlKTtcbiAgaWYgKGxvYWRlZExpc3QgIT0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKFwiTGlzdCByZXRyZWl2ZWQgZnJvbSBzdG9yYWdlLiBMZW5ndGg6IFwiICsgbG9hZGVkTGlzdC5sZW5ndGgpO1xuICAgIHJldHVybiBsb2FkZWRMaXN0O1xuICB9XG59XG5jb25zdCBsaXN0SGFuZGxlciA9IHRvZG9GdW5jdGlvbnMocmV0cmVpdmVTdG9yYWdlKCkpO1xuZG9tSGFuZGxlci5idWlsZEJhc2UoKTtcbmRvbUhhbmRsZXIucmVuZGVyVG9kb0xpc3QobGlzdEhhbmRsZXIuZ2V0TGlzdCgpKTtcbnJlZnJlc2hMaXN0ZW5lcnMoKTtcbi8vVE9ETyBhZGQgYSBwdWIvc3ViIG1vZHVsZSB3aGljaCB3aWxsIGFsbG93IHRoZSBkb21GdW5jdGlvbnMgYW5kIHRvZG9mdW5jdGlvbnMgdG8gaW50ZXJhY3QgdGhyb3VnaCBhIG1lZGlhdG9yXG4vL1RPRE8gYWRkICBhIG1vZHVsZSBmb3IgcHJvamVjdHNcbi8vVE9ETyBFdmVyeXRoaW5nIGNsaWNrYWJsZSBzaG91bGQgYmUgYSBidXR0b25cbi8vVE9ETyBpbXBsZW1lbnQgbG9jYWxzdG9yYWdlIHRvIHNhdmUgYW5kIHJldHJlaXZlIHRoZSB0b2RvIGl0ZW1zXG4vL1RPRE8gcmVmYWN0b3IgdGhlIHRhc2tzIHNvIHRoYXQgdGhleSBhcmUgaW5jbHVkZWQgYXMgcGFydCBvZiBwcm9qZWN0c1xuLy9UT0RPIG1ha2UgdGhlIG5hdiBmaWx0ZXJzIGZpbHRlciB0aHJvdWdoIHRoZSBwcm9qZWN0cyB0byBvbmx5IHNob3cgdG9kbydzIHdpdGggdGhlIGNvcnJlY3QgcHJvcGVydGllcyBlLmcuIGRhdGVcbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgbGV0IHggPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RIYW5kbGVyLmdldExpc3QoKS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB4LnB1c2gobGlzdEhhbmRsZXIuZ2V0TGlzdCgpW2luZGV4XS5nZXRBbGxEZXRhaWxzKCkpO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFwiLCBKU09OLnN0cmluZ2lmeSh4KSk7XG4gIGNvbnNvbGUubG9nKFwic2F2ZWQgdG8gc3RvcmFnZVwiKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaExpc3RlbmVycygpIHtcbiAgbGV0IHRvZG9DaGVja3MgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG8tY2hlY2tcIildO1xuICB0b2RvQ2hlY2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgIGxpc3RIYW5kbGVyLnRvZ2dsZUFyY2hpdmVTdGF0dXMoZWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXgpXG4gICAgKTtcbiAgfSk7XG4gIGxldCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdG9kb1wiKTtcbiAgYWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGRvbUhhbmRsZXIub3Blbk1vZGFsKCkpO1xuICAvL1RPRE8gdGhpcyBpcyBtYXliZSBub3QgdGhlIHdheSB0byBzdWJtaXQgdGhlIGZvcm0gY29ycmVjdGx5LiBuZWVkIHRvIHJld29yayB0aGlzLlxuICBsZXQgbmV3U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctc3VibWl0XCIpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10aXRsZVwiKTtcbiAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctZGVzY3JpcHRpb25cIik7XG4gIGxldCBuZXdEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1kdWVcIik7XG4gIGZ1bmN0aW9uIGdldFByaW9yaXR5U2VsZWN0ZWQoKSB7XG4gICAgdmFyIGNoZWNrUmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W25hbWU9XCJuZXctcHJpb3JpdHlcIl06Y2hlY2tlZCdcbiAgICApO1xuICAgIGlmIChjaGVja1JhZGlvICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBjaGVja1JhZGlvLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJObyBvbmUgc2VsZWN0ZWRcIjtcbiAgICB9XG4gIH1cblxuICBuZXdTdWJtaXQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsaXN0SGFuZGxlci5uZXdUb2RvKFxuICAgICAgbmV3VGl0bGUudmFsdWUsXG4gICAgICBuZXdEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIG5ld0R1ZS52YWx1ZSxcbiAgICAgIGdldFByaW9yaXR5U2VsZWN0ZWQoKSxcbiAgICAgIFwiXCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgZG9tSGFuZGxlci5yZW5kZXJUb2RvTGlzdChsaXN0SGFuZGxlci5nZXRMaXN0KCkpO1xuICAgIGRvbUhhbmRsZXIuY2xvc2VNb2RhbCgpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIHJlZnJlc2hMaXN0ZW5lcnMoKTtcbiAgfTtcbn1cblxuLy9sb2NhbCBzdG9yYWdlIGZ1bmN0aW9ucyBmcm9tIG1kbiB3ZWIgZG9jcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViX1N0b3JhZ2VfQVBJL1VzaW5nX3RoZV9XZWJfU3RvcmFnZV9BUElcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuLy9jb25zb2xlLmxvZyhcIlNlc3Npb24gc3RvcmFnZSBhdmFpbGFibGU6IFwiICsgc3RvcmFnZUF2YWlsYWJsZShcInNlc3Npb25TdG9yYWdlXCIpKTtcbi8vY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIGF2YWlsYWJsZTogXCIgKyBzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKTtcblxuLy9zb21lIGV4YW1wbGUgdG9kb3NcbiIsIi8vbW9kdWxlIGZvciBtYW5hZ2luZyBsaXN0c1xuLy9mYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBwcm9qZWN0c1xuY29uc3QgdG9kbyA9IChcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgcHJvamVjdCxcbiAgYXJjaGl2ZVN0YXR1c1xuKSA9PiB7XG4gIGxldCB0b2RvVGl0bGUgPSB0aXRsZTtcbiAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgdG9kb0R1ZSA9IGR1ZURhdGU7XG4gIGxldCB0b2RvUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IHRvZG9Qcm9qZWN0ID0gcHJvamVjdDtcbiAgbGV0IHRvZG9BcmNoaXZlU3RhdHVzID0gYXJjaGl2ZVN0YXR1cztcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0b2RvVGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gdG9kb0Rlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREdWUgPSAoKSA9PiB0b2RvRHVlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHRvZG9Qcmlvcml0eTtcbiAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHRvZG9Qcm9qZWN0O1xuICBjb25zdCBnZXRBcmNoaXZlU3RhdHVzID0gKCkgPT4gdG9kb0FyY2hpdmVTdGF0dXM7XG4gIGNvbnN0IGdldEFsbERldGFpbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZG9UaXRsZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EdWUsXG4gICAgICB0b2RvUHJpb3JpdHksXG4gICAgICB0b2RvUHJvamVjdCxcbiAgICAgIHRvZG9BcmNoaXZlU3RhdHVzLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IHNldEFyY2hpdmVTdGF0dXMgPSAobmV3U3RhdHVzKSA9PiAodG9kb0FyY2hpdmVTdGF0dXMgPSBuZXdTdGF0dXMpO1xuICBmdW5jdGlvbiBuZXdUb2RvKCkge31cbiAgcmV0dXJuIHtcbiAgICBuZXdUb2RvLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXRQcm9qZWN0LFxuICAgIGdldEFyY2hpdmVTdGF0dXMsXG4gICAgc2V0QXJjaGl2ZVN0YXR1cyxcbiAgICBnZXRBbGxEZXRhaWxzLFxuICB9O1xufTtcbmNvbnN0IHRvZG9GdW5jdGlvbnMgPSAobG9hZGVkTGlzdCkgPT4ge1xuICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgY29uc29sZS5sb2cobG9hZGVkTGlzdCk7XG4gIGNvbnN0IGxvYWREZWZhdWx0cyA9ICgpID0+IHtcbiAgICBsZXQgdGVzdHkgPSB0b2RvKFxuICAgICAgXCJUaGlzIGlzIGEgdGVzdCB0aXRsZVwiLFxuICAgICAgXCJUaGlzIGlzIGEgdG9kbyBkZXNjcmlwdGlvblwiLFxuICAgICAgXCIwNy8wNC8yMDIzXCIsXG4gICAgICBcIkhpZ2ggUHJpb3JpdHlcIixcbiAgICAgIFwiXCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgbGV0IHRlc3R5MiA9IHRvZG8oXG4gICAgICBcIkhlcmUgaXMgYW5vdGhlciB0b2RvIGl0ZW1cIixcbiAgICAgIFwiVGhpcyBpcyBhIHRvZG8gZGVzY3JpcHRpb25cIixcbiAgICAgIFwiMTIvMDIvMjAyMVwiLFxuICAgICAgXCJMb3cgUHJpb3JpdHlcIixcbiAgICAgIFwiXCIsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICB0b2RvTGlzdC5wdXNoKHRlc3R5LCB0ZXN0eTIpO1xuICAgIGNvbnNvbGUubG9nKFwicG9wdWxhdGVkIHdpdGggZGVmYXVsdHNcIik7XG4gIH07XG4gIGlmIChsb2FkZWRMaXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIGxpc3QgZm91bmQgc28gbG9hZGluZyBkZWZhdWx0c1wiKTtcbiAgICBsb2FkRGVmYXVsdHMoKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9hZGVkTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBpdGVtID0gdG9kbyhcbiAgICAgICAgbG9hZGVkTGlzdFtpbmRleF0udG9kb1RpdGxlLFxuICAgICAgICBsb2FkZWRMaXN0W2luZGV4XS50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9EdWUsXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgbG9hZGVkTGlzdFtpbmRleF0udG9kb1Byb2plY3QsXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9BcmNoaXZlU3RhdHVzXG4gICAgICApO1xuICAgICAgdG9kb0xpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJjdXJyZW50IGxpc3RcIiArIHRvZG9MaXN0KTtcbiAgICBsZXQgeCA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2RvTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHgucHVzaCh0b2RvTGlzdFtpbmRleF0uZ2V0QWxsRGV0YWlscygpKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgfVxuXG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0O1xuICB9O1xuICBjb25zdCB0b2dnbGVBcmNoaXZlU3RhdHVzID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHRvZG9MaXN0W2luZGV4XS5nZXRBcmNoaXZlU3RhdHVzKCkpIHtcbiAgICAgIHRvZG9MaXN0W2luZGV4XS5zZXRBcmNoaXZlU3RhdHVzKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXJjaGl2ZSBzdGF0dXMgc2V0IHRvIGZhbHNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTGlzdFtpbmRleF0uc2V0QXJjaGl2ZVN0YXR1cyh0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXJjaGl2ZSBzdGF0dXMgc2V0IHRvIHRydWVcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBuZXdUb2RvID0gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdCxcbiAgICBhcmNoaXZlU3RhdHVzXG4gICkgPT4ge1xuICAgIGxldCBuZXd0aXRsZSA9IHRvZG8oXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgcHJvamVjdCxcbiAgICAgIGFyY2hpdmVTdGF0dXNcbiAgICApO1xuICAgIHRvZG9MaXN0LnB1c2gobmV3dGl0bGUpO1xuICB9O1xuXG4gIHJldHVybiB7IGdldExpc3QsIHRvZ2dsZUFyY2hpdmVTdGF0dXMsIG5ld1RvZG8gfTtcbn07XG5leHBvcnQgeyB0b2RvLCB0b2RvRnVuY3Rpb25zIH07XG5cbi8qIGNsYXNzIE1lbnVJdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZU5hbWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG59XG5sZXQgYnVycml0byA9IG5ldyBNZW51SXRlbShcbiAgXCJWZWdhbiBCdXJyaXRvc1wiLFxuICBcIkZlYXR1cmluZyBjaWxhbnRyby1saW1lIHJpY2UsIGNoaXBvdGxlLXNwaWNlZCBibGFjayBiZWFucywgc2F1dMOpZWQgcGVwcGVycyBhbmQgb25pb25zLCBhbmQgYSB6ZXN0eSBhdm9jYWRvIGNyZWFtIHNhdWNlXCIsXG4gIGJ1cnJpdG9JbWFnZVxuKTtcbiAqL1xuLyogUHJvamVjdHMgY29udGFpbiBtdWx0aXBsZSB0b2RvIGxpc3RzIHdoaWNoIGNvbnRhaW4gbXVsdGlwbGUgdG9kbyBpdGVtcyAqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9