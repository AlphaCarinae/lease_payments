// This file holds the functions we need for date calculations
//in Results component and their needed constants

export const week = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
]

export const months = [
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
//function to generate sequential numbers, like 1st, 2nd, 24th

export const sequential = function(num) {
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

export const dateToDayOfWeek = function(date) {
  let day = new Date(date);
  let dayOfWeek = day.getDay(day);
  return week[dayOfWeek];
}
//------------------------------------------------------------------------------------------
//function to accept two YYYY-MM-DD formatted date arguments and return the number of days in between

export const dateDiff = function(date1, date2) {
  let day1 = new Date(date1 + " 00:00 GMT");
  let day2 = new Date(date2 + " 00:00 GMT");
  let diff = (day2 - day1)/86400000;
  // the difference is in milliseconds, and hence divided by number of millisecnds in a day
  return diff;
}
//------------------------------------------------------------------------------------------
//function to accept a YYYY-MM-DD formatted date argument and number of days and return the date

export const dateAdd = function(date1, days) {
  let day1 = new Date(date1 + " 00:00 GMT");
  let daysInMiliSecs = days * 24 * 60 * 60 * 1000;

  day1.setTime(day1.getTime() + daysInMiliSecs);
//Months are numbered 0-11, hence the adjustments below, also returning in YYYY-MM-DD format string
  return `${day1.getFullYear()}-${day1.getMonth() + 1 }-${day1.getDate()}`;
}
//------------------------------------------------------------------------------------------
//function to convert date format from the one in databse to the human readable in output

export const dateToHuman = function(date) {
  let dateForDb = new Date(date);
  //create this format; August, 28th 2018 as a string in output
  let result = months[dateForDb.getMonth()] + ', ' + sequential(dateForDb.getDate()) + ' ' +  dateForDb.getFullYear();

  return result;
}
//------------------------------------------------------------------------------------------
//function to create one entry/instance of payment based on first date, last date and daily rate
//in this format August, 28th 2018 ║ September, 10th 2018 ║ 14 ║ $1020
export const rentEntry = function(date1, date2, dayRate) {
  let result = [];
  result.push(dateToHuman(date1));
  //show the last day of period
  result.push(dateToHuman(dateAdd(date2,-1)));
  let daysInRentPeriod = dateDiff(date1,date2)
  result.push(daysInRentPeriod.toString());
  let rentValue = '$' + (dayRate * daysInRentPeriod).toFixed(1)
  result.push(rentValue)
  //the output is an array formatted like ["August, 28th 2018" , "September, 10th 2018 ", "14" , "$1020"]
  return result;
}
//------------------------------------------------------------------------------------------
// function to populate and output date brackets between lease start, respective of payment day and frequency

export const populateRentDates = function(startDate, endDate, weekDay, frequency, rent) {
  let dayOfWeekStart = dateToDayOfWeek(startDate);
  // weekDay = weekDay.toLowerCase();
  let dayRate, periodLength

  switch (frequency) {
    case 'weekly':
      dayRate = rent / 7
      periodLength = 7
      break;
    case 'fortnightly':
      dayRate = rent / 14
      periodLength = 14
      break;
    case 'monthly':
      dayRate = rent / 28
      periodLength = 28
      break;
    default:

  }


//the final result is an array of arrays, where child arrays are lines in the final result table
  let populatedTable = [];
  //this holds the arrays of date ranges for rent only
  let dateRanges=[];

  let startDifference = week.indexOf(dayOfWeekStart) - week.indexOf(weekDay);
//making sure the first payment part is calculated correctly based on day of week difference
  if (startDifference < 0) {
    startDifference = -startDifference;
  } else if (startDifference > 0) {
    startDifference = 7 - startDifference;
  }
//pushing the first period into date ranges
  let payDate = dateAdd(startDate, startDifference)
  dateRanges.push([startDate, payDate])
//pushing the middle periods into date ranges, until end of period goes beyond contract end date
  while (dateDiff(dateAdd(payDate, periodLength), endDate) >= 0) {
    let pastPayDate = payDate;
    payDate = dateAdd(payDate, periodLength)
    dateRanges.push([pastPayDate, payDate])
  }

  //pushing the last period into date ranges
  //in contrast to the other date ranges, the last day of the contract seems to be inclusive
  //as per the provided table, hence adding it to the final range
  dateRanges.push([payDate, dateAdd(endDate, 1)])
  //now iterating through date ranges to generate the final populated table
  dateRanges.map( (range) => {
    return populatedTable.push(rentEntry(range[0], range[1], dayRate))

  })


  return populatedTable
}
