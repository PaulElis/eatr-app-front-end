import React from 'react'


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
      <form onSubmit={this.handleSubmit}>
        {/* <input name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}></input> */}
        <input name="text" placeholder="Enter Review" value={this.state.text} onChange={this.handleChange}></input>
        <input type='submit' />
      </form>
    )
  }
}

export default NewReviewForm
