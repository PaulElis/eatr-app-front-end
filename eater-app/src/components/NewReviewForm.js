import React from 'react'
// import {Input, Button, Form} from 'semantic-ui-react'

class NewReviewForm extends React.Component {

  state = {
    text: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.props.currentUser.id, this.state.text, this.props.business.id)
      this.setState({
        text: ""
      })
  }

  handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


  render(){

    return(
      <div class = "ui centered equal width grid">
      <Form onSubmit = {this.handleSubmit}>
        <div class="column">
        <input name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}></input>
        </div>
        <div class="column">
        <input name="text" placeholder="Enter Review" value={this.state.text} onChange={this.handleChange}></input>
        </div>
        <div class="column">
        <input type='submit' />
        </div>
      </Form>
      </div>
    )
  }
}

export default NewReviewForm
