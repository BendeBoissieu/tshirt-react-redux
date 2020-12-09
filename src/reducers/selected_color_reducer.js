import { SELECT_COLOR_PRODUCT } from "../actions";

export default function(state, action) {
  if(state === undefined){
    return null;
  }
  if(action.type === SELECT_COLOR_PRODUCT){
    return action.payload.id;
  } else {
    return state;
  }
}

