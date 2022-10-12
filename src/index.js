import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './store';
import Reservations from './components/Reservations';
import Restaurants from './components/Restaurants';
import Favorites from './components/Favorites';
import App from './App';
import About from './components/About';

import './index.css';

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path = "reservations" element = {<Reservations />} />
          <Route path = "favorites" element = {<Favorites />} />
          <Route path = "about" element = {<About />} />
          <Route path = "restaurants" element = {<Restaurants />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);