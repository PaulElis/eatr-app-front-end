import React, { Component } from 'react';
import './App.css';
import { Button, Form } from 'semantic-ui-react'


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
          <p id='home-header'><b>Eatr</b></p>
            <Form id='form' onSubmit = {this.handleSubmit}>
              <Form.Input icon='search' id='input' size='mini' name="searchTerm" placeholder="Find restaurants, bars..." value={this.state.searchTerm} onChange={this.handleChange}></Form.Input>
              <Button id='search-button' color='grey' compact fluid size='mini' type='submit'>Search</Button>
            </Form>
        </header>
          <BusinessesContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} location={this.state.location} setCurrentUser={this.setCurrentUser} runSearch={this.runSearch}/>
      </div>
      </main>
    );
  }
}

export default App;
