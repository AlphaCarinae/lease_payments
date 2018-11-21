import React, { Component } from 'react';


class Results extends Component {
  
  render() {
    const { currentLease } = this.props;
    return (
      <div className="results">
        <p>Current Lease info </p>
        <p></p>
        <p>id: {currentLease.id}</p>
        <p>start_date: {currentLease.start_date}</p>
        <p>end_date: {currentLease.end_date}</p>
        <p>payment_day: {currentLease.payment_day}</p>
        <p>rent: {currentLease.rent}</p>
        <p>frequency: {currentLease.frequency}</p>
      </div>

    )
  }
}

export default Results
