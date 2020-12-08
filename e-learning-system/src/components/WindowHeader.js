import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/WindowHeader.css";
import {
  MinimizeOutlined,
  CropDinOutlined,
  CloseOutlined,
} from "@material-ui/icons";
class WindowHeader extends Component {
  render() {
    return (
      <div id="windowHeader">
        <Row>
          <Col lg={11}>
            <p id="windowTitle">E-Learning System</p>
          </Col>
          <Col lg={1} style={{textAlign:'right'}}>
            <MinimizeOutlined fontSize="small" />
            <CropDinOutlined fontSize="small" />
            <CloseOutlined fontSize="small" />
          </Col>
        </Row>
      </div>
    );
  }
}
export default WindowHeader;
