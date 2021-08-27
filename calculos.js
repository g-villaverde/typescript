"use strict";
exports.__esModule = true;
exports.Resta = exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma() {
    }
    Suma.prototype.add = function (x, y) {
        return x + y;
    };
    return Suma;
}());
exports.Suma = Suma;
var Resta = /** @class */ (function () {
    function Resta() {
    }
    Resta.prototype.add = function (x, y) {
        return x - y;
    };
    return Resta;
}());
exports.Resta = Resta;
console.log(new Resta());
