import React from 'react'
import {Grid, Card, Icon, Image} from 'semantic-ui-react';

class BusinessDetails extends React.Component {

  handleClick = (event) => {
    console.log(this.props.favorites)
    if(!this.props.favorites.includes(this.props.business)){
      this.props.addToFavorites(this.props.business)
    } else if (this.props.removeFromFavorites) {
      this.props.removeFromFavorites(this.props.business)
    }
	}

  render() {
    return (
      <div class="ui link cards">
      <div class="card">
          <div class="image">
            <img src={this.props.image} onClick={this.handleClick} alt={this.props.index} width='190' height='150' />
          </div>
          <div class="content">
            <div class="header">
              <a href={this.props.business.url} target="_blank">{this.props.business.name}</a>
            </div>
            <div class="meta">
            {this.props.business.cuisine}
            </div>
            <div class="description">
            {this.props.business.address}<br /> {this.props.business.city}<br />
            {this.props.business.state}<br /> {this.props.business.zip_code}
            </div>
          </div>
        <div class="extra content">
            <span class="right floated">
          {this.props.business.review_count} Reviews / Rating: {this.props.business.rating}/5
          </span>
          <span class="left floated">
          {this.props.business.price}
          </span>
        </div>
        </div>
        </div>
    )
  }


}

export default BusinessDetails
