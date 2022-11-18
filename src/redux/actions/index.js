

export const GET_ALL_CHARACTERS="GET_ALL_CHARACTERS";
export const GET_ALL_LOCATIONS="GET_ALL_LOCATIONS";
export const GET_ALL_EPISODES="GET_ALL_EPISODES";
export const GET_BY_URL="GET_BY_URL";
export const CLEAR_URL="CLEAR_URL";
export const GET_CHARACTER_DETAIL="GET_CHARACTER_DETAIL";
export const ADD_CHARACTER_FAVORITE="ADD_CHARACTER_FAVORITE";
export const DELETE_CHARACTER_FAVORITE="DELETE_CHARACTER_FAVORITE";


// `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
// pageNumber, search, status, gender, species

export function getAllCharacters(pageNumber, search, status, gender, species){
    return async function(dispatch){
        return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
            .then(response => response.json()
            .then(json => dispatch({type: GET_ALL_CHARACTERS, payload: json}))
        )
    }
}

export function getAllEpisodes(episodeNumber){
    return async function(dispatch){
        return fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`)
            .then(response => response.json()
            .then(json => dispatch({type: GET_ALL_EPISODES, payload: json}))
        )
    }
}

export function getAllLocations(locationId){
    return async function(dispatch){
        return fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(response => response.json()
            .then(json => dispatch({type: GET_ALL_LOCATIONS, payload: json}))
        )
    }
}

// export function getByUrl(url){
//     return async function(dispatch){
//         return fetch(`${url}`)
//             .then(response => response.json()
//             .then(json => dispatch({type: GET_BY_URL, payload: json}))
//         )
//     }
// }

export function getByUrl(urlArray){
    return async function(dispatch){
        let a = await Promise.all(
            urlArray?.map(async (x) => {
              const res = await fetch(x);
                return await res.json();
            })
        );
        dispatch({type: GET_BY_URL, payload: a})
    }
}

//para vaciar el array de url que contiene los personajes que se traen 
export function clearFromUrl() {
    return{
        type: CLEAR_URL
    }
}

export function addCharacterFavorite(payload){
    return {type: ADD_CHARACTER_FAVORITE , payload}
}

export function deleteCharacterFavorite(payload){
    return {type: DELETE_CHARACTER_FAVORITE , payload}
}

export function getCharacterDetail(id){
    return async function(dispatch){
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json()
            .then(json => dispatch({type: GET_CHARACTER_DETAIL, payload: json}))
        )
    }
}