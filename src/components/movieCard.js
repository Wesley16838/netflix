import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route} from "react-router-dom"
import { withRouter } from 'react-router-dom'
import axios from 'axios'
function MovieCard(props){
 
    return(
      <React.Fragment>
          <Link to={`/detail/${props.movieId}`}>
              <div className="movie"> 
                <img className="movieImage" alt={props.title} src={props.poster}/>
                <div className="overlay">{props.title}</div>
              </div>            
        </Link>  
      </React.Fragment>
    )
}
export default withRouter(MovieCard)