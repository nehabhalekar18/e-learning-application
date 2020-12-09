import React, { Component } from 'react';
import { Navbar,Row,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";
class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">V-Learn</Navbar.Brand>
  
        <Navbar.Collapse id="basic-navbar-nav">
        
      
        <Form inline class="searchCust">
            <FormControl type="text" placeholder="Search" className="mr-lg-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
     
        
        </Navbar.Collapse>
      </Navbar> 
      );
    }
}
 
export default SearchBar;