import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// components --> 2 loai
// class components va functional components

// functional components

// const sum = (a, b) => {
//     return a + b;
// }
//
// function sum2 (a, b) {
//     return a + b;
// }

// JSX javascript syntax extension


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
