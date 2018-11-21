import React, { Component } from 'react';
import Search from './components/Search'
import Results from './components/Results'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      a header and maybe search field with an input field for lease id
      <Search />
      results component for the calculated payments info
      <Results />
      </div>
    );
  }
}

export default App;
