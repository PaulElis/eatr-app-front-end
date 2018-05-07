import React from 'react'

class BusinessDetails extends React.Component {

  enlistBusiness = (event) => {
		this.props.addToFavorites(this.props.business)
	}

  render() {
    return (
      <div>
        <ul>
          <img src={this.props.image} onClick={this.enlistBusiness} alt={this.props.index} width='190' height='150' />
          <li>{this.props.business.name}</li>
          <li>{this.props.business.address}, {this.props.business.city}</li>
          <li>{this.props.business.state} {this.props.business.zip_code}</li>
        </ul>
      </div>
    )
  }


}

export default BusinessDetails
