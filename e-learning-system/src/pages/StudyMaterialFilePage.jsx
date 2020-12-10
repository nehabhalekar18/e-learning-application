import React, { Component } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';
import "../styles/style.css";
import "../styles/StudyMaterialFilePage.css";
class StudyMaterialFilePage extends Component {
  render() {
    return (
      <Container id="file-page-container">
        <Row>
          <Col xs={12}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Subject</Breadcrumb.Item>
              <Breadcrumb.Item active>File Name</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <div id="file-data-div">
              The purpose of personas is to create reliable and realistic representations of your key audience segments for reference. These representations should be based on qualitative and some quantitative user research and web analytics. Remember, your personas are only as good as the research behind them. Effective personas: <br/><br/>Represent a major user group for your website Express and focus on the major needs and expectations of the most
              important user groups Give a clear picture of the user's expectations and how they're likely to use the site Aid in uncovering universal features and functionality Describe real
              people with backgrounds, goals, and values<br/><br/><b> Benefits of Personas</b><br/> Personas help to focus decisions surrounding site components by adding a layer of real-world consideration to the conversation. They also offer a quick and inexpensive way to test and prioritize those features throughout the development process. In addition they can help:<br/><br/> You may develop one or more personas for a project but limit yourself to the main audiences for the site. For any given project, creating only three or four personas is best. Remember that it is better to paint with a broad brush and meet the needs of the larger populations than try to meet the needs of everyone. The goal of personas is not represent all audiences or address all needs of the website but instead to focus on the major needs of the most important user groups.
            </div>
          </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <Link to='/study-material' style={{marginBottom:'5%'}}>
                    Go Back
                </Link>
            </Col>
        </Row>
      </Container>
    );
  }
}
export default StudyMaterialFilePage;
