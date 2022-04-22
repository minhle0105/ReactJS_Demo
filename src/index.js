import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
// props / state
// hook --> useEffect, useState (basic) , useRef, React.memo (advanced)



// useEffect // vi du
// delete 1 cai item --> main action
// hien thi thong bao --> hieu ung phu


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
