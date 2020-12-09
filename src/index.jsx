// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const initialState = {
  textAdded: {text: "", size: "14", color: "black", weight: "normal", style: "normal", decoration: "none", align: "left"}
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers, initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);


