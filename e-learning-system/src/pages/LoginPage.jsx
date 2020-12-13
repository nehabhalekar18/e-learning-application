import React, { Component } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Button
} from "react-bootstrap";
import {Link} from 'react-router-dom'
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import "../styles/LoginPage.css";
import "../styles/style.css";
import Checkbox from "@material-ui/core/Checkbox";

import { Redirect } from "react-router-dom";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      email: "",
      errors: [],
      redirect: null
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
      errors: errors
    });

    if (errors.length > 0) {
      return false;
    } else {
        return <Redirect to='/dashboard'/>
    }
  }

  componentWillMount() {
    document.title = "You are on Login Page. Please enter your university email ID and Password.";
  }
  render() {
    return (
      <Container id="home-page-container" className="container-fluid">
        <Row>
          <Col xs={4} id="left-section"></Col>
          <Col xs={8} >
            <div id="home-page-heading" style={{ textAlign: "center" }}>
              <h2>Login</h2>
              <i>with your university credentials</i>
            </div>
            <div id="login-div">



        <form className="row">
      <div className="col-lg-12 input-container">
        <label htmlFor="email" >Email</label>
       
        <input   aria-label="Enter E mail ID."
          autoComplete="off"
          className={
            this.hasError("email")
              ? "form-control is-invalid"
              : "form-control"
          }
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        
        <div
          className={this.hasError("email") ? "inline-errormsg" : "hidden"} 
        >
          Email is invalid or missing
        </div>
      </div>
      
      <div className="col-lg-12">
          <label htmlFor="firstname">Password</label>
          <input
            aria-label=" Enter your Password. Press tab to continue."
            autoComplete="off"
            className={
              this.hasError("firstname")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleInputChange}
          />
          <div
          className={
            this.hasError("firstname") ? "inline-errormsg" : "hidden"
          }
        >
          Please enter a value
        </div>
      </div>
    
      <div className="col-lg-12  padd-top">
      
        <Button className="col-lg-12 btn" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
    <div className="row submitFooter">
      <div className="col-lg-6">
      <Checkbox></Checkbox>
       Remember me
      </div>
      <div className="col-lg-6">
      <u>Forgot password?</u>
      </div>
      </div>
    </div>
    </Col>
        </Row>
      </Container>
           
                
                
    );
  }
}

export default HomePage;
