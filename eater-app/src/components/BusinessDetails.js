import React from 'react'
import NewReviewForm from './NewReviewForm'
import ReviewsList from './ReviewsList'
import '../styles/BusinessDetails.css'

import {Grid, Card, Icon, Image, Button, Dimmer, Header, Form} from 'semantic-ui-react';

class BusinessDetails extends React.Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })


  handleClick = (event) => {
    console.log(this.props.favorites)
    if(!this.props.favorites.includes(this.props.business)){
      this.props.addToFavorites(this.props.business)
    } else if (this.props.removeFromFavorites) {
      this.props.removeFromFavorites(this.props.business)
    }
	}

  ifFavorite = () => {
    if(!this.props.favorites.includes(this.props.business)){
      return <Header as='h2' inverted> Click to add to Favorites! </Header>
    } else {
      return <Header as='h2' inverted> Click to remove from Favorites! </Header>
    }
  }

  render() {

    const { active } = this.state
    const content = (
      <div>
        {this.ifFavorite()}
      </div>
    )
return (
      <div class="ui max width centered raised link cards">
      <div class="card" style={{height: '10 rem'}}>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          size='medium'
          src={this.props.image} onClick={this.handleClick} alt={this.props.index}
        />

          <div class="content">
            <div class="header">
              <a href={this.props.business.url} target="_blank">{this.props.business.name}</a>
            </div>
            <div class="meta">
            {this.props.business.cuisine}
            </div>
            <div class="description">
            {this.props.business.address}<br />
            {this.props.business.city}, {this.props.business.state} {this.props.business.zip_code}
            <ReviewsList reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
            <NewReviewForm currentUser={this.props.currentUser} business={this.props.business} addReview={this.props.addReview} deleteReview={this.deleteReview}/>
            </div>
          </div>
        <div class="extra content">
            <span class="left floated">
          {this.props.business.review_count} Reviews / Rating: {this.props.business.rating}/5
          </span>
          <span class="right floated">
          {this.props.business.price}
          </span>
        </div>
        </div>
        </div>
    )
  }

}

export default BusinessDetails
