import React, { Component } from 'react';
import { week, months, sequential, dateToDayOfWeek, dateDiff, dateAdd, dateToHuman, rentEntry, populateRentDates } from '../components/dateFunctions.js'


class Results extends Component {

  render() {
    const { start_date, end_date, rent, frequency, payment_day } = this.props.currentLease;
    const currentLease = this.props.currentLease ;
    let leaseResults;
    console.log(currentLease);
    if (currentLease.start_date) {
      leaseResults =
      <div>
        <p>Current Lease info </p>
        <p></p>
        <p>id: {currentLease.id}</p>
        <p>start_date: {currentLease.start_date}</p>
        <p>end_date: {currentLease.end_date}</p>
        <p>payment_day: {currentLease.payment_day}</p>
        <p>rent: {currentLease.rent}</p>
        <p>frequency: {currentLease.frequency}</p>

        <table>
          <thead>
            <tr>
              <td>From</td>
              <td>To</td>
              <td>days</td>
              <td>amount</td>
            </tr>
          </thead>
          <tbody>
            {populateRentDates(start_date, end_date, payment_day, frequency, rent).map( (payment_row, i) => {
              return(
                <tr key={i}>
                  <td>{payment_row[0]}</td>
                  <td>{payment_row[1]}</td>
                  <td>{payment_row[2]}</td>
                  <td>{payment_row[3]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>;
      </div>
    }
      return (
      <div className="results">

        {leaseResults}

      </div>

    )}
  }


export default Results
