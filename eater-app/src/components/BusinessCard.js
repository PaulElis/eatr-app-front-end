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
    this.callFetch(name, text)
  }

  callFetch = (name, text) => {
    fetch("http://localhost:3000/api/v1/reviews",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({name: name, text: text})
      })
      .then(r => r.json())
      .then(data => {console.log(data)})
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
    console.log(this.state.reviews);

    return(
      <div>
        <BusinessDetails business={this.props.business} favorites={this.props.favorites} index={this.props.index} key={this.props.index} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} image={this.props.business.image}/>
        <ReviewsList reviews={this.state.reviews} deleteReview={this.deleteReview}/>
        <NewReviewForm business={this.props.business} addReview={this.addReview} deleteReview={this.deleteReview}/>
      </div>
    )
  }
}

export default BusinessCard
