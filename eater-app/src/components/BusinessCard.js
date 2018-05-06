import React from 'react'

class BusinessCard extends React.Component {



  render(){

    return(
      <ul>
        <img src={this.props.image} alt={this.props.index} width='190' height='150' />
        <li>{this.props.business.name}</li>
        <li>{this.props.business.address}, {this.props.business.city}</li>
        <li>{this.props.business.state} {this.props.business.zip_code}</li>
      </ul>
    )
  }
}

export default BusinessCard
