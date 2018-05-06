import React from 'react'

import NewCommentForm from './NewCommentForm'
import CommentsList from './CommentsList'

class BusinessCard extends React.Component {

  state = {
    comments: []
  }

  addComment = (name, text) => {
    this.setState({
      comments: [...this.state.comments, {name, text}]
    })
  }

  deleteComment = (comment) => {
    console.log(comment);
    const index = this.state.comments.indexOf(comment)
    const newArray = [...this.state.comments]
    newArray.splice(index, 1)
    this.setState({
      comments: newArray
    })
  }

  render(){

    return(
      <div>
          <ul>
            <img src={this.props.image} alt={this.props.index} width='190' height='150' />
            <li>{this.props.business.name}</li>
            <li>{this.props.business.address}, {this.props.business.city}</li>
            <li>{this.props.business.state} {this.props.business.zip_code}</li>
          </ul>
        <CommentsList comments={this.state.comments} deleteComment={this.deleteComment}/>
        <NewCommentForm addComment={this.addComment} deleteComment={this.deleteComment}/>
      </div>
    )
  }
}

export default BusinessCard
