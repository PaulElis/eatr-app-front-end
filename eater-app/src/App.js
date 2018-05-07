import React, { Component } from 'react';
import './App.css';

import BusinessesContainer from './containers/BusinessesContainer'
import NavBar from './containers/NavBar'
import Users from './containers/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
          <Users />
          <NavBar />
          <BusinessesContainer />
      </div>
    );
  }
}

export default App;
