import React from 'react'
import NewReviewForm from './NewReviewForm'
import ReviewsList from './ReviewsList'


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

  render() {

    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted> Click to add to Favorites! </Header>

      </div>
    )
return (
      <div class="ui max width centered raised link cards">
      <div class="card">
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
            {this.props.business.name}
            </div>
            <div class="meta">
            {this.props.business.cuisine}
            </div>
            <div class="description">
            {this.props.business.address}<br />
            {this.props.business.city}, {this.props.business.state} {this.props.business.zip_code}
            <NewReviewForm business={this.props.business} addReview={this.addReview} deleteReview={this.deleteReview}/>
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
