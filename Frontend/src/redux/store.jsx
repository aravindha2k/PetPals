import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { thunk } from 'redux-thunk'
import { petReducer } from './reducers/PetReducer'
import { petReducerAdmin } from './reducers/PetReducerAdmin'

const rootReducer = combineReducers({
    pets: petReducer,
    petsAdmin: petReducerAdmin
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store