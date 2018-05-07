import React from 'react'

// import EachFavorite from '../components/EachFavorite';
import BusinessDetails from '../components/BusinessDetails';

class Favorites extends React.Component {


  render(){
    const favorites = this.props.favorites.map((business, index) =>
      <BusinessDetails business={business} businesses={this.props.businesses} image={business.image} key={index} removeFromFavorites={this.props.removeFromFavorites}/>)

    return(
      <div>
        <b>My Favorites:</b>
        <ul>
          {favorites}
        </ul>
      </div>
    )
  }

}

export default Favorites
