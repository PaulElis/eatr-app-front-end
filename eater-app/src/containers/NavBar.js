import React from 'react'

import Search from '../components/Search'
import Favorites from '../components/Favorites'
import Users from './Users'


class NavBar extends React.Component {



  render(){


    return(
      <div>
        <b>NavBar</b>
        <Search runSearch={this.props.runSearch}/>
        <Favorites favorites={this.props.favorites} currentUser={this.props.currentUser} removeFromFavorites={this.props.removeFromFavorites}/>
        <Users currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
        <b>Current User: {this.props.currentUser.username}</b><br></br>
        <b>End of NavBar</b>
      </div>
    )
  }
}

export default NavBar
