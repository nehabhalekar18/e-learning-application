import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage"
import StudyMaterial from "./pages/StudyMaterialPage";
import LayoutComponent from "./components/LayoutComponent"
import StudyMaterialFilePage from "./pages/StudyMaterialFilePage"
import HomePage from "./pages/HomePage"
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/login" exact component={Login}></Route>
          <LayoutComponent>
          <Route
            exact
            path="/study-material"
            render={(props) => (
              <StudyMaterial />
            )}
          ></Route>
          <Route
            exact
            path="/study-material/file"
            render={(props) => (
              <StudyMaterialFilePage {...props}  />
            )}
          ></Route>
          </LayoutComponent>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
