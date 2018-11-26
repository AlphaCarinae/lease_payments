import React, { Component } from 'react';
import { populateRentDates } from '../components/dateFunctions.js'


class Results extends Component {

  render() {
    const { start_date, end_date, rent, frequency, payment_day } = this.props.currentLease;
    const currentLease = this.props.currentLease ;
    let leaseResults;
    if (currentLease.start_date) {
      leaseResults =
      <div>

        <table className="leaseInfo">
          <thead className="leaseInfoHead">
            <tr>
              <td>Lease id</td>
              <td>Start date</td>
              <td>End date</td>
              <td>Payment day</td>
              <td>Rent</td>
              <td>Rent frequency</td>
            </tr>
          </thead>
          <tbody className="leaseInfoBody">
            <tr>
              <td>{currentLease.id}</td>
              <td>{currentLease.start_date}</td>
              <td>{currentLease.end_date}</td>
              <td>{currentLease.payment_day}</td>
              <td>{currentLease.rent}</td>
              <td>{currentLease.frequency}</td>
            </tr>
          </tbody>
        </table>

        <table className="resultTable">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Amount</th>
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
        </table>
      </div>
    }
      return (
      <div className="results">

        {leaseResults}

      </div>

    )}
  }


export default Results
