import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const currDate=new Date().toLocaleDateString();
const tim=new Date().toLocaleTimeString();
const img2="https://picsum.photos/250/300"
ReactDOM.render(
  <>
    <h1  classNameName="heading">Current Time and Date is </h1>
    <p>{`Date is ${currDate}`}</p>
    <p>{`Time is ${tim}`}</p>
    <a href="https://www.youtube.com/@ravatgaming" target="-">
    <img src="https://picsum.photos/200/300" alt="demo"/></a>
    <img src={img2} alt="img2"/>
    </>,
    document.getElementById('root')    
);