import React from 'react'
// import NewReviewForm from './NewReviewForm'
// import ReviewsList from './ReviewsList'
import '../styles/BusinessDetails.css'

import {Image, Card, Icon} from 'semantic-ui-react';

class BusinessDetails extends React.Component {

  render() {

    return (
      <Card.Group centered>
      <Card fluid id='card'>
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
