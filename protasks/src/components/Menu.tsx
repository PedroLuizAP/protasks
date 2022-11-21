import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";

const Menu = () => {
  const getActiveRoute = useLocation().pathname ? "Active" : "";

  return (
    <Navbar bg="dark" variant="dark" expand="lg">s
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          ProTasks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={getActiveRoute} as={NavLink} to="/custumer">
              Custumoer
            </Nav.Link>
            <Nav.Link className={getActiveRoute} as={NavLink} to="/tasks">
              Tasks
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Name" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Configuration
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Exit </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu();