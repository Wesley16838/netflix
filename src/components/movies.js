import React,{useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import MovieCard from './movieCard'
import Carousel from 'react-grid-carousel'
function Moviespage(){
    const INITIAL_STATE = {
      ing : [],
      fav : [],
      soon: [],
      loading: false
    };
    const [data, setData] = useState(INITIAL_STATE);
  
    useEffect(() => {
        const fetchData = async () => {
          const cached = localStorage.getItem('cache');
          if(cached){
            const cached1 = localStorage.getItem('batman');
            const cached2 =localStorage.getItem('harrypotter');
            const cached3 =localStorage.getItem('marvel');
            setData((prevState) => {
              return({
                ...prevState,
                ing : JSON.parse(cached1),
                fav : JSON.parse(cached2),
                soon: JSON.parse(cached3),
                loading: true
              });
            });
          }else{
        
            let url1 = 'http://www.omdbapi.com/?s=batman&apikey=f10f812b'
            let url2 = 'http://www.omdbapi.com/?s=harry+potter&apikey=f10f812b'
            let url3 = 'http://www.omdbapi.com/?s=hunger&apikey=f10f812b'
            const promise1 = axios.get(url1);
            const promise2 = axios.get(url2);
            const promise3 = axios.get(url3);
            Promise.all([promise1, promise2, promise3])
            .then(result => {
              onSetResult(result[0].data.Search,'batman',result[1].data.Search,'harrypotter',result[2].data.Search,'marvel')
            })
            .catch(e => console.log(e))
          }
        };
        fetchData();
        
      }, []);

    const onSetResult = (result1, key1,result2, key2,result3, key3) => {
        localStorage.setItem(key1, JSON.stringify(result1));
        localStorage.setItem(key2, JSON.stringify(result2));
        localStorage.setItem(key3, JSON.stringify(result3));
        localStorage.setItem('cache', true);
        setData((prevState) => {
          return({
            ...prevState,
            ing : result1,
            fav : result2,
            soon: result3,
            loading: true
          });
        });
    };
    const { ing, soon, fav, loading } = data;
    if(loading === false){
      return(
        <React.Fragment>
          <div className="wrapper">Loading</div>
        </React.Fragment>
      )
    }else{
      return(
        <React.Fragment>
          <div className="wrapper">
            <div>
              <h2>近期上映</h2>
              <Carousel 
              cols={5} 
              rows={1} 
              gap={10} 
              responsiveLayout={[
                {
                  breakpoint: 992,
                  cols: 3
                },
                {
                  breakpoint: 600,
                  cols: 2
                }
              ]}
              mobileBreakpoint={480}
              loop>
              {ing.map(item => (
                 <Carousel.Item>
                    <MovieCard title={item.Title} key={item.imdbID} movieId={item.imdbID} year={item.Year} poster = {item.Poster}/>
                 </Carousel.Item>
              ))}
               </Carousel>
            </div>
            <div>
              <h2>喜愛的電影</h2>
              <Carousel 
              cols={5} 
              rows={1} 
              gap={10} 
              responsiveLayout={[
                {
                  breakpoint: 992,
                  cols: 3
                },
                {
                  breakpoint: 600,
                  cols: 2
                }
              ]}
              mobileBreakpoint={480}
              loop>
              {fav.map(item => (
                <Carousel.Item>
                  <MovieCard title={item.Title} key={item.imdbID} movieId={item.imdbID} year={item.Year} poster = {item.Poster}/>
                </Carousel.Item>
              ))}
               </Carousel>
            </div>
            <div>
              <h2>上映中電影</h2>
              <Carousel 
              cols={5} 
              rows={1} 
              gap={10} 
              responsiveLayout={[
                {
                  breakpoint: 992,
                  cols: 3
                },
                {
                  breakpoint: 600,
                  cols: 2
                }
              ]}
              mobileBreakpoint={480}
              loop>
                {soon.map(item => (
                  <Carousel.Item>
                    <MovieCard title={item.Title} key={item.imdbID} movieId={item.imdbID} year={item.Year} poster = {item.Poster}/>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </React.Fragment>
      )
    }
    
}
export default withRouter(Moviespage)