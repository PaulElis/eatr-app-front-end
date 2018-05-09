import React, { Component } from 'react';
import './App.css';

import BusinessesContainer from './containers/BusinessesContainer'

class App extends Component {

  state = {
    currentUser: {},
    searchRan: false,
    searchTerm: "",
    location: ""
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  runSearch = (searchTerm, location) => {
    this.setState({
      searchTerm: searchTerm,
      location: location,
      searchRan: true
    })
  }

  render() {

    return (
      <main>
      <div className="App">
        <header>
          <h1><b> {this.state.currentUser.username ? `Eatr` : 'Eatr'}</b></h1>
        </header>
          <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>
      </div>
      </main>
    );
  }
}

export default App;
