import React from 'react'

import NewReviewForm from './NewReviewForm'
import ReviewsList from './ReviewsList'
import BusinessDetails from './BusinessDetails'

class BusinessCard extends React.Component {

  state = {
    reviews: []
  }

  addReview = (name, text) => {
    this.setState({
      reviews: [...this.state.reviews, {name, text}]
    })
  }

  deleteReview = (comment) => {
    console.log(comment);
    const index = this.state.reviews.indexOf(comment)
    const newArray = [...this.state.reviews]
    newArray.splice(index, 1)
    this.setState({
      reviews: newArray
    })
  }

  render(){

    return(
      <div>
        <BusinessDetails business={this.props.business} favorites={this.props.favorites} index={this.props.index} key={this.props.index} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} image={this.props.business.image}/>
        <ReviewsList reviews={this.state.reviews} deleteReview={this.deleteReview}/>
        <NewReviewForm addReview={this.addReview} deleteReview={this.deleteReview}/>
      </div>
    )
  }
}

export default BusinessCard
