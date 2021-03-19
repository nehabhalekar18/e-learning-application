import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import personaimg from "../assets/personaimg.png";
import BreadcrumImg from "../components/BreadcrumImg";
import HelpComponent from "../components/HelpComponent";
import "../styles/StudyMaterialFilePage.css";
import "../styles/style.css";
class StudyMaterialImage extends Component {
  render() {
    return (
      <Container className="contentContainerSm" id="file-page-container">
        <HelpComponent />
        <BreadcrumImg />
        <br />
        <Row>
          <Col xs={2} style={{ paddingTop: "18%" }}>
            <Link to="/study-material/file">
              <span style={{ display: "inline-flex" }}>
                <ArrowBackIosIcon />
                Persona Template.pdf{" "}
              </span>
            </Link>
          </Col>
          <Col xs={{ span: 8, offset: 0 }}>
            <div id="file-data-div" tabIndex="0">
              The market analysis shows that 50% of companies use persona in
              Design thinking process
              <img alt="" src={personaimg} className="img-fluid personaImg" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default StudyMaterialImage;
