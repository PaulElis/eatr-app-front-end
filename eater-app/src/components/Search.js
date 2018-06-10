import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../styles/Search.css'


class Search extends React.Component {

  state = {
    searchTerm: "",
    location: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.runSearch(this.state.searchTerm)
      this.setState({
        searchTerm: "",
      })
  }

  handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


  render(){

    return(
      <div>
        <div id='search-header'>
          Search
        </div>
        <Form id='form' onSubmit = {this.handleSubmit}>
          <Form.Input icon='search' id='input' size='mini' name="searchTerm" placeholder="Find restaurants, bars..." value={this.state.searchTerm} onChange={this.handleChange}></Form.Input>
          {/* <Form.Input icon='search' id='input' size='mini' name="location" placeholder="Near New York, NY" value={this.state.location} onChange={this.handleChange}></Form.Input> */}
          <Button id='search-button' color='grey' compact fluid size='mini' type='submit'>Done </Button>
        </Form>
      </div>
    )
  }
}

export default Search
