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

/***/ "./build/features/calculator.service.js":
/*!**********************************************!*\
  !*** ./build/features/calculator.service.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n// export class CalculatorService {\r\n//     constructor() {\r\nexports.__esModule = true;\r\n//     }\r\n//     public add(a: number, b: number): number {\r\n//         return a + b;\r\n//     }\r\n// }\r\n// class CalculatorService {\r\n//     constructor() {\r\n//     }\r\n//     public add(a: number, b: number): number {\r\n//         return a + b;\r\n//     }\r\n// }\r\n// export { CalculatorService };\r\nvar CalculatorService = /** @class */ (function () {\r\n    function CalculatorService() {\r\n    }\r\n    CalculatorService.prototype.add = function (a, b) {\r\n        return a + b;\r\n    };\r\n    return CalculatorService;\r\n}());\r\nexports[\"default\"] = CalculatorService;\r\n\n\n//# sourceURL=webpack://ts-apps/./build/features/calculator.service.js?");

/***/ }),

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\n// import { CalculatorService } from \"./features/calculator.service\";\r\nvar calculator_service_1 = __webpack_require__(/*! ./features/calculator.service */ \"./build/features/calculator.service.js\");\r\nfunction init() {\r\n    var cService = new calculator_service_1[\"default\"]();\r\n    console.log(cService.add(10, 30));\r\n}\r\ninit();\r\n\n\n//# sourceURL=webpack://ts-apps/./build/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./build/index.js");
/******/ 	
/******/ })()
;