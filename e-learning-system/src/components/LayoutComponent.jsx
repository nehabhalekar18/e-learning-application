import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import SideNav from "./SideNav";
class LayoutComponent extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xs={12}>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <SideNav />
          </Col>
          <Col xs={10}>{this.props.children}</Col>
        </Row>
      </Fragment>
    );
  }
}
export default LayoutComponent;
