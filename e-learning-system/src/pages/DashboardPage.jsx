import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from "../components/SideNav";
import SearchBar from "../components/SearchBar";
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
              <div class="col-10" >
                  <SearchBar/>
               <h1>Dashboard</h1> 
                <p>3 subjects</p>
              </div>
            </div>
          </div>
         );
    }
}
 
export default DashboardPage;