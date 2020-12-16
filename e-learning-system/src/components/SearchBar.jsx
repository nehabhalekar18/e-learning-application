import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import Notifications from "@material-ui/icons/Notifications";
import React, { Component } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { setZoom } from "../action/index";
import brand from "../assets/brand.png";
import "../styles/SearchBar.css";
import "../styles/style.css";
const mapStateToProps = (state) => ({
  ...state,
  value: state.reducers.value,
});

const mapDispatchToProps = (dispatch) => ({
  setZoom: (value) => dispatch(setZoom(value)),
});
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { zoomValue: "100" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({ zoomValue: e.target.value });
    this.props.setZoom(e.target.value);
  };
  componentDidMount() {
    this.props.setZoom(this.state.zoomValue);
  }

  render() {
    return (
      <Container id="searchHeader" className="theme-red">
        <Row className="rowContainer">
          <Col xs={1}>
            <img src={brand} alt="Logo" className="imgBrand" />
          </Col>

          <Col xs={1}>
            <label className="studName">Welcome Steffy</label>
          </Col>
          <Col xs={1}>
            <MicOutlinedIcon className="theme-white-icon micOn" />
            <br />
            <small
              tabIndex="0"
              className="fontSize miconFont"
              aria-label="Mic On"
            >
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
            <small
              tabIndex="0"
              className="fontSize"
              aria-label="Screen Reader On"
            >
              Reader Off
            </small>
          </Col>
          <Col xs={1}>
            <select
              id="zoom-dropdown"
              onChange={this.handleChange}
              defaultChecked={this.props.value}
            >
              <option value="100">100%</option>
              <option value="125">125%</option>
              <option value="150">150%</option>
              <option value="175">175%</option>
              <option value="200">200%</option>
            </select>
            <br />
            <small className="fontSize">Font Size</small>
          </Col>
          <Col xs={1}>
            <Notifications
              className="theme-white-icon notiOn"
              tabIndex="0"
              aria-label="No notifications"
            />
            <br></br>
            <small className="fontSize">Notifications</small>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
