import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../styles/Current.css'


class CurrentUser extends React.Component {


  render(){

    return(
      <div>
        <p id='current-user'>
          <Icon name='user circle' size='small' />
          {this.props.currentUser.username}
        </p>
      </div>
    )
  }
}

export default CurrentUser
