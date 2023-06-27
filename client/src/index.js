import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL="https://khanakhanabackend.onrender.com";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <App/>
</BrowserRouter>
);

