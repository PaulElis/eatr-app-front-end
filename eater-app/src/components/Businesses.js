import React from 'react'

import BusinessCard from './BusinessCard'

class Businesses extends React.Component {



  render(){

    const businesses = this.props.businesses.map((business, index) => {
      return <BusinessCard business={business} index={index} key={index} image={business.image} addToFavorites={this.props.addToFavorites} />
      }
    )

    return(
      <div>
        <b>Businesses:</b>
        {businesses}
      </div>
    )
  }
}

export default Businesses
