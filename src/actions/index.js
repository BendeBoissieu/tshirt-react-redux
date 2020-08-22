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
  return {
    type: value,
    payload: null
  }
}

export function addText(text, size, color, style){
  return{
    type: 'ADD_NEW_TEXT',
    payload: {text, size, color, style}
  }

}
