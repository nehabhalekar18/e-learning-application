import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import "../styles/StudyMaterialPage.css";
import "../styles/style.css";
import HelpComponent from "../components/HelpComponent";
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
class StudyMaterialPage2 extends Component {
  componentWillMount() {
    document.title = "There are 2 files under Persona Folder. ";
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
      <Container className="contentContainerSm">
        <HelpComponent />
        {this.state.openFile ? <Redirect to="/study-material/file" /> : null}
        <BreadcrumbComponent />
        <div id="file-list-div">
          <Table responsive="sm" id="study-material-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Modified</th>
                <th>Type</th>
                <th>Files</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={this.openFile}>
                <td>
                  <DescriptionOutlinedIcon />
                  &nbsp; <Button  tabindex="0" aria-label="Persona Template.pdf" class= "smListButton" id="bootstrap-overrides"> Persona Template</Button>
                </td>
                <td>10-12-2020 12:22</td>
                <td>pdf</td>
                <td>2</td>
              </tr>
              <tr tabindex="0" aria-label="Persona tips.pdf">
                <td>
                  <CropOriginalIcon />
                  &nbsp;<Button class= "smListButton" id="bootstrap-overrides"> Market analysis for Design thinking</Button>
                </td>
                <td>08-12-2020 14:15</td>
                <td>image</td>
                <td>2</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}
export default StudyMaterialPage2;
