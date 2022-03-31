import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './store'
import Reservations from './components/Reservations';
import App from './App';
import About from './components/About';

import './index.css';

//import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom'
//import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
            <Route path = "reservations" element = {<Reservations />} />
            <Route path = "about" element = {<About />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);