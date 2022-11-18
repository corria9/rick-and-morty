import React from 'react'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCharacters } from '../redux/actions/index'
import Cards from './Cards';
import Pagination from './Pagination';
import Filter from './Filter';

export function Home(props) {

    let [search, setSearch] = useState('');
    let [pageNumber, SetPageNumber] = useState(1);
    let [status, setStatus] = useState('');
    let [gender, setGender] = useState('');
    let [species, setSpecies] = useState('');

    useEffect(()=> {
        props.getAllCharacters(pageNumber, search, status, gender, species);
        
    }, [])

    useEffect(()=> {
        props.getAllCharacters(pageNumber, search, status, gender, species);
    }, [pageNumber, search, status, gender, species])

  return (
    <React.Fragment>
      <form className='container-sm d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 my-3'>

        <input onChange={(e) => {setSearch(e.target.value); SetPageNumber(1); } } type='text'className="form-control" placeholder='Buscar por Nombre' ></input>

        <button onClick={(e) => {e.preventDefault()}} className='btn btn-dark fs-6'>Buscar</button>
      </form>

      <div className='d-flex flex-row'>
        <div className='col-lg-2 col-12'>
          <Filter   setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} SetPageNumber={SetPageNumber} status={status} gender={gender} species={species} />
        </div>     
        <div  className="col-lg-10 col-12 d-flex flex-wrap justify-content-around">
            {props.data.results?.map(c => <Cards key={c.id} name={c.name} image={c.image} id={c.id}/>)}
        </div>
      </div>
      <Pagination info={props.data.info} pageNumber={pageNumber} SetPageNumber={SetPageNumber} />
    </React.Fragment>
  )
}

function mapStateToProps(state) {
    return{
      data: state.characters
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getAllCharacters: (pageNumber, search, status, gender, species) => dispatch(getAllCharacters(pageNumber, search, status, gender, species))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);