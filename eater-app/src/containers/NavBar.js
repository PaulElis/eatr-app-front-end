import React from 'react'

class NavBar extends React.Component {



  render(){


    return(
      <div>
        <b>NavBar / Current User: {this.props.currentUser.username}</b>
      </div>
    )
  }
}

export default NavBar
