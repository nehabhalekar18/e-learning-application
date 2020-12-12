import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import HelpComponent from "./HelpComponent";
class LayoutComponent extends Component {
  render() {
    return (
      <Fragment>
        <SearchBar />
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>{this.props.children}</Col>
        </Row>
        <HelpComponent />
      </Fragment>
    );
  }
}
export default LayoutComponent;
