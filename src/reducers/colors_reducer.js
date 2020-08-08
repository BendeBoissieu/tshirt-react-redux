export default function(state, action){
  // at the beggening we need a default value
  if(state === undefined){
    return []
  }

  //action
  switch(action.type){
    case 'SET_COLORS': return action.payload;
    //case 'SELECT_COLOR': return [ action.payload ]; //which is the color
    default: return state;
  }

}


//function will take the current state do an aciton and give a back the new state
// first state ==  undefined for the default value
// then create an action in folder action
// first make the setColors available

