import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { Col, Container, Row, Table } from "react-bootstrap";
import "../styles/style.css";
class StudyMaterial extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h4 className="pageTitle">Subject from dashboard</h4>
            <small>5 Files</small>
          </Col>
        </Row>
        <div id="file-list-div">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Modified</th>
                <th>Type</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FolderOpenIcon />
                  &nbsp;File 1
                </td>
                <td>10-12-2020 12:22</td>
                <td>Folder</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  <FolderOpenIcon />
                  &nbsp;File 1
                </td>
                <td>08-12-2020 14:15</td>
                <td>Folder</td>
                <td>2</td>
              </tr>
              <tr>
                <td>
                  <FolderOpenIcon />
                  &nbsp;File 1
                </td>
                <td>06-12-2020 18:06</td>
                <td>Folder</td>
                <td>3</td>
              </tr>
              <tr>
                  <Link to='/study-material/file'>
                <td>
                  <DescriptionOutlinedIcon />
                  &nbsp;File 1.pdf
                </td>
                </Link>
                <td>06-12-2020 18:06</td>
                <td>File</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}
export default StudyMaterial;
