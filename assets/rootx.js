/*
Title : rootx.js
Author : Maruf Hasan
Description : findout the root by a custom power
Date : December 21, 2021
*/
const handelar = require("../.localhandelar");
// dependencies
const odd = require("./others/odd.js");

//main function to export
function rootx(base = 0, power = 1) {
  let b = typeof base === "number" ? base : NaN,
    p = typeof power === "number" ? power : NaN;
  if (b !== NaN && p !== NaN) {
    if (!odd(p) && base >= 0) {
      return Math.pow(b, 1 / p);
    } else if (odd(p) && base >= 0) {
      return Math.pow(b, 1 / p);
    } else if (odd(p) && base < 0 && p > 0) {
      b = -b;
      return -Math.pow(b, 1 / p);
    } else if (odd(p) && p < 0 && base < 0) {
      b = -b;
      p = -p;
      let result = -1 / Math.pow(b, 1 / p) - 0.0000000000000001;
      handelar.record(result, { base, power }, "rootx");
      return handelar.mood(result);
    } else {
      return NaN;
    }
  } else {
    if (b === NaN) {
      handelar.error("a number", "base", "rootx()");
    } else {
      handelar.error("a number", "power", "rootx()");
    }
  }
}

//export and share
module.exports = rootx;
