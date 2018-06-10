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

  runSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
      searchRan: true
    })
  }

  render() {

    return (
      <main>
      <div className="App">
        <header>
          <p id='home-header'><b> {this.state.currentUser.username ? `Eatr` : 'Eatr'}</b></p>
        </header>
          <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>
      </div>
      </main>
    );
  }
}

export default App;
