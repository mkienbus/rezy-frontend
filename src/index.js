import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'

import App from './App';
import './index.css';

//import 'bootstrap/dist/css/bootstrap.css';
//import { BrowserRouter as Router } from 'react-router-dom'
//import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
 <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);