export default function(state, action){
  if(state === undefined){
    return null
  }
  switch(action.type){
    case 'IMAGE_UPLOADED': return action.payload;
    case 'SELECT_IMG_ART': return action.payload;
    default: return state;
  }
}
