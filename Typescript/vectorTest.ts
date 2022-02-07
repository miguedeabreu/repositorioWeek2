import { Vector } from "./vector";

let v1:Vector = new Vector (2,9);

console.log(v1);

v1.print();
v1.add (v1);
v1.subs(v1);
v1.mult(v1);
v1.multNumber(2);