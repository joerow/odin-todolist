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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  outline: orange 5px auto;\n}\n.nav {\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 200px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #000000;\n  overflow: auto;\n}\n.nav-top {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 100%;\n}\n.nav-profile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.nf-icon {\n  font-size: 48;\n}\n\n.shrink-nav {\n  cursor: pointer;\n}\n.nav-separator {\n  border-top: 1px solid black;\n  width: calc(100% - 40%);\n}\n.container {\n  display: flex;\n  height: 100%;\n}\n\n.main-area {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  padding: 0px 30px 0px 30px;\n  gap: 5px;\n}\n\n.todo-holder {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n\n.nav-filters {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.nav-filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.nf-everything {\n  border-radius: 5px;\n}\n\n.footer {\n  bottom: 0;\n}\n\n.todo-item {\n  display: grid;\n  grid-template: auto auto / 1.8rem repeat(3, 1fr);\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border: 1px solid #000000;\n}\n.todo-check {\n  grid-row: 1 / 3;\n  align-items: center;\n  align-self: center;\n  height: 24px;\n  cursor: pointer;\n}\n\n.todo-title {\n  background-color: aquamarine;\n  grid-row: 1;\n  grid-column: 2 / span 3;\n}\n\n.todo-due {\n  background-color: aqua;\n  grid-column: 2;\n}\n\n.todo-priority {\n  background-color: bisque;\n  grid-column: 4;\n  display: flex;\n  align-self: center;\n  justify-self: right;\n  font-size: small;\n}\n\n#add-todo {\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  display: grid;\n  grid-template: 1fr / 1fr 30px;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 250px; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-form {\n  display: flex;\n  flex-direction: column;\n}\n#new-todo {\n  display: grid;\n  gap: 5px;\n}\n\n.activeView {\n  background-color: rgb(202, 202, 202);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;;EAEE,wBAAwB;AAC1B;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,cAAc;AAChB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;AACT;AACA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;AACA;EACE,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,yBAAyB;EACzB,uBAAuB;EACvB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,UAAU;AACZ;;AAEA,2BAA2B;AAC3B;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,YAAY,EAAE,oDAAoD;AACpE;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  all: unset;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  outline: orange 5px auto;\n}\n.nav {\n  padding: 10px 10px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 200px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #000000;\n  overflow: auto;\n}\n.nav-top {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 100%;\n}\n.nav-profile {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.nf-icon {\n  font-size: 48;\n}\n\n.shrink-nav {\n  cursor: pointer;\n}\n.nav-separator {\n  border-top: 1px solid black;\n  width: calc(100% - 40%);\n}\n.container {\n  display: flex;\n  height: 100%;\n}\n\n.main-area {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  padding: 0px 30px 0px 30px;\n  gap: 5px;\n}\n\n.todo-holder {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 5px;\n}\n\n.nav-filters {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.nav-filter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.nf-everything {\n  border-radius: 5px;\n}\n\n.footer {\n  bottom: 0;\n}\n\n.todo-item {\n  display: grid;\n  grid-template: auto auto / 1.8rem repeat(3, 1fr);\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border: 1px solid #000000;\n}\n.todo-check {\n  grid-row: 1 / 3;\n  align-items: center;\n  align-self: center;\n  height: 24px;\n  cursor: pointer;\n}\n\n.todo-title {\n  background-color: aquamarine;\n  grid-row: 1;\n  grid-column: 2 / span 3;\n}\n\n.todo-due {\n  background-color: aqua;\n  grid-column: 2;\n}\n\n.todo-priority {\n  background-color: bisque;\n  grid-column: 4;\n  display: flex;\n  align-self: center;\n  justify-self: right;\n  font-size: small;\n}\n\n#add-todo {\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  display: grid;\n  grid-template: 1fr / 1fr 30px;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 250px; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-form {\n  display: flex;\n  flex-direction: column;\n}\n#new-todo {\n  display: grid;\n  gap: 5px;\n}\n\n.activeView {\n  background-color: rgb(202, 202, 202);\n}\n"],"sourceRoot":""}]);
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
  let currentView = document.getElementsByClassName("activeView")[0];
  console.log("test");
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
    const navFilterEverything = buildElement("button", "everythingView", [
      "nav-filter",
      "nf-everything",
      "activeView",
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
      "everything",
      ["nf-label"],
      "Everything"
    );
    navFilterEverything.append(navFilterEverythingLabel);
    navFilters.append(navFilterEverything);
    const navFilterToday = buildElement("button", "todayView", [
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

    const navFilterUpcoming = buildElement("button", "upcomingView", [
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
      "archiveView",
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
    const title = buildElement("h1", "page-title", [], "Everything");
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
      if (item.getArchiveStatus() === true && currentView != "everythingView") {
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
  //TODO fix loading of whole list on checking a todo box
  function changeView(newView) {
    currentView = document.getElementsByClassName("activeView")[0];
    currentView.classList.remove("activeView");
    newView.classList.add("activeView");
  }
  return {
    nav,
    buildBase,
    renderTodoList,
    openModal,
    closeModal,
    changeView,
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





const storageHandler = (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_3__.storageFunctions)();
const listHandler = (0,_todoFunctions_js__WEBPACK_IMPORTED_MODULE_1__.todoFunctions)(storageHandler.retreiveStorage());
const domHandler = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_2__.domFunctions)();
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
    element.addEventListener("click", function funct() {
      listHandler.toggleArchiveStatus(element.parentElement.dataset.index),
        domHandler.renderTodoList(listHandler.getList());
      storageHandler.populateStorage(listHandler.getList());

      refreshListeners();
    });
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

  let archiveView = document.querySelector("#archiveView");
  archiveView.onclick = function () {
    let pageTitle = document.getElementById("page-title");
    pageTitle.textContent = "Archive";
    domHandler.changeView(archiveView);
    domHandler.renderTodoList(listHandler.getList("archived"));
    refreshListeners();
  };
  let everythingView = document.querySelector("#everythingView");
  everythingView.onclick = function () {
    let pageTitle = document.getElementById("page-title");
    pageTitle.textContent = "Everything";
    domHandler.changeView(everythingView);
    domHandler.renderTodoList(
      listHandler.getList(listHandler.getList("unarchived"))
    );
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

  const filterArchived = (item) => {
    if (item.getArchiveStatus() === true) {
      return true;
    } else {
      return false;
    }
  };
  const filterUnArchived = (item) => {
    if (item.getArchiveStatus() === false) {
      return true;
    } else {
      return false;
    }
  };

  const getList = (filter) => {
    if (filter === "archived") {
      console.log("trying to filter list - archived");
      return todoList.filter(filterArchived);
    } else if (filter === "unarchived") {
      console.log("trying to filter list - unarchived");
      return todoList.filter(filterArchived);
    } else {
      console.log("list didn't filter here");
      return todoList;
    }
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

  return {
    getList,
    toggleArchiveStatus,
    newTodo,
    filterArchived,
    filterUnArchived,
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbFNIO0FBQzhCO0FBQ0Y7QUFDSzs7QUFFdEQsdUJBQXVCLG1FQUFnQjtBQUN2QyxvQkFBb0IsZ0VBQWE7QUFDakMsbUJBQW1CLDhEQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUI1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2RvbUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3RvcmFnZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3RvZG9GdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogb3JhbmdlIDVweCBhdXRvO1xcbn1cXG4ubmF2IHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4ubmF2LXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2LXByb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG4ubmYtaWNvbiB7XFxuICBmb250LXNpemU6IDQ4O1xcbn1cXG5cXG4uc2hyaW5rLW5hdiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYtc2VwYXJhdG9yIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MCUpO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDBweCAzMHB4IDBweCAzMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5uYXYtZmlsdGVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWZpbHRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5mLWV2ZXJ5dGhpbmcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gMS44cmVtIHJlcGVhdCgzLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxufVxcbi50b2RvLWNoZWNrIHtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAzO1xcbn1cXG5cXG4udG9kby1kdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICBncmlkLWNvbHVtbjogNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuI2FkZC10b2RvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiAyNTBweDsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNuZXctdG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hY3RpdmVWaWV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULE9BQU87QUFDVDtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsOEJBQThCLEVBQUUsbUJBQW1CO0VBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM3RDs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZLEVBQUUsb0RBQW9EO0FBQ3BFOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBvcmFuZ2UgNXB4IGF1dG87XFxufVxcbi5uYXYge1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5uYXYtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXYtcHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXg6IDE7XFxufVxcbi5uZi1pY29uIHtcXG4gIGZvbnQtc2l6ZTogNDg7XFxufVxcblxcbi5zaHJpbmstbmF2IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1zZXBhcmF0b3Ige1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwJSk7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4tYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDMwcHggMHB4IDMwcHg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8taG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLm5hdi1maWx0ZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtZmlsdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmYtZXZlcnl0aGluZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gLyAxLjhyZW0gcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG59XFxuLnRvZG8tY2hlY2sge1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDM7XFxufVxcblxcbi50b2RvLWR1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4jYWRkLXRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDI1MHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI25ldy10b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFjdGl2ZVZpZXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjAyLCAyMDIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkb21GdW5jdGlvbnMgPSAobmFtZSwgZGF0ZSkgPT4ge1xuICBsZXQgY3VycmVudFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlVmlld1wiKVswXTtcbiAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICBmdW5jdGlvbiBidWlsZEVsZW1lbnQoZWxlbWVudFR5cGUsIGlkLCBjbGFzc0xpc3QsIGlubmVySFRNTCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWQgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoY2xhc3NMaXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsYXNzTGlzdCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChpbm5lckhUTUwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIGZ1bmN0aW9uIG5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wibmF2XCJdKTtcbiAgICAvLyB0b3Agc2VjdGlvbiBpbmNsdWRpbmcgcHJvZmlsZVxuICAgIGNvbnN0IG5hdlRvcCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuYXYtdG9wXCJdKTtcbiAgICAvL3Byb2ZpbGUgc2VjdGlvblxuICAgIGNvbnN0IG5hdlByb2ZpbGUgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgW1wibmF2LXByb2ZpbGVcIl0pO1xuICAgIG5hdlRvcC5hcHBlbmQobmF2UHJvZmlsZSk7XG4gICAgLy9wcm9maWxlIGljb25cbiAgICBjb25zdCBwcm9maWxlSWNvbiA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wicHJvZmlsZS1pY29uXCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmFjY291bnRfY2lyY2xlPC9zcGFuPidcbiAgICApO1xuICAgIG5hdlByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZUljb24pO1xuICAgIC8vcHJvZmlsZSBuYW1lXG4gICAgY29uc3QgcHJvZmlsZU5hbWUgPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcInByb2ZpbGUtbmFtZVwiXSxcbiAgICAgIFwiUHJvZmlsZSBOYW1lXCJcbiAgICApO1xuICAgIG5hdlByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZU5hbWUpO1xuICAgIC8vc2hyaW5rIG5hdiBtZW51IGljb25cbiAgICBjb25zdCBzaHJpbmtOYXYgPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcInNocmluay1uYXZcIl0sXG4gICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgc3R5bGU9XCJmb250LXNpemU6IDQ4cHg7XCI+Y2hldnJvbl9sZWZ0PC9zcGFuPidcbiAgICApO1xuICAgIG5hdlRvcC5hcHBlbmRDaGlsZChzaHJpbmtOYXYpO1xuICAgIG5hdi5hcHBlbmQobmF2VG9wKTtcbiAgICBjb25zdCBuYXZTZXBhcmF0b3IxID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5hdi1zZXBhcmF0b3JcIl0pO1xuICAgIG5hdi5hcHBlbmQobmF2U2VwYXJhdG9yMSk7XG4gICAgY29uc3QgbmF2RmlsdGVycyA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuYXYtZmlsdGVyc1wiXSk7XG4gICAgbmF2LmFwcGVuZChuYXZGaWx0ZXJzKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJFdmVyeXRoaW5nID0gYnVpbGRFbGVtZW50KFwiYnV0dG9uXCIsIFwiZXZlcnl0aGluZ1ZpZXdcIiwgW1xuICAgICAgXCJuYXYtZmlsdGVyXCIsXG4gICAgICBcIm5mLWV2ZXJ5dGhpbmdcIixcbiAgICAgIFwiYWN0aXZlVmlld1wiLFxuICAgIF0pO1xuICAgIGNvbnN0IG5hdkZpbHRlckV2ZXJ5dGhpbmdJY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuZi1pY29uXCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmFsbF9pbmJveDwvc3Bhbj4nXG4gICAgKTtcbiAgICBuYXZGaWx0ZXJFdmVyeXRoaW5nLmFwcGVuZChuYXZGaWx0ZXJFdmVyeXRoaW5nSWNvbik7XG4gICAgY29uc3QgbmF2RmlsdGVyRXZlcnl0aGluZ0xhYmVsID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiZXZlcnl0aGluZ1wiLFxuICAgICAgW1wibmYtbGFiZWxcIl0sXG4gICAgICBcIkV2ZXJ5dGhpbmdcIlxuICAgICk7XG4gICAgbmF2RmlsdGVyRXZlcnl0aGluZy5hcHBlbmQobmF2RmlsdGVyRXZlcnl0aGluZ0xhYmVsKTtcbiAgICBuYXZGaWx0ZXJzLmFwcGVuZChuYXZGaWx0ZXJFdmVyeXRoaW5nKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJUb2RheSA9IGJ1aWxkRWxlbWVudChcImJ1dHRvblwiLCBcInRvZGF5Vmlld1wiLCBbXG4gICAgICBcIm5hdi1maWx0ZXJcIixcbiAgICAgIFwibmYtdG9kYXlcIixcbiAgICBdKTtcbiAgICBjb25zdCBuYXZGaWx0ZXJUb2RheUljb24gPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm5mLWljb25cIl0sXG4gICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgc3R5bGU9XCJmb250LXNpemU6IDQ4cHg7XCI+dG9kYXk8L3NwYW4+J1xuICAgICk7XG4gICAgbmF2RmlsdGVyVG9kYXkuYXBwZW5kKG5hdkZpbHRlclRvZGF5SWNvbik7XG4gICAgY29uc3QgbmF2RmlsdGVyVG9kYXlMYWJlbCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJuZi1sYWJlbFwiXSwgXCJUb2RheVwiKTtcbiAgICBuYXZGaWx0ZXJUb2RheS5hcHBlbmQobmF2RmlsdGVyVG9kYXlMYWJlbCk7XG4gICAgbmF2RmlsdGVycy5hcHBlbmQobmF2RmlsdGVyVG9kYXkpO1xuXG4gICAgY29uc3QgbmF2RmlsdGVyVXBjb21pbmcgPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJ1cGNvbWluZ1ZpZXdcIiwgW1xuICAgICAgXCJuYXYtZmlsdGVyXCIsXG4gICAgICBcIm5mLXVwY29taW5nXCIsXG4gICAgXSk7XG4gICAgY29uc3QgbmF2RmlsdGVyVXBjb21pbmdJY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuZi1pY29uXCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmV2ZW50X3VwY29taW5nPC9zcGFuPidcbiAgICApO1xuICAgIG5hdkZpbHRlclVwY29taW5nLmFwcGVuZChuYXZGaWx0ZXJVcGNvbWluZ0ljb24pO1xuICAgIGNvbnN0IG5hdkZpbHRlclVwY29taW5nTGFiZWwgPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJcIixcbiAgICAgIFtcIm5mLWxhYmVsXCJdLFxuICAgICAgXCJVcGNvbWluZ1wiXG4gICAgKTtcbiAgICBuYXZGaWx0ZXJVcGNvbWluZy5hcHBlbmQobmF2RmlsdGVyVXBjb21pbmdMYWJlbCk7XG4gICAgbmF2RmlsdGVycy5hcHBlbmQobmF2RmlsdGVyVXBjb21pbmcpO1xuXG4gICAgY29uc3QgbmF2RmlsdGVyQXJjaGl2ZSA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcImFyY2hpdmVWaWV3XCIsXG4gICAgICBbXCJuYXYtZmlsdGVyXCIsIFwibmYtYXJjaGl2ZVwiXSxcbiAgICAgIFwiXCJcbiAgICApO1xuICAgIGNvbnN0IG5hdkZpbHRlckFyY2hpdmVJY29uID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJuZi1pY29uXCJdLFxuICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIHN0eWxlPVwiZm9udC1zaXplOiA0OHB4O1wiPmZvbGRlcl9vcGVuPC9zcGFuPidcbiAgICApO1xuICAgIGNvbnN0IG5hdkZpbHRlckFyY2hpdmVMYWJlbCA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmYtbGFiZWxcIl0sXG4gICAgICBcIkFyY2hpdmVcIlxuICAgICk7XG4gICAgbmF2RmlsdGVyQXJjaGl2ZS5hcHBlbmQobmF2RmlsdGVyQXJjaGl2ZUljb24pO1xuICAgIG5hdkZpbHRlckFyY2hpdmUuYXBwZW5kKG5hdkZpbHRlckFyY2hpdmVMYWJlbCk7XG4gICAgbmF2RmlsdGVycy5hcHBlbmQobmF2RmlsdGVyQXJjaGl2ZSk7XG5cbiAgICBjb25zdCBuYXZTZXBhcmF0b3IyID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcIm5hdi1zZXBhcmF0b3JcIl0sIFwiXCIpO1xuICAgIG5hdi5hcHBlbmQobmF2U2VwYXJhdG9yMik7XG5cbiAgICBjb25zdCBuYXZQcm9qZWN0cyA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibmF2LXByb2plY3RzXCJdLFxuICAgICAgXCJOYXYgUHJvamVjdHNcIlxuICAgICk7XG4gICAgbmF2LmFwcGVuZChuYXZQcm9qZWN0cyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGZvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJmb290ZXJcIl0sIFwiRm9vdGVyXCIpO1xuICAgIG5hdi5hcHBlbmQoZm9vdGVyKTtcbiAgICByZXR1cm4gbmF2O1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRCYXNlKCkge1xuICAgIC8vIGNyZWF0ZSB0aGUgZ3JpZCBjb250aWFuZXJcbiAgICBjb25zdCBlbGVtZW50ID0gYnVpbGRFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiXCIsXG4gICAgICBbXCJjb250YWluZXJcIl0sXG4gICAgICAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiIC8+J1xuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIG5hdiBtZW51XG4gICAgZWxlbWVudC5hcHBlbmQobmF2KCkpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBtYWluIGFyZWFcbiAgICBjb25zdCBtYWluID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiZGlzcGxheVwiLCBbXCJtYWluLWFyZWFcIl0pO1xuICAgIGVsZW1lbnQuYXBwZW5kKG1haW4pO1xuICAgIGNvbnN0IHRpdGxlID0gYnVpbGRFbGVtZW50KFwiaDFcIiwgXCJwYWdlLXRpdGxlXCIsIFtdLCBcIkV2ZXJ5dGhpbmdcIik7XG4gICAgbWFpbi5hcHBlbmQodGl0bGUpO1xuICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gYnVpbGRFbGVtZW50KFwiZGl2XCIsIFwiZGlzcGxheS10b2Rvc1wiLCBbXCJ0b2RvLWhvbGRlclwiXSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheSk7XG4gICAgY29uc3QgYWRkVG9kb0ljb24gPSBidWlsZEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJhZGQtdG9kb1wiLFxuICAgICAgW10sXG4gICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgc3R5bGU9XCJmb250LXNpemU6IDJyZW07XCI+YWRkX2JveDwvc3Bhbj4nXG4gICAgKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRvZG9JY29uKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtZW50KTtcblxuICAgIC8vY3JlYXRlIHRoZSBtb2RhbCAtIGhpZGRlbiBieSBkZWZhdWx0XG4gICAgY29uc3QgbW9kYWwgPSBidWlsZEVsZW1lbnQoXCJkaXZcIiwgXCJteU1vZGFsXCIsIFtcIm1vZGFsXCJdKTtcblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGJ1aWxkRWxlbWVudChcImRpdlwiLCBcIlwiLCBbXCJtb2RhbC1jb250ZW50XCJdKTtcblxuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGJ1aWxkRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wibW9kYWwtZm9ybVwiXSxcbiAgICAgICc8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJuZXctdG9kb1wiPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cIm5ld1RpdGxlXCI+VGl0bGU8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmV3VGl0bGVcIiBpZD1cIm5ldy10aXRsZVwiIHJlcXVpcmVkIC8+PC9sYWJlbD4nICtcbiAgICAgICAgJzxsYWJlbCBmb3I9XCJuZXdEZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5ldy1kZXNjcmlwdGlvblwiIGlkPVwibmV3LWRlc2NyaXB0aW9uXCIgcmVxdWlyZWQgLz48L2xhYmVsPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cIm5ldy1kdWVcIj5EdWU6PGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cIm5ldy1kdWVcIiBpZD1cIm5ldy1kdWVcIiByZXF1aXJlZCAvPjwvbGFiZWw+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwiaGlnaC1wcmlvcml0eVwiPkhpZ2ggUHJpb3JpdHk8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldy1wcmlvcml0eVwiIGlkPVwiaGlnaFwiIGNsYXNzPVwibmV3LXByaW9yaXR5XCIvPjwvbGFiZWw+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwibWVkaXVtLXByaW9yaXR5XCI+TWVkaXVtIFByaW9yaXR5PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXctcHJpb3JpdHlcIiBpZD1cIm1lZGl1bVwiIGNoZWNrZWQ9XCJ0cnVlXCIgIGNsYXNzPVwibmV3LXByaW9yaXR5XCIvPjwvbGFiZWw+JyArXG4gICAgICAgICc8bGFiZWwgZm9yPVwibG93LXByaW9yaXR5XCI+TG93IFByaW9yaXR5PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXctcHJpb3JpdHlcIiBpZD1cImxvd1wiICBjbGFzcz1cIm5ldy1wcmlvcml0eVwiLz48L2xhYmVsPicgK1xuICAgICAgICAnPGxhYmVsIGZvcj1cInN1Ym1pdFwiPjxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIiBpZD1cIm5ldy1zdWJtaXRcIiAvPjwvbGFiZWw+JyArXG4gICAgICAgIFwiPC9mb3JtPlwiXG4gICAgKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsRm9ybSk7XG4gICAgY29uc3QgbW9kYWxDbG9zZSA9IGJ1aWxkRWxlbWVudChcInNwYW5cIiwgXCJcIiwgW1wiY2xvc2VcIl0sIFwiJnRpbWVzO1wiKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kKG1vZGFsQ2xvc2UpO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpO1xuICAgIG1haW4uYXBwZW5kKG1vZGFsKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUb2RvTGlzdCh0b2RvTGlzdCkge1xuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LXRvZG9zXCIpO1xuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgLy9jcmVhdGUgdGhlIGNvbnRhaW5lciBmb3IgdGhlIGl0ZW1cbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBidWlsZEVsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgW1widG9kby1pdGVtXCJdKTtcbiAgICAgIHRvZG9Db250YWluZXIuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgICAgZGlzcGxheS5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG4gICAgICAvL2FkZCB0aGUgY2hlY2tib3ggaWNvblxuICAgICAgbGV0IHRvZG9DaGVjayA9IG51bGw7XG4gICAgICBpZiAoaXRlbS5nZXRBcmNoaXZlU3RhdHVzKCkgPT09IHRydWUgJiYgY3VycmVudFZpZXcgIT0gXCJldmVyeXRoaW5nVmlld1wiKSB7XG4gICAgICAgIHRvZG9DaGVjayA9IGJ1aWxkRWxlbWVudChcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgW1widG9kby1jaGVja1wiXSxcbiAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCJzdHlsZT1cImZvbnQtc2l6ZTogMS41cmVtO1wiPmNoZWNrX2JveDwvc3Bhbj4nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvQ2hlY2sgPSBidWlsZEVsZW1lbnQoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICBcIlwiLFxuICAgICAgICAgIFtcInRvZG8tY2hlY2tcIl0sXG4gICAgICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwic3R5bGU9XCJmb250LXNpemU6IDEuNXJlbTtcIj5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvc3Bhbj4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvQ2hlY2spO1xuICAgICAgLy8gYWRkIHRoZSB0aXRsZSAqL1xuICAgICAgY29uc3QgdG9kb1RpdGxlID0gYnVpbGRFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbXCJ0b2RvLXRpdGxlXCJdLFxuICAgICAgICBpdGVtLmdldFRpdGxlKClcbiAgICAgICk7XG5cbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgIC8vYWRkIHRoZSBkdWUgZGF0ZVxuICAgICAgY29uc3QgdG9kb0R1ZSA9IGJ1aWxkRWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBbXCJ0b2RvLWR1ZVwiXSwgaXRlbS5nZXREdWUoKSk7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EdWUpO1xuICAgICAgLy8gYWRkIHRoZSBwcmlvcml0eVxuICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gYnVpbGRFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBbXCJ0b2RvLXByaW9yaXR5XCJdLFxuICAgICAgICBpdGVtLmdldFByaW9yaXR5KClcbiAgICAgICk7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIC8vIEdldCB0aGUgbW9kYWxcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIC8vVE9ETyBmaXggbG9hZGluZyBvZiB3aG9sZSBsaXN0IG9uIGNoZWNraW5nIGEgdG9kbyBib3hcbiAgZnVuY3Rpb24gY2hhbmdlVmlldyhuZXdWaWV3KSB7XG4gICAgY3VycmVudFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlVmlld1wiKVswXTtcbiAgICBjdXJyZW50Vmlldy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlVmlld1wiKTtcbiAgICBuZXdWaWV3LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVWaWV3XCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmF2LFxuICAgIGJ1aWxkQmFzZSxcbiAgICByZW5kZXJUb2RvTGlzdCxcbiAgICBvcGVuTW9kYWwsXG4gICAgY2xvc2VNb2RhbCxcbiAgICBjaGFuZ2VWaWV3LFxuICB9O1xufTtcblxuZXhwb3J0IHsgZG9tRnVuY3Rpb25zIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgdG9kb0Z1bmN0aW9ucyB9IGZyb20gXCIuL3RvZG9GdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7IGRvbUZ1bmN0aW9ucyB9IGZyb20gXCIuL2RvbUZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUZ1bmN0aW9ucyB9IGZyb20gXCIuL3N0b3JhZ2VGdW5jdGlvbnNcIjtcblxuY29uc3Qgc3RvcmFnZUhhbmRsZXIgPSBzdG9yYWdlRnVuY3Rpb25zKCk7XG5jb25zdCBsaXN0SGFuZGxlciA9IHRvZG9GdW5jdGlvbnMoc3RvcmFnZUhhbmRsZXIucmV0cmVpdmVTdG9yYWdlKCkpO1xuY29uc3QgZG9tSGFuZGxlciA9IGRvbUZ1bmN0aW9ucygpO1xuLy9zdG9yYWdlSGFuZGxlci5wb3B1bGF0ZVN0b3JhZ2UoKTtcbmRvbUhhbmRsZXIuYnVpbGRCYXNlKCk7XG5kb21IYW5kbGVyLnJlbmRlclRvZG9MaXN0KGxpc3RIYW5kbGVyLmdldExpc3QoKSk7XG5yZWZyZXNoTGlzdGVuZXJzKCk7XG4vL1RPRE8gYWRkIGEgcHViL3N1YiBtb2R1bGUgd2hpY2ggd2lsbCBhbGxvdyB0aGUgZG9tRnVuY3Rpb25zIGFuZCB0b2RvZnVuY3Rpb25zIHRvIGludGVyYWN0IHRocm91Z2ggYSBtZWRpYXRvclxuLy9UT0RPIGFkZCAgYSBtb2R1bGUgZm9yIHByb2plY3RzXG4vL1RPRE8gaW1wbGVtZW50IGxvY2Fsc3RvcmFnZSB0byBzYXZlIGFuZCByZXRyZWl2ZSB0aGUgdG9kbyBpdGVtc1xuLy9UT0RPIHJlZmFjdG9yIHRoZSB0YXNrcyBzbyB0aGF0IHRoZXkgYXJlIGluY2x1ZGVkIGFzIHBhcnQgb2YgcHJvamVjdHNcbi8vVE9ETyBtYWtlIHRoZSBuYXYgZmlsdGVycyBmaWx0ZXIgdGhyb3VnaCB0aGUgcHJvamVjdHMgdG8gb25seSBzaG93IHRvZG8ncyB3aXRoIHRoZSBjb3JyZWN0IHByb3BlcnRpZXMgZS5nLiBkYXRlXG5cbmZ1bmN0aW9uIHJlZnJlc2hMaXN0ZW5lcnMoKSB7XG4gIGxldCB0b2RvQ2hlY2tzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvLWNoZWNrXCIpXTtcbiAgdG9kb0NoZWNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gZnVuY3QoKSB7XG4gICAgICBsaXN0SGFuZGxlci50b2dnbGVBcmNoaXZlU3RhdHVzKGVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4KSxcbiAgICAgICAgZG9tSGFuZGxlci5yZW5kZXJUb2RvTGlzdChsaXN0SGFuZGxlci5nZXRMaXN0KCkpO1xuICAgICAgc3RvcmFnZUhhbmRsZXIucG9wdWxhdGVTdG9yYWdlKGxpc3RIYW5kbGVyLmdldExpc3QoKSk7XG5cbiAgICAgIHJlZnJlc2hMaXN0ZW5lcnMoKTtcbiAgICB9KTtcbiAgfSk7XG4gIGxldCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdG9kb1wiKTtcbiAgYWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGRvbUhhbmRsZXIub3Blbk1vZGFsKCkpO1xuICAvL1RPRE8gdGhpcyBpcyBtYXliZSBub3QgdGhlIHdheSB0byBzdWJtaXQgdGhlIGZvcm0gY29ycmVjdGx5LiBuZWVkIHRvIHJld29yayB0aGlzLlxuICBsZXQgbmV3U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctc3VibWl0XCIpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10aXRsZVwiKTtcbiAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctZGVzY3JpcHRpb25cIik7XG4gIGxldCBuZXdEdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1kdWVcIik7XG4gIGZ1bmN0aW9uIGdldFByaW9yaXR5U2VsZWN0ZWQoKSB7XG4gICAgdmFyIGNoZWNrUmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W25hbWU9XCJuZXctcHJpb3JpdHlcIl06Y2hlY2tlZCdcbiAgICApO1xuICAgIGlmIChjaGVja1JhZGlvICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBjaGVja1JhZGlvLnBhcmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIk5vIG9uZSBzZWxlY3RlZFwiO1xuICAgIH1cbiAgfVxuXG4gIG5ld1N1Ym1pdC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGxpc3RIYW5kbGVyLm5ld1RvZG8oXG4gICAgICBuZXdUaXRsZS52YWx1ZSxcbiAgICAgIG5ld0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgbmV3RHVlLnZhbHVlLFxuICAgICAgZ2V0UHJpb3JpdHlTZWxlY3RlZCgpLFxuICAgICAgXCJcIixcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBkb21IYW5kbGVyLnJlbmRlclRvZG9MaXN0KGxpc3RIYW5kbGVyLmdldExpc3QoKSk7XG4gICAgZG9tSGFuZGxlci5jbG9zZU1vZGFsKCk7XG4gICAgY29uc29sZS5sb2cobGlzdEhhbmRsZXIuZ2V0TGlzdCgpKTtcbiAgICBzdG9yYWdlSGFuZGxlci5wb3B1bGF0ZVN0b3JhZ2UobGlzdEhhbmRsZXIuZ2V0TGlzdCgpKTtcbiAgICByZWZyZXNoTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgbGV0IGFyY2hpdmVWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcmNoaXZlVmlld1wiKTtcbiAgYXJjaGl2ZVZpZXcub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcGFnZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLXRpdGxlXCIpO1xuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiQXJjaGl2ZVwiO1xuICAgIGRvbUhhbmRsZXIuY2hhbmdlVmlldyhhcmNoaXZlVmlldyk7XG4gICAgZG9tSGFuZGxlci5yZW5kZXJUb2RvTGlzdChsaXN0SGFuZGxlci5nZXRMaXN0KFwiYXJjaGl2ZWRcIikpO1xuICAgIHJlZnJlc2hMaXN0ZW5lcnMoKTtcbiAgfTtcbiAgbGV0IGV2ZXJ5dGhpbmdWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVyeXRoaW5nVmlld1wiKTtcbiAgZXZlcnl0aGluZ1ZpZXcub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcGFnZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLXRpdGxlXCIpO1xuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiRXZlcnl0aGluZ1wiO1xuICAgIGRvbUhhbmRsZXIuY2hhbmdlVmlldyhldmVyeXRoaW5nVmlldyk7XG4gICAgZG9tSGFuZGxlci5yZW5kZXJUb2RvTGlzdChcbiAgICAgIGxpc3RIYW5kbGVyLmdldExpc3QobGlzdEhhbmRsZXIuZ2V0TGlzdChcInVuYXJjaGl2ZWRcIikpXG4gICAgKTtcbiAgICByZWZyZXNoTGlzdGVuZXJzKCk7XG4gIH07XG59XG4vL2xvY2FsIHN0b3JhZ2UgZnVuY3Rpb25zIGZyb20gbWRuIHdlYiBkb2NzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSVxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG4vL2NvbnNvbGUubG9nKFwiU2Vzc2lvbiBzdG9yYWdlIGF2YWlsYWJsZTogXCIgKyBzdG9yYWdlQXZhaWxhYmxlKFwic2Vzc2lvblN0b3JhZ2VcIikpO1xuLy9jb25zb2xlLmxvZyhcIkxvY2FsIHN0b3JhZ2UgYXZhaWxhYmxlOiBcIiArIHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpO1xuXG4vL3NvbWUgZXhhbXBsZSB0b2Rvc1xuIiwiaW1wb3J0IHsgdG9kb0Z1bmN0aW9ucyB9IGZyb20gXCIuL3RvZG9GdW5jdGlvbnMuanNcIjtcblxuY29uc3Qgc3RvcmFnZUZ1bmN0aW9ucyA9ICgpID0+IHtcbiAgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKHVuc2F2ZWRMaXN0KSB7XG4gICAgY29uc29sZS5sb2codW5zYXZlZExpc3QpO1xuICAgIGxldCB4ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHVuc2F2ZWRMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgeC5wdXNoKHVuc2F2ZWRMaXN0W2luZGV4XS5nZXRBbGxEZXRhaWxzKCkpO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgICBjb25zb2xlLmxvZyhcInNhdmVkIHRvIHN0b3JhZ2VcIik7XG4gIH1cbiAgY29uc3QgcmV0cmVpdmVTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxldCBsb2FkZWRMaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0XCIpKTtcbiAgICAvL2NvbnNvbGUubG9nKG5ld29iamVjdHNsaXN0WzNdLnRvZG9UaXRsZSk7XG4gICAgaWYgKGxvYWRlZExpc3QgIT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coXCJMaXN0IHJldHJlaXZlZCBmcm9tIHN0b3JhZ2UuIExlbmd0aDogXCIgKyBsb2FkZWRMaXN0Lmxlbmd0aCk7XG4gICAgICByZXR1cm4gbG9hZGVkTGlzdDtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgcG9wdWxhdGVTdG9yYWdlLFxuICAgIHJldHJlaXZlU3RvcmFnZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHN0b3JhZ2VGdW5jdGlvbnMgfTtcbiIsIi8vbW9kdWxlIGZvciBtYW5hZ2luZyBsaXN0c1xuLy9mYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBwcm9qZWN0c1xuY29uc3QgdG9kbyA9IChcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgcHJvamVjdCxcbiAgYXJjaGl2ZVN0YXR1c1xuKSA9PiB7XG4gIGxldCB0b2RvVGl0bGUgPSB0aXRsZTtcbiAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgdG9kb0R1ZSA9IGR1ZURhdGU7XG4gIGxldCB0b2RvUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IHRvZG9Qcm9qZWN0ID0gcHJvamVjdDtcbiAgbGV0IHRvZG9BcmNoaXZlU3RhdHVzID0gYXJjaGl2ZVN0YXR1cztcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0b2RvVGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gdG9kb0Rlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREdWUgPSAoKSA9PiB0b2RvRHVlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHRvZG9Qcmlvcml0eTtcbiAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHRvZG9Qcm9qZWN0O1xuICBjb25zdCBnZXRBcmNoaXZlU3RhdHVzID0gKCkgPT4gdG9kb0FyY2hpdmVTdGF0dXM7XG4gIGNvbnN0IGdldEFsbERldGFpbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZG9UaXRsZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EdWUsXG4gICAgICB0b2RvUHJpb3JpdHksXG4gICAgICB0b2RvUHJvamVjdCxcbiAgICAgIHRvZG9BcmNoaXZlU3RhdHVzLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IHNldEFyY2hpdmVTdGF0dXMgPSAobmV3U3RhdHVzKSA9PiAodG9kb0FyY2hpdmVTdGF0dXMgPSBuZXdTdGF0dXMpO1xuICBmdW5jdGlvbiBuZXdUb2RvKCkge31cbiAgcmV0dXJuIHtcbiAgICBuZXdUb2RvLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXRQcm9qZWN0LFxuICAgIGdldEFyY2hpdmVTdGF0dXMsXG4gICAgc2V0QXJjaGl2ZVN0YXR1cyxcbiAgICBnZXRBbGxEZXRhaWxzLFxuICB9O1xufTtcbmNvbnN0IHRvZG9GdW5jdGlvbnMgPSAobG9hZGVkTGlzdCkgPT4ge1xuICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgY29uc29sZS5sb2cobG9hZGVkTGlzdCk7XG4gIGNvbnN0IGxvYWREZWZhdWx0cyA9ICgpID0+IHtcbiAgICBsZXQgdGVzdHkgPSB0b2RvKFxuICAgICAgXCJUaGlzIGlzIGEgdGVzdCB0aXRsZVwiLFxuICAgICAgXCJUaGlzIGlzIGEgdG9kbyBkZXNjcmlwdGlvblwiLFxuICAgICAgXCIyMDIzLTAxLTE4XCIsXG4gICAgICBcIkhpZ2ggUHJpb3JpdHlcIixcbiAgICAgIFwiXCIsXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgbGV0IHRlc3R5MiA9IHRvZG8oXG4gICAgICBcIkhlcmUgaXMgYW5vdGhlciB0b2RvIGl0ZW1cIixcbiAgICAgIFwiVGhpcyBpcyBhIHRvZG8gZGVzY3JpcHRpb25cIixcbiAgICAgIFwiMjAyMy0wMS0xOFwiLFxuICAgICAgXCJMb3cgUHJpb3JpdHlcIixcbiAgICAgIFwiXCIsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICB0b2RvTGlzdC5wdXNoKHRlc3R5LCB0ZXN0eTIpO1xuICAgIGNvbnNvbGUubG9nKFwicG9wdWxhdGVkIHdpdGggZGVmYXVsdHNcIik7XG4gIH07XG4gIGlmIChsb2FkZWRMaXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIGxpc3QgZm91bmQgc28gbG9hZGluZyBkZWZhdWx0c1wiKTtcbiAgICBsb2FkRGVmYXVsdHMoKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9hZGVkTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBpdGVtID0gdG9kbyhcbiAgICAgICAgbG9hZGVkTGlzdFtpbmRleF0udG9kb1RpdGxlLFxuICAgICAgICBsb2FkZWRMaXN0W2luZGV4XS50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9EdWUsXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgbG9hZGVkTGlzdFtpbmRleF0udG9kb1Byb2plY3QsXG4gICAgICAgIGxvYWRlZExpc3RbaW5kZXhdLnRvZG9BcmNoaXZlU3RhdHVzXG4gICAgICApO1xuICAgICAgdG9kb0xpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJjdXJyZW50IGxpc3RcIiArIHRvZG9MaXN0KTtcbiAgICBsZXQgeCA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2RvTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHgucHVzaCh0b2RvTGlzdFtpbmRleF0uZ2V0QWxsRGV0YWlscygpKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIEpTT04uc3RyaW5naWZ5KHgpKTtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlckFyY2hpdmVkID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5nZXRBcmNoaXZlU3RhdHVzKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBjb25zdCBmaWx0ZXJVbkFyY2hpdmVkID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5nZXRBcmNoaXZlU3RhdHVzKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRMaXN0ID0gKGZpbHRlcikgPT4ge1xuICAgIGlmIChmaWx0ZXIgPT09IFwiYXJjaGl2ZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJ0cnlpbmcgdG8gZmlsdGVyIGxpc3QgLSBhcmNoaXZlZFwiKTtcbiAgICAgIHJldHVybiB0b2RvTGlzdC5maWx0ZXIoZmlsdGVyQXJjaGl2ZWQpO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSBcInVuYXJjaGl2ZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJ0cnlpbmcgdG8gZmlsdGVyIGxpc3QgLSB1bmFyY2hpdmVkXCIpO1xuICAgICAgcmV0dXJuIHRvZG9MaXN0LmZpbHRlcihmaWx0ZXJBcmNoaXZlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibGlzdCBkaWRuJ3QgZmlsdGVyIGhlcmVcIik7XG4gICAgICByZXR1cm4gdG9kb0xpc3Q7XG4gICAgfVxuICB9O1xuICBjb25zdCB0b2dnbGVBcmNoaXZlU3RhdHVzID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKHRvZG9MaXN0W2luZGV4XS5nZXRBcmNoaXZlU3RhdHVzKCkpIHtcbiAgICAgIHRvZG9MaXN0W2luZGV4XS5zZXRBcmNoaXZlU3RhdHVzKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXJjaGl2ZSBzdGF0dXMgc2V0IHRvIGZhbHNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTGlzdFtpbmRleF0uc2V0QXJjaGl2ZVN0YXR1cyh0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXJjaGl2ZSBzdGF0dXMgc2V0IHRvIHRydWVcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBuZXdUb2RvID0gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdCxcbiAgICBhcmNoaXZlU3RhdHVzXG4gICkgPT4ge1xuICAgIGxldCBuZXd0aXRsZSA9IHRvZG8oXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgcHJvamVjdCxcbiAgICAgIGFyY2hpdmVTdGF0dXNcbiAgICApO1xuICAgIHRvZG9MaXN0LnB1c2gobmV3dGl0bGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TGlzdCxcbiAgICB0b2dnbGVBcmNoaXZlU3RhdHVzLFxuICAgIG5ld1RvZG8sXG4gICAgZmlsdGVyQXJjaGl2ZWQsXG4gICAgZmlsdGVyVW5BcmNoaXZlZCxcbiAgfTtcbn07XG5leHBvcnQgeyB0b2RvLCB0b2RvRnVuY3Rpb25zIH07XG5cbi8qIGNsYXNzIE1lbnVJdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZU5hbWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG59XG5sZXQgYnVycml0byA9IG5ldyBNZW51SXRlbShcbiAgXCJWZWdhbiBCdXJyaXRvc1wiLFxuICBcIkZlYXR1cmluZyBjaWxhbnRyby1saW1lIHJpY2UsIGNoaXBvdGxlLXNwaWNlZCBibGFjayBiZWFucywgc2F1dMOpZWQgcGVwcGVycyBhbmQgb25pb25zLCBhbmQgYSB6ZXN0eSBhdm9jYWRvIGNyZWFtIHNhdWNlXCIsXG4gIGJ1cnJpdG9JbWFnZVxuKTtcbiAqL1xuLyogUHJvamVjdHMgY29udGFpbiBtdWx0aXBsZSB0b2RvIGxpc3RzIHdoaWNoIGNvbnRhaW4gbXVsdGlwbGUgdG9kbyBpdGVtcyAqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9