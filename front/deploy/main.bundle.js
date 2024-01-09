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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/race-car-icon.svg */ \"./src/assets/svg/race-car-icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --background-color: rgb(31, 23, 23);\n  --main-font-color: #fff; }\n\nhtml {\n  scroll-behavior: smooth;\n  padding: 0; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nul[class],\nol[class] {\n  padding: 0;\n  list-style: none; }\n\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli {\n  margin: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400; }\n\na {\n  color: #000;\n  text-decoration: none; }\n\nbutton {\n  cursor: pointer; }\n\nbody {\n  background-color: var(--background-color);\n  color: var(--main-font-color);\n  font-family: Impact, sans-serif; }\n\n.main {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column; }\n\n.wrapper {\n  flex: 1 1 auto;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  width: 100%;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 40px; }\n\n.app__button {\n  padding: 2px 4px;\n  min-width: 80px;\n  font-size: 16px;\n  color: #076aff;\n  background-color: #ffffff;\n  border: 1px solid #076aff; }\n  .app__button:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n    pointer-events: none; }\n  .app__button:hover {\n    filter: brightness(1.2); }\n  .app__button:active {\n    transform: scale(0.9, 0.9);\n    background-color: rgba(7, 106, 255, 0.1); }\n\n.app__input-color {\n  padding: 4px;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  -webkit-appearance: none;\n  appearance: none;\n  border: none;\n  background: #fff;\n  overflow: hidden;\n  outline: none;\n  cursor: pointer; }\n\n.view-title {\n  margin-bottom: 10px; }\n\n@keyframes winnerText {\n  0% {\n    color: #fff;\n    transform: scale(1, 1); }\n  50% {\n    transform: scale(1.3, 1.3);\n    color: #ff0777; }\n  100% {\n    transform: scale(1, 1);\n    color: #fff; } }\n\n.winners-text {\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1rem;\n  font-size: 4rem;\n  color: #ffffff;\n  background-color: #000;\n  border-radius: 16px;\n  max-width: 70%;\n  z-index: 3;\n  cursor: pointer;\n  animation: winnerText 2s; }\n\n.header-buttons {\n  margin-bottom: 20px; }\n\n.create-car,\n.update-car {\n  display: flex;\n  margin-bottom: 20px;\n  column-gap: 20px; }\n\n.bottom-buttons {\n  margin-bottom: 40px; }\n\n.garage__buttons {\n  display: flex;\n  margin-bottom: 10px; }\n\n.cars-name {\n  margin-left: 20px; }\n\n.roadBlock {\n  position: relative;\n  max-width: 100%;\n  height: 100px; }\n\n.car {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 3; }\n  .car__item {\n    margin-bottom: 30px; }\n  .car__buttons {\n    display: flex;\n    margin-bottom: 20px; }\n\n.car-icon {\n  width: 100px;\n  height: 30px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n.car-icon svg {\n  fill: #000; }\n\n.road {\n  position: relative;\n  bottom: -48px;\n  background-color: #2a2a2a;\n  height: 20px;\n  width: 100%;\n  transform: rotateX(60deg);\n  transform-style: flat;\n  perspective: 200px; }\n\n.finish-flag {\n  position: absolute;\n  top: 0px;\n  right: 110px;\n  height: 20px;\n  width: 10px;\n  background-color: #ea07ff;\n  transform-style: flat;\n  perspective: 200px; }\n\n.start-stop__buttons {\n  margin-bottom: 20px; }\n\n.start-button {\n  background-color: greenyellow; }\n\n.stop-button {\n  background-color: orange; }\n\n.table {\n  width: 100%;\n  margin-bottom: 20px;\n  border: 1px solid #dddddd;\n  border-collapse: collapse; }\n  .table__header {\n    font-weight: 500;\n    padding: 5px;\n    border: 1px solid #dddddd; }\n  .table__col {\n    border: 1px solid #dddddd;\n    padding: 5px; }\n\n.sortable-header {\n  cursor: pointer; }\n\n.winner-icon {\n  max-width: 100%;\n  height: auto; }\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://async-race/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n  var p;\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n    if (!a[p]) {\n      return false;\n    }\n  }\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://async-race/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/types.ts\");\nconst BASE_URL = \"http://localhost:3000/\";\nconst GARAGE_ENDPOINT = \"garage\";\nconst ENGINE_ENDPOINT = \"engine\";\nconst WINNERS_ENDPOINT = \"winners\";\nconst getCars = async (_page = 1, _limit = 7) => {\n    const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}?${new URLSearchParams({\n        _page: String(_page),\n        _limit: String(_limit),\n    })}`, {\n        method: \"GET\",\n    });\n    // const body = await response.json();\n    // return body;\n    return response;\n};\nconst getCar = async (id) => {\n    const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}/${id}`, {\n        method: \"GET\",\n    });\n    const body = await response.json();\n    return body;\n};\nconst createCar = async ({ name, color }) => {\n    const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({ name, color }),\n    });\n    return response;\n};\nconst deleteCar = async (id) => {\n    const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}/${id}`, {\n        method: \"DELETE\",\n    });\n    const body = await response.json();\n    return body;\n};\nconst updateCar = async (id, { name, color }) => {\n    const response = await fetch(`${BASE_URL}${GARAGE_ENDPOINT}/${id}`, {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({ name, color }),\n    });\n    const body = await response.json();\n    return body;\n};\nconst startCarEngine = async (id) => {\n    try {\n        const response = await fetch(`${BASE_URL}${ENGINE_ENDPOINT}?${new URLSearchParams({\n            id: String(id),\n            status: types_1.StartStop.start,\n        })}`, {\n            method: \"PATCH\",\n        });\n        if (response.status === 500)\n            throw new Error(\"500 error\");\n        const data = await response.json();\n        return data;\n    }\n    catch (error) {\n        console.log(error);\n        return types_1.StartStop.stop;\n    }\n};\nconst stopCarEngine = async (id) => {\n    const response = await fetch(`${BASE_URL}${ENGINE_ENDPOINT}?${new URLSearchParams({\n        id: String(id),\n        status: types_1.StartStop.stop,\n    })}`, {\n        method: \"PATCH\",\n    });\n    const data = await response.json();\n    return data;\n};\nconst driveCarStatus = async (id) => {\n    const response = await fetch(`${BASE_URL}${ENGINE_ENDPOINT}/?${new URLSearchParams({\n        id: String(id),\n        status: types_1.StartStop.drive,\n    })}`, {\n        method: \"PATCH\",\n    });\n    // const data = await response.json();\n    // return data;\n    return response;\n};\nconst getWinners = async (_page = 1, _limit = 10, _sort = \"id\", _order = \"ASC\") => {\n    const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}?${new URLSearchParams({\n        _page: String(_page),\n        _limit: String(_limit),\n        _sort: String(_sort),\n        _order: String(_order),\n    })}`, {\n        method: \"GET\",\n    });\n    //   _page=[integer]\n    // _limit=[integer]\n    // _sort=['id'|'wins'|'time']\n    // _order=['ASC'|'DESC']\n    // If _limit param is passed api returns a header X-Total-Count that countains total number of records.\n    // const body = await response.json();\n    return response;\n};\nconst getWinner = async (id) => {\n    const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}/${String(id)}`, {\n        method: \"GET\",\n    });\n    // const body = await response.json();\n    return response;\n};\nconst createWinnner = async ({ id, wins, time }) => {\n    const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({ id, wins, time }),\n    });\n    return response;\n};\nconst deleteWinner = async (id) => {\n    const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}/${id}`, {\n        method: \"DELETE\",\n    });\n    const body = await response.json();\n    return body;\n};\nconst updateWinner = async ({ id, wins, time }) => {\n    const response = await fetch(`${BASE_URL}${WINNERS_ENDPOINT}/${id}`, {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({ wins, time }),\n    });\n    const body = await response.json();\n    return body;\n};\nexports[\"default\"] = {\n    getCars,\n    getCar,\n    createCar,\n    deleteCar,\n    updateCar,\n    startCarEngine,\n    stopCarEngine,\n    driveCarStatus,\n    getWinners,\n    getWinner,\n    createWinnner,\n    deleteWinner,\n    updateWinner,\n};\n\n\n//# sourceURL=webpack://async-race/./src/api.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\nconst api_1 = __importDefault(__webpack_require__(/*! ./api */ \"./src/api.ts\"));\nconst race_car_icon_svg_1 = __importDefault(__webpack_require__(/*! ./assets/svg/race-car-icon.svg */ \"./src/assets/svg/race-car-icon.svg\"));\nconst appState = {\n    cars: [],\n    winners: [],\n    currentCar: {\n        data: null,\n        animationId: null,\n    },\n};\nconst carsAnimationIds = {};\nconst inputsCreateData = {\n    name: \"\",\n    color: \"\",\n};\nconst inputsUpdateData = {\n    name: \"\",\n    color: \"\",\n};\nlet winner;\nlet currentPage = 1;\nlet totalPages = 1;\nlet currentPageName = \"Garage\";\nlet isRace = false;\nconst globFunc = {\n    updateCarsElements() { },\n    updateWinnersElemement() { },\n};\nconst { body } = document;\nconst main = document.createElement(\"main\");\nconst wrapper = document.createElement(\"div\");\nmain.classList.add(\"main\");\nwrapper.classList.add(\"wrapper\");\nbody.append(main);\nmain.append(wrapper);\nconst deleteWinnerText = () => {\n    const el = document.querySelector(\".winners-text\");\n    el.remove();\n};\nconst winnersText = (text) => {\n    const h2 = document.createElement(\"h2\");\n    h2.classList.add(\"winners-text\");\n    h2.innerText = text;\n    main.append(h2);\n    h2.addEventListener(\"click\", deleteWinnerText);\n};\nconst postWinner = async ({ id }, time) => {\n    const response = await api_1.default.getWinner(id);\n    if (response.ok) {\n        const checkedWinner = await response.json();\n        api_1.default.updateWinner({ id, wins: checkedWinner.wins + 1, time });\n    }\n    else {\n        api_1.default.createWinnner({ id, wins: 1, time });\n    }\n};\nconst carStartAnimation = (id, { distance, velocity }) => {\n    const fps = Math.round(distance / velocity);\n    const car = document.querySelector(`[data-car-id=\"${id}\"]`);\n    const seconds = Number((fps / 10).toFixed(2));\n    const sec = Number((fps / 600).toFixed(2));\n    const pr = Number((100 / seconds).toFixed(2));\n    let frame = 0;\n    function carDriveAnimation() {\n        frame += pr;\n        if (frame > 90 && !winner) {\n            winner = { id, time: sec };\n        }\n        if (frame > 90 && winner && isRace) {\n            const winCar = appState.cars.find((c) => c.id === winner.id);\n            postWinner(winCar, winner.time);\n            winnersText(`${winCar?.name} win in ${winner.time} seconds`);\n            isRace = false;\n        }\n        car.style.left = `${frame}%`;\n        if (frame < 92)\n            carsAnimationIds[id] = requestAnimationFrame(carDriveAnimation);\n    }\n    carsAnimationIds[id] = requestAnimationFrame(carDriveAnimation);\n    return carsAnimationIds[id];\n};\nconst startCar = async (id) => {\n    const stopEl = document.querySelector(`[data-stop-car-id=\"${id}\"]`);\n    const startEl = document.querySelector(`[data-start-car-id=\"${id}\"]`);\n    startEl.disabled = true;\n    let startResponse;\n    await api_1.default.startCarEngine(id).then((data) => {\n        startResponse = data;\n        carsAnimationIds[id] = carStartAnimation(id, startResponse);\n        stopEl.disabled = false;\n    });\n    await api_1.default.driveCarStatus(id).then((data) => {\n        if (data.status === 500) {\n            cancelAnimationFrame(carsAnimationIds[id]);\n        }\n    });\n};\nconst startRace = () => {\n    winner = null;\n    isRace = true;\n    const carsData = [];\n    if (Array.isArray(appState.cars)) {\n        const cars = appState.cars;\n        const fetchs = cars.map((car) => api_1.default.startCarEngine(car.id));\n        Promise.allSettled(fetchs).then((responses) => {\n            responses.forEach((res, index) => {\n                const carId = cars[index].id;\n                if (res.status === \"fulfilled\") {\n                    startCar(carId);\n                }\n                if (res.status === \"rejected\") {\n                    cancelAnimationFrame(carsAnimationIds[carId]);\n                }\n            });\n        });\n    }\n};\nconst firmName = [\n    \"Acura\",\n    \"Audi\",\n    \"Alfa Romeo\",\n    \"BMW\",\n    \"Bentley\",\n    \"Mercedes-Benz\",\n    \"Volvo\",\n    \"Volkswagen\",\n    \"Toyota\",\n    \"Ford\",\n    \"Kia\",\n    \"Skoda\",\n    \"Saab\",\n    \"Nissan\",\n    \"Mazda\",\n    \"Subary\",\n    \"Porshe\",\n    \"Lexus\",\n    \"Tesla\",\n    \"Jaxuar\",\n    \"Maserati\",\n    \"Honda\",\n    \"Jeep\",\n    \"Cadillac\",\n    \"Chevrolete\",\n];\nconst modelsName = [\n    \"RX-7\",\n    \"RAV-4\",\n    \"LX470\",\n    \"Mustang\",\n    \"Corvet\",\n    \"XJ-7\",\n    \"GT3000\",\n    \"MX-5\",\n    \"Patrol\",\n    \"LS\",\n    \"Cherokee\",\n    \"Imprezs\",\n    \"Skyline\",\n    \"Q7\",\n    \"Q5\",\n    \"TT\",\n    \"K5\",\n    \"S222\",\n    \"CLS\",\n    \"Focus\",\n];\nconst updatePageTitle = (title, carsCount, page) => {\n    const titleElement = document.querySelector(\".page-title\");\n    const pageElement = document.querySelector(\".page-text\");\n    titleElement.innerText = `${title} (${carsCount})`;\n    pageElement.innerText = `Page #${page}`;\n};\nconst generateCars = () => {\n    const firmLength = firmName.length;\n    const modelsLength = modelsName.length;\n    const randomFirm = Math.floor(Math.random() * (firmLength - 1) + 1);\n    const randomModel = Math.floor(Math.random() * (modelsLength - 1) + 1);\n    const randomColor = Math.floor(Math.random() * 16777215).toString(16);\n    const name = `${firmName[randomFirm]} ${modelsName[randomModel]}`;\n    for (let i = 1; i <= 100; i += 1) {\n        api_1.default.createCar({ name, color: randomColor });\n    }\n    setTimeout(() => {\n        api_1.default.getCars().then((data) => {\n            const headersCount = Number(data.headers.get(\"x-total-count\"));\n            updatePageTitle(\"Garage\", headersCount, currentPage);\n            return data.json();\n        });\n    }, 100);\n};\nconst drawViewTitle = (view, title, carsCount, page) => {\n    const viewTitle = document.createElement(\"div\");\n    const h1 = document.createElement(\"h1\");\n    const p = document.createElement(\"p\");\n    viewTitle.classList.add(\"view-title\");\n    h1.classList.add(\"page-title\");\n    p.classList.add(\"page-text\");\n    h1.innerText = `${title} (${carsCount})`;\n    p.innerText = `Page #${page}`;\n    viewTitle.append(h1, p);\n    view.append(viewTitle);\n};\nconst selectCarHandler = async (id) => {\n    const updateEl = document.querySelector(\".update-car__button\");\n    updateEl.disabled = false;\n    const input = document.querySelector(\".update-car__input\");\n    const color = document.querySelector(\".update-car__color\");\n    const selectedCar = await api_1.default.getCar(id);\n    appState.currentCar.data = selectedCar;\n    inputsUpdateData.name = selectedCar.name;\n    inputsUpdateData.color = selectedCar.color;\n    input.value = selectedCar.name;\n    color.value = selectedCar.color;\n};\nconst stopCar = async (id) => {\n    const car = document.querySelector(`[data-car-id=\"${id}\"]`);\n    const startEl = document.querySelector(`[data-start-car-id=\"${id}\"]`);\n    const stopEl = document.querySelector(`[data-stop-car-id=\"${id}\"]`);\n    cancelAnimationFrame(carsAnimationIds[id]);\n    await api_1.default\n        .stopCarEngine(id)\n        .then(() => {\n        car.style.left = `0%`;\n        startEl.disabled = false;\n        stopEl.disabled = true;\n    })\n        .finally(() => {\n        car.style.left = `0%`;\n        startEl.disabled = false;\n        stopEl.disabled = true;\n    });\n};\nconst resetCars = () => {\n    if (Array.isArray(appState.cars)) {\n        appState.cars.forEach((car) => {\n            stopCar(car.id);\n        });\n    }\n};\nconst drawGarageButtons = (view) => {\n    const createCar = document.createElement(\"div\");\n    const updateCar = document.createElement(\"div\");\n    const createCarInput = document.createElement(\"input\");\n    const createCarColor = document.createElement(\"input\");\n    const updateCarInput = document.createElement(\"input\");\n    const updateCarColor = document.createElement(\"input\");\n    const createCarButton = document.createElement(\"button\");\n    const updateCarButton = document.createElement(\"button\");\n    const bottomButtons = document.createElement(\"div\");\n    const raceButton = document.createElement(\"button\");\n    const resetButton = document.createElement(\"button\");\n    const generateCarsButton = document.createElement(\"button\");\n    createCar.classList.add(\"create-car\");\n    updateCar.classList.add(\"update-car\");\n    createCarInput.classList.add(\"create-car__input\");\n    createCarColor.classList.add(\"create-car__color\", \"app__input-color\");\n    updateCarInput.classList.add(\"update-car__input\");\n    updateCarColor.classList.add(\"update-car__color\", \"app__input-color\");\n    createCarButton.classList.add(\"create-car__button\", \"app__button\");\n    updateCarButton.classList.add(\"update-car__button\", \"app__button\");\n    bottomButtons.classList.add(\"bottom-buttons\");\n    raceButton.classList.add(\"race-button\", \"app__button\");\n    resetButton.classList.add(\"reset-button\", \"app__button\");\n    generateCarsButton.classList.add(\"generate-cars-button\", \"app__button\");\n    createCarButton.innerText = \"create car\";\n    createCarInput.setAttribute(\"name\", \"carName\");\n    createCarColor.setAttribute(\"type\", \"color\");\n    createCarColor.setAttribute(\"name\", \"carColor\");\n    updateCarButton.innerText = \"update car\";\n    updateCarButton.disabled = true;\n    updateCarInput.setAttribute(\"name\", \"updateCarName\");\n    updateCarColor.setAttribute(\"type\", \"color\");\n    updateCarColor.setAttribute(\"name\", \"updateCarColor\");\n    raceButton.innerText = \"race\";\n    resetButton.innerText = \"reset\";\n    generateCarsButton.innerText = \"generate cars\";\n    createCar.append(createCarInput, createCarColor, createCarButton);\n    updateCar.append(updateCarInput, updateCarColor, updateCarButton);\n    bottomButtons.append(raceButton, resetButton, generateCarsButton);\n    view.append(createCar, updateCar, bottomButtons);\n    raceButton.addEventListener(\"click\", startRace);\n    resetButton.addEventListener(\"click\", resetCars);\n    generateCarsButton.addEventListener(\"click\", generateCars);\n    createCar.addEventListener(\"click\", () => api_1.default.createCar({\n        name: inputsCreateData.name,\n        color: inputsCreateData.color,\n    }));\n    createCarInput.addEventListener(\"input\", () => {\n        inputsCreateData.name = createCarInput.value;\n    });\n    createCarColor.addEventListener(\"change\", () => {\n        inputsCreateData.color = createCarColor.value;\n    });\n    updateCarButton.addEventListener(\"click\", () => {\n        if (appState.currentCar.data) {\n            api_1.default.updateCar(appState.currentCar.data.id, {\n                name: inputsUpdateData.name,\n                color: inputsUpdateData.color,\n            });\n        }\n        updateCarButton.disabled = true;\n    });\n    updateCarInput.addEventListener(\"input\", (e) => {\n        const input = e.target;\n        inputsUpdateData.name = input.value;\n        updateCarInput.value = inputsUpdateData.name;\n    });\n    updateCarColor.addEventListener(\"change\", (e) => {\n        const input = e.target;\n        inputsUpdateData.color = input.value;\n        updateCarColor.value = inputsUpdateData.color;\n    });\n};\nconst deleteCar = async (id) => {\n    api_1.default.deleteCar(id);\n    api_1.default.deleteWinner(id);\n    globFunc.updateCarsElements();\n};\nconst drawCarElement = (carInfo) => {\n    const carsBody = document.querySelector(\".cars\");\n    const carItem = document.createElement(\"div\");\n    const carButtons = document.createElement(\"div\");\n    const selectButton = document.createElement(\"button\");\n    const removeButton = document.createElement(\"button\");\n    const carsName = document.createElement(\"h2\");\n    const startStopButtons = document.createElement(\"div\");\n    const startButton = document.createElement(\"button\");\n    const stopButton = document.createElement(\"button\");\n    const carIcon = document.createElement(\"div\");\n    const roadBlock = document.createElement(\"div\");\n    const road = document.createElement(\"div\");\n    const car = document.createElement(\"div\");\n    const finishFlag = document.createElement(\"div\");\n    carItem.classList.add(\"car__item\");\n    carButtons.classList.add(\"car__buttons\");\n    selectButton.classList.add(\"select-button\", \"app__button\");\n    removeButton.classList.add(\"remove-button\", \"app__button\");\n    carsName.classList.add(\"cars-name\");\n    startStopButtons.classList.add(\"start-stop__buttons\");\n    startButton.classList.add(\"start-button\", \"app__button\");\n    stopButton.classList.add(\"stop-button\", \"app__button\");\n    carIcon.classList.add(\"car-icon\");\n    roadBlock.classList.add(\"roadBlock\");\n    road.classList.add(\"road\");\n    car.classList.add(\"car\");\n    finishFlag.classList.add(\"finish-flag\");\n    car.dataset.carId = String(carInfo.id);\n    startButton.dataset.startCarId = String(carInfo.id);\n    stopButton.dataset.stopCarId = String(carInfo.id);\n    carIcon.innerHTML = race_car_icon_svg_1.default;\n    const icon = carIcon.children[0];\n    icon.style.color = carInfo.color;\n    selectButton.innerText = \"select\";\n    removeButton.innerText = \"remove\";\n    carsName.innerText = carInfo.name;\n    startButton.innerText = \"start\";\n    stopButton.innerText = \"stop\";\n    stopButton.disabled = true;\n    carItem.append(carButtons, startStopButtons, roadBlock);\n    carButtons.append(selectButton, removeButton, carsName);\n    startStopButtons.append(startButton, stopButton);\n    car.append(carIcon);\n    road.append(finishFlag);\n    roadBlock.append(startStopButtons, car, road);\n    carsBody?.append(carItem);\n    selectButton.addEventListener(\"click\", () => selectCarHandler(carInfo.id));\n    removeButton.addEventListener(\"click\", () => deleteCar(carInfo.id));\n    startButton.addEventListener(\"click\", async () => {\n        startCar(carInfo.id);\n    });\n    stopButton.addEventListener(\"click\", () => stopCar(carInfo.id));\n};\nconst drawCars = (cars) => {\n    cars.forEach((car) => {\n        drawCarElement(car);\n    });\n};\nconst updateCarsElements = () => {\n    const garageBody = document.querySelector(\".garage\");\n    const carsBody = document.querySelector(\".cars\");\n    carsBody?.childNodes.forEach((element) => {\n        element.remove();\n    });\n    api_1.default\n        .getCars(currentPage, 7)\n        .then((data) => {\n        const headersCount = Number(data.headers.get(\"x-total-count\"));\n        updatePageTitle(\"Garage\", headersCount, currentPage);\n        return data.json();\n    })\n        .then((resBody) => {\n        const cars = resBody;\n        appState.cars = cars;\n        drawCars(cars);\n    });\n};\nglobFunc.updateCarsElements = updateCarsElements;\nconst drawGaragePage = () => {\n    currentPageName = \"Garage\";\n    let totalItems = 1;\n    const pageLimit = 7;\n    const garageBody = document.createElement(\"section\");\n    const garageView = document.createElement(\"div\");\n    const carsBody = document.createElement(\"div\");\n    carsBody.classList.add(\"cars\");\n    garageBody.classList.add(\"garage\");\n    garageView.classList.add(\"view\", \"view__garage\");\n    drawGarageButtons(garageBody);\n    const response = api_1.default.getCars();\n    garageView.append(garageBody);\n    wrapper.append(garageView);\n    response\n        .then((data) => {\n        const headersCount = Number(data.headers.get(\"x-total-count\"));\n        totalItems = headersCount;\n        drawViewTitle(garageBody, \"Garage\", headersCount, currentPage);\n        return data.json();\n    })\n        .then((resBody) => {\n        const cars = resBody;\n        appState.cars = cars;\n        totalPages = Math.ceil(totalItems / pageLimit);\n        garageBody.append(carsBody);\n        drawCars(cars);\n    });\n};\nconst drawWinnerElement = (winnerInfo) => {\n    let currentCar;\n    const nameCol = document.createElement(\"td\");\n    const carCol = document.createElement(\"td\");\n    carCol.innerHTML = race_car_icon_svg_1.default;\n    const icon = carCol.children[0];\n    api_1.default.getCar(winnerInfo.id).then((data) => {\n        currentCar = data;\n        nameCol.innerText = String(currentCar.name);\n        icon.style.color = String(currentCar.color);\n    });\n    const row = document.createElement(\"tr\");\n    const numberCol = document.createElement(\"td\");\n    const winsCol = document.createElement(\"td\");\n    const timeCol = document.createElement(\"td\");\n    const carIcon = document.createElement(\"div\");\n    row.classList.add(\"table__row\", \"winners__item\");\n    numberCol.classList.add(\"table__col\");\n    carCol.classList.add(\"table__col\");\n    nameCol.classList.add(\"table__col\");\n    winsCol.classList.add(\"table__col\");\n    timeCol.classList.add(\"table__col\");\n    carIcon.classList.add(\"winner-icon\");\n    numberCol.innerText = String(winnerInfo.id);\n    winsCol.innerText = String(winnerInfo.wins);\n    timeCol.innerText = String(winnerInfo.time);\n    row.append(numberCol, carCol, carCol, nameCol, winsCol, timeCol);\n    return row;\n};\nconst drawWinnersElement = (winners) => {\n    const winnersTableBody = document.createElement(\"tbody\");\n    winnersTableBody.classList.add(\"table__body\", \"winners__list\");\n    winners.forEach((win) => {\n        winnersTableBody.append(drawWinnerElement(win));\n    });\n    return winnersTableBody;\n};\nconst updateWinnersElemement = () => {\n    const winnersList = document.querySelector(\".winners__list\");\n    const winnersElements = document.querySelectorAll(\".winners__item\");\n    winnersElements.forEach((element) => {\n        element.remove();\n    });\n    appState.winners.forEach((win) => {\n        winnersList?.append(drawWinnerElement(win));\n    });\n};\nglobFunc.updateWinnersElemement = updateWinnersElemement;\nlet closureSort = \"id\";\nlet order = \"ASC\";\nconst sortWinnersBy = async (sort) => {\n    if (closureSort === sort) {\n        if (order === \"ASC\") {\n            order = \"DESC\";\n        }\n        else {\n            order = \"ASC\";\n        }\n    }\n    closureSort = sort;\n    await api_1.default\n        .getWinners(currentPage, 10, sort, order)\n        .then((data) => {\n        const headersCount = Number(data.headers.get(\"x-total-count\"));\n        updatePageTitle(\"Winners\", headersCount, currentPage);\n        return data.json();\n    })\n        .then((resBody) => {\n        const winners = resBody;\n        appState.winners = winners;\n        updateWinnersElemement();\n    });\n};\nconst previousPage = () => {\n    if (currentPage > 1) {\n        currentPage -= 1;\n        if (currentPageName === \"Garage\") {\n            updateCarsElements();\n        }\n        else if (currentPageName === \"Winners\") {\n            updateWinnersElemement();\n        }\n    }\n};\nconst nextPage = () => {\n    if (currentPage < totalPages) {\n        currentPage += 1;\n        if (currentPageName === \"Garage\") {\n            updateCarsElements();\n        }\n        else if (currentPageName === \"Winners\") {\n            updateWinnersElemement();\n        }\n    }\n};\nconst drawPaginatorButtons = () => {\n    const paginatorStopButtons = document.createElement(\"div\");\n    const prevButton = document.createElement(\"button\");\n    const nextButton = document.createElement(\"button\");\n    paginatorStopButtons.classList.add(\"paginator__stop-buttons\");\n    prevButton.classList.add(\"prev-button\", \"app__button\");\n    nextButton.classList.add(\"next-button\", \"app__button\");\n    prevButton.innerText = \"prev\";\n    nextButton.innerText = \"next\";\n    prevButton.addEventListener(\"click\", () => previousPage());\n    nextButton.addEventListener(\"click\", () => nextPage());\n    paginatorStopButtons.append(prevButton, nextButton);\n    main.append(paginatorStopButtons);\n};\nconst drawWinnersPage = () => {\n    let totalItems = 1;\n    const pageLimit = 7;\n    currentPageName = \"Winners\";\n    const winnersBody = document.createElement(\"section\");\n    const winnersView = document.createElement(\"div\");\n    const winnersTable = document.createElement(\"table\");\n    const winnersTableHeaders = document.createElement(\"thead\");\n    const winnersTableHeaderRow = document.createElement(\"tr\");\n    winnersBody.classList.add(\"winners\");\n    winnersView.classList.add(\"view\", \"view__winners\");\n    winnersTable.classList.add(\"winners__table\");\n    winnersTableHeaders.classList.add(\"table__headers\");\n    winnersTableHeaderRow.classList.add(\"table__row\");\n    winnersTableHeaders.append(winnersTableHeaderRow);\n    const tableHeders = [\"Number\", \"Car\", \"Name\", \"Wins\", \"Best time(seconds)\"];\n    tableHeders.forEach((header) => {\n        const winnersTableHeader = document.createElement(\"th\");\n        winnersTableHeader.classList.add(\"table__header\");\n        winnersTableHeader.innerText = header;\n        winnersTableHeaderRow.append(winnersTableHeader);\n        if (header === \"Wins\") {\n            winnersTableHeader.addEventListener(\"click\", () => {\n                sortWinnersBy(\"wins\");\n            });\n            winnersTableHeader.classList.add(\"sortable-header\");\n        }\n        if (header === \"Best time(seconds)\") {\n            winnersTableHeader.addEventListener(\"click\", () => {\n                sortWinnersBy(\"time\");\n            });\n            winnersTableHeader.classList.add(\"sortable-header\");\n        }\n    });\n    winnersView.append(winnersBody);\n    winnersTable.append(winnersTableHeaders);\n    wrapper.append(winnersView);\n    api_1.default\n        .getWinners()\n        .then((data) => {\n        const headersCount = Number(data.headers.get(\"x-total-count\"));\n        totalItems = headersCount;\n        drawViewTitle(winnersBody, \"Winners\", headersCount, currentPage);\n        winnersBody.append(winnersTable);\n        return data.json();\n    })\n        .then((resBody) => {\n        const winners = resBody;\n        appState.winners = winners;\n        totalPages = Math.ceil(totalItems / pageLimit);\n        winnersTable.append(drawWinnersElement(winners));\n    });\n};\nconst switchPage = (name) => {\n    const views = document.querySelectorAll(\".view\");\n    views.forEach((view) => view.remove());\n    if (name === \"garage\") {\n        drawGaragePage();\n    }\n    else if (name === \"winners\") {\n        drawWinnersPage();\n    }\n};\nconst drawPageButtons = () => {\n    const headerButtons = document.createElement(\"div\");\n    const garageButton = document.createElement(\"button\");\n    const winnersButton = document.createElement(\"button\");\n    headerButtons.classList.add(\"header-buttons\");\n    garageButton.classList.add(\"garage-button\", \"app__button\");\n    winnersButton.classList.add(\"winners-button\", \"app__button\");\n    garageButton.innerText = \"garage\";\n    winnersButton.innerText = \"winners\";\n    garageButton.addEventListener(\"click\", () => switchPage(\"garage\"));\n    winnersButton.addEventListener(\"click\", () => switchPage(\"winners\"));\n    headerButtons.append(garageButton, winnersButton);\n    wrapper.append(headerButtons);\n};\nwindow.addEventListener(\"load\", () => {\n    drawPageButtons();\n    drawGaragePage();\n    drawPaginatorButtons();\n});\n\n\n//# sourceURL=webpack://async-race/./src/index.ts?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StartStop = void 0;\nvar StartStop;\n(function (StartStop) {\n    StartStop[\"start\"] = \"started\";\n    StartStop[\"stop\"] = \"stopped\";\n    StartStop[\"drive\"] = \"drive\";\n})(StartStop || (exports.StartStop = StartStop = {}));\n\n\n//# sourceURL=webpack://async-race/./src/types.ts?");

