/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   age: () => (/* binding */ age),
/* harmony export */   "default": () => (/* binding */ name),
/* harmony export */   hello: () => (/* binding */ hello),
/* harmony export */   lnImport: () => (/* binding */ lastname),
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
var name = "Jo\xE3o";
var lastname = "Silva";
var age = 30;
function sum(x, y) {
  return x + y;
}
function hello() {
  //podemos exportar diretamente
  console.log("Hello world!!!");
}
 //posso importar por grupo, e utilizar a mascara na hora da exportação com as, além de poder decidir uma variavel padrão para a exportação

/***/ }),

/***/ "./src/modulo2.js":
/*!************************!*\
  !*** ./src/modulo2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subtra),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   multiplica: () => (/* binding */ multiplica)
/* harmony export */ });
function subtra(x, y) {
  return x - y;
}
//Primeiramente devemos entender que só pode existir apenas uma exportação padrão (export default) em cada módulo. Isso se deve por conta que quando se faz a chamada do modulo com um nome generico, sem utilizar chaves, ou a palavra reservada as. O interpretador javascript entenderá que estamos nos referindo ao export default

function multiplica(x, y) {
  return x * y;
}
var divide = function divide(x, y) {
  return x / y;
};
 //poderiamos adicionar diretamente default na função de modo local  como o seguinte comentário :

// export default function subtra(x, y) {
//     return x - y;
// }

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Person: () => (/* binding */ Person)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Person = /*#__PURE__*/function () {
  function Person(name, lastname) {
    _classCallCheck(this, Person);
    this.name = name;
    this.lastname = lastname;
  }
  _createClass(Person, [{
    key: "showCompleatName",
    value: function showCompleatName() {
      console.log("".concat(this.name, " ").concat(this.lastname));
    }
  }]);
  return Person;
}();
var np = new Person("Sou uma", "pessoa privada"); //veja que np não aprece no objeto de listagem de propriedades acessiveis do modulo, sendo assim np é um atributo privado do modulo person.js

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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person */ "./src/person.js");
/* harmony import */ var _modulo2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulo2 */ "./src/modulo2.js");
//modulos são  arquivos que carregam informações que só poderão ser acessadas apartir de exportações/importações, podemos fazer uma analogia de um js module com um país, e o código são os recursos naturais deste país, que ele pode exportar caso necessário, e pode requisitar a um país vizinho um recurso que ele contenha, ou seja ele importa (a função,classe, estrutura de dado... etc.), de um outro país(js module);

 //tudo que está dentro de chaves, é o que estamos querendo trazer do modulo.
//caso tenhamos uma variavel já declarada com um mesmo nome de importação original, podemos atribuir uma mascara de uso para os imports, observe o caso de name e lastname, para atribuir uma mascara de uso utilizamos a palvara reservada as tanto no import como export, name se transforma em nameImport e lastname se transforma em lnImport;
 //qunado usamos um asterisco e damos uma mascara tudo que esta constido no modulo é importado

//podemos também realizar importações padrões veja o arquivo que o import referencia, isso permite renomear o default conforme a necessidade do consumo do modulo;
 //sempre que importar sem chaves ou palavra reservada as, estaremos importando o default, e ainda assim podemos importar o resto dos exports, que é o caso das chaves

(0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.hello)();
console.log("\n Aqui est\xE1 o objeto que contem todos os itens do modulo person.js : ", _person__WEBPACK_IMPORTED_MODULE_1__);
var name = "Jos\xE9";
var lastname = "Tiradentes";
var p1 = new _person__WEBPACK_IMPORTED_MODULE_1__.Person("Maria", "Madalena");
console.log("\n", name, lastname, _modulo1__WEBPACK_IMPORTED_MODULE_0__.age, "\nA soma de 3 e 5 \xE9 ".concat((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.sum)(3, 5)));
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.name, _modulo1__WEBPACK_IMPORTED_MODULE_0__.lnImport, _modulo1__WEBPACK_IMPORTED_MODULE_0__.age, "\nA soma de 7 e 5 \xE9 ".concat((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.sum)(7, 5))); //utilizando o valor do import
p1.showCompleatName();
console.log((0,_modulo2__WEBPACK_IMPORTED_MODULE_2__["default"])(7, 2));
console.log((0,_modulo2__WEBPACK_IMPORTED_MODULE_2__.divide)(7, 2));
console.log((0,_modulo2__WEBPACK_IMPORTED_MODULE_2__.multiplica)(7, 2));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map