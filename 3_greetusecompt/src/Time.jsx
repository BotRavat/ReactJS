import React from 'react';

function Time(){
    const currTime= new Date().toLocaleTimeString();
    return <p> Time is {`${currTime}`}</p>
}

export default Time;