/***/ }),

/***/ "./src/assets/svg/race-car-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/race-car-icon.svg ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = \"<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?>\\r\\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\r\\n<!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\">\\r\\n<svg version=\\\"1.1\\\" id=\\\"race-car\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\"\\r\\n\\t y=\\\"0px\\\" viewBox=\\\"0 0 838 227.586\\\" enable-background=\\\"new 0 0 838 227.586\\\" fill=\\\"currentColor\\\" stroke=\\\"currentColor\\\"\\r\\n\\t xml:space=\\\"preserve\\\">\\r\\n<g id=\\\"car_parts\\\">\\r\\n\\t<g>\\r\\n\\t\\t<polygon fill=\\\"#404040\\\" points=\\\"577.517,187.511 554.065,179.134 576.37,85.91 678.521,85.91 720.84,184.273 687.242,190.996 \\t\\t\\r\\n\\t\\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M677.862,86.91l41.571,96.625l-32.275,6.458l-109.453-3.477l-22.459-8.022l21.913-91.584H677.862 M679.179,84.91H575.581\\r\\n\\t\\t\\tl-22.697,94.864l24.444,8.731l109.997,3.493l34.921-6.987L679.179,84.91L679.179,84.91z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<polygon fill=\\\"#404040\\\" points=\\\"107.819,184.018 84.984,177.335 107.279,84.162 208.845,84.162 251.167,182.532 218.156,189.246 \\r\\n\\t\\t\\t\\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M208.186,85.162l41.576,96.635l-31.683,6.444l-110.093-5.216l-21.807-6.382l21.89-91.481H208.186 M209.503,83.162H106.49\\r\\n\\t\\t\\tl-22.699,94.866l23.862,6.983l110.581,5.239l34.338-6.984L209.503,83.162L209.503,83.162z\\\"/>\\r\\n\\t</g>\\r\\n\\t<linearGradient id=\\\"SVGID_1_\\\" gradientUnits=\\\"userSpaceOnUse\\\" x1=\\\"26.7544\\\" y1=\\\"172.3892\\\" x2=\\\"26.7544\\\" y2=\\\"161.9126\\\">\\r\\n\\t\\t<stop  offset=\\\"0\\\" style=\\\"stop-color:#595959\\\"/>\\r\\n\\t\\t<stop  offset=\\\"0.5025\\\" style=\\\"stop-color:#FFFFFF\\\"/>\\r\\n\\t\\t<stop  offset=\\\"1\\\" style=\\\"stop-color:#1A1A1A\\\"/>\\r\\n\\t</linearGradient>\\r\\n\\t<polygon fill=\\\"url(#SVGID_1_)\\\" points=\\\"40.723,161.151 11.041,161.151 19.771,171.627 42.468,171.627 \\t\\\"/>\\r\\n\\t<path fill=\\\"currentColor\\\" stroke=\\\"#000000\\\" stroke-width=\\\"2.5\\\" stroke-miterlimit=\\\"10\\\" d=\\\"M28.501,102.368\\r\\n\\t\\tc2.372,17.24,2.946,32.766,1.745,46.561c-1.1,13.804-1.1,22.145,0,25.026c1.201,2.865,10.977,5.454,29.101,7.567\\r\\n\\t\\tc18.678,2.486,29.028,2.201,31.428-0.583c2.2-2.966,3.924-13.603,5.238-32.011c0.988-18.396,11.623-33.635,32.01-45.979\\r\\n\\t\\tc19.866-11.807,39.703-14.394,59.365-7.565c19.441,6.972,31.803,17.322,37.248,30.845c4.906,14.079,8.068,24.142,9.312,30.266\\r\\n\\t\\tc1.058,6.526,1.918,13.712,2.328,21.533c0.74,8.281,3.042,12.592,6.985,13.388c4.107,0.354,36.884,0.645,98.358,0.583\\r\\n\\t\\tc61.577,0.062,114.479,0.062,158.887,0c44.147,0.062,65.423-3.103,63.438-9.314c-1.464-6.438,1.123-20.239,8.146-41.323\\r\\n\\t\\tc6.777-21.466,20.001-34.979,39.577-40.739c19.527-5.741,38.502-4.303,57.035,4.076c18.268,8.872,29.194,22.384,32.596,40.737\\r\\n\\t\\tc3.495,18.448,5.797,30.811,6.981,37.249c1.117,6.212,16.639,7.936,46.558,5.238c29.887-3.051,48.571-5.063,55.875-6.4\\r\\n\\t\\tc7.649-0.962,9.084-5.276,4.656-12.806c-4.771-7.419-3.907-11.731,2.329-12.805c6.414-1.229,10.15-4.966,11.055-11.057\\r\\n\\t\\tc1.398-6.561,1.108-11.445-0.582-15.133c-1.758-3.216-25.618-11.841-71.585-25.607C710.543,90.28,670.866,81.083,637.276,76.76\\r\\n\\t\\tc-33.111-4.881-52.37-9.192-57.618-13.387c-5.105-3.855-26.954-13.631-65.768-29.1c-38.242-15.583-59.802-23.919-64.604-25.027\\r\\n\\t\\tc-4.4-1.193-31.137-1.769-79.733-1.743c-49.159-0.026-84.235,0.838-105.342,2.325c-21.444,1.963-39.844,4.263-55.29,6.986\\r\\n\\t\\tc-15.607,3.026-31.419,7.052-47.725,12.22c-15.895,5.182-32.284,10.069-48.888,14.55c-16.748,4.722-30.548,9.032-41.322,12.807\\r\\n\\t\\tc-11.078,4.277-17.977,6.574-20.952,6.981c-2.774,0.746-5.937-0.407-9.312-3.49c-3.526-2.667-7.837-4.391-12.804-5.239\\r\\n\\t\\tc-5.385-0.301-6.822,1.999-4.656,6.983c2.434,5.364,3.584,19.455,3.492,42.487\\\"/>\\r\\n\\t<path stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" d=\\\"M705.516,162.897h111.6l8.146-5.237l5.238-17.463\\r\\n\\t\\tc0,0-1.026-16.167-8.792-12.22c-8.968-0.812-37.771-2.256-37.771-2.256l-6.399,28.445h-73.765\\\"/>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\\"M42.785,154.039c-1.998,0-4.231-0.097-6.639-0.289c-9.168-0.339-15.998-2.266-19.793-5.575\\r\\n\\t\\t\\tc-3.976-3.351-6.736-7.212-8.449-11.817c-1.647-4.354-1.843-8.754-0.567-12.73l0.019-0.06l0.012-0.062\\r\\n\\t\\t\\tc0.779-4.158,4.913-6.18,12.636-6.18c0.298,0,0.602,0.003,0.91,0.01c1.771-0.036,3.422-0.054,4.994-0.054\\r\\n\\t\\t\\tc5.554,0,10.642,0.218,14.714,0.631c4.053,0.607,8.209,6.026,11.973,15.666c4.812,12.424,3.771,16.68,2.051,18.063\\r\\n\\t\\t\\tC53.276,152.734,50.102,154.039,42.785,154.039C42.785,154.039,42.786,154.039,42.785,154.039z\\\"/>\\r\\n\\t\\t<path d=\\\"M25.908,118.282c5.497,0,10.531,0.215,14.562,0.62c2.6,0.415,6.639,3.373,11.192,15.036\\r\\n\\t\\t\\tc5.017,12.953,3.321,16.15,2.365,16.919c-1.249,0.995-4.212,2.182-11.241,2.182c-1.972,0-4.179-0.096-6.56-0.286l-0.042-0.003\\r\\n\\t\\t\\tl-0.042-0.002c-8.894-0.327-15.509-2.17-19.156-5.349c-3.828-3.226-6.492-6.951-8.147-11.401\\r\\n\\t\\t\\tc-1.565-4.135-1.755-8.307-0.549-12.065l0.039-0.12l0.023-0.123c0.249-1.326,1.005-5.363,11.653-5.363\\r\\n\\t\\t\\tc0.292,0,0.588,0.003,0.89,0.01h0.042h0.042C22.654,118.299,24.313,118.282,25.908,118.282 M25.908,116.282\\r\\n\\t\\t\\tc-1.579,0-3.237,0.018-4.974,0.054c-0.315-0.007-0.626-0.01-0.931-0.01c-8.168,0-12.74,2.306-13.619,6.995\\r\\n\\t\\t\\tc-1.391,4.334-1.102,8.936,0.583,13.385c1.768,4.751,4.64,8.777,8.729,12.223c3.963,3.455,10.862,5.468,20.371,5.818\\r\\n\\t\\t\\tc2.461,0.196,4.7,0.292,6.718,0.292c6.216,0,10.346-0.911,12.488-2.618c2.912-2.34,2.337-8.662-1.746-19.205\\r\\n\\t\\t\\tc-3.967-10.16-8.28-15.621-12.804-16.298C37.003,116.541,32.056,116.282,25.908,116.282L25.908,116.282z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<polygon points=\\\"38.231,153.914 38.231,144.692 95.013,144.692 95.013,154.894 \\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M94.013,145.692v8.185l-54.782-0.946v-7.238H94.013 M96.013,143.692H37.231v11.204l58.782,1.016V143.692L96.013,143.692z\\\"\\r\\n\\t\\t\\t/>\\r\\n\\t</g>\\r\\n\\t<path fill=\\\"none\\\" stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" d=\\\"M29.962,107.605h90.644 M210.965,107.605\\r\\n\\t\\tl373.349,8.73 M687.708,118.234l136.389,9.743\\\"/>\\r\\n\\t<g>\\r\\n\\t\\t<polygon points=\\\"236.448,160.151 233.527,149.928 567.273,149.928 564.354,160.151 \\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M565.947,150.928l-2.348,8.223H237.203l-2.35-8.223H565.947 M568.599,148.928H232.201l3.493,12.223h329.415\\r\\n\\t\\t\\tL568.599,148.928L568.599,148.928z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\\"M164.135,221.843c-16.624,0-32.302-6.56-44.146-18.47c-12.337-12.406-19.076-29.053-18.976-46.873\\r\\n\\t\\t\\tc-0.093-16.458,6.187-31.883,17.683-43.445c12.103-12.171,28.5-18.875,46.171-18.875c0.418,0,0.833,0.004,1.253,0.012\\r\\n\\t\\t\\tc35.951,0.656,62.067,26.858,62.098,62.303c-0.031,36.032-28.349,65.348-63.126,65.348H164.135z\\\"/>\\r\\n\\t\\t<path d=\\\"M164.87,93.181v2c0.411,0,0.819,0.004,1.231,0.011c35.383,0.646,61.086,26.428,61.116,61.3\\r\\n\\t\\t\\tc-0.031,35.483-27.9,64.351-62.126,64.351l-0.491-0.002l-0.465,0.002c-16.356,0-31.783-6.455-43.438-18.176\\r\\n\\t\\t\\tc-12.147-12.216-18.783-28.609-18.685-46.185c-0.092-16.178,6.084-31.349,17.391-42.72c11.914-11.982,28.059-18.581,45.463-18.582\\r\\n\\t\\t\\tL164.87,93.181 M164.867,93.181c-35.558,0.001-65.058,27.283-64.854,63.313c-0.206,36.699,28.517,66.349,64.123,66.349\\r\\n\\t\\t\\tc0.159,0,0.32-0.001,0.479-0.002c0.161,0.001,0.316,0.002,0.476,0.002c35.369,0,64.095-29.651,64.126-66.349\\r\\n\\t\\t\\tc-0.032-36.46-26.955-62.642-63.08-63.302C165.712,93.185,165.291,93.181,164.867,93.181L164.867,93.181z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path fill=\\\"#BFBFBF\\\" d=\\\"M164.108,196.963c-22.491-0.021-40.17-17.798-40.249-40.473c0.079-22.269,18.002-40.392,39.954-40.392\\r\\n\\t\\t\\th0.584c10.484,0,20.809,4.361,28.327,11.965c7.572,7.658,11.676,17.752,11.556,28.419c0.12,10.766-3.944,20.861-11.441,28.449\\r\\n\\t\\t\\tc-7.545,7.637-18.018,12.021-28.733,12.031H164.108z\\\"/>\\r\\n\\t\\t<path d=\\\"M164.398,117.099c10.219,0,20.284,4.253,27.616,11.668c7.383,7.467,11.385,17.307,11.267,27.75\\r\\n\\t\\t\\tc0.117,10.474-3.844,20.315-11.153,27.713c-7.358,7.447-17.572,11.724-28.019,11.733c-10.446-0.01-20.256-4.036-27.624-11.338\\r\\n\\t\\t\\tc-7.46-7.394-11.589-17.387-11.626-28.124c0.077-21.725,17.551-39.401,38.954-39.402l0.308,0.001L164.398,117.099\\r\\n\\t\\t\\t M164.398,115.099c-0.096,0-0.194,0-0.291,0.001c-0.099,0-0.195-0.001-0.293-0.001c-22.364,0.001-40.873,18.369-40.954,41.396\\r\\n\\t\\t\\tc0.082,23.532,18.751,41.448,41.248,41.469c22.258-0.021,41.435-17.937,41.173-41.469\\r\\n\\t\\t\\tC205.542,133.467,186.533,115.099,164.398,115.099L164.398,115.099z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path fill=\\\"currentColor\\\" d=\\\"M163.994,190.999c-18.942,0-34.369-15.479-34.389-34.505c0.02-18.705,15.3-33.924,34.062-33.924h0.876\\r\\n\\t\\t\\tc18.535,0,33.818,15.225,34.067,33.938c-0.248,19.006-15.675,34.49-34.39,34.49H163.994z\\\"/>\\r\\n\\t\\t<path d=\\\"M164.543,123.57c17.982,0,32.811,14.769,33.067,32.926c-0.256,18.476-15.229,33.503-33.39,33.503h-0.119h-0.108\\r\\n\\t\\t\\tc-8.94,0-17.327-3.474-23.616-9.782c-6.292-6.312-9.763-14.737-9.772-23.72c0.019-18.155,14.851-32.926,33.062-32.927\\r\\n\\t\\t\\tc0.139,0,0.277,0.001,0.466,0.003C164.269,123.571,164.407,123.57,164.543,123.57 M164.543,121.57\\r\\n\\t\\t\\tc-0.144,0-0.291,0.001-0.436,0.003c-0.147-0.002-0.294-0.003-0.441-0.003c-19.436,0.001-35.042,15.75-35.062,34.925\\r\\n\\t\\t\\tc0.021,19.685,15.8,35.504,35.389,35.504c0.037,0,0.077,0,0.114,0c0.038,0,0.075,0,0.113,0c19.351,0,35.133-15.82,35.39-35.504\\r\\n\\t\\t\\tC199.354,137.318,183.748,121.57,164.543,121.57L164.543,121.57z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\\"M636.184,220.1c-15.641,0.001-30.41-6.184-41.587-17.413c-11.698-11.753-18.096-27.535-18.016-44.44\\r\\n\\t\\t\\tc-0.079-16.488,5.886-31.601,16.796-42.563c10.768-10.819,25.63-16.777,41.851-16.777c0.481,0,0.961,0.005,1.445,0.016\\r\\n\\t\\t\\tc34.934,0.743,60.221,25.689,60.129,59.316c0.046,16.934-6.388,32.731-18.115,44.491c-11.171,11.201-25.903,17.37-41.483,17.37\\r\\n\\t\\t\\tH636.184z\\\"/>\\r\\n\\t\\t<path d=\\\"M635.229,97.907v2h0.001c0.474,0,0.944,0.005,1.421,0.015c16.655,0.354,31.747,6.357,42.494,16.903\\r\\n\\t\\t\\tc10.785,10.582,16.7,25.289,16.656,41.423c0.045,16.659-6.284,32.206-17.823,43.776c-10.982,11.012-25.463,17.076-40.775,17.076\\r\\n\\t\\t\\tl-0.525-0.002l-0.494,0.002c-15.373,0-29.892-6.08-40.879-17.12c-11.509-11.563-17.803-27.093-17.724-43.748\\r\\n\\t\\t\\tc-0.078-16.209,5.783-31.068,16.503-41.841c10.578-10.629,25.189-16.483,41.144-16.484L635.229,97.907 M635.228,97.907\\r\\n\\t\\t\\tc-34.614,0.002-59.811,26.238-59.646,60.335c-0.165,34.761,26.99,62.858,60.603,62.858c0.17,0,0.342-0.001,0.511-0.002\\r\\n\\t\\t\\tc0.171,0.001,0.339,0.002,0.509,0.002c33.529,0,60.693-28.1,60.599-62.858c0.095-34.578-25.739-59.567-61.107-60.319\\r\\n\\t\\t\\tC636.202,97.912,635.716,97.907,635.228,97.907L635.228,97.907z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path fill=\\\"#A6A6A6\\\" d=\\\"M636.695,196.963c-21.454-0.021-38.366-16.521-38.503-37.565c0.137-21.177,17.824-39.079,38.625-39.079\\r\\n\\t\\t\\th0.778c20.523,0,37.391,17.311,37.6,38.588c-0.209,20.955-17.48,38.036-38.502,38.057H636.695z\\\"/>\\r\\n\\t\\t<path d=\\\"M637.596,121.319c9.705,0,18.846,3.898,25.74,10.978c6.903,7.089,10.76,16.543,10.859,26.581\\r\\n\\t\\t\\tc-0.203,20.43-17.027,37.066-37.499,37.086c-9.944-0.01-19.306-3.76-26.361-10.56c-7.121-6.863-11.078-16.101-11.143-25.986\\r\\n\\t\\t\\tc0.133-20.651,17.363-38.099,37.625-38.099l0.405,0.002L637.596,121.319 M637.596,119.319c-0.13,0-0.263,0.001-0.394,0.002\\r\\n\\t\\t\\tc-0.128-0.001-0.257-0.002-0.385-0.002c-21.301,0-39.484,18.196-39.625,40.086c0.142,21.779,18.036,38.538,39.502,38.559\\r\\n\\t\\t\\tc21.39-0.021,39.284-17.286,39.501-39.066C675.979,137.011,658.805,119.319,637.596,119.319L637.596,119.319z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path fill=\\\"currentColor\\\" d=\\\"M636.576,190.999c-17.923,0-32.566-14.696-32.644-32.761c0.077-17.738,14.54-32.176,32.241-32.176\\r\\n\\t\\t\\tl0.5,0.004l0.529-0.004c17.627,0,32.091,14.439,32.242,32.188c-0.151,18.049-14.795,32.747-32.643,32.748H636.576z\\\"/>\\r\\n\\t\\t<path d=\\\"M637.203,127.062c17.08,0,31.096,13.995,31.242,31.163c-0.146,17.52-14.342,31.773-31.643,31.773h-0.12h-0.106\\r\\n\\t\\t\\tc-17.374,0-31.568-14.25-31.644-31.748c0.075-17.197,14.09-31.188,31.241-31.188c0.161,0,0.322,0.001,0.485,0.004h0.03h0.03\\r\\n\\t\\t\\tC636.881,127.063,637.043,127.062,637.203,127.062 M637.203,125.062c-0.17,0-0.343,0.001-0.514,0.004\\r\\n\\t\\t\\tc-0.173-0.003-0.344-0.004-0.516-0.004c-18.371,0.001-33.162,14.959-33.241,33.18c0.08,18.711,15.086,33.757,33.644,33.757\\r\\n\\t\\t\\tc0.037,0,0.076,0,0.113,0c0.038,0,0.074,0,0.113,0c18.48,0,33.485-15.047,33.643-33.757\\r\\n\\t\\t\\tC670.289,140.02,655.501,125.062,637.203,125.062L637.203,125.062z\\\"/>\\r\\n\\t</g>\\r\\n\\t<path fill=\\\"none\\\" stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" d=\\\"M328.813,75.015v79.151 M552.884,79.954v74.213\\\"/>\\r\\n\\t<polygon stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" points=\\\"594.652,76.76 579.076,76.76 250.825,68.029 \\r\\n\\t\\t244.424,57.552 266.54,17.978 277.016,12.742 344.528,12.742 402.728,12.742 449.286,12.742 513.308,38.346 578.257,68.761 \\t\\\"/>\\r\\n\\t<g>\\r\\n\\t\\t<polygon fill=\\\"#696969\\\" points=\\\"280.009,61.842 290.031,18.978 319.083,18.978 319.083,63.496 \\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M318.083,19.978v42.475l-36.825-1.558l9.566-40.917H318.083 M320.083,17.978h-30.845l-10.477,44.813l41.322,1.748V17.978\\r\\n\\t\\t\\tL320.083,17.978z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<polygon fill=\\\"#696969\\\" points=\\\"474.242,67.046 469.345,60.518 447.936,18.246 568.572,70.338 \\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M450.076,20.26l113.231,48.894l-88.553-3.089l-4.558-6.077L450.076,20.26 M445.795,16.232l22.697,44.815l5.237,6.982\\r\\n\\t\\t\\tl100.108,3.493L445.795,16.232L445.795,16.232z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<polygon fill=\\\"#696969\\\" points=\\\"340.291,63.566 340.291,18.978 440.509,18.978 463.395,66.984 \\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M439.878,19.978l21.911,45.962l-120.499-3.346V19.978H439.878 M441.14,17.978H339.291v46.561l125.71,3.491L441.14,17.978\\r\\n\\t\\t\\tL441.14,17.978z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path fill=\\\"#B7B7B7\\\" d=\\\"M235.733,37.347c-0.188,0.004-0.3,0.006-0.41,0.006c-2.144,0-4.099-0.776-5.505-2.186\\r\\n\\t\\t\\tc-1.2-1.203-1.859-2.759-1.855-4.383c-0.003-1.642,0.656-3.208,1.858-4.412c1.394-1.396,3.33-2.166,5.452-2.166\\r\\n\\t\\t\\tc0.125,0,0.251,0.003,0.378,0.008c0.208-0.005,0.328-0.008,0.445-0.008c3.903,0,7.11,2.884,7.327,6.575\\r\\n\\t\\t\\tc-0.215,3.628-3.513,6.571-7.375,6.571C235.943,37.353,235.838,37.351,235.733,37.347z\\\"/>\\r\\n\\t\\t<path fill=\\\"#494949\\\" d=\\\"M236.096,25.207c3.295,0,6.109,2.492,6.325,5.575c-0.217,3.082-3.053,5.571-6.374,5.571\\r\\n\\t\\t\\tc-0.091,0-0.182-0.001-0.273-0.005l-0.078-0.003l-0.078,0.003c-0.099,0.004-0.197,0.005-0.294,0.005\\r\\n\\t\\t\\tc-1.849,0-3.598-0.689-4.797-1.892c-1.011-1.013-1.566-2.318-1.563-3.683c-0.003-1.37,0.553-2.684,1.566-3.699\\r\\n\\t\\t\\tc1.204-1.207,2.889-1.872,4.744-1.872c0.111,0,0.223,0.002,0.335,0.007l0.088,0.004l0.089-0.004\\r\\n\\t\\t\\tC235.889,25.209,235.993,25.207,236.096,25.207 M236.096,23.207c-0.133,0-0.268,0.003-0.402,0.009\\r\\n\\t\\t\\tc-0.142-0.006-0.282-0.009-0.421-0.009c-4.677,0-8.318,3.399-8.31,7.575c-0.009,4.161,3.659,7.571,8.361,7.571\\r\\n\\t\\t\\tc0.123,0,0.246-0.002,0.37-0.007c0.118,0.005,0.236,0.007,0.353,0.007c4.487,0,8.163-3.41,8.377-7.571\\r\\n\\t\\t\\tC244.211,26.606,240.561,23.207,236.096,23.207L236.096,23.207z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\\"M281.311,19.978l-12.768,42.561h-12.989l-2.477-4.955l16.831-31.418l6.189-6.188H281.311 M283.999,17.978h-8.73\\r\\n\\t\\t\\tl-6.984,6.983l-17.46,32.591l3.493,6.986h15.714L283.999,17.978L283.999,17.978z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<path d=\\\"M439.392,171.627c-3.389,0.08-6.775,0.096-10.163,0.128c-3.388,0.046-6.773,0.03-10.159,0.019l-10.158-0.029\\r\\n\\t\\t\\t\\tl-10.155-0.111l-10.153-0.172l-10.153-0.224l-20.302-0.51l-20.302-0.509c-6.768-0.154-13.533-0.377-20.299-0.582l-20.298-0.622\\r\\n\\t\\t\\t\\tc-6.767-0.189-13.53-0.468-20.295-0.7l1.99-1.927l-0.092,16.878l-1.835-1.835l34.948,0.329l34.947,0.399l8.737,0.1l4.369,0.05\\r\\n\\t\\t\\t\\tl1.092,0.013l0.273,0.003l0.214-0.01l0.545-0.025l2.182-0.104l17.456-0.827l17.456-0.827l17.461-0.758l-17.417,1.445\\r\\n\\t\\t\\t\\tl-17.422,1.376l-17.422,1.375l-2.178,0.173l-0.544,0.043l-0.332,0.021l-0.273,0.003l-1.092,0.013l-4.369,0.05l-8.737,0.1\\r\\n\\t\\t\\t\\tl-34.947,0.399l-34.948,0.329l-1.825,0.018l-0.01-1.853l-0.092-16.878l-0.011-1.988l2.002,0.062\\r\\n\\t\\t\\t\\tc6.766,0.209,13.533,0.372,20.298,0.623l20.295,0.702c6.765,0.235,13.531,0.453,20.294,0.741l20.292,0.813l20.292,0.814\\r\\n\\t\\t\\t\\tl10.144,0.429l10.144,0.47l10.142,0.53l10.14,0.613c3.38,0.202,6.76,0.399,10.138,0.66\\r\\n\\t\\t\\t\\tC432.636,171.104,436.015,171.333,439.392,171.627z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\\"M72.092,54.812c0,0,64.177,4.93,128.354,9.86c16.045,1.194,32.09,2.388,47.133,3.507\\r\\n\\t\\t\\tc7.523,0.536,14.792,1.135,21.692,1.553c6.898,0.449,13.421,0.873,19.441,1.265c24.082,1.567,40.137,2.612,40.137,2.612\\r\\n\\t\\t\\tl-0.072,1.346c0,0-16.063-1.004-40.157-2.511c-6.024-0.376-12.549-0.785-19.452-1.216c-6.905-0.401-14.172-0.982-21.698-1.498\\r\\n\\t\\t\\tc-15.049-1.082-31.102-2.235-47.154-3.389c-64.19-4.767-128.379-9.534-128.379-9.534L72.092,54.812z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"520.64,79.171 519.101,75.071 525.103,65.498 528.401,64.285 526.71,75.399 543.214,79.171 \\t\\t\\\"/>\\r\\n\\t\\t<path d=\\\"M527.779,65.046l-1.493,9.819l-0.14,0.918l0.905,0.207l11.73,2.681h-17.797l-1.329-3.544l5.779-9.219L527.779,65.046\\r\\n\\t\\t\\t M529.022,63.523l-4.253,1.564l-6.224,9.928l1.747,4.656h27.353l-20.371-4.656L529.022,63.523L529.022,63.523z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path fill=\\\"currentColor\\\" d=\\\"M510.816,51.931c6.57,2.071,16.205,5.329,17.591,6.41l0.307,0.238c2.084,1.619,3.331,2.688,2.914,3.74\\r\\n\\t\\t\\tc-1.114,1.174-11.181,4.809-20.812,7.843V51.931z\\\"/>\\r\\n\\t\\t<path d=\\\"M511.816,53.296c7.401,2.358,14.867,4.992,15.977,5.833l0.308,0.24c0.839,0.652,2.351,1.826,2.586,2.407\\r\\n\\t\\t\\tc-1.948,1.261-10.62,4.381-18.87,7.019V53.296 M509.816,50.571v20.951c0,0,21.807-6.773,22.697-8.731s-1.313-3.541-3.491-5.238\\r\\n\\t\\t\\tC526.846,55.854,509.816,50.571,509.816,50.571L509.816,50.571z\\\"/>\\r\\n\\t</g>\\r\\n\\t<line fill=\\\"none\\\" stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" x1=\\\"515.055\\\" y1=\\\"53.75\\\" x2=\\\"515.055\\\" y2=\\\"69.776\\\"/>\\r\\n\\t<g>\\r\\n\\t\\t<rect x=\\\"347.306\\\" y=\\\"86.014\\\" fill=\\\"currentColor\\\" width=\\\"13.217\\\" height=\\\"6.234\\\"/>\\r\\n\\t\\t<path d=\\\"M360.148,86.389v5.484h-12.467v-5.484H360.148 M360.898,85.639h-13.967v6.984h13.967V85.639L360.898,85.639z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\\"M377.366,84.662v7.477h-31.338v-7.477H377.366 M378.866,83.162h-34.338v10.477h34.338V83.162L378.866,83.162z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<rect x=\\\"326.321\\\" y=\\\"20.723\\\" width=\\\"6.731\\\" height=\\\"42.816\\\"/>\\r\\n\\t\\t<path d=\\\"M332.052,21.723v40.816h-4.731V21.723H332.052 M334.052,19.723h-8.731v44.816h8.731V19.723L334.052,19.723z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path fill=\\\"#9E9E9E\\\" d=\\\"M799.881,179.72c-14.103,0-36.042-1.13-52.652-2.126c13.931-0.509,30.808-1.521,40.354-3.529\\r\\n\\t\\t\\tc14.879-3.131,21.854-6.749,24.074-8.09c1.787,2.358,4.874,7.292,4.07,10.391c-0.295,1.136-1.103,1.945-2.469,2.476\\r\\n\\t\\t\\tc-1.032,0.401-4.19,0.879-13.374,0.879C799.883,179.72,799.882,179.72,799.881,179.72z\\\"/>\\r\\n\\t\\t<path fill=\\\"#9E9E9E\\\" d=\\\"M811.377,167.287c1.667,2.354,4.015,6.384,3.382,8.827c-0.133,0.512-0.471,1.255-1.862,1.796\\r\\n\\t\\t\\tc-0.628,0.243-3.153,0.811-13.016,0.811c-9.159,0-21.638-0.478-33.809-1.086c8.312-0.593,16.172-1.424,21.716-2.591\\r\\n\\t\\t\\tC801.297,172.201,808.417,168.923,811.377,167.287 M811.877,164.641c0,0-6.227,4.6-24.501,8.445\\r\\n\\t\\t\\tc-18.273,3.846-63.112,4.016-63.112,4.016s50.188,3.618,75.617,3.618c6.91,0,11.989-0.267,13.739-0.946\\r\\n\\t\\t\\tC821.811,176.594,811.877,164.641,811.877,164.641L811.877,164.641z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<polygon fill=\\\"#A3A3A3\\\" points=\\\"519.136,76.478 520.842,78.403 535.27,79.681 450.646,86.639 \\t\\t\\\"/>\\r\\n\\t\\t<path fill=\\\"#A3A3A3\\\" d=\\\"M518.746,77.546l1.083,1.222l0.528,0.595l0.792,0.07l2.366,0.209l-42.41,3.488L518.746,77.546\\r\\n\\t\\t\\t M519.524,75.409l-99.336,14.738l126.834-10.43l-25.696-2.275L519.524,75.409L519.524,75.409z\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\\"M47.744,63.539c0,0,45.333,1.602,113.333,4.003c16.999,0.62,35.415,1.292,54.893,2.001\\r\\n\\t\\t\\tc19.479,0.654,40.021,1.344,61.271,2.057c21.25,0.713,43.208,1.45,65.521,2.199c22.316,0.64,44.985,1.29,67.655,1.939\\r\\n\\t\\t\\tc11.335,0.317,22.67,0.634,33.961,0.95c5.646,0.158,11.28,0.315,16.897,0.473c5.619,0.103,11.221,0.206,16.8,0.308\\r\\n\\t\\t\\tc22.319,0.406,44.284,0.805,65.54,1.191c42.555,0.756,82.239,3.343,116.034,7.516c4.221,0.551,8.361,1.022,12.393,1.608\\r\\n\\t\\t\\tc4.031,0.583,7.969,1.152,11.808,1.707c3.829,0.625,7.559,1.234,11.185,1.827c3.63,0.569,7.128,1.281,10.532,1.883\\r\\n\\t\\t\\tc1.701,0.312,3.374,0.619,5.02,0.92c1.639,0.337,3.249,0.668,4.831,0.993c3.161,0.667,6.218,1.263,9.137,1.921\\r\\n\\t\\t\\tc5.828,1.357,11.2,2.519,15.998,3.795c2.405,0.611,4.682,1.19,6.824,1.734c2.129,0.592,4.125,1.148,5.981,1.665\\r\\n\\t\\t\\tc3.715,1.03,6.872,1.915,9.404,2.727c5.081,1.563,7.791,2.396,7.791,2.396s-2.722-0.794-7.824-2.284\\r\\n\\t\\t\\tc-2.542-0.775-5.711-1.614-9.438-2.59c-1.863-0.49-3.865-1.016-6.001-1.578c-2.148-0.513-4.432-1.059-6.844-1.635\\r\\n\\t\\t\\tc-4.811-1.206-10.195-2.289-16.035-3.56c-2.924-0.615-5.986-1.166-9.151-1.787c-1.584-0.307-3.196-0.62-4.836-0.938\\r\\n\\t\\t\\tc-1.646-0.286-3.319-0.577-5.021-0.873c-3.405-0.57-6.904-1.249-10.535-1.783c-3.625-0.558-7.355-1.131-11.184-1.72\\r\\n\\t\\t\\tc-3.838-0.519-7.775-1.05-11.806-1.595c-4.029-0.547-8.169-0.979-12.388-1.49c-16.891-1.894-35.236-3.528-54.679-4.688\\r\\n\\t\\t\\tc-19.444-1.171-39.969-1.889-61.216-2.174c-21.264-0.367-43.236-0.747-65.563-1.132c-5.582-0.097-11.186-0.194-16.806-0.292\\r\\n\\t\\t\\tc-5.619-0.152-11.254-0.305-16.9-0.458c-11.293-0.305-22.63-0.612-33.967-0.919c-22.673-0.629-45.347-1.259-67.666-1.878\\r\\n\\t\\t\\tc-22.315-0.729-44.277-1.446-65.529-2.141c-21.253-0.694-41.797-1.365-61.279-2.002c-19.478-0.71-37.894-1.381-54.893-2.001\\r\\n\\t\\t\\tC93,67.258,47.67,65.538,47.67,65.538L47.744,63.539z\\\"/>\\r\\n\\t</g>\\r\\n\\t<line fill=\\\"none\\\" stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" x1=\\\"47.707\\\" y1=\\\"64.539\\\" x2=\\\"47.544\\\" y2=\\\"107.605\\\"/>\\r\\n\\t<g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"627.61,144.498 626.469,141.815 628.222,139.485 631.116,139.837 632.257,142.52 630.505,144.85 \\r\\n\\t\\t\\t\\t\\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M628.447,140.016l2.321,0.283l0.915,2.15l-1.404,1.869l-2.321-0.282l-0.916-2.151L628.447,140.016 M627.995,138.954\\r\\n\\t\\t\\t\\tl-2.1,2.792l1.368,3.214l3.468,0.422l2.099-2.792l-1.367-3.213L627.995,138.954L627.995,138.954z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"649.597,148.648 648.717,145.867 650.683,143.714 653.53,144.343 654.412,147.124 \\r\\n\\t\\t\\t\\t652.445,149.275 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M650.857,144.265l2.283,0.504l0.707,2.23l-1.577,1.726l-2.284-0.504l-0.705-2.23L650.857,144.265 M650.509,143.164\\r\\n\\t\\t\\t\\tl-2.355,2.579l1.054,3.331l3.412,0.752l2.356-2.578l-1.056-3.33L650.509,143.164L650.509,143.164z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"652.318,168.002 651.708,165.15 653.874,163.197 656.646,164.093 657.257,166.945 655.091,168.9 \\r\\n\\t\\t\\t\\t\\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M653.994,163.761l2.224,0.719l0.489,2.287l-1.736,1.568l-2.224-0.72l-0.49-2.288L653.994,163.761 M653.753,162.632\\r\\n\\t\\t\\t\\tl-2.595,2.34l0.731,3.417l3.322,1.075l2.594-2.342l-0.73-3.416L653.753,162.632L653.753,162.632z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"633.438,178.48 633.104,175.584 635.446,173.846 638.122,175.005 638.456,177.902 \\r\\n\\t\\t\\t\\t636.115,179.64 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M635.512,174.42l2.146,0.93l0.269,2.322l-1.878,1.394l-2.146-0.931l-0.269-2.321L635.512,174.42 M635.38,173.273\\r\\n\\t\\t\\t\\tl-2.806,2.082l0.4,3.469l3.207,1.39l2.805-2.082l-0.4-3.47L635.38,173.273L635.38,173.273z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"617.123,163.654 617.068,160.737 619.563,159.231 622.116,160.64 622.171,163.557 \\r\\n\\t\\t\\t\\t619.677,165.063 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M619.574,159.808l2.047,1.131l0.045,2.34l-2.001,1.207l-2.047-1.131l-0.045-2.34L619.574,159.808 M619.552,158.654\\r\\n\\t\\t\\t\\tl-2.989,1.804l0.066,3.494l3.059,1.688l2.989-1.804l-0.066-3.494L619.552,158.654L619.552,158.654z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<circle fill=\\\"currentColor\\\" stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" cx=\\\"636.919\\\" cy=\\\"158.479\\\" r=\\\"6.278\\\"/>\\r\\n\\t</g>\\r\\n\\t<g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"162.211,139.598 162.563,136.705 165.247,135.563 167.577,137.316 167.224,140.209 \\r\\n\\t\\t\\t\\t164.542,141.351 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M165.177,136.136l1.869,1.405l-0.283,2.32l-2.151,0.916l-1.869-1.405l0.283-2.32L165.177,136.136 M165.316,134.99\\r\\n\\t\\t\\t\\tl-3.214,1.368l-0.422,3.467l2.792,2.1l3.214-1.368l0.422-3.467L165.316,134.99L165.316,134.99z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"178.805,152.798 179.434,149.95 182.213,149.069 184.365,151.037 183.737,153.885 \\r\\n\\t\\t\\t\\t180.958,154.765 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M182.089,149.633l1.726,1.578l-0.503,2.284l-2.229,0.705l-1.727-1.577l0.504-2.284L182.089,149.633 M182.337,148.505\\r\\n\\t\\t\\t\\tl-3.33,1.055l-0.753,3.412l2.579,2.356l3.33-1.054l0.751-3.412L182.337,148.505L182.337,148.505z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"172.989,172.375 173.886,169.601 176.738,168.992 178.692,171.155 177.794,173.929 \\r\\n\\t\\t\\t\\t174.942,174.54 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M176.561,169.542l1.567,1.734l-0.72,2.225l-2.287,0.49l-1.566-1.735l0.72-2.226L176.561,169.542 M176.916,168.443\\r\\n\\t\\t\\t\\tl-3.417,0.729l-1.075,3.324l2.34,2.593l3.417-0.731l1.076-3.324L176.916,168.443L176.916,168.443z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"148.44,172.059 149.599,169.385 152.496,169.051 154.233,171.393 153.076,174.067 \\r\\n\\t\\t\\t\\t150.179,174.402 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M152.266,169.581l1.394,1.879l-0.929,2.145l-2.323,0.268l-1.395-1.879l0.929-2.145L152.266,169.581 M152.725,168.521\\r\\n\\t\\t\\t\\tl-3.47,0.4l-1.388,3.204l2.083,2.806l3.47-0.4l1.387-3.204L152.725,168.521L152.725,168.521z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<polygon fill=\\\"currentColor\\\" points=\\\"143.297,151.384 144.708,148.83 147.622,148.775 149.128,151.271 147.717,153.825 \\r\\n\\t\\t\\t\\t144.804,153.88 \\t\\t\\t\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M147.342,149.28l1.208,2.003l-1.131,2.048l-2.336,0.045l-1.208-2.003l1.131-2.048L147.342,149.28 M147.9,148.269\\r\\n\\t\\t\\t\\tl-3.491,0.066l-1.689,3.06l1.805,2.991l3.491-0.067l1.689-3.059L147.9,148.269L147.9,148.269z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t\\t<circle fill=\\\"currentColor\\\" stroke=\\\"#000000\\\" stroke-width=\\\"2\\\" stroke-miterlimit=\\\"10\\\" cx=\\\"163.282\\\" cy=\\\"156.36\\\" r=\\\"6.278\\\"/>\\r\\n\\t</g>\\r\\n\\t\\r\\n\\t\\t<circle fill=\\\"none\\\" stroke=\\\"#000000\\\" stroke-width=\\\"0.5\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-miterlimit=\\\"10\\\" cx=\\\"351.884\\\" cy=\\\"89.131\\\" r=\\\"2.029\\\"/>\\r\\n</g>\\r\\n</svg>\\r\\n\";\n\n//# sourceURL=webpack://async-race/./src/assets/svg/race-car-icon.svg?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ebe6f402d0edd2fa38f0")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "async-race:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateasync_race"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
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
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;