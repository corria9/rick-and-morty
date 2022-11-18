import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, DELETE_CHARACTER_FAVORITE, ADD_CHARACTER_FAVORITE, GET_ALL_EPISODES, GET_ALL_LOCATIONS, GET_BY_URL, CLEAR_URL } from "../actions";


const initialState = {
    characters: {},
    episode:{},
    location:{},
    fromUrl:[],
    characterDetail: {},
    favorites: []
  };

  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_CHARACTERS:
            return{
                ...state, characters: action.payload
            }
        case GET_ALL_EPISODES:
            return{
                ...state, episode: action.payload
            }
        case GET_ALL_LOCATIONS:
            return{
                ...state, location: action.payload
            }
        case GET_BY_URL:
            return{
                // ...state, fromUrl: state.fromUrl.concat(action.payload)
                ...state, fromUrl: action.payload
            }
        case CLEAR_URL:
            return{
                ...state, fromUrl: []
            }
        case GET_CHARACTER_DETAIL:
            return{
                ...state, characterDetail: action.payload
            }
        case ADD_CHARACTER_FAVORITE:
            return{
                ...state, favorites: state.favorites.concat(action.payload)
            }
        case DELETE_CHARACTER_FAVORITE:
            return{
                ...state, favorites: state.favorites.filter(c => c.id !== action.payload)
            }
        default:
            return state;
       
    };
};

export default rootReducer;