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

// the payload contain all the colors
