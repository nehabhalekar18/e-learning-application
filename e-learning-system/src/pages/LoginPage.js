import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import LoginImg from "../assets/login_img.png";
import WindowHeader from "../components/WindowHeader";
import "../styles/LoginPage.css";
class Login extends Component {
  render() {
    return (
      <div>
        <WindowHeader />
        <Container fluid>
          <Row>
            <Col xs={{span:4,offset:4}} style={{ textAlign: "center" }}>
              <br />
              <h4>E-Learning System</h4>
              <img alt="Login" src={LoginImg} id="loginImg" />
              <br/>
              <br/>
              <Form.Control className="loginInputs" type="email" placeholder="Enter email" autofocus="autofocus"/><br/>
              <Form.Control className="loginInputs" type="password" placeholder="Enter password" />
            </Col>            
          </Row>
         
        </Container>
      </div>
    );
  }
}
export default Login;
