/*
Title : Random number 
Author : Maruf Hasan
Description : genarate a random number between 2 numbers
Date : 5 October, 2021
*/

// dependencies
const handelar = require("../.localhandelar");

//main function to export
function random(minimum, maximum, type = null) {
  let result;
  let res;
  const max = typeof maximum === "number" ? maximum : NaN;
  const min = typeof minimum === "number" ? minimum : NaN;
  const typ = typeof type === "number" ? type : null;
  if (max !== NaN && min !== NaN && typ !== NaN) {
    res = min + Math.random() * (max - min);
    if (type === 0) {
      result = Math.floor(res);
    } else if (type === null || type >= 12) {
      result = res;
    } else {
      result = res.toFixed(type);
    }
    handelar.record(result, { maximum, minimum, type }, "rand");
    return handelar.mood(result);
  } else {
    if (min === NaN) {
      handelar.error("a number", "maximum", "random()");
    } else {
      handelar.error("a number", "minimum", "random()");
    }
  }
}

//export and share
module.exports = random;
