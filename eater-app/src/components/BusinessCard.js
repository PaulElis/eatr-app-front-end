import React from 'react'

import NewReviewForm from './NewReviewForm'
import ReviewsList from './ReviewsList'
import BusinessDetails from './BusinessDetails'
import { Grid } from 'semantic-ui-react'

class BusinessCard extends React.Component {

  state = {
    reviews: this.props.business.reviews
  }

  addReview = (userId, text, businessId) => {
    this.setState({
      reviews: [...this.state.reviews, {userId, text, businessId}]
    })
    this.callFetch(userId, text, businessId)
  }

  callFetch = (user_id, text, business_id) => {
    fetch("http://localhost:3000/api/v1/reviews",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({user_id: user_id, text: text, business_id: business_id})
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
    // console.log(this.state.reviews);

    return(
      <Grid.Column>
        <div>
        <BusinessDetails business={this.props.business} favorites={this.props.favorites} index={this.props.index} key={this.props.index} addToFavorites={this.props.addToFavorites} removeFromFavorites={this.props.removeFromFavorites} image={this.props.business.image}/>
        <ReviewsList reviews={this.state.reviews} deleteReview={this.deleteReview}/>
      </div>
      </Grid.Column>
    )
  }
}

export default BusinessCard
