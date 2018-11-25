import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App/App';
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;
//Creates A store Big Object to Hold StateChanging Functions
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


//Apps Proivder Props As Data to Each Child Of APP 
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);

