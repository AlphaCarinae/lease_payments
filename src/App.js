import React, { Component } from 'react';
import Search from './components/Search'
import Results from './components/Results'
import './App.css';


 // Keeping the lease info that comes back from search in the parent component

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentLease: {}
    }
  }
  // the function to be passed on to Search for updating the currentLease info
  updateLease(obj) {
    this.setState(obj)
  }

  render() {
    return (
      <div className="App">
      {/*a header and maybe search field with an input field for lease id*/}
      <Search {...this.state} updateLease={this.updateLease.bind(this)}/>
      {/*results component for the calculated payments info*/}
      <Results {...this.state} />

      </div>
    );
  }
}

export default App;
