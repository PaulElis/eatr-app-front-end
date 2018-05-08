import React from 'react'

import Search from '../components/Search'


class NavBar extends React.Component {



  render(){


    return(
      <div>
        <b>NavBar</b>
        <Search runSearch={this.props.runSearch}/>
        <b>Current User: {this.props.currentUser.username}</b>
      </div>
    )
  }
}

export default NavBar
