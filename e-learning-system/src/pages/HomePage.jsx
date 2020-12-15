import MicOffIcon from "@material-ui/icons/MicOff";
import HeadsetIcon from '@material-ui/icons/Headset';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import home from '../assets/home.jpg';
import brand from '../assets/brand.png';
import brand1 from '../assets/brand1.png';
import screenreader1 from '../assets/screenreader1.png';
class HomePage extends Component {
  componentWillMount() {
    document.title = "Welcome to V-learn, for better accessibility we've turned on your screen reader. you can turn it off by Pressing tab key.";
  }
  state = {};
  
 
  render() {
    return (
      <Container id="home-page-container">
        <Row class="containerRow">
          <Col xs={4} id="left-section">
            <Row className="brandRow">
            {/* <img src={brand}  class="brand" /> */}
            </Row>
              <Row className="imgRow">
              <img src={home} class="img-fluid" />
              </Row>
          </Col>
         
          <Col xs={8} style={{ textAlign: "center" }}>
        
            <div id="home-page-heading">
            <img src={brand1}  class="brand" /> 
            <br></br>
              <i>Your better future is here</i>
            </div>
            <div id="home-page-mic">
            
              <img src={screenreader1} className="sr" />
              <h6 className="turnOff">TURN OFF SCREEN READER</h6>
             
             
            </div> 
            <div className="quote">
              <p><i>Believe in yourself, be strong, never give up no matter what the circumstances are. You are a champion and will overcome the dreaded obstacles. Champions take failure as a learning opportunity, so take in all you can, and run with it. Be your best and don't ever ever give up." - Brad Gerrard</i></p>
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
