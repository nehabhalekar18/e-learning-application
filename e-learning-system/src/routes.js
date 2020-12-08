import React, { Component } from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Login from "./pages/LoginPage"
class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
           <Route path="/" exact component={Login}></Route>

          {/*<Route path="/login" exact component={}></Route> */}
        </div>
      </Router>
    );
  }
}
export default Routes;