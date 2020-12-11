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
            <h1 className="theme-red">V</h1>
          </Col>
          <Col xs={1}>
            <h5 className="theme-red-text">Welcome Steffi</h5>
          </Col>
          <Col xs={1}>
            <MicOutlinedIcon className="theme-red" />
            <br />
            <small className="theme-red-text">Mic On</small>
          </Col>
          <Col xs={6} style={{ maxWidth: "inherit" }}>
            <Form inline className="searchCust">
              <FormControl type="text" placeholder="Search" />
            </Form>
          </Col>
          <Col xs={1}>
            <Form.Check type="switch" id="custom-switch" />
            <small className="theme-red-text">Reader Off</small>
          </Col>
          <Col xs={1}>
            <Dropdown id="zoom-dropdown">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="theme-red"
                size="sm"
              >
                50%
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">25%</Dropdown.Item>
                <Dropdown.Item href="#/action-2">50%</Dropdown.Item>
                <Dropdown.Item href="#/action-3">75%</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <small className="theme-red-text">Font Size</small>
          </Col>
          <Col xs={1}>
            <Notifications className="theme-red" />
            <small className="theme-red-text">Notifications</small>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;
