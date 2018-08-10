import React, { Component } from 'react';
import './App.css';
import { Form, Menu } from 'semantic-ui-react'


import BusinessesContainer from './containers/BusinessesContainer'
import Current from './components/Current'

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
      // <main>
      <div className="App">
      <div className='app-header'>
        <header>
            <Menu secondary>
                <div id='eatr-logo'>
                <Menu.Menu position='left'>
                  <Menu.Item>
                    <p id='home-header'>
                      <b>Eatr</b>
                    </p>
                  </Menu.Item>
                </Menu.Menu>
                </div>
                <Menu.Menu position='right' id='menu-right'>
                  <Menu.Item>
                    <Form>
                      <Form.Group>
                        <Form.Input icon='search' size='small' name="searchTerm" placeholder="Find restaurants, bars.." value={this.state.searchTerm} onChange={this.handleSearchChange}></Form.Input>
                      </Form.Group>
                    </Form>
                  </Menu.Item>
                  {this.state.currentUser.username ?
                    <div>
                      <Current currentUser={this.state.currentUser}/>
                    </div>
                    :
                  <Menu.Item>
                    <Form onSubmit={this.handleUserSubmit}>
                      <Form.Group>
                        <Form.Input icon='users' iconPosition='left' size='small' name="username" placeholder="Username" value={this.state.username} onChange={this.handleUserChange}></Form.Input>
                        <Form.Button color='blue' content='Sign in' />
                      </Form.Group>
                    </Form>
                  </Menu.Item>}
                </Menu.Menu>
            </Menu>
        </header>
          <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>
      </div>
      </div>
      // </main>
    );
  }
}

export default App;
