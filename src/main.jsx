import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';

var ChatAddress = "http://localhost:8000";
var Credential = "1234";

ReactDOM.createRoot(document.getElementById('root')).render(
  <App ChatAddress={ChatAddress} Credential={Credential}/>
);
