import React from 'react'

import Businesses from '../components/Businesses'

const URL = 'http://localhost:3000/api/v1/businesses'

class BusinessesContainer extends React.Component {

  state = {
    businesses: []
  }

  fetch = () => {
    fetch(URL)
      .then(response => response.json())
      .then(businesses => this.setState({
          businesses: businesses
      })
    )
  }

  componentDidMount(){
    this.fetch()
  }


  render(){

    console.log(this.state.businesses);

    return(
      <div>
        <Businesses />
      </div>
    )
  }
}

export default BusinessesContainer
