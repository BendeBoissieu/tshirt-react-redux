export default function(state, action){
  if(state === undefined){
    return null
  }
  if (action.type == 'UPDATE_TARGET'){
    debugger
  }
  switch(action.type){
    case 'UPDATE_TARGET': return action.payload;
    default: return state;
  }

}
