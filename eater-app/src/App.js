import React, { Component } from 'react';
import './App.css';
import { Button, Input, Menu } from 'semantic-ui-react'


import BusinessesContainer from './containers/BusinessesContainer'

class App extends Component {

  state = {
    currentUser: {},
    searchRan: false,
    searchTerm: "",
    location: "",
    username: "",
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
    console.log('in handleUserSubmit')
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
    console.log('in createUser')
    this.setState({
      users: [...this.state.users, {username}]
    })
    this.callFetch(username)
  }

  callFetch = (username) => {
    fetch("http://localhost:3000/api/v1/users",
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
    this.props.setCurrentUser(user)
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
        <div className='app-header'>
        <header>
            <Menu secondary>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <p id='home-header'>
                      <b>Eatr</b>
                    </p>
                  </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                  <Menu.Item id='form' onSubmit={this.handleSearchSubmit}>
                    <Input icon='search' id='input' size='medium' name="searchTerm" placeholder="Find restaurants, bars.." value={this.state.searchTerm} onChange={this.handleSearchChange}></Input>
                    {/* <Button id='search-button' color='grey' compact fluid size='medium' type='submit'>Search</Button> */}
                  </Menu.Item>
                  {this.state.currentUser.username ?
                    this.state.currentUser.username :
                  <Menu.Item id='form' onSubmit={this.handleUserSubmit}>
                    <Input icon='users' id='input' iconPosition='left' size='medium' name="username" placeholder="Username" value={this.state.username} onChange={this.handleUserChange} />
                    <Button id='login-register-button' color='blue' fluid compact size='medium' type='submit'>Sign On</Button>
                  </Menu.Item>}
                </Menu.Menu>
            </Menu>
        </header>
          <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>
      </div>
      </div>
      </main>
    );
  }
}

export default App;
