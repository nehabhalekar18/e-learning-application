import React, { Component } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import "../styles/LoginPage.css";
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
              <h2>Login</h2>
              <i>with your university credentials</i>
            </div>
            <div id="login-div">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <AccountCircleOutlinedIcon id="user-icon" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Email ID"
                  aria-label="E-mail"
                  aria-describedby="E-mail"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <LockOutlinedIcon id="user-icon" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                id="password-input"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="Password"
                />
                <InputGroup.Append id="password-input-append">
                  <InputGroup.Text id="password-visibility">
                    <VisibilityOffOutlinedIcon />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
