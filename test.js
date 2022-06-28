"use strict";
exports.__esModule = true;
var Utils_1 = require("./src/Utility/Utils");
var num = Utils_1.kFormatter(800);
console.log(num);
var randomHtml = Utils_1.htmlToString("<p>Hello Opeyemi</p>");
console.log(randomHtml);
console.log(Utils_1.isObjEmpty({}));
console.log(Utils_1.isToday(new Date()));
console.log(Utils_1.formatDate(new Date()));
// run tsc test && node test.js  to test the utils function
