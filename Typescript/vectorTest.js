"use strict";
exports.__esModule = true;
var vector_1 = require("./vector");
var v1 = new vector_1.Vector(2, 9);
console.log(v1);
v1.print();
v1.add(v1);
v1.subs(v1);
v1.mult(v1);
v1.multNumber(2);
