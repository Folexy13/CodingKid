import {
  formatDate,
  htmlToString,
  isObjEmpty,
  isToday,
  kFormatter,
} from "./src/Shared/Utility/Utils";

const num = kFormatter(1200);
console.log(num);

const randomHtml = htmlToString("<p>Hello Opeyemi</p>");

console.log(randomHtml);

console.log(isObjEmpty({}));

console.log(isToday(new Date()));
console.log(new Date());
console.log(formatDate(new Date()));

// run => tsc test && node test.js  to test the utils function
