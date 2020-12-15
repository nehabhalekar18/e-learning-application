import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import HelpDash from "../components/HelpDash";
import "../styles/DashboardPage.css";
import "../styles/style.css";
class DashboardPage extends Component {
  componentWillMount() {
    document.title = "Welcome Steffy, You are on Dashboard Page";
  }
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
       <HelpDash/>
        <Container className="contentContainer">
      
          {this.state.redirect ? (
            <Redirect to="/study-material"></Redirect>
          ) : null}
          <Row>
            <Col xs={12}>
              <h4
                className="pageTitle"
                tabindex="0"
                aria-label="5 subjects are listed."
              >
                Dashboard
              </h4>
           
              <label class="subCount">5 Subject</label>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs="4">
              <Card
                className="subjectCard"
                tabindex="0"
                onClick={this.setSubject}
                aria-label="Subject 1. UI/UX Implementations"
              >
                <Card.Body>
                  <Card.Title>UI/UX Implementation</Card.Title>
                  <Card.Text>
                    <p class="updateTime">Updated on 06-12-2020 15:25</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                className="subjectCard"
                tabindex="0"
                aria-label="Subject 2. Information Systems"
              >
                <Card.Body>
                  <Card.Title>Information Systems</Card.Title>
                  <Card.Text>
                  <p class="updateTime">Updated on 06-12-2020 15:25</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                className="subjectCard"
                tabindex="0"
                aria-label="Subject 3. Usability Testing"
              >
                <Card.Body>
                  <Card.Title>Usability Testing</Card.Title>
                  <Card.Text>
                  <p class="updateTime">Updated on 06-12-2020 15:25</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="4">
              <Card
                className="subjectCard"
                tabindex="0"
                aria-label="Subject 4. Network Security"
              >
                <Card.Body>
                  <Card.Title>Network Security</Card.Title>
                  <Card.Text>
                  <p class="updateTime">Updated on 06-12-2020 15:25</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                className="subjectCard"
                tabindex="0"
                aria-label="Last Subject. Advance Database"
              >
                <Card.Body>
                  <Card.Title>Advance Database</Card.Title>
                  <Card.Text>
                  <p class="updateTime">Updated on 06-12-2020 15:25</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default DashboardPage;
