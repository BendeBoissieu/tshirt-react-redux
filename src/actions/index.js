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
  if (value == 'add_text'){
    var typeValue = 'ADD_NEW_TEXT'
    var payload = {text: "", size: "14", color: "black", weight: "normal", style: "normal", decoration: "none", align: "left"}
  } else if (value == 'upload_image') {
    var typeValue = 'IMAGE_UPLOADED'
    var payload = {url: "", name: ""}
  } else if (value == 'find_design') {
    var typeValue = 'SELECT_IMG_ART'
    var payload = ""
  }
  return {
    type: typeValue,
    payload: payload
  }
}

export function addText(text, size, color, weight, style, decoration, align ){
  return{
    type: 'ADD_NEW_TEXT',
    payload: {text, size, color, weight, style, decoration, align}
  }

}
