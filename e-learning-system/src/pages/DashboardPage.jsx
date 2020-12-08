import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from "../components/SideNav";
import  "../styles/SideNav.css";
class DashboardPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="rowdashboard" >
            <div class="row" >
              <div class="col-2 content ">
                <SideNav/>
              </div>
              <div class="col-md-auto" >
                One of three columns
              </div>
            </div>
          </div>
         );
    }
}
 
export default DashboardPage;