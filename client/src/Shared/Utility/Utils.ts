import Swal from "sweetalert2";

// ** Returns true if an object is empty
export const isObjEmpty = (obj: Object): boolean =>
  Object.keys(obj).length === 0;

// ** Returns K format from a number eg: 1000 = 1k,1500=1.5k
export const kFormatter = (num: number) =>
  num > 999 ? `${(num / 1000).toFixed(1)}k` : num;

// ** Converts HTML to string
export const htmlToString = (html: string) =>
  html.replace(/<\/?[^>]+(>|$)/g, "");

//** Check if Date passed as a parameter is today
export const isToday = (date: Date) => {
  const today = new Date();
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

export const formatDate = (
  value: Date,
  formatting: Object = { month: "short", day: "numeric", year: "numeric" }
) => {
  if (!value) return value;
  return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
};

export const formatCurrency = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});

export const isUserLoggedIn: Object = () => localStorage.getItem("userData");

export const getUserData = (): Object =>
  JSON.parse(localStorage.getItem("userData") || "{}");

// function to fund wallet
export const swal = (text: string, title: string = "", icon: string = "") => {
  return Swal.fire(
    JSON.stringify({
      icon,
      title,
      text,
      customClass: "swal-wide",
    })
  );
};

export const capitalize = (word: string) => {
  const letters = word.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
};

export const sayGreetings = (name: string) => {
  const time = new Date().getHours();
  if (time < 12) {
    return "Good Morning " + name;
  } else if (time < 16) {
    return "Good Afternoon " + name;
  } else {
    return "Good Evening " + name;
  }
};
