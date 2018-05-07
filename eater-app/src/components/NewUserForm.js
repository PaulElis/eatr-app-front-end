import React from 'react'


class NewUserForm extends React.Component {

  state = {
    username: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state.username)
      this.setState({
        username: ""
      })
  }

  handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
        <input type='submit' />
      </form>
    )
  }
}

export default NewUserForm
