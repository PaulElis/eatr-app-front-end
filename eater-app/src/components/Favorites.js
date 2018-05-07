import React from 'react'

import BusinessCard from '../components/BusinessCard';

class Favorites extends React.Component {


  render(){
    const favorites = this.props.favorites.map((business, index) =>
      <BusinessCard business={business} businesses={this.props.businesses} favorites={this.props.favorites} image={business.image} key={index} removeFromFavorites={this.props.removeFromFavorites}/>)

    return(
      <div>
        <b>My Favorites:</b>
          {favorites}
      </div>
    )
  }

}

export default Favorites
