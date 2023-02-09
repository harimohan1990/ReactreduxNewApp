import React from 'react';
import {render} from 'react-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {  } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
reducer,
applyMiddleware(thunk, logger)
)
render(
<Provider store={store}>
   <App />
</Provider>,
document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
