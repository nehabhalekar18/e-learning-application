import { Nav } from "react-bootstrap";
import "../styles/SideNav.css";
import React, { Component } from 'react';
class  SideNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
    <Nav  defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Dashboard</Nav.Link>
        
        <Nav.Link eventKey="link-1">Lectures</Nav.Link>
        <Nav.Link eventKey="link-2">Study Materials</Nav.Link>
        <Nav.Link eventKey="link-1">Assignments</Nav.Link>
        <Nav.Link eventKey="link-2">Exams</Nav.Link>
    </Nav>
 
          </div> );
    }
}
 
export default SideNav;