/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Fonts/Creepster-Regular.ttf */ \"./src/Fonts/Creepster-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: creepster;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nhtml {\\n  font: 62.5%;\\n}\\n\\nbody {\\n  margin: 0px;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n}\\n\\nbutton {\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px;\\n  font-size: 1.7rem;\\n  transition: 0.5;\\n}\\n\\nbutton:hover {\\n  color: #292524;\\n  transition: 0.5;\\n}\\n\\n#content {\\n  display: grid;\\n  grid-template-rows: 1fr 10fr 5fr;\\n  grid-template-columns: 1fr;\\n  height: 100vh;\\n}\\n\\nheader {\\n  display: flex;\\n  position: relative;\\n  width: 100%;\\n  height: clamp(50px, 5vw, 69px);\\n  padding: 6px 0px;\\n  grid-row: 1/2;\\n  grid-column: 1/2;\\n  background-color: #ef4444;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.header-image {\\n  width: 100%;\\n  height: 420px;\\n  object-fit: cover;\\n\\n  object-position: center;\\n}\\n\\n.background-image {\\n  width: 100%;\\n  height: 100vh;\\n  object-fit: cover;\\n  object-position: top;\\n  display: block;\\n}\\n\\n.restaurant-logo {\\n  height: 100%;\\n  margin-left: 5px;\\n}\\n\\n.nav-bar-container {\\n  display: grid;\\n  grid-template-columns: 1fr 15fr;\\n  grid-template-rows: clamp(50px, 5vw, 69px);\\n  position: fixed;\\n  flex-direction: row;\\n  background-color: #cca363;\\n  width: 100%;\\n  /* height: clamp(50px, 5vw, 69px); */\\n  padding: 6px;\\n  gap: 10px;\\n  z-index: 7;\\n  justify-items: center;\\n  align-items: center;\\n}\\n\\n.tab-group {\\n  display: flex;\\n  gap: 10px;\\n  align-items: center;\\n  width: 100%;\\n  justify-content: center;\\n}\\n\\n.nav-vertical-line {\\n  height: clamp(20px, 2.5vw, 30px);\\n  width: 3px;\\n  background: #772327;\\n}\\n\\n.home-button,\\n.menu-button,\\n.contact-button {\\n  z-index: 10;\\n  font-weight: 800;\\n  font-family: cursive;\\n  font-size: clamp(20px, 3.5vw, 40px);\\n  background-color: rgba(240, 248, 255, 0);\\n  color: #43151b;\\n}\\n\\n.home-button:hover,\\n.menu-button:hover,\\n.contact-button:hover {\\n  color: #4e2026;\\n}\\n\\n.home-button:active,\\n.menu-button:active,\\n.contact-button:active {\\n  color: #400e14;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n\\n  grid-row: 2/3;\\n  grid-column: 1/2;\\n}\\n\\n.home-page-section {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.home-page-contents-text-contents {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  background-color: #00000012;\\n}\\n\\n.home-page-contents {\\n  display: flex;\\n  position: absolute;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n}\\n\\n.home-page-text-1 {\\n  font-size: clamp(30.75px, 8.2vw, 120px);\\n  margin: 0px;\\n  color: #43151b;\\n  font-family: creepster;\\n  text-align: center;\\n  -webkit-text-stroke: 2px #2a0e10;\\n  text-shadow: 3px 3px 2px black;\\n}\\n\\n.home-page-text-2 {\\n  font-size: clamp(16px, 2.2vw, 10rem);\\n  margin: 0px;\\n  color: #3e2723;\\n  text-shadow: 1px 1px 1px #000000;\\n  font-family: \\\"creepster\\\";\\n}\\n\\n.order-button {\\n  width: clamp(145px, 25vw, 290px);\\n  height: clamp(42px, 3.2vw, 69px);\\n  font-size: clamp(16px, 2.2vw, 2.1rem);\\n  color: #616161;\\n  -webkit-text-stroke: 1px #616161;\\n  background-color: #eceff1;\\n  transition: 150ms;\\n}\\n\\n.order-button:hover {\\n  transition: 150ms;\\n  background-color: #fafafa;\\n  color: #757575;\\n  -webkit-text-stroke: 1px #757575;\\n}\\n\\n.order-button:active {\\n  transition: 150ms;\\n  color: #424242;\\n  -webkit-text-stroke: 1px #424242;\\n  background-color: #eeeeee;\\n}\\n\\n/* .order-button {\\n    min-width: 158px;\\n    min-height: 48px;\\n    width: 14vw;\\n    height: 3.2vw;\\n    font-size: clamp(25px, 50%, 100px);\\n    max-height: 80px;\\n    max-width: 240px;\\n    font-size: 2.6vww;\\n} */\\n\\n.reviews {\\n  display: flex;\\n  background-color: #3e2723;\\n  flex: 2;\\n  flex-basis: 300px;\\n  width: 100%;\\n  gap: 15px;\\n  padding: 20px 0px;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  outline: 2px solid #404b4f;\\n}\\n\\n.review-card {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n  justify-content: center;\\n}\\n\\n.review-profile-picture {\\n  width: 120px;\\n  height: 120px;\\n  object-fit: cover;\\n  object-position: center;\\n  border-radius: 100%;\\n  outline: 2px solid #8d6e63;\\n}\\n\\n.rating-container {\\n  display: flex;\\n}\\n\\nsvg.golden-star,\\nsvg.grey-star {\\n  display: flex;\\n  height: 40px;\\n}\\n\\n.review-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n}\\n\\n.review-comment {\\n  font-size: clamp(19px, 1.5vw, 50px);\\n  width: clamp(190px, 14vw, 269px);\\n}\\n\\n.review-comment,\\n.reviewer-name {\\n  font-family: \\\"creepster\\\";\\n  word-break: break-word;\\n  overflow-wrap: anywhere;\\n  margin: 0px;\\n  color: #bcaaa4;\\n  text-align: center;\\n}\\n\\n.reviewer-name {\\n  color: #a1887f;\\n}\\n\\n.reviewer-name::before {\\n  content: \\\" - \\\";\\n}\\n\\n.review-profile-holder {\\n}\\n\\nfooter {\\n  display: flex;\\n  width: 100%;\\n  justify-self: center;\\n  justify-content: center;\\n  align-items: flex-end;\\n  grid-row: 3/4;\\n  grid-column: 1/2;\\n  color: #6d4c41;\\n  background-color: #d7ccc8;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addRatingStars\": () => (/* binding */ addRatingStars),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"createReviewCard\": () => (/* binding */ createReviewCard),\n/* harmony export */   \"createSVG\": () => (/* binding */ createSVG),\n/* harmony export */   \"setAttribute\": () => (/* binding */ setAttribute)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\n/// Set the elements attributes (e.g class names, ID names etc)\nconst setAttribute = (element, attributes) => {\n  const keys = Object.keys(attributes);\n  keys.forEach((key) => {\n    element.setAttribute(key, attributes[key]);\n  });\n};\n\n// Note: createElement function is not the same as document.createElement they are two separate things\nconst createElement = (elementType, attributes) => {\n  const element = document.createElement(elementType);\n\n  setAttribute(element, attributes);\n\n  return element;\n};\n\nfunction createSVG(color, d) {\n  const SVG = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n  const path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n  SVG.setAttribute(\"viewBox\", \"0 0 24 24\");\n  path.setAttribute(\"fill\", color);\n  path.setAttribute(\"d\", d);\n  SVG.appendChild(path);\n  return SVG;\n}\n\nconst svgGoldenStar = createSVG(\n  \"yellow\",\n  \"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"\n);\n\nconst svgGreyStar = createSVG(\n  \"grey\",\n  \"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\"\n);\n\nfunction addRatingStars(amountOfStarsGiven) {\n  const ratingContainer = createElement(\"div\", {\n    class: \"rating-container\",\n  });\n\n  /* Calculates how many grey stars to give if person gives 3 stars you would have 2 grey stars (5 grey stars - 3 stars) */\n  const greyStars = 5 - amountOfStarsGiven;\n\n  // Add golden stars\n  for (let index = 0; index < amountOfStarsGiven; index++) {\n    const clonedGoldStar = svgGoldenStar.cloneNode(true);\n    clonedGoldStar.setAttribute(\"class\", \"golden-star\");\n    ratingContainer.appendChild(clonedGoldStar);\n  }\n\n  // Add grey stars\n  for (let index = 0; index < greyStars; index++) {\n    const clonedGreyStar = svgGreyStar.cloneNode(true);\n    clonedGreyStar.setAttribute(\"class\", \"grey-star\");\n    ratingContainer.appendChild(clonedGreyStar);\n  }\n\n  return ratingContainer;\n}\n\nfunction createReviewCard(imageAttributes, ratingAmount, comment, personName) {\n  // create container\n  const reviewCard = createElement(\"div\", { class: \"review-card\" });\n\n  // create profile image container\n  const profileImageContainer = createElement(\"div\", {\n    class: \"review-profile-holder\",\n  });\n\n  // create image\n  const profilePicture = createElement(\"img\", {\n    src: imageAttributes[0],\n    alt: imageAttributes[1],\n    class: imageAttributes[2],\n  });\n\n  // create container to house the rating stars and comments\n  const reviewContainer = createElement(\"div\", {\n    class: \"review-container\",\n  });\n\n  // create rating\n  const rating = addRatingStars(ratingAmount);\n\n  // create comment container\n  const reviewComment = createElement(\"p\", { class: \"review-comment\" });\n\n  // Add text to reviewComment\n  reviewComment.innerText = comment;\n\n  // create name\n  const reviewerName = createElement(\"p\", { class: \"reviewer-name\" });\n\n  // Add text to reviewerName\n  reviewerName.innerText = personName;\n\n  // Append profilePicture into profileImageContainer\n  profileImageContainer.appendChild(profilePicture);\n\n  // Append rating, reviewComment, and reviewerName into reviewContainer\n  reviewContainer.append(rating, reviewComment, reviewerName);\n\n  // Append profilePicture and reviewContainer into reviewCard\n  reviewCard.append(profilePicture, reviewContainer);\n\n  // return reviewCard element\n  return reviewCard;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/helperFunctions.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePageContents)\n/* harmony export */ });\n/* harmony import */ var _Images_foodCriticGuyFromRatapooie_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/foodCriticGuyFromRatapooie.jpeg */ \"./src/Images/foodCriticGuyFromRatapooie.jpeg\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.js\");\n/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-page-load */ \"./src/initial-page-load.js\");\n/* harmony import */ var _Images_aRatCookin_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/aRatCookin.jpg */ \"./src/Images/aRatCookin.jpg\");\n/* harmony import */ var _Images_larryCucumberInDiningPLace_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Images/larryCucumberInDiningPLace.jpeg */ \"./src/Images/larryCucumberInDiningPLace.jpeg\");\n/* harmony import */ var _Images_bobTheTomato_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Images/bobTheTomato.jpg */ \"./src/Images/bobTheTomato.jpg\");\n/* harmony import */ var _Images_mrPotatoHead_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Images/mrPotatoHead.png */ \"./src/Images/mrPotatoHead.png\");\n/* harmony import */ var _Images_GusteauLOGO_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Images/GusteauLOGO.png */ \"./src/Images/GusteauLOGO.png\");\n\n\n\n\n\n\n\n\n// remove any highlight on tab button that is not home\n// highlight home tab button when clicked\n// remove content so that home tab contents can be filled\n\nconst restaurantLogoImage = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"img\", {\n  src: _Images_GusteauLOGO_png__WEBPACK_IMPORTED_MODULE_7__,\n  alt: \"Restaurant Logo\",\n  class: \"restaurant-logo\",\n});\n\nconst mainImage = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"img\", {\n  src: _Images_foodCriticGuyFromRatapooie_jpeg__WEBPACK_IMPORTED_MODULE_0__,\n  alt: \"People In Restaurant Dining Area Seated Waiting And Or Eating With Waiters Walking Around\",\n  class: \"background-image\",\n});\n\nconst homePageSection = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", {\n  class: \"home-page-section\",\n});\n\nconst homePageTextContents = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", {\n  class: \"home-page-contents-text-contents\",\n});\n\nconst homePageText1 = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"p\", { class: \"home-page-text-1\" });\nconst homePageText2 = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"p\", { class: \"home-page-text-2\" });\n\nconst homePageContents = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { class: \"home-page-contents\" });\nconst orderButton = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"button\", { class: \"order-button\" });\n\nconst reviews = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { class: \"reviews\" });\nlet [reviewCard1, reviewCard2, reviewCard3, reviewCard4] = [\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { class: \"review-card\" }),\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { class: \"review-card\" }),\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { class: \"review-card\" }),\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", { class: \"review-card\" }),\n];\n\n// Set the elements text contents\n\nhomePageText1.innerText = \"Worst food in the world!\";\nhomePageText2.innerText = \"- Anton Ego\";\norderButton.innerText = \"Order Now\";\n\n// Append elements inside one another\nhomePageTextContents.append(homePageText1, homePageText2);\nhomePageContents.append(homePageTextContents, orderButton);\n\nreviewCard1 = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createReviewCard)(\n  [_Images_aRatCookin_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Rat cooking LETHIMCOOK\", \"review-profile-picture\"],\n  5,\n  \"I died from eating this food 11/10\",\n  \"Rattaouli\"\n);\nreviewCard2 = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createReviewCard)(\n  [\n    _Images_bobTheTomato_jpg__WEBPACK_IMPORTED_MODULE_5__,\n    \"Bob The Tomato Wearing A Hat Profile Picture\",\n    \"review-profile-picture\",\n  ],\n  5,\n  \"He served me a cucumber for some reason it taste my friend larry idk why\",\n  \"Bob The Tomato\"\n);\nreviewCard3 = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createReviewCard)(\n  [_Images_larryCucumberInDiningPLace_jpeg__WEBPACK_IMPORTED_MODULE_4__, \"Larry The Cucumber\", \"review-profile-picture\"],\n  5,\n  \"The staff is currently giving me tour of their back kitchen they said they have something special for me we lit\",\n  \"Larry The Cucumber\"\n);\n\nreviewCard4 = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createReviewCard)(\n  [_Images_mrPotatoHead_png__WEBPACK_IMPORTED_MODULE_6__, \"Mr. Potato Head\", \"review-profile-picture\"],\n  1,\n  \"They served me a literal raw potato bruh. 💀\",\n  \"Mr. Potato Head\"\n);\n\nreviews.append(reviewCard1, reviewCard2, reviewCard3, reviewCard4);\n\nfunction loadHomePageContents() {\n  /// do stuff\n  homePageSection.append(mainImage, homePageContents);\n  _initial_page_load__WEBPACK_IMPORTED_MODULE_2__.main.append(homePageSection, reviews);\n}\n\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load */ \"./src/initial-page-load.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/index.js?");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactTab\": () => (/* binding */ contactTab),\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"default\": () => (/* binding */ firstLoad),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"footerText\": () => (/* binding */ footerText),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"homeTab\": () => (/* binding */ homeTab),\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"menuTab\": () => (/* binding */ menuTab),\n/* harmony export */   \"navBarContainer\": () => (/* binding */ navBarContainer)\n/* harmony export */ });\n/* harmony import */ var _Images_GusteauLOGO_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/GusteauLOGO.png */ \"./src/Images/GusteauLOGO.png\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\n// create all the elements for where the #content will go\n\nconst header = document.createElement(\"header\");\n\nconst main = document.createElement(\"main\");\n\nconst footer = document.createElement(\"footer\");\n\n// Create elements\n\nconst restaurantLogoImage = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"img\", {\n  src: _Images_GusteauLOGO_png__WEBPACK_IMPORTED_MODULE_0__,\n  alt: \"Restaurant Logo\",\n  class: \"restaurant-logo\",\n});\n\nconst navBarContainer = document.createElement(\"div\");\nconst tabGroup = document.createElement(\"div\");\nconst homeTab = document.createElement(\"a\");\nconst menuTab = document.createElement(\"a\");\nconst contactTab = document.createElement(\"a\");\n\nconst verticalLine = document.createElement(\"div\");\n\nconst footerText = document.createElement(\"p\");\n\ndocument.addEventListener(\"click\", _home_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nfunction firstLoad() {\n  // Set attributes\n  navBarContainer.setAttribute(\"class\", \"nav-bar-container\");\n  tabGroup.setAttribute(\"class\", \"tab-group\");\n  homeTab.setAttribute(\"class\", \"home-button\");\n  menuTab.setAttribute(\"class\", \"menu-button\");\n  contactTab.setAttribute(\"class\", \"contact-button\");\n\n  verticalLine.setAttribute(\"class\", \"nav-vertical-line\");\n\n  // Give elements values/content/text\n  homeTab.innerText = \"Home\";\n  menuTab.innerText = \"Menu\";\n  contactTab.innerText = \"Contacts\";\n\n  footerText.innerText = `Copyright ${new Date().getFullYear()} | Contact | Email`;\n\n  // Append contents to elements\n\n  tabGroup.append(\n    homeTab,\n    verticalLine.cloneNode(true),\n    menuTab,\n    verticalLine.cloneNode(true),\n    contactTab\n  );\n\n  navBarContainer.append(restaurantLogoImage, tabGroup);\n\n  header.appendChild(navBarContainer);\n\n  footer.appendChild(footerText);\n\n  content.append(header, main, footer);\n\n  (0,_home_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/initial-page-load.js?");

/***/ }),

