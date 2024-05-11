import { FETCH_PETS_FAILURE, FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS } from "../actionTypes/actionTypes_pets";

const initialPetState = {
    loading:false,
    pets:[],
    error: "",
}

const petReducer = (state=initialPetState, action)=>{
    switch (action.type) {
        case FETCH_PETS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_PETS_SUCCESS:
            return{
                ...state,
                loading:false,
                pets: action.payload,
                error:""
            }
        case FETCH_PETS_FAILURE:
            return{
                ...state,
                loading:false,
                pets:[],
                error:action.payload
            }
        default:
            return state
    }
}