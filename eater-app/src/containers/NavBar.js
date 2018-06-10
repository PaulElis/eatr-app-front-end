import React from 'react'
// import { Grid, Card } from 'semantic-ui-react'

import '../styles/NavBar.css'
import Search from '../components/Search'
import Favorites from '../components/Favorites'
import Users from './Users'


class NavBar extends React.Component {

  ifCurrentUser = () => {
    if(this.props.currentUser.username === undefined){
      return null
    } else{
      return <p>{this.props.currentUser.username}</p>
    }
  }

  render(){

    return(

      <div className="ui four item menu" id='NavBar'>
        <a className="item" id='item'><Search runSearch={this.props.runSearch}/></a>
        <a className="item" id='item'><Favorites favorites={this.props.favorites} currentUser={this.props.currentUser} removeFromFavorites={this.props.removeFromFavorites}/></a>
        <a className="item" id='item'><Users currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/></a>
        {/* <a className="item" id='item'>Current User: {this.props.currentUser.username}</a> */}
        <a className="item" id='current-user'> {this.ifCurrentUser()} </a>
      </div>
    )
  }
}

export default NavBar
