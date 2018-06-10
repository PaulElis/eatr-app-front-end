import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class NewUserForm extends React.Component {

  state = {
    username: ""
  }

  handleSubmit = event => {
    event.preventDefault()
      this.setState({
        username: ""
      })
    this.props.createUser(this.state.username)
  }

  handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


  render(){

    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input icon='users' iconPosition='left' size='mini' name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></Form.Input>
        <Button id='login-register-button' color='grey' fluid compact size='mini' type='submit'>Done</Button>
      </Form>
    )
  }
}

export default NewUserForm
