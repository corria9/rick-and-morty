import React, { useEffect, useState } from 'react'
import { getAllEpisodes, getByUrl, clearFromUrl } from '../redux/actions/index'
import {connect} from 'react-redux'


function Episode(props) {

    const [episode, setEpisode] = useState(2);
    // const [episode, setEpisode] = useState([]);
    

    useEffect(()=> {
        props.getAllEpisodes(episode);
        props.getByUrl(props.data.characters)
        
        
    }, [])

    useEffect(()=> {
        props.getAllEpisodes(episode);
        
    }, [episode, props.data])

    
  return (
    <div>
        {props.data.characters && props.data.characters.length} <br/> 
        {/* {props.characters.length} */}
        {/* {console.log(1 , props.characters )} */}
        {/* {console.log(props.data.characters)} */}
        <h1>{props.data.name}</h1>
        <h5>{props.data.air_date}</h5>
    </div>
  )
}

function mapStateToProps(state) {
    return{
      data: state.episode,
      characters: state.fromUrl
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getAllEpisodes: (episodeNumber) => dispatch(getAllEpisodes(episodeNumber)),
        getByUrl: (url) => dispatch(getByUrl(url)),
        clearFromUrl: () => dispatch(clearFromUrl())
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Episode);