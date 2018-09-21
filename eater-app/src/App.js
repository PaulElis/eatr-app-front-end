import React, { Component } from 'react';
import './App.css';
import { Form } from 'semantic-ui-react'
// import MediaQuery from 'react-responsive';

import BusinessesContainer from './containers/BusinessesContainer'
// import Current from './components/Current'

class App extends Component {

  state = {
    currentUser: {},
    searchRan: false,
    searchTerm: "",
    location: "",
    username: "",
    users: "",
  }

  handleSearchSubmit = event => {
    event.preventDefault()
    this.props.runSearch(this.state.searchTerm)
      this.setState({
        searchTerm: "",
      })
  }

  handleSearchChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUserSubmit = event => {
    event.preventDefault()
      this.setState({
        username: ""
      })
    this.createUser(this.state.username)
  }

  handleUserChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  createUser = (username) => {
    this.setState({
      users: [...this.state.users, {username}]
    })
    this.callFetch(username)
  }

  callFetch = (username) => {
    // fetch("http://localhost:3000/api/v1/users",
    fetch("https://eatr-back-end.herokuapp.com/api/v1/users",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({username: username})
      })
      .then(r => r.json())
      .then(user => this.handleFetch(user))
  }

  handleFetch = (user) => {
    this.setCurrentUser(user)
  }


  runSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
      searchRan: true
    })
  }

  render() {
    return (
      <div className="App">
      <div className='app-header'>
        <header>
            <div id='home-header-container'>
              <div id='eatr-logo'>
                Eatr
              </div>
              <Form>
                  <Form.Input icon='search' size='large' name="searchTerm" placeholder="Find restaurants, bars.." value={this.state.searchTerm} onChange={this.handleSearchChange}></Form.Input>
              </Form>
            </div>
        </header>
          <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>
      </div>
      </div>
    );
  }
}

export default App;
