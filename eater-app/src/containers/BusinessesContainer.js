import React from 'react'

import Businesses from '../components/Businesses'
import Favorites from '../components/Favorites'
import NavBar from './NavBar'

const URL = 'http://localhost:3000/api/v1/businesses'

class BusinessesContainer extends React.Component {

  state = {
    businesses: [],
    favorites: []
  }

  componentWillReceiveProps(searchTerm, location){
    fetch(URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({search: searchTerm, location: location})
    })
      .then(response => response.json())
      .then(json => this.setState({
        businesses: json.results
      })
    )
  }

  fetchSearch = (searchTerm, location) => {
    console.log('in fetchSearch');
    fetch(searchTerm, location)
      .then(response => response.json())
      .then(businesses => this.setState({
          businesses: businesses
      })
    )
  }

  fetchBusinesses = () => {
    fetch(URL)
      .then(response => response.json())
      .then(businesses => this.setState({
          businesses: businesses.slice(0, 21)
      })
    )
  }

  componentDidMount(){
    this.fetchBusinesses()
  }

  addToFavorites = (business) => {
    if(!this.state.favorites.includes(business)){
      this.setState({
        favorites: [...this.state.favorites, business]
      })
    }
  }

  removeFromFavorites = (favorite) => {
    const findFavorite = this.state.favorites.find(fav => fav === favorite)
    const index = this.state.favorites.indexOf(findFavorite)
    const newArray = [...this.state.favorites]
    newArray.splice(index, 1);
    this.setState({
      favorites: newArray
    })
  }


  render(){

    console.log(this.state.businesses);

    return(
      <div>
        <NavBar currentUser={this.props.currentUser} runSearch={this.props.runSearch}/>
        <Favorites favorites={this.state.favorites} currentUser={this.props.currentUser} removeFromFavorites={this.removeFromFavorites}/>
        <Businesses businesses={this.state.businesses} currentUser={this.props.currentUser} favorites={this.state.favorites} addToFavorites={this.addToFavorites}/>
      </div>
    )
  }
}

export default BusinessesContainer
