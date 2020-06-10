import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route} from "react-router-dom"
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import star from './../Assets/images/star.png'
import play from './../Assets/images/play.png'
function MovieDetail(props){
    const id = props.match.params.moiveID;
    const INITIAL_STATE = {
        movieTitle : "",
        movieYear : "",
        movieRate: "",
        movieRuntime: "",
        movieReleased:"",
        Genre:[],
        Director:"",
        Writer:[],
        Actor:[],
        Plot:"",
        Language:"",
        Country:[],
        Awards:"",
        Poster:"",
        Ratings:[],
        Metascore:"",
        imdbRating:"",
        loading:false
      };
    const [movieData,setMovieData] = useState(INITIAL_STATE)
    useEffect(() => {
        const fetchData = async () => {
         axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=f10f812b`)
            .then(result => {
                setMovieData((prevState) => {
                    return({
                        ...prevState,
                        movieTitle : result.data.Title,
                        movieYear : result.data.Year,
                        movieRate: result.data.Rated,
                        movieRuntime: result.data.Runtime,
                        movieReleased:result.data.Released,
                        Genre:result.data.Genre.split(','),
                        Director:result.data.Director,
                        Writer:result.data.Writer.split(','),
                        Actors:result.data.Actors.split(','),
                        Plot:result.data.Plot,
                        Language:result.data.Language,
                        Country:result.data.Country.split(','),
                        Awards:result.data.Awards,
                        Poster:result.data.Poster,
                        Ratings:result.data.Ratings,
                        Metascore:result.data.Metascore,
                        imdbRating:result.data.imdbRating,
                        loading:true
                    });
                  })
            })
            .catch(e => console.log(e))
        };
        fetchData();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const {movieTitle,  movieRate, movieRuntime, movieReleased, Genre, Director, Writer, Actors, Plot,  Poster, imdbRating, loading} = movieData;
    if(loading === false){
        return(
            
                <p>Loading</p>
            
        )
    }else{
        return(
            <React.Fragment>
                <div className="detailContainer">
                    <div className="detail">
                         
                          <img alt={movieTitle} src={Poster}/>
                    </div>
                    <div className="detail">
                            <Link to="/">GO BACK</Link>
                            <p>Duration: {movieRuntime}</p>
                            <h1>{movieTitle} <span>{movieRate}</span></h1>
                        
                            <div className="rating">
                                <img alt="star" src={star}/><p>{imdbRating}</p>
                            </div>
                            
                            <div>
                                {Genre.map((genre,i)=>{
                                    return <span key={i}>{genre}</span>
                                })}
                            </div>
                            <p>{Plot}</p>
                        
                            <Link to="#"><img alt="play" src={play}/></Link>
                    </div>
                    <div className="detail">
                        <h2>Actors:</h2>
                        <div className="actors">
                            {Actors.map((actor,i)=>{
                                return <p key={i}>{actor} </p>
                            })}
                        </div>
                        <h2>Directors:</h2>
                        <p>{Director}</p>
                        <h2>Writers:</h2>
                        <div className="actors">
                            {Writer.map((writer,i)=>{
                                return <p key={i}>{writer} </p>
                            })}
                        </div>
                        <h2>Released:</h2>
                        <p>{movieReleased}</p>
                    </div>
                </div>
            </React.Fragment>
          )
    }
    
}
export default withRouter(MovieDetail)