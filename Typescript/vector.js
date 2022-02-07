"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    // CONSTRUCTOR 
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }
    }
    // DEFINICION DE METODOS PUBLICOS
    // GETTERS
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    // SETTERS
    Vector.prototype.setElements = function (elements) {
        this.elements = [];
    };
    //
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var resultado = new Vector(0, 0);
        if (this.elements.length == v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                var suma = this.elements[i] + v1.elements[i];
                resultado.elements.push(suma);
                console.log(suma);
            }
        }
        return resultado;
    };
    Vector.prototype.subs = function (v1) {
        var resultado = new Vector(0, 0);
        if (this.elements.length == v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                var resta = this.elements[i] - v1.elements[i];
                resultado.elements.push(resta);
                console.log(resta);
            }
        }
        return resultado;
    };
    Vector.prototype.mult = function (v1) {
        var resultado = new Vector(0, 0);
        if (this.elements.length == v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                var mult = this.elements[i] * v1.elements[i];
                resultado.elements.push(mult);
                console.log(mult);
            }
        }
        return resultado;
    };
    Vector.prototype.multNumber = function (n) {
        var resultado = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            var producto = this.elements[i] * n;
            resultado.elements.push(producto);
            console.log(producto);
        }
        return resultado;
    };
    return Vector;
}());
exports.Vector = Vector;
// let v1:Vector = new Vector (2,9);
// console.log(v1);
// v1.print();
// v1.add (v1);
// v1.subs(v1);
// v1.mult(v1);
// v1.multNumber(2);
