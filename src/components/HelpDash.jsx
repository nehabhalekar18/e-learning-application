import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/HelpDash.css";
import "../styles/style.css";
class HelpDash extends Component {
  render() {
    return (
      <Container id="helpdash">
        <span style={{ position: "fixed" }}>
          <Button aria-label = "Press Enter for assistance" className="theme-white-icon hbtnd" id="help-button">
            ?
          </Button>
          <h6>Help</h6>
        </span>
      </Container>
    );
  }
}
export default HelpDash;
