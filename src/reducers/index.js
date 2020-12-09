import { combineReducers } from "redux";
import reducerColors from './colors_reducer';
import reducerSelectedColor from './selected_color_reducer';
import reducerSelectedMenu from './selected_menu_reducer';
import imgArtReducer from './img_art_reducer';
import imgUploadedReducer from './img_uploaded_reducer';
import textAddedReducer from './text_added_reducer';
import targetUpdatedReducer from './target_updated_reducer';

const rootReducer = combineReducers({
  colorsReducer: reducerColors,
  selectedColorReducer: reducerSelectedColor,
  selectedMenuReducer: reducerSelectedMenu,
  imgArt: imgArtReducer,
  imgUploaded: imgUploadedReducer,
  textAdded: textAddedReducer,
  removeElement: textAddedReducer,
  targetUpdated: targetUpdatedReducer
});

export default rootReducer;
