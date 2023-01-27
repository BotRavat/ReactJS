

const Slot =(props) =>{
    //let x ='🤩';
    let y =props.y;  
    let z =props.z;
    // let[x,y,z]=props;

    if(props.x===y && y===z)
    return (  
        <>
<div classNameName='slot_inner'>
    <h1>{props.x} {y} {z}</h1>
    <h1>This is Matching</h1>
    <hr/>
</div>
        </>        
    );
  else
  return (  
    <>
<div classNameName='slot_inner'>
<h1>{props.x} {y} {z} </h1>
<h1>This is Not Matching</h1>
<hr/>
</div>
    </>        
);

}

export default Slot;