import React from 'react'


class NewCommentForm extends React.Component {

  state = {
    name: "",
    text: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addComment(this.state.name, this.state.text)
      this.setState({
        name: "",
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
        <input name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}></input>
        <input name="text" placeholder="Enter Comment" value={this.state.text} onChange={this.handleChange}></input>
        <input type='submit' />
      </form>
    )
  }
}

export default NewCommentForm
