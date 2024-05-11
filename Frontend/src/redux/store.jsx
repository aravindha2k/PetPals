import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { thunk } from 'redux-thunk'
import { petReducer } from './reducers/PetReducer'

const rootReducer = combineReducers({
    pets: petReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store