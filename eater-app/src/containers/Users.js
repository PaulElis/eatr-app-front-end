import React from 'react'

import NewUserForm from '../components/NewUserForm'

class Users extends React.Component {

  state= {
    users: []
  }

  addUser = (name) => {
    this.setState({
      users: [...this.state.users, {name}]
    })
    this.callFetch(name)
  }

  callFetch = (name) => {
    fetch("http://localhost:3000/api/v1/users",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({name: name})
      })
      .then(r => r.json())
      .then(data => {console.log(data)})
  }


  render(){


    return(
      <div>
        <b>Users:</b>
        <NewUserForm />
      </div>
    )
  }
}

export default Users
