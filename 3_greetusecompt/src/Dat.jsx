import React from 'react';


const currDate=new Date().toLocaleDateString();
function Dat()
{   
    return <p> Date is {`${currDate}`}</p>;
}

export default Dat;