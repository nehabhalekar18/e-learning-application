import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import HelpComponent from "../components/HelpComponent";
import "../styles/DashboardPage.css";
import "../styles/style.css";
class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectName: null,
      redirect: false,
    };
    this.setSubject = this.setSubject.bind(this);
  }
  setSubject = (e) => {
    this.setState({ subjectName: e.target.innerHTML, redirect: true });
  };
  render() {
    return (
      <Fragment>
        <SearchBar />
        <Container className="contentContainer">
          {this.state.redirect ? (
            <Redirect to="/study-material"></Redirect>
          ) : null}
          <Row>
            <Col xs={12}>
              <h4 className="pageTitle">Dashboard</h4>
              <small>5 Subject</small>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs="4">
              <Card className="subjectCard" onClick={this.setSubject}>
                <Card.Body>
                  <Card.Title>UI/UX Implementation</Card.Title>
                  <Card.Text>
                    <small>Updated on 06-12-2020 15:25</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card className="subjectCard">
                <Card.Body>
                  <Card.Title>Information Systems</Card.Title>
                  <Card.Text>
                    <small>Updated on 06-12-2020 15:25</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card className="subjectCard">
                <Card.Body>
                  <Card.Title>Usability Testing</Card.Title>
                  <Card.Text>
                    <small>Updated on 06-12-2020 15:25</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Card className="subjectCard">
                <Card.Body>
                  <Card.Title>Network Security</Card.Title>
                  <Card.Text>
                    <small>Updated on 06-12-2020 15:25</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card className="subjectCard">
                <Card.Body>
                  <Card.Title>Advance Database</Card.Title>
                  <Card.Text>
                    <small>Updated on 06-12-2020 15:25</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <HelpComponent />
        </Container>
      </Fragment>
    );
  }
}

export default DashboardPage;
