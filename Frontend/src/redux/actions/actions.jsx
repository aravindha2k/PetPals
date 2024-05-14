import axios from "axios"
import { FETCH_PETS_FAILURE, FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS } from "../actionTypes/actionTypes_pets"

export const fetchPets = (filters) => async(dispatch)=>{
    let url = "https://petpals-1-pa4p.onrender.com/pet/data?"
    for (const key in filters) {
        if (filters[key]) {
            if (Array.isArray(filters[key])) {
                filters[key].forEach((value) => {
                    url += `${key}=${value}&`;
                });
            } else {
                url += `${key}=${filters[key]}&`;
            }
        }
    }
    try {
        // console.log(url);
        dispatch({type: FETCH_PETS_REQUEST})
        const res = await axios.get(url)
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

export const fetchSinglePets = (id) => async(dispatch)=>{
    try {
        dispatch({type: FETCH_PETS_REQUEST})
        const res = await axios.get(`https://petpals-1-pa4p.onrender.com/pet/data/${id}`)
        // console.log(res);
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



