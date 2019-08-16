import React, { Component } from 'react';
import { Route,BrowserRouter as Router ,Redirect } from 'react-router-dom';
import C from '../C'
class RouteList extends Component {
    render(){
        return(
            <Router>
                 <Route exact path="/home" component={C} />
                 <Route exact path="*" component={()=><Redirect to='/home' />} />
            </Router>
        )
    }
}
export default RouteList;