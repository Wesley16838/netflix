import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

//includes
import './Assets/css/styles.min.css'//css file

//components
import MoviesPage from './components/movies'
import MovieDetail from './components/movieDetail'
import ErrorContainer from "./components/errorContainer";
function App() {

  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={MoviesPage} />
            <Route exact path="/detail/:moiveID" component={MovieDetail} />
            <Route render={(props) => <ErrorContainer {...props} title="Error"/>} />
          </Switch>
        </div>
    </Router> 
  );
}

export default App;
