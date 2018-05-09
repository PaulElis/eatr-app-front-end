import React from 'react'
// import { Grid, Card } from 'semantic-ui-react'


import Search from '../components/Search'
import Favorites from '../components/Favorites'
import Users from './Users'


class NavBar extends React.Component {

  ifCurrentUser = () => {
    if(this.props.currentUser.username === undefined){
      return null
    } else{
      return <h3>{this.props.currentUser.username}</h3>
    }
  }

  render(){

    return(

      <div class="ui four item menu">
        <a class="item"><Search runSearch={this.props.runSearch}/></a>
        <a class="item"><Favorites favorites={this.props.favorites} currentUser={this.props.currentUser} removeFromFavorites={this.props.removeFromFavorites}/></a>
        <a class="item"><Users currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/></a>
        {/* <a class="item">Current User: {this.props.currentUser.username}</a> */}
        <a class="item"> {this.ifCurrentUser()} </a>
      </div>
    )
  }
}

export default NavBar
