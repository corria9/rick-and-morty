import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getCharacterDetail} from '../redux/actions/index'

function CharacterDetail() {

    let { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.characterDetail)

    useEffect(() => {
        dispatch(getCharacterDetail(id));
    }, [])

    useEffect(() => {
        dispatch(getCharacterDetail(id));
    }, [detail])

    return (
        <div>
            <h2 className='text-center'>{detail.name}</h2>
            <img src={detail.image} alt={detail.name}></img>
            <div>
                <p>{`Genero: ${detail.gender}`}</p>
                <p>{`Estatus: ${detail.status}`}</p>
                <p>{`Especie: ${detail.species}`}</p>
                <p>{`Tipo: ${detail.type}`}</p>
                <p>Origen: {detail.origin !== undefined ? detail.origin.name : "Cargando..."}</p>
                <p>Locacion: {detail.location !== undefined ? detail.location.name : "Cargando..."}</p>
            </div>
            
        </div>
      )
  
}

export default CharacterDetail