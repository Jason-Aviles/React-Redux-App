import {FETCHING_EVENT,FETCH_EVENT_SUCCESS,FETCH_EVENT_ERROR} from '../action/'


const initialState ={
   event:[]
}

export const  rooterReducer = (state= initialState,{type,payload})=>{
    switch (type) {
        case FETCHING_EVENT:
          return{ ...state,car:{...state.car ,features:[...state.car.features,payload]}}
         
    case FETCH_EVENT_SUCCESS:
      return{
        ...state,
      }
      case FETCH_EVENT_ERROR:
        return{
          ...state
        }
        default:
           return state;
    }
}
    
  