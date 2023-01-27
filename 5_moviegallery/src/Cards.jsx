



    function Cards(props){
    return (
      <> 
       <div classNameName="cards">
        <div classNameName="card">
          <img src={props.imglink} alt="Movie Poster" classNameName="card_image"/>
        <div classNameName="card_info">
         <span classNameName="card_category">{props.categor}</span>
         <h3 classNameName="title"> {props.title}</h3>
        <a href={props.movielink} target="_blank"> 
        <button>Watch Now</button>
        </a>
        </div>
        </div>
       </div>
  
      </>
    )
  }

  export default Cards;