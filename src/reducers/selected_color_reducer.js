export default function(state, action) {
  if(state === undefined){
    return null;
  }
  if(action.type === 'SELECT_COLOR'){
    return action.payload.id;
  } else {
    return state;
  }
}

