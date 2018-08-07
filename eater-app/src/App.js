import React, { Component } from 'react';
import './App.css';
import { Button, Form, Input, Menu } from 'semantic-ui-react'


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
    event.preventDefault()
      this.setState({
        username: ""
      })
    this.props.createUser(this.state.username)
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
            <Menu secondary>
                <Menu.Menu position='center'>
                  <Menu.Item>
                    <p id='home-header'>
                      <b>Eatr</b>
                    </p>
                  </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                  <Menu.Item id='form' onSubmit = {this.handleSearchSubmit}>
                    <Input icon='search' id='input' size='small' name="searchTerm" placeholder="Find restaurants, bars.." value={this.state.searchTerm} onChange={this.handleSearchChange}></Input>
                    {/* <Button id='search-button' color='grey' compact fluid size='small' type='submit'>Search</Button> */}
                  </Menu.Item>
                  <Menu.Item onSubmit={this.handleUserSubmit}>
                    <Input icon='users' iconPosition='left' size='small' name="username" placeholder="Username" value={this.state.username} onChange={this.handleUserChange} />
                    <Button id='login-register-button' color='grey' fluid compact size='large' type='submit'>Sign On</Button>
                  </Menu.Item>
                </Menu.Menu>
            </Menu>
        </header>
          <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>
      </div>
      </main>
    );
  }
}

export default App;
