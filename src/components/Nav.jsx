import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Nav() {
  return (
    <Navbar>
      <Navbar.Brand>Wunce</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="#home" to="/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link href="#home" to="/login">
            Create Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
