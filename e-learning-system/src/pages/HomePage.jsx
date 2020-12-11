import MicOffIcon from "@material-ui/icons/MicOff";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import "../styles/style.css";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <Container id="home-page-container">
        <Row>
          <Col xs={4} id="left-section"></Col>
          <Col xs={8} style={{ textAlign: "center" }}>
            <div id="home-page-heading">
              <h2>Turn your mic on</h2>
              <i>for voice commands</i>
            </div>
            <div id="home-page-mic">
              <MicOffIcon id="mic-icon"  className=" theme-red"/>
              <h6>Turn On</h6>
            </div>
            <div id="home-page-reader">
              <h5>Screen Reader Activated</h5>
              <Form.Check type="switch" id="custom-switch" />
              <h6>Turn Off</h6>
            </div>
            <div id="home-page-continue">
              <Link to="/login">
                <div id="continue-btn" className=" theme-red">
                  <NavigateNextIcon />
                </div>
              </Link>
              <small>Continue</small>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