/***/ "./src/Fonts/Creepster-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/Fonts/Creepster-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e29388744fe1602e58c.ttf\";\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/Fonts/Creepster-Regular.ttf?");

/***/ }),

/***/ "./src/Images/GusteauLOGO.png":
/*!************************************!*\
  !*** ./src/Images/GusteauLOGO.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c6998e474634a7175fd.png\";\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/Images/GusteauLOGO.png?");

/***/ }),

/***/ "./src/Images/aRatCookin.jpg":
/*!***********************************!*\
  !*** ./src/Images/aRatCookin.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"772303c8f7dba63b79c6.jpg\";\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/Images/aRatCookin.jpg?");

/***/ }),

/***/ "./src/Images/bobTheTomato.jpg":
/*!*************************************!*\
  !*** ./src/Images/bobTheTomato.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b8f984a15fba63465b7.jpg\";\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/Images/bobTheTomato.jpg?");

/***/ }),

/***/ "./src/Images/foodCriticGuyFromRatapooie.jpeg":
/*!****************************************************!*\
  !*** ./src/Images/foodCriticGuyFromRatapooie.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2180f38a22fddb20a783.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/Images/foodCriticGuyFromRatapooie.jpeg?");

/***/ }),

/***/ "./src/Images/larryCucumberInDiningPLace.jpeg":
/*!****************************************************!*\
  !*** ./src/Images/larryCucumberInDiningPLace.jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d6399fd5cdda38635f8.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/Images/larryCucumberInDiningPLace.jpeg?");

/***/ }),

/***/ "./src/Images/mrPotatoHead.png":
/*!*************************************!*\
  !*** ./src/Images/mrPotatoHead.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c430f4949baa0d918dc.png\";\n\n//# sourceURL=webpack://restaurant-page-hand-crafted-from-scratchy-ratchety-potato-dough/./src/Images/mrPotatoHead.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;