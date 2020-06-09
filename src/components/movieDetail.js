import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route} from "react-router-dom"
import { withRouter } from 'react-router-dom'
import axios from 'axios'
function MovieDetail(props){
    const id = props.match.params;
    console.log('id:',id)
    return(
      <React.Fragment>
          
      </React.Fragment>
    )
}
export default withRouter(MovieDetail)