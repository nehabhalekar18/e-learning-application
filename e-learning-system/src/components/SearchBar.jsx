import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import Notifications from "@material-ui/icons/Notifications";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
  DropdownButton,
} from "react-bootstrap";
import "../styles/SearchBar.css";
import "../styles/style.css";
import brand from "../assets/brand.png";
import studentname2 from "../assets/studentname2.png";
import { setZoom } from "../action/index";
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
        <Row class="rowContainer">
          <Col xs={1}>
            <img src={brand} alt="Logo" class="imgBrand" />
          </Col>

          <Col xs={1}>
            <label className="studName">Welcome Steffy</label>
          </Col>
          <Col xs={1}>
            <MicOutlinedIcon className="theme-white-icon micOn" />
            <br />
            <small
              tabindex="0"
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
              tabindex="0"
              className="fontSize"
              aria-label="Screen Reader On"
            >
              Reader Off
            </small>
          </Col>
          <Col xs={1}>
            <select id="zoom-dropdown" onChange={this.handleChange} defaultChecked={this.props.value}>
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
              tabindex="0"
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
