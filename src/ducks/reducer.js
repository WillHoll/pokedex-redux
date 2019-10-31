import axios from 'axios'

const initialState = {
    username: '',
    pokemon: {},
    loading: false
}

const SET_USERNAME = 'SET_USERNAME'
const GET_POKEMON = 'GET_POEMON'


//ACTION BUILDERS
export const setUsername = username => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}
export  const getPokemon = (url) => {
    let pokemonPromise = axios.get(url).then(res=> res.data)
    return{
        type: GET_POKEMON,
        payload: pokemonPromise
    }
}


//RENDER FUNCTION
export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return {...state, username: action.payload}
            case GET_POKEMON + '_PENDING':
                return {...state, loading: true}
            case GET_POKEMON + '_REJECTED':
                return {...state, loading: false}
            case GET_POKEMON + '_FULFILLED':
                return {...state, loading: false, pokemon: action.payload}
            default: return state
    }
}