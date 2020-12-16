import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/BreadcrumbComponent.css";
class BreadcrumbComponent extends Component {
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
          <h3 className="pageTitle1"> Desing Thinking</h3>
          <label className="subCount">2 files</label>
        </Col>
      </Row>
    );
  }
}
export default BreadcrumbComponent;
