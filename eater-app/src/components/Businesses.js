import React from 'react'
import MediaQuery from 'react-responsive';

import '../styles/Businesses.css'
import BusinessCard from './BusinessCard'
import { Grid, Loader } from 'semantic-ui-react'


class Businesses extends React.Component {



  render(){

    // console.log(this.props.businesses);

    const businesses = this.props.businesses ? this.props.businesses.map((business, index) => {
      return <BusinessCard
                business={business}
                currentUser={this.props.currentUser}
                favorites={this.props.favorites}
                index={index}
                key={index}
                image={business.image}
                addToFavorites={this.props.addToFavorites} />
    }) : null

    return(
    <Grid divided='vertically' id='grid'>

      <MediaQuery query="(orientation: portrait)">
        <Grid.Row columns={1} id='businesses-container'>
            {businesses}
        </Grid.Row>
      </MediaQuery>

      <Grid.Row columns={3} id='businesses-container'>
          {businesses}
      </Grid.Row>

    </Grid>
    )
  }
}

export default Businesses
