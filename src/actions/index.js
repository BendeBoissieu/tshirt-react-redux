import colors from '../colors';

export function setColors() {
 // TODO: Api call! For now, simulate a DB
 return {
  type: 'SET_COLORS',
  payload: colors
 }
}

export function selectColor(color) {
  return{
    type: 'SELECT_COLOR',
    payload: color
  }
}

export function displayMenu(e) {
  return{
    type: e,
    payload: e
  }
}

export function selectImgArt(imgArt) {
  return{
    type: 'SELECT_IMG_ART',
    payload: imgArt
  }
}

export function loadImage(url, name){
  return {
    type: 'IMAGE_UPLOADED',
    payload: {url, name}
  }
}

export function removeElement(value){
  var payloadType = null;
  switch(value){
    case 'upload_image':
      var typeValue = 'IMAGE_UPLOADED';
      break;
    case 'find_design':
      var typeValue = 'SELECT_IMG_ART';
      break;
    case 'add_text':
      var typeValue = 'ADD_NEW_TEXT';
      var payloadType = ""
      break;
  }
  return {
    type: typeValue,
    payload: payloadType
  }
}

export function addText(text, size, color, weight, style, decoration, align ){
  return{
    type: 'ADD_NEW_TEXT',
    payload: {text, size, color, weight, style, decoration, align}
  }

}
