import React, { Component } from 'react';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/BreadcrumbComponent.css";
class BreadcrumbPdf extends Component {
    render() {
      return (
        <Row id="breadcrumb-row">
          <Col xs={3}>
            <Link to="/study-material">
              <h6 className="pageTitle">UI/UX Implementation</h6>
            </Link>
          </Col>
          <Col xs={1} >
            <ArrowForwardIosIcon />
          </Col>
          <Col xs={3}>
          <Link to="/study-material/sub">
          <h6 class="pageTitle"> Design Thinking</h6>
            </Link>
      
         
          </Col>
          <Col xs={1} >
            <ArrowForwardIosIcon />
          </Col>
          <Col xs={3}>
            <h3 class="pageTitle1"> Persona Template.pdf</h3>
            
          </Col>
        </Row>
      );
    }
  }
  export default BreadcrumbPdf;
