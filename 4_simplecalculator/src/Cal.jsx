
function Add(a,b)
{ let sum=a+b;
  return sum;
}

function Sub(a,b)
{  let dif=a-b;
  return dif;
}

function Mult(a,b)
{  let mul=a*b;
  return mul;
}

function Div(a,b)
{  let div=a/b;
div=div.toFixed(2);
  return div;
}

export {Add,Sub,Mult,Div};