import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import store from './store';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);