import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import DashboardIcon from "@material-ui/icons/Dashboard";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import "../styles/SideNav.css";
import "../styles/style.css";
import { connect } from "react-redux";
import { getNav } from "../action/index";

const mapStateToProps = (state) => ({
  ...state,
  activeNav: state.reducers.value,
});

const mapDispatchToProps = (dispatch) => ({
  getNav: (value) => dispatch(getNav(value)),
});

class SideNav extends Component {
  state = {};
  render() {
    return (
      <Container id="side-nav" className="theme-red">
        <Nav activeKey="study-material" className="flex-column" >
          <Nav.Link tabIndex="0" href="/dashboard" aria-label="Dashboard Tab" eventKey="dashboard" >
            <DashboardIcon/>
            &nbsp; Dashboard
          </Nav.Link>
          <Nav.Link tabIndex="0" eventKey="lectures" aria-label="Lectures Tab">
            <VideoLibraryIcon className="linkActive" />
            &nbsp; Lectures
          </Nav.Link>
          <Nav.Link tabIndex="0" href="/study-material" eventKey="study-material" aria-label="Study Material Tab">
            <MenuBookIcon className="linkActive" />
            &nbsp; Study Materials
          </Nav.Link>
          <Nav.Link tabIndex="0" eventKey="assignment" aria-label="Assignments Tabs">
            <AssignmentIcon className="linkActive" />
            &nbsp; Assignments
          </Nav.Link>
          <Nav.Link tabIndex="0" eventKey="exams" aria-label="Exam Tab">
            <ReceiptIcon className="linkActive" />
            &nbsp; Exams
          </Nav.Link>
        </Nav>
      </Container>
    );
  }
}

export default  connect(mapStateToProps, mapDispatchToProps) (SideNav);
