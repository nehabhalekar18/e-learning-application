import React, { Component } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import "../styles/StudyMaterialPage.css";
import "../styles/style.css";
import HelpComponent from "../components/HelpComponent";
class StudyMaterial extends Component {
  componentWillMount() {
    document.title =
      "Your are on Study Material page, there are 3 folders under UI UX implementation subject.";
  }
  constructor(props) {
    super(props);
    this.state = {
      openFile: false,
    };
    this.openFile = this.openFile.bind(this);
  }
  openFile = (e) => {
    console.log(e);
    this.setState({ openFile: true });
  };
  render() {
    return (
      <Container className="contentContainer">
        <HelpComponent />
        {this.state.openFile ? <Redirect to="/study-material/sub" /> : null}
        <Row>
          <Col xs={12}>
            <h4 className="pageTitle">UI/UX Implementation</h4>
            <small>5 Files</small>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
          <div id="file-list-div">
          <Table responsive="sm" id="study-material-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Modified</th>
                <th>Type</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={this.openFile}>
                <td>
                  <FolderOpenIcon />
                  &nbsp;
                  <Button
                    class="btn-ds"
                    tabindex="0"
                    aria-label="Design Thinking folder"
                    id="bootstrap-overrides"
                  >
                    Design Thinking
                  </Button>
                </td>
                <td>10-12-2020 12:22</td>
                <td>Folder</td>
                <td>2</td>
              </tr>
              <tr tabindex="0" aria-label="Persona folder">
                <td>
                  <FolderOpenIcon />
                  &nbsp;Persona
                </td>
                <td>08-12-2020 14:15</td>
                <td>Folder</td>
                <td>2</td>
              </tr>
              <tr tabindex="0" aria-label="Ideate folder">
                <td>
                  <FolderOpenIcon />
                  &nbsp;Ideate
                </td>
                <td>06-12-2020 18:06</td>
                <td>Folder</td>
                <td>3</td>
              </tr>
              {/* <tr>
                <td onClick={this.openFile}>
                  <DescriptionOutlinedIcon />
                  &nbsp;Activity.pdf
                </td>
                <td>06-12-2020 18:06</td>
                <td>File</td>
                <td>-</td>
              </tr> */}
            </tbody>
          </Table>
        </div>
            </Col>
        </Row>
        
      </Container>
    );
  }
}
export default StudyMaterial;
