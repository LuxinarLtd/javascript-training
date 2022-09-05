// return the current date, ISO week number and how many days are left in the current year

const moment = require('moment');

let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year = today.getFullYear();
const endOfYear = new Date("12/31/" + year);


todayDate = day + '/' + month + '/' + year;

const oneDay = 1000 * 60 * 60 * 24;
const diffInTime = endOfYear.getTime() - today.getTime();
const diffInDays = Math.round(diffInTime / oneDay);

const dayOfWeek = today.getDay();
const currentWeek = moment().format('W');

console.log(todayDate);
console.log(diffInDays);
console.log(`${year}-W${currentWeek}-${dayOfWeek}`);
