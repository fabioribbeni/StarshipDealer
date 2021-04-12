import { ADD_STARSHIP_ERROR, ADD_STARSHIP_SUCCESS, DELETE_STARSHIP_ERROR, DELETE_STARSHIP_REQUEST, DELETE_STARSHIP_SUCCESS, DISCARD_ERROR, FETCH_ALL_STARSHIPS_ERROR, FETCH_ALL_STARSHIPS_REQUEST, FETCH_ALL_STARSHIPS_SUCCESS } from "./constants"

const defaultState = {
    starships=[],
    loading =false,
    error =undefined
}

export default (state = defaultState, actiion) => {
    switch (actiion.type) {
        case FETCH_ALL_STARSHIPS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ALL_STARSHIPS_SUCCESS:
            return {
                ...state,
                loading: false,
                starships: actiion.payload
            }
        case FETCH_ALL_STARSHIPS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_STARSHIP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_STARSHIP_SUCCESS:
            return {
                ...state,
                loading: false,
                starships: [state.starships, action.payload]
            }
        case ADD_STARSHIP_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_STARSHIP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_STARSHIP_SUCCESS:
            return {
                ...state,
                loading: false,
                starships: state.starships.filter(starship => starship.id !== action.payload)
            }
        case DELETE_STARSHIP_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DISCARD_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}