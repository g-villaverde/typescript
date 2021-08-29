"use strict";
exports.__esModule = true;
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(x, y) {
        this.x = x;
        this.y = y;
    }
    Resta.prototype.operacion = function () {
        return this.x - this.y;
    };
    return Resta;
}());
exports.Resta = Resta;
