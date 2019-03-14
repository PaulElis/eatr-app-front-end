import React from 'react'
// import { Grid, Card } from 'semantic-ui-react'

import '../styles/NavBar.css'
import Search from '../components/Search'
// import Favorites from '../components/Favorites'
import Users from './Users'


class NavBar extends React.Component {

  // ifCurrentUser = () => {
  //   if(this.props.currentUser.username === undefined){
  //     return null
  //   } else{
  //     return <p>{this.props.currentUser.username}</p>
  //   }
  // }

  render(){

    return(
      <div className="ui two item menu" id='NavBar'>
        <a className="item" id='item'>
          <Search 
            runSearch={this.props.runSearch}
          />
        </a>
      </div>
    )
  }
}

export default NavBar
