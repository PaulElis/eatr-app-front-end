import React from 'react'

import BusinessCard from './BusinessCard'

class Businesses extends React.Component {



  render(){

    const businesses = this.props.businesses.map((business, index) => {
      return <BusinessCard business={business} index={index} key={index} image={business.image}/>
      }
    )

    return(
      <div>
        {businesses}
      </div>
    )
  }
}

export default Businesses
