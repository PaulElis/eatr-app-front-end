import React from 'react'


class NewUserForm extends React.Component {

  state = {
    username: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addUser(this.state.username)
      this.setState({
        username: ""
      })
  }

  handleChange = event => {
		this.setState({
			[event.target.username]: event.target.value
		})
	}


  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="Enter Name" value={this.state.username} onChange={this.handleChange}></input>
        <input type='submit' />
      </form>
    )
  }
}

export default NewUserForm
