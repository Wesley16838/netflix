import React from 'react';
import { BrowserRouter as Router, Link, Route} from "react-router-dom"
import { withRouter } from 'react-router-dom'
function errorContainer(props){
 
    return (
        <div className="notfound">
          <h1>404 NOT FOUND</h1>
        </div>
      );
}
export default withRouter(errorContainer)
