import React, { Component } from 'react';
import axios from 'axios';


class Search extends Component {
  constructor() {
    super();
    this.state ={
      currentLease: {},
    }
  }

  fetchLease(id) {
    const leaseURL = "https://hiring-task-api.herokuapp.com/v1/leases/";
    let leaseId = id;
    axios.get(leaseURL + leaseId).then( (results) => {
      console.log(results);
    })
  }

  


  render() {
    return (
      <div class="search">
        <form class="" >
          <input type="number" name="" value="" placeholder="enter lease id"></input>
          <button type="submit" name="button">Search</button>
        </form>
      </div>

    )
  }
}

export default Search
