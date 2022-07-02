"use strict";
exports.__esModule = true;
var sweetalert2_1 = require("sweetalert2");
// ** Returns true if an object is empty
exports.isObjEmpty = function (obj) {
    return Object.keys(obj).length === 0;
};
// ** Returns K format from a number eg: 1000 = 1k,1500=1.5k
exports.kFormatter = function (num) {
    return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
};
// ** Converts HTML to string
exports.htmlToString = function (html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
};
//** Check if Date passed as a parameter is today
exports.isToday = function (date) {
    var today = new Date();
    return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    /* eslint-enable */
    );
};
/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
exports.formatDate = function (value, formatting) {
    if (formatting === void 0) { formatting = { month: "short", day: "numeric", year: "numeric" }; }
    if (!value)
        return value;
    return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};
exports.formatCurrency = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN"
});
exports.isUserLoggedIn = function () { return localStorage.getItem("userData"); };
exports.getUserData = function () {
    return JSON.parse(localStorage.getItem("userData") || "{}");
};
// function to fund wallet
exports.swal = function (text, title, icon) {
    if (title === void 0) { title = ""; }
    if (icon === void 0) { icon = ""; }
    return sweetalert2_1["default"].fire(JSON.stringify({
        icon: icon,
        title: title,
        text: text,
        customClass: "swal-wide"
    }));
};
exports.capitalize = function (word) {
    var letters = word.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
};
exports.sayGreetings = function (name) {
    var time = new Date().getHours();
    if (time < 12) {
        return "Good Morning " + name;
    }
    else if (time < 16) {
        return "Good Afternoon " + name;
    }
    else {
        return "Good Evening " + name;
    }
};
