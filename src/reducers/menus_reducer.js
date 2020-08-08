export default function(state, action){
  // at the beggening we need a default value
  if(state === undefined){
    return []
  }
  switch(action.type){
    case 'find_design': return action.payload;
    case 'upload_image': return action.payload;
    case 'add_text': return action.payload;
    case '': return action.payload;
    default: return state;
  }
}
