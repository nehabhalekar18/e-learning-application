import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/LayoutComponent.css";
import SearchBar from "./SearchBar";
import SideNav from "./SideNav";
class LayoutComponent extends Component {
  render() {
    return (
      <Fragment>
        <SearchBar/>
        <Row>
          <Col className="col2" xs={2}>
            <SideNav />
          </Col>
          <Col xs={10}>{this.props.children}</Col>
        </Row>
      </Fragment>
    );
  }
}
export default LayoutComponent;
