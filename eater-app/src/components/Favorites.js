import React from 'react'

import EachFavorite from '../components/EachFavorite';

class Favorites extends React.Component {


  render(){
    const favorites = this.props.favorites.map((favorite, index) =>
      <EachFavorite favorite={favorite} favorites={this.props.favorites} image={favorite.image} key={index} removeFromFavorites={this.props.removeFromFavorites}/>)

    return(
      <div>
        <ul>
          {favorites}
        </ul>
      </div>
    )
  }

}

export default Favorites
