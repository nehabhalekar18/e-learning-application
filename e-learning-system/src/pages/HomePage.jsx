import MicOffIcon from "@material-ui/icons/MicOff";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import "../styles/style.css";
import home from '../assets/home.jpg';
class HomePage extends Component {
  componentWillMount() {
    document.title = "Welcome to V-learn, for better accessibility we've turned on your screen reader. you can turn it off by Pressing tab key.";
  }
  state = {};
  
 
  render() {
    return (
      <Container id="home-page-container">
        <Row>
          <Col xs={4} id="left-section">
           <h1 class="heading">V-learn</h1> 
          <img src={home} alt="Logo" class="img-fluid" />;
          </Col>
         
          <Col xs={8} style={{ textAlign: "center" }}>
        
            <div id="home-page-heading">
        
              <h2>Welcome to V-Learn</h2>
              <i>Screen reader turned on</i>
            </div>
            <div id="home-page-mic">
              <MicOffIcon id="mic-icon" className="theme-red-icon theme-red" />
              <h6>Turn Off</h6>
            </div>
           
            <div id="home-page-continue">
              <Link to="/login" aria-label="press enter to go on login page">
                <div id="continue-btn" className="theme-red">
                  <NavigateNextIcon className="theme-red-icon" />
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
