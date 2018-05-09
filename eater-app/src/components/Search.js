import React from 'react'


class Search extends React.Component {

  state = {
    searchTerm: "",
    location: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.runSearch(this.state.searchTerm, this.state.location)
      this.setState({
        searchTerm: "",
        location: ""
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
        <form onSubmit = {this.handleSubmit}>
          <input name="searchTerm" placeholder="Find restaurants, bars..." value={this.state.searchTerm} onChange={this.handleChange}></input><br/>
          <input name="location" placeholder="Near New York, NY" value={this.state.location} onChange={this.handleChange}></input><br/>
          <button class="ui button"><input type='submit' /></button>
        </form>
      </div>
    )
  }
}

export default Search
