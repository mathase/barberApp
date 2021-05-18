import React from "react";
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Home() {
  const InputGroup = {};
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center w-100"
        style={{ minHeight: `100vh` }}
      >
        <div className="w-100">
          <h2>Need a hairdresser? You're in the right place.</h2>
          <Form.Group className="d-flex">
            <Form.Control
              style={{ width: `25vw` }}
              type="text"
              placeholder="Enter your address"
            />
            <DropdownButton
              style={{ marginLeft: `10px` }}
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="Come now"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">30 mins</Dropdown.Item>
              <Dropdown.Item href="#">1:00 hr</Dropdown.Item>
              <Dropdown.Item href="#">1:30 hrs</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>{" "}
            <Button style={{ marginLeft: `10px` }}>Find Me</Button>
          </Form.Group>
          <p>
            <Link to="/login">Log in</Link> for recent address.
          </p>
        </div>
      </Container>
    </>
  );
}
