// This file holds the functions we need for date calculations
//in Results component and their needed constants

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
//------------------------------------------------------------------------------------------
//function to generate sequential numbers

const sequential = function(num) {
  if (isNaN(num)) {
    return "entry must be a number"
  }else if (num > 3 && num < 21) {
    return num + "th"
  } else if ( num % 10 === 1) {
    return num + "st"
  } else if ( num % 10 === 2) {
    return num + "nd"
  } else if ( num % 10 === 3) {
    return num + "rd"
  } else  return num + "th"
}
//------------------------------------------------------------------------------------------
//function to accept a YYYY-MM-DD formatted date argument as a string and return day of the week

const dateToDayOfWeek = function(date) {
  let day = new Date(date);
  let dayOfWeek = day.getDay(day);
  return week[dayOfWeek];
}
//------------------------------------------------------------------------------------------
//function to accept two YYYY-MM-DD formatted date arguments and return the number of days in between

const dateDiff = function(date1, date2) {
  let day1 = new Date(date1);
  let day2 = new Date(date2);
  let diff = (day2 - day1)/86400000;
  // the difference is in milliseconds, and hence divided by number of millisecnds in a day
  return diff;
}
//------------------------------------------------------------------------------------------
//function to accept a YYYY-MM-DD formatted date argument and number of days and return the date

const dateAdd = function(date1, days) {
  let day1 = new Date(date1);
  let daysInMiliSecs = days * 24 * 60 * 60 * 1000;

  day1.setTime(day1.getTime() + daysInMiliSecs);
  console.log(day1);
//Months are numbered 0-11, hence the adjustments below
  return `${day1.getFullYear()}-${day1.getMonth() + 1 }-${day1.getDate()}`;
}
//------------------------------------------------------------------------------------------
//function to convert date format from the one in databse to the human readable in output

const dateToHuman = function(date) {
  let dateForDb = new Date(date);
  //create this format; August, 28th 2018
  let result = months[dateForDb.getMonth()] + ', ' + sequential(dateForDb.getDate()) + ' ' +  dateForDb.getFullYear();

  return result;
}
//------------------------------------------------------------------------------------------
//function to create one entry/instance of payment based on first date, last date and daily rate
//in this format August, 28th 2018 ║ September, 10th 2018 ║ 14 ║ $1020
const rentEntry = function(date1, date2, dayRate) {
  let result = [];
  result.push(dateToHuman(date1));
  result.push(dateToHuman(date2));
  let daysInRentPeriod = dateDiff(date1,date2)
  result.push(daysInRentPeriod);
  result.push('$' + dayRate * daysInRentPeriod)

  return result;
}
//------------------------------------------------------------------------------------------
// function to populate and output date brackets between lease start, respective of payment day and frequency

const populateRentDates = function(startDate, endDate, weekDay, frequency, rent) {
  let dayOfWeekStart = dateToDayOfWeek(startDate);
  let dayOfWeekEnd = dateToDayOfWeek(endDate);
  let dayRate = switch (frequency) {
    case 'weekly':
      rent/7
      break;
    case 'fortnightly':
      rent/14
      break;
    case 'monthly'
      rent/28
    default:

  }


//the final result is an array of arrays, where child arrays are lines in the final result table
  let populatedTable = [];

  let startDifference = week.indexOf(dayOfWeekStart) - week.indexOf(weekDay);
  let endDifference =  week.indexOf(dayOfWeekEnd) - week.indexOf(weekDay);
//pushing the days before the paying weekday
  if (startDifference < 0) {
    populatedTable.push(rentEntry(startDate, dateAdd(startDate,startDifference)))
  } else if (week.indexOf(dayOfWeekStart) > week.indexOf(weekDay)) {

  } else {

  }
}
