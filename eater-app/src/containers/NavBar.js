import React from 'react'

import Search from '../components/Search'

class NavBar extends React.Component {



  render(){


    return(
      <div>
        <b>NavBar / Current User: {this.props.currentUser.username}</b>
        <Search runSearch={this.props.runSearch}/>
      </div>
    )
  }
}

export default NavBar
