import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route} from "react-router-dom"
import { withRouter } from 'react-router-dom'
import axios from 'axios'
function MovieDetail(props){
    const id = props.match.params.moiveID;
    const INITIAL_STATE = {
        movieTitle : "",
        movieYear : "",
        movieRate: "",
        movieRuntime: "",
        Genre:"",
        Director:"",
        Writer:"",
        Actor:"",
        Plot:"",
        Language:"",
        Country:"",
        Awards:"",
        Poster:"",
        Ratings:[],
        Metascore:"",
        imdbRating:""
      };
    const [movieData,setMovieData] = useState(INITIAL_STATE)
    useEffect(() => {
        const fetchData = async () => {
         axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=f10f812b`)
            .then(result => {
              console.log(result)
              setMovieData((prevState) => {
                return({
                  ...prevState
                });
              })
            })
            .catch(e => console.log(e))
        };
        fetchData();
      }, []);
    
    return(
      <React.Fragment>
          
      </React.Fragment>
    )
}
export default withRouter(MovieDetail)