import React from 'react'

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
      <div>
        <ul>
          <li><b>{this.props.business.name}</b></li>
          <img src={this.props.image} onClick={this.handleClick} alt={this.props.index} width='190' height='150' />
          <li>{this.props.business.cuisine} {this.props.business.price}</li>
          <li>{this.props.business.review_count} Reviews / Rating: {this.props.business.rating}/5</li>
          <li>{this.props.business.address}, {this.props.business.city}</li>
          <li>{this.props.business.state} {this.props.business.zip_code}</li>
        </ul>
      </div>
    )
  }


}

export default BusinessDetails
