/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mathOperations.js":
/*!*******************************!*\
  !*** ./src/mathOperations.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sum),
/* harmony export */   dvs: () => (/* binding */ division),
/* harmony export */   mult: () => (/* binding */ multiplication),
/* harmony export */   sub: () => (/* binding */ subtraction)
/* harmony export */ });
function sum(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}


/***/ }),

/***/ "./src/stringManipulation.js":
/*!***********************************!*\
  !*** ./src/stringManipulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ concat),
/* harmony export */   inverter: () => (/* binding */ invertStrings)
/* harmony export */ });
function concat() {
  var newString = "";
  for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }
  strings.forEach(function (element) {
    element = String(element);
    newString += element + " ";
  });
  return newString;
}
function invertStrings(string) {
  var reverted = string.split("").reverse().join("");
  return reverted;
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stringManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringManipulation */ "./src/stringManipulation.js");
/* harmony import */ var _mathOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathOperations */ "./src/mathOperations.js");


var teste01 = (0,_stringManipulation__WEBPACK_IMPORTED_MODULE_0__["default"])("um", 2, "sei l\xE1");
console.log(teste01);
var teste02 = (0,_stringManipulation__WEBPACK_IMPORTED_MODULE_0__.inverter)(teste01);
console.log(teste02);
var result = _mathOperations__WEBPACK_IMPORTED_MODULE_1__["default"](1, 2);
console.log(result);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map