import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutComponent from "./components/LayoutComponent";
import LayoutDashboard from "./components/LayoutDashboard";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import StudyMaterial from "./pages/StudyMaterialPage";
import StudyMaterial2 from "./pages/StudyMaterialPage2";
import StudyMaterialFilePage from "./pages/StudyMaterialFilePage";
import StudyMaterialImage from "./pages/StudyMaterialImage";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <LayoutComponent>
            <Route
              exact
              path="/study-material"
              render={(props) => <StudyMaterial {...props} />}
            ></Route>
            <Route
              exact
              path="/study-material/sub"
              render={(props) => <StudyMaterial2 {...props} />}
            ></Route>
            <Route
              exact
              path="/study-material/file"
              render={(props) => (
                <StudyMaterialFilePage
                  {...props}
                />
              )}
            ></Route>
             <Route
              exact
              path="/study-material/image"
              render={(props) => <StudyMaterialImage />}
            ></Route>
          </LayoutComponent>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
