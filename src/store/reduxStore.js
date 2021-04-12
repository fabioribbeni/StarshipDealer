import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const defaultStore = {
    starships=[],
    loading =false,
    error =undefined
}

export const store = createStore(starshipReducer, defaultStore, compose(applyMiddleware(thunk)))