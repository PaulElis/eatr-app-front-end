import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

import BusinessCard from '../components/BusinessCard';

class Favorites extends React.Component {


  render(){
    const favorites = this.props.favorites.map((business, index) =>
      <BusinessCard business={business} businesses={this.props.businesses} favorites={this.props.favorites} image={business.image} key={index} removeFromFavorites={this.props.removeFromFavorites}/>)

    return(
      <Grid divided='vertically'>
          <h3>My Favorites</h3>
        <Grid.Row columns={3}>
            {favorites}
        </Grid.Row>
      </Grid>
    )
  }

}

export default Favorites
