import React from 'react'

import BusinessCard from './BusinessCard'
import { Grid, Card } from 'semantic-ui-react'


class Businesses extends React.Component {



  render(){

    // console.log(this.props.businesses);

    const businesses = this.props.businesses.map((business, index) => {
      return <BusinessCard business={business} currentUser={this.props.currentUser} favorites={this.props.favorites} index={index} key={index} image={business.image} addToFavorites={this.props.addToFavorites} />
      }
    )

    return(
    <Grid divided='vertically'>
        <h1>Businesses</h1>
      <Grid.Row columns={3}>
          {businesses}
      </Grid.Row>
    </Grid>
    )
  }
}

export default Businesses
