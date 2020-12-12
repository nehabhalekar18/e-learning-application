import React, { Component } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import "../styles/StudyMaterialPage.css"
import "../styles/style.css";
class StudyMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openFile: false,
    };
    this.openFile = this.openFile.bind(this);
  }
  openFile = (e) => {
    console.log(e)
    this.setState({ openFile: true });
  };
  render() {
    return (
      <Container className="contentContainer">
        {this.state.openFile ? <Redirect to="/study-material/sub" /> : null}
        <Row>
          <Col xs={12}>
            <h4 className="pageTitle">UI/UX Implementation</h4>
            <small>5 Files</small>
          </Col>
        </Row>
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
                  &nbsp;Design Thinking
                </td>
                <td>10-12-2020 12:22</td>
                <td>Folder</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  <FolderOpenIcon />
                  &nbsp;Persona
                </td>
                <td>08-12-2020 14:15</td>
                <td>Folder</td>
                <td>2</td>
              </tr>
              <tr>
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
      </Container>
    );
  }
}
export default StudyMaterial;
