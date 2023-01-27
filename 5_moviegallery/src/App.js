import Cards from './Cards';
import Sdata from './Sdata';


// function ncard(val)
// {
//   return (
//     <Cards 
//     imglink={val.imglink}
//       categor={val.categor}
//         title={val.title}
//         movielink={val.movielink}
//    />

//   );
// }

// function App()
// {     
//   return (
//    <>   <h1>Movies on Hotstar</h1>
//     {Sdata.map(ncard)}
//      <Cards 
//     imglink={Sdata[1].imglink}
//       categor={Sdata[1].categor}
//         title={Sdata[1].title}
//         movielink={Sdata[1].movielink}
//    />
//    </>
//   );
// }


// function App()
// {     
//   return (
//    <> 
//      <h1>Movies on Hotstar</h1>

//    {  Sdata.map( function ncard(val) 
//      {
//        return ( <Cards 
//       imglink={val.imglink}
//       categor={val.categor}
//         title={val.title}
//         movielink={val.movielink}
//         />
//        );
//        }
//       ) }
//    </>

//   );
// }


function App()
{     
  return (
   <> 
     <h1>Movies on Hotstar</h1>

   {  Sdata.map((val) =>
     {
       return ( 
        <Cards 
        key={val.id}
        imglink={val.imglink}
        categor={val.categor}
       title={val.title}
        movielink={val.movielink}
        />
       );
       }
      ) 
      }
   </>
  );
}

export default App;