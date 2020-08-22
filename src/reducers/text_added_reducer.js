export default function(state, action){
  if(state === undefined){
    return null
  }
  switch(action.type){
    case 'ADD_NEW_TEXT': return action.payload;
    default: return state;
  }
}
