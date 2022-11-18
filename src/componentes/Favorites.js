import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteCharacterFavorite} from '../redux/actions/index'
import { Link } from 'react-router-dom'

function Favorites() {

  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      {favorites.map(f => 
      <div key={f.id}>
        <img src={f.image} alt={f.name} />
        <div>
            <h5>{f.name}</h5>
            <Link to={`/character/${f.id}`}>+ Info</Link>
            <button onClick={() => dispatch(deleteCharacterFavorite(f.id))}>Eliminar</button>
        </div>
      </div>)}
    </div>
  )
}

export default Favorites