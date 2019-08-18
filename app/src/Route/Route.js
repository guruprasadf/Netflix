import React, { Component } from 'react';
import { Route,BrowserRouter as Router ,Redirect } from 'react-router-dom';
import Container from '../Container';
import Details from '../Details'
class RouteList extends Component {
    render(){
        return(
            <Router>
                 <Route exact path="/" component={()=><Redirect to='/home' />} />
                  {/* <Route exact path="/home" component={Container} /> */}
                  
                  <Route exact path="/home" render={(props) => <Container {...props}/>} />
                  <Route exact path="/details" component={Details} />
                 
            </Router>
        )
    }
}
export default RouteList;