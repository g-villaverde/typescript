"use strict";
exports.__esModule = true;
var resta_1 = require("./resta");
var suma_1 = require("./suma");
function operacion(num1, num2, type) {
    if (type == "Resta" || "resta") {
        Promise.resolve().then(function () { return require("./resta"); }).then(function () {
            var resta = new resta_1.Resta(num1, num2);
            resta.operacion();
        });
    }
    if (type == "Suma" || "suma") {
        Promise.resolve().then(function () { return require("./suma"); }).then(function () {
            var suma = new suma_1.Suma(num1, num2);
            suma.operacion();
        });
    }
    else {
        console.log("Tipo de operación no especificado");
    }
}
/* function operaciones () {

} */
var sumando = operacion(10, 10, "resta");
console.log(sumando);
