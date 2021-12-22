/*
Title : handelar.js
Author : Maruf Hasan
Description : handel moods and return result as they want
Date : 17 November , 2021
*/

// dependencies
const error = require("./../../error.js");
const fs = require("fs");

const moods = {};
moods.sci = require("./science.js");
moods.fix = require("./fixed.js");

function main(answer) {
  let fresult;
  const ans =
    typeof answer === "number" && Number.isFinite(answer) ? answer : NaN;
  if (ans !== NaN) {
    const moodData = JSON.parse(
      fs.readFileSync(__dirname + "/mood.json", "utf-8")
    );
    if (moodData.mood === "normal" && moodData.status === null) {
      fresult = ans;
      return fresult;
    } else if (
      moodData.mood !== "normal" &&
      typeof moodData.status === "number" &&
      !Number.isNaN(moodData.status)
    ) {
      if (moodData.mood === "science") {
        fresult = moods.sci(moodData.status, ans);
        return fresult;
      } else if (moodData.mood === "fixed") {
        fresult = moods.fix(moodData.status, ans);
        return fresult;
      } else {
      }
    } else {
      error("Math error", "answer", "main()", RangeError);
    }
  } else {
    error("Math error", "answer", "main()", RangeError);
  }
}

//export and share
module.exports = main;
