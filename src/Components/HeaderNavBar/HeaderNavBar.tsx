import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./HeaderNavBar.css";

function HeaderNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
      <Navbar.Brand as={Link} to="/">Restaurant Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
      <Navbar.Collapse id="basic-navbar-nav" className={`${collapsed ? 'collapse' : ''}`}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/order">Order</Nav.Link>
          {/* <Nav.Link as={Link} to="/entertainment">Menu</Nav.Link> */}
          {/* <Nav.Link as={Link} to="/dining">Ambiance</Nav.Link> */}
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/spa">Menu</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Language" id="language-dropdown">
            <NavDropdown.Item>English</NavDropdown.Item>
            <NavDropdown.Item>Korean</NavDropdown.Item>
            <NavDropdown.Item>Russian</NavDropdown.Item>
            <NavDropdown.Item>Spanish</NavDropdown.Item>
            <NavDropdown.Item>Vietnamese</NavDropdown.Item>
            {/* Add more language options here */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNavbar;
