import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {addCharacterFavorite} from '../redux/actions/index'

function Cards({name, image, id, addCharacterFavorite}) {
  return (
    <div>
        <img src={image} alt={name} />
        <div>
            <h5>{name}</h5>
            <Link to={`/character/${id}`}>+ Info</Link>
            <button onClick={() => addCharacterFavorite({name, image, id})}>Favoritos*</button>
        </div>
    </div>
  )
}



function mapDispatchToProps(dispatch) {
  return {
      addCharacterFavorite: (character) => dispatch(addCharacterFavorite(character))
  };
}

export default connect(null, mapDispatchToProps)(Cards);