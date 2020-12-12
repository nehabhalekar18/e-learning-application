import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/HelpComponent.css";
import "../styles/style.css";
class HelpComponent extends Component {
  render() {
    return (
      <Container id="help-button-container">
        <span style={{ position: "fixed" }}>
          <Button className="theme-red-icon theme-red" id="help-button">
            ?
          </Button>
          <h6>Help</h6>
        </span>
      </Container>
    );
  }
}
export default HelpComponent;
