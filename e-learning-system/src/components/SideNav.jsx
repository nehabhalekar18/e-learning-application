import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import DashboardIcon from "@material-ui/icons/Dashboard";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import "../styles/SideNav.css";
import "../styles/style.css";
class SideNav extends Component {
  state = {};
  render() {
    return (
      <Container id="side-nav" className="theme-red">
        <Nav defaultActiveKey="/home" className="flex-column" >
          <Nav.Link tabindex="0" href="/dashboard" aria-label="Dashboard Tab">
            <DashboardIcon className="theme-red-icon" />
            &nbsp; Dashboard
          </Nav.Link>
          <Nav.Link tabindex="0" eventKey="link-1" aria-label="Lectures Tab">
            <VideoLibraryIcon className="theme-red-icon" />
            &nbsp; Lectures
          </Nav.Link>
          <Nav.Link tabindex="0" href="/study-material" eventKey="link-2" aria-label="Study Material Tab">
            <MenuBookIcon className="theme-red-icon" />
            &nbsp; Study Materials
          </Nav.Link>
          <Nav.Link tabindex="0" eventKey="link-1" aria-label="Assignments Tabs">
            <AssignmentIcon className="theme-red-icon" />
            &nbsp; Assignments
          </Nav.Link>
          <Nav.Link tabindex="0" eventKey="link-2" aria-label="Exam Tab">
            <ReceiptIcon className="theme-red-icon" />
            &nbsp; Exams
          </Nav.Link>
        </Nav>
      </Container>
    );
  }
}

export default SideNav;
