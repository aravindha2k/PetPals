import { AddPet } from "../actionTypes/actionTypesAdmin";

const initialState  = {
    isLoadingFetch:false,
    isLoadingAdd:false,
    isLoadingUpdate:false,
    isLoadingDelete:false,
    petsData:[],
    isErrorFetch:false,
    isErrorAdd:false,
    isErrorUpdate:false,
    isErrorDelete:false,
}

export const petReducerAdmin = (state = initialState, {type, payload}) => {
    console.log("product reducer..");
    
    switch(type){
        // case FetchProduct.FETCH_PRODUCT_LOADING : return {...state,isLoadingFetch:true}
        // case FetchProduct.FETCH_PRODUCT_SUCCESS :  return {...state,isLoadingFetch:false,productsData:payload}
        // case FetchProduct.FETCH_PRODUCT__ERROR  : return {...state,isErrorFetch:false,isLoadingFetch:false}

        case AddPet.ADD_PET_LOADING : return {...state,isLoadingAdd:true}
        case AddPet.ADD_PET_SUCCESS: return {...state,isLoadingAdd:false,petsData:[...state.petsData,payload]}
        case AddPet.ADD_PET_ERROR : return {...state,isErrorAdd:true,isLoadingAdd:false}

        // case UpdateProduct.UPDATE_PRODUCT_LOADING : return {...state,isLoadingUpdate:true}
        // case UpdateProduct.UPDATE_PRODUCT_SUCCESS : return {...state,isLoadingUpdate:false,productsData:
        //                                                     state.productsData.map(prod => prod.id == payload.id ? payload:prod )
        //                                                 }
        // case UpdateProduct.UPDATE_PRODUCT_ERROR : return {...state,isErrorUpdate:true,isLoadingUpdate:false}

        // case DeleteProduct.DELETE_PRODUCT_LOADING : return {...state,isLoadingDelete:true}
        // case DeleteProduct.DELETE_PRODUCT_SUCCESS : return {...state,isLoadingDelete:false,productsData:
        //                                                     state.productsData.filter(prod => prod.id != payload)
        //                                                 }
        // case DeleteProduct.DELETE_PRODUCT_ERROR : return {...state,isLoadingDelete:false,isErrorDelete:true}

        default: return state
    }
}