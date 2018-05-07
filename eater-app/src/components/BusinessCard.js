import React from 'react'

import NewCommentForm from './NewCommentForm'
import CommentsList from './CommentsList'
import BusinessDetails from './BusinessDetails'

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
        <BusinessDetails business={this.props.business} index={this.props.index} key={this.props.index} addToFavorites={this.props.addToFavorites} image={this.props.business.image}/>
        <CommentsList comments={this.state.comments} deleteComment={this.deleteComment}/>
        <NewCommentForm addComment={this.addComment} deleteComment={this.deleteComment}/>
      </div>
    )
  }
}

export default BusinessCard
