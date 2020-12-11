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
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/study-material" className="theme-red">
            <DashboardIcon className="theme-red" />
            &nbsp; Dashboard
          </Nav.Link>
          <Nav.Link eventKey="link-1" className="theme-red">
            <VideoLibraryIcon className="theme-red" />
            &nbsp; Lectures
          </Nav.Link>
          <Nav.Link
            href="/study-material"
            eventKey="link-2"
            className="theme-red"
          >
            <MenuBookIcon className="theme-red" />
            &nbsp; Study Materials
          </Nav.Link>
          <Nav.Link eventKey="link-1" className="theme-red">
            <AssignmentIcon className="theme-red" />
            &nbsp; Assignments
          </Nav.Link>
          <Nav.Link eventKey="link-2" className="theme-red">
            <ReceiptIcon className="theme-red" />
            &nbsp; Exams
          </Nav.Link>
        </Nav>
      </Container>
    );
  }
}

export default SideNav;
