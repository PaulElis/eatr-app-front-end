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
          <input name="searchTerm" placeholder="Find" value={this.state.searchTerm} onChange={this.handleChange}></input>
          <input name="location" placeholder="Near" value={this.state.location} onChange={this.handleChange}></input>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Search
