import axios from "axios";
import { AddPet } from "../actionTypes/actionTypesAdmin";


export const addDataPet = (newPet)=> (dispatch) => {
    dispatch({type:AddPet.ADD_PET_LOADING})
    axios.post("https://petpals-1-pa4p.onrender.com/pet/create",newPet)
    .then((res)=>{
       console.log(res.data);
       dispatch({type:AddPet.ADD_PET_SUCCESS, payload:res.data});
    })
    .catch((error)=>{
      console.error(error);
      dispatch({type:AddPet.ADD_PET_ERROR})
    })

}