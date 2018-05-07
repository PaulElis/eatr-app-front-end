import React from 'react'

import BusinessCard from './BusinessCard'
import { Grid } from 'semantic-ui-react'

class Businesses extends React.Component {



  render(){

    const businesses = this.props.businesses.map((business, index) => {
      return <BusinessCard business={business} favorites={this.props.favorites} index={index} key={index} image={business.image} addToFavorites={this.props.addToFavorites} />
      }
    )

    return(
    <Grid divided='vertically'>
    <Grid.Row columns={3}>
        {businesses}
    </Grid.Row>
    </Grid>
    )
  }
}

export default Businesses
