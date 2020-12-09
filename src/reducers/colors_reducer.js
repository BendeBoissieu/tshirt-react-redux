import { SET_COLORS_PRODUCT } from "../actions";

const initialState = {
  colors: []
};
export default function(colorsReducer = initialState, action){

  //action
  switch(action.type){
    case SET_COLORS_PRODUCT:
      return {
        colors: action.payload
      };
    default:
      return colorsReducer;
  }

}
