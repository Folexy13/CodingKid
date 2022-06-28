import {
  formatDate,
  htmlToString,
  isObjEmpty,
  isToday,
  kFormatter,
} from "./src/Utility/Utils";

const num = kFormatter(800);
console.log(num);

const randomHtml = htmlToString("<p>Hello Opeyemi</p>");

console.log(randomHtml);

console.log(isObjEmpty({}));

console.log(isToday(new Date()));

console.log(formatDate(new Date()));

// run tsc test && node test.js  to test the utils function
