// This file holds the functions we need for date calculations in Results component

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
//------------------------------------------------------------------------------------------
//accept a YYYY-MM-DD formatted date argument as a string and return day of the week

const dateToDayOfWeek = function(date) {
  let day = new Date(date);
  let dayOfWeek = day.getDay(day);
  return week[dayOfWeek];
}
//------------------------------------------------------------------------------------------
//accept two YYYY-MM-DD formatted date arguments and return the number of days in between

const dateDiff = function(date1, date2) {
  let day1 = new Date(date1);
  let day2 = new Date(date2);
  let diff = day2 - day1;
  // the difference is in milliseconds, and hence divided by number of millisecnds in a day
  return diff/86400000;
}
//------------------------------------------------------------------------------------------
//accept a YYYY-MM-DD formatted date argument and number of days and return the date

const dateAdd = function(date1, days) {
  let day1 = new Date(date1);
  let daysInMiliSecs = days * 24 * 60 * 60 * 1000;

  day1.setTime(day1.getTime() + daysInMiliSecs);
  console.log(day1);
//year is returned since 1900, Months are numbered 0-11, hence the adjustments below
  return `${day1.getYear() + 1900}-${day1.getMonth() + 1 }-${day1.getDate()}`;
}
