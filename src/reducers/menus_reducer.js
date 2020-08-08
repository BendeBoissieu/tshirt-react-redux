export default function(state, action){
  // at the beggening we need a default value
  if(state === undefined){
    return []
  }

  //action
  return action.payload;

}
