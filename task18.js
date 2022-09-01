// return the current date, ISO week number and how many days are left in the current year

let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year = today.getFullYear();
const endOfYear = new Date("12/31/2022");

todayDate = day + '/' + month + '/' + year;

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}

const oneDay = 1000 * 60 * 60 * 24;
const diffInTime = endOfYear.getTime() - today.getTime();
const diffInDays = Math.round(diffInTime / oneDay);

const dayOfWeek = today.getDay();
const currentWeek = Math.floor(month * 4.34);

console.log(todayDate);
console.log(diffInDays);
console.log(`${year}-W${currentWeek}-${dayOfWeek}`);