import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
  constructor() {
    super();
    this.state ={
      leaseId: ""
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
// update state based on input lease id
  _handleInput(event) {
    this.setState({leaseId: event.target.value});
  }
// request update when the form is submitted/ search button pressed
  _handleSubmit(event) {
    event.preventDefault();
    this.fetchLease();
  }
// function for retrieving lease info based on id
  fetchLease() {
    const leaseURL = "https://hiring-task-api.herokuapp.com/v1/leases/";

    axios.get(leaseURL + this.state.leaseId).then( (results) => {
      console.log(results);
      this.props.updateLease({currentLease: results.data})
    }).catch( error => console.log(error) );


  }




  render() {
    return (
      <div className="search">
        <form className="" onSubmit={this._handleSubmit}>
          <input type="number" name="" value={this.state.leaseId} placeholder="enter lease id here" onChange={this._handleInput}></input>
          <button type="submit" name="button">Search</button>
        </form>
      </div>

    )
  }
}

export default Search
