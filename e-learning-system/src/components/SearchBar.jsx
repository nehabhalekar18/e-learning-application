import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import Notifications from "@material-ui/icons/Notifications";
import React, { Component } from "react";
import {
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import "../styles/SearchBar.css";
import "../styles/style.css";
import brand from '../assets/brand.png';
import studentname2 from '../assets/studentname2.png';
class SearchBar extends Component {
  state = {};
  render() {
    return (
      <Container id="searchHeader" className="theme-red">
        <Row class="rowContainer">
          <Col xs={1}>
          <img src={brand} alt="Logo" class="imgBrand" />

          </Col>
      
          <Col xs={1} >
         <label className="studName" >Welcome Steffy</label>
          </Col>
          <Col xs={1} >
            <MicOutlinedIcon className="theme-white-icon micOn" />
            <br/>
            <small tabindex="0"  className="fontSize miconFont" aria-label="Mic On">
              Mic On
            </small>
          </Col>
          <Col xs={6} style={{ maxWidth: "inherit" }}>
            <Form inline className="searchCust" aria-label="Search a subject">
              <FormControl type="text" placeholder="Search" />
            </Form>
          </Col>
          <Col xs={1}>
                <Form.Check type="switch" className="custom-switch" />
                <small tabindex="0" className="fontSize" aria-label="Screen Reader On">
                  Reader Off
                </small>
          </Col>
          <Col xs={1}>
            <Dropdown id="zoom-dropdown">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="theme-white-icon fontSize"
                size="sm"
                tabindex="0"
                aria-label="Font size 50%"
              >
                50%
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  tabindex="0"
                  aria-label="Change to 25%"
                >
                  25%
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  tabindex="0"
                  aria-label="Change to 50%"
                >
                  50%
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  tabindex="0"
                  aria-label="Change to 75%"
                >
                  75%
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <small className="fontSize">Font Size</small>
          </Col>
          <Col xs={1}>
            <Notifications
              className="theme-white-icon notiOn"
              tabindex="0"
              aria-label="No notifications"
            /><br></br>
            <small className="fontSize" >Notifications</small>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;
