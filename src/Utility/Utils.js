"use strict";
exports.__esModule = true;
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
