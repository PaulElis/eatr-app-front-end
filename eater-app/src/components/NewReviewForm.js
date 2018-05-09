import React from 'react'

import {Input, Button, Form} from 'semantic-ui-react'


class NewReviewForm extends React.Component {

  state = {
    text: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props);
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
      <div>
      <Form onSubmit = {this.handleSubmit}>
        <input name="text" placeholder="Enter Review" value={this.state.text} onChange={this.handleChange}></input>
        <input type='submit' />
      </Form>
      </div>
    )
  }
}

export default NewReviewForm
