"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//babel transpilador
//comandos importantes para instalar babel via npm
//iniciar a NPM : npm init -y
//instalar o babel como uma dependencia de desenvolvimento:
//npm i --save-dev @babel/cli @babel/preset-env @babel/core
//consvertendo arquivos ecmascript recentes para antigos via terminal :
//         atual file  file de destino
// npx babel main.js -o bundle.js --presets=@babel/env
// Configuração para transpilação automatica ao salvar :
//abra o package-json vá até scripts, adicione uma chave com o nome da run, e atribua o valor (babel main.js -o bundle.js --presets=@babel/env -w); a flag -w faz com que a run não pare até ser dado o comando de parada
var Person = /*#__PURE__*/function () {
  function Person(name, lastname) {
    _classCallCheck(this, Person);
    this.name = name;
    this.lastname = lastname;
  }
  _createClass(Person, [{
    key: "showName",
    value: function showName() {
      console.log("".concat(this.name, " ").concat(this.lastname));
    }
  }]);
  return Person;
}();
var joao = new Person("Jo\xE3o", "Silva");
joao.showName();
