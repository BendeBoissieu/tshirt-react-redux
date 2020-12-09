import { SELECT_MENU } from "../actions";

export default function(state, action){
  if(state === undefined){
    return [];
  }

  switch(action.payload){
    case 'FIND_DESIGN_MENU': return action.payload;
    case 'UPLOAD_IMAGE_MENU': return action.payload;
    case 'ADD_TEXT_MENU': return action.payload;
    case '': return action.payload;
    default: return state;
  }
}
