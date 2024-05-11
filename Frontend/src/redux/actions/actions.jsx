import axios from "axios"
import { FETCH_PETS_FAILURE, FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS } from "../actionTypes/actionTypes_pets"

export const fetchPets = () => async(dispatch)=>{
    try {
        dispatch({type: FETCH_PETS_REQUEST})
        const res = await axios.get("http://localhost:3000/pet/data")
        dispatch({
            type: FETCH_PETS_SUCCESS, 
            payload: res.data.data
        })

    } catch (error) {
        dispatch({
            type: FETCH_PETS_FAILURE,
            payload: "Error Fetching Pets"
        })
    }
}



