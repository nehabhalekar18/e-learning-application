import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage"
import StudyMaterial from "./pages/StudyMaterialPage";
import LayoutComponent from "./components/LayoutComponent"
import StudyMaterialFilePage from "./pages/StudyMaterialFilePage"
class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login}></Route>
        <Switch>
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
