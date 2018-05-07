import React, { Component } from 'react';
import './App.css';

import BusinessesContainer from './containers/BusinessesContainer'
import NavBar from './containers/NavBar'
import Users from './containers/Users'

class App extends Component {

  state = {
    currentUser: []
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render() {

    console.log(this.state.currentUser);

    return (
      <div className="App">
        <header>
          <b> {this.state.currentUser.username ? `Eatr App welcomes ${this.state.currentUser.username}` : 'Eater App'}</b>
        </header>
          <Users currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
          <NavBar currentUser={this.state.currentUser}/>
          <BusinessesContainer currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
