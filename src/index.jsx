// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import colorsReducer from './reducers/colors_reducer';
import selectedColorReducer from './reducers/selected_color_reducer';
import menusReducer from './reducers/menus_reducer';
import imgArtReducer from './reducers/img_art_reducer';
import imgUploadedReducer from './reducers/img_uploaded_reducer';
import textAddedReducer from './reducers/text_added_reducer';

// State and reducers
const reducers = combineReducers({
  colors: colorsReducer,
  selectedColor: selectedColorReducer,
  menus: menusReducer,
  imgArt: imgArtReducer,
  imgUploaded: imgUploadedReducer,
  textAdded: textAddedReducer
});

const initialState = {
  textAdded: {text: null, size: "14", color: "black", weight: "normal", style: "normal", decoration: "none", align: "left"}
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


