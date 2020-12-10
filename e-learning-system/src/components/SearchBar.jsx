import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import React, { Component } from "react";
import {
  Col,





  Dropdown, Form,
  FormControl, Navbar,
  Row
} from "react-bootstrap";
import "../styles/SearchBar.css";
class SearchBar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Row style={{ width: "-webkit-fill-available" }}>
          <Col xs={1} style={{ textAlign: "center" }}>
            <h3>V</h3>
          </Col>
          <Col xs={1} style={{ textAlign: "center" }}>
            <h5>Welcome Steffi</h5>
          </Col>
          <Col xs={1} style={{ textAlign: "center" }}>
            <MicOutlinedIcon />
            <br />
            <small>Mic On</small>
          </Col>
          <Col xs={6}>
            <Form inline className="searchCust">
              <FormControl type="text" placeholder="Search" />
            </Form>
          </Col>
          <Col xs={1} style={{ textAlign: "center" }}>
            <Form.Check type="switch" id="custom-switch" />
            <small>Light Mode</small>
          </Col>
          <Col xs={1} style={{ textAlign: "center" }}>
            <Dropdown id="zoom-dropdown">
              <Dropdown.Toggle id="dropdown-basic">50%</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">25%</Dropdown.Item>
                <Dropdown.Item href="#/action-2">50%</Dropdown.Item>
                <Dropdown.Item href="#/action-3">75%</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={1} style={{ textAlign: "center" }}>
            <NotificationsNoneOutlinedIcon />
            <small>Notifications</small>
          </Col>
        </Row>
      </Navbar>
    );
  }
}

export default SearchBar;
