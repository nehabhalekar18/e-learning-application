import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import Notifications from "@material-ui/icons/Notifications";
import React, { Component } from "react";
import {
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import "../styles/SearchBar.css";
import "../styles/style.css";
class SearchBar extends Component {
  state = {};
  render() {
    return (
      <Container id="searchHeader" className="theme-red">
        <Row>
          <Col xs={1}>
            <h1 className="theme-white-icon">V</h1>
          </Col>
          <Col xs={1}>
            <h5>Welcome Steffi</h5>
          </Col>
          <Col xs={1}>
            <MicOutlinedIcon className="theme-white-icon" />
            <br />
            <small tabindex="0" aria-label="Mic On">Mic On</small>
          </Col>
          <Col xs={6} style={{ maxWidth: "inherit" }}>
            <Form inline className="searchCust" aria-label="Search a subject">
              <FormControl type="text" placeholder="Search" />
            </Form>
          </Col>
          <Col xs={1}>
            <Form.Check type="switch" id="custom-switch" />
            <small tabindex="0" aria-label="Screen Reader On">Reader Off</small>
          </Col>
          <Col xs={1}>
            <Dropdown id="zoom-dropdown" >
              <Dropdown.Toggle
                id="dropdown-basic"
                className="theme-white-icon"
                size="sm"
                tabindex="0" aria-label="Font size 50%"
              >
                50%
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"  tabindex="0" aria-label="Change to 25%">25%</Dropdown.Item>
                <Dropdown.Item href="#/action-2" tabindex="0" aria-label="Change to 50%">50%</Dropdown.Item>
                <Dropdown.Item href="#/action-3" tabindex="0" aria-label="Change to 75%">75%</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <small>Font Size</small>
          </Col>
          <Col xs={1}>
            <Notifications className="theme-white-icon" tabindex="0" aria-label="No notifications" />
            <small>Notifications</small>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;
