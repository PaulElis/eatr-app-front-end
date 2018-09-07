import React from 'react'
// import NewReviewForm from './NewReviewForm'
// import ReviewsList from './ReviewsList'
import '../styles/BusinessDetails.css'

import {Image, Card, Icon} from 'semantic-ui-react';

class BusinessDetails extends React.Component {
  state = {}

  // handleShow = () => this.setState({ active: true })
  // handleHide = () => this.setState({ active: false })


  // handleClick = (event) => {
  //   console.log(this.props.favorites)
  //   if(!this.props.favorites.includes(this.props.business)){
  //     this.props.addToFavorites(this.props.business)
  //   } else if (this.props.removeFromFavorites) {
  //     this.props.removeFromFavorites(this.props.business)
  //   }
	// }

  // ifFavorite = () => {
  //   if(!this.props.favorites.includes(this.props.business)){
  //     return <Header as='h2' inverted> Click to add to Favorites! </Header>
  //   } else {
  //     return <Header as='h2' inverted> Click to remove from Favorites! </Header>
  //   }
  // }

  // starCount = () => {
  //   let count = this.props.business.rating
  //   // return <Icon name='star' />.repeat(count);
  //   count.split().forEach(function(i) {
  //     <Icon name='star' />
  //   })
  // }

  render() {

    return (
      <Card.Group centered>
      <Card fluid color='red' id='card'>
        <br></br>
        <div className='business-image'>
          <Image centered src={this.props.image} />
        </div>
        <Card.Content>
          <Card.Header>
            <a href={this.props.business.url} target="_blank">{this.props.business.name.slice(0, 22)}</a>
          </Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.business.cuisine} {this.props.business.price}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.business.address}<br />
            {this.props.business.city}, {this.props.business.state} {this.props.business.zip_code}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <span className="left floated">
              <Icon name='pencil' />
                {this.props.business.review_count} Reviews
            </span>
            <span className="right floated">
              <Icon name='star' />
                 Rating {this.props.business.rating} / 5
                   {/* {this.starCount()} */}
            </span>
        </Card.Content>
      </Card>
    </Card.Group>
    )
  }

}

export default BusinessDetails
