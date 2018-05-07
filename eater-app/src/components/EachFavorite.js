import React from 'react'


const EachFavorite = (props) => {

  const handleClick = (event) => {
  	props.removeFromFavorites(props.favorite)
  }

    return(
      <div>
        <ul>
          <img src={props.image} onClick={handleClick} alt={props.index} width='190' height='150' />
          <li>{props.favorite.name}</li>
          <li>{props.favorite.address}, {props.favorite.city}</li>
          <li>{props.favorite.state} {props.favorite.zip_code}</li>
        </ul>
      </div>
    )
  }


export default EachFavorite
