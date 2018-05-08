import React, { Component } from 'react';
import './App.css';

import BusinessesContainer from './containers/BusinessesContainer'
import NavBar from './containers/NavBar'
import Users from './containers/Users'

class App extends Component {

  state = {
    currentUser: [],
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
    console.log('in runSearch');
    this.setState({
      searchTerm: searchTerm,
      location: location,
      searchRan: true
    })
  }

  render() {

    console.log(this.state.searchRan);

    return (
      <div className="App">
        <header>
          <h1><b> {this.state.currentUser.username ? `Eatr App welcomes ${this.state.currentUser.username}` : 'Eater App'}</b></h1>
        </header>
          {/* <NavBar currentUser={this.state.currentUser} runSearch={this.runSearch}/> */}
          <Users currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
          {this.state.searchRan ? <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/> : <BusinessesContainer currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>}
          {/* <BusinessesContainer currentUser={this.state.currentUser}/> */}
      </div>
    );
  }
}

export default App;
