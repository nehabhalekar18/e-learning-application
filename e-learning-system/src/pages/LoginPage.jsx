import React, { Component } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import "../styles/LoginPage.css";
import "../styles/style.css";
import Checkbox from "@material-ui/core/Checkbox";
import login from '../assets/login.png';
import brand from '../assets/brand.png';
import { Redirect } from "react-router-dom";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      email: "",
      errors: [],
      redirect: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }
  handleInputChange(event) {
    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();

    //VALIDATE
    var errors = [];

    //firstname
    if (this.state.firstname === "") {
      errors.push("firstname");
    }

    //email
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(this.state.email).toLowerCase());

    if (!validEmail) {
      errors.push("email");
    }

    this.setState({
      errors: errors,
    });

    if (errors.length > 0) {
      return false;
    } else {
      this.props.history.push("/dashboard");
    }
  }

  componentWillMount() {
    document.title =
      "You are on Login Page. Please enter your university email ID and Password.";
  }
  render() {
    return (
      <Container id="home-page-container" className="container-fluid">
        <Row>
          <Col xs={4} style={{ textAlign: "center" }} id="left-section">
          <img src={login} className="imgLogin" />
          <br></br>
          <img src={brand} className="brandRow1" /><br></br>
          <i style={{ color: "white" }}>Your better future is here</i>
          </Col>
          <Col xs={8}>
            <div id="home-page-heading">
              <h2>Login</h2>
              <i>with your university credentials</i>
            </div>
            <div id="login-div">
                <Row>
                <Col xs={12}>
                  <label htmlFor="email">Email</label>
                  <InputGroup
                    className={
                      this.hasError("email") ? "is-invalid" : "input-group"
                    }
                  >
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        <AccountCircleOutlinedIcon />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Enter E mail ID."
                      autoComplete="off"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                  <small
                    className={
                      this.hasError("email") ? "inline-errormsg" : "hidden"
                    }
                  >
                    Email is invalid or missing
                  </small>
                </Col>
                <Col xs={12}>
                  <label htmlFor="firstname">Password</label>
                  <InputGroup
                    className={
                      this.hasError("firstname") ? "is-invalid" : "input-group"
                    }
                  >
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        <LockOutlinedIcon />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label=" Enter your Password. Press tab to continue."
                      autoComplete="off"
                      name="firstname"
                      type="password"
                      value={this.state.firstname}
                      onChange={this.handleInputChange}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        <VisibilityOffOutlinedIcon />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>

                  <small
                    className={
                      this.hasError("firstname") ? "inline-errormsg" : "hidden"
                    }
                  >
                    Please enter a value
                  </small>
                </Col>
               
                <Col xs={12} className="submitCol">
                  <Button onClick={this.handleSubmit}>Submit</Button>
                </Col>
              </Row>
              <Row className="rememberCol">
                <Col xs={6}>
                  <Checkbox></Checkbox>
                  Remember me
                </Col>
                <Col xs={6} id="forgot-pswd-col">
                  Forgot Password?
                </Col>
              </Row>
               
              
              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
