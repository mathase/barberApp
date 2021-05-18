import { React, useState } from "react";
import {
  Col,
  Row,
  Container,
  InputGroup,
  Button,
  Alert,
} from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useAuth } from "../contexts/OauthContext";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  }

  return (
    <div className="p-5">
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        <Row>
          <Col md={4} className="sideBar">
            <ul style={{ listStyle: `none` }}>
              <li style={{ padding: `16px 24px 16px 24px` }}>
                Request a Barber
              </li>
              <li style={{ padding: `16px 24px 16px 24px` }}>My trips</li>
              <li style={{ padding: `16px 24px 16px 24px` }}>Wallet</li>
              <li style={{ padding: `16px 24px 16px 24px` }}>Free Promo</li>
              <li style={{ padding: `16px 24px 16px 24px` }}>
                Profile Settings
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <div className="d-flex">
              <AccountCircleIcon fontSize="large" />
              <h2 className="pl-4"> {currentUser.email}</h2>
            </div>
            <div className="d-flex" style={{ alignItems: `baseline` }}>
              <p className="">Location</p>
              <InputGroup.Prepend className="pl-3">
                <InputGroup.Text id="basic-addon1">
                  South Africa
                </InputGroup.Text>
              </InputGroup.Prepend>
            </div>
            <div className="d-flex" style={{ alignItems: `baseline` }}>
              <p className="">Language</p>
              <InputGroup.Prepend className="pl-3">
                <InputGroup.Text id="basic-addon1">English</InputGroup.Text>
              </InputGroup.Prepend>
            </div>
            <div className="d-flex" style={{ alignItems: `baseline` }}>
              <p className="">Invite Code</p>
              <InputGroup.Prepend className="pl-3">
                <InputGroup.Text id="basic-addon1">Mathase8uem</InputGroup.Text>
              </InputGroup.Prepend>
            </div>
            <div className="d-flex" style={{ alignItems: `baseline` }}>
              <p className="">Email</p>
              <InputGroup.Prepend className="pl-3">
                <InputGroup.Text id="basic-addon1">
                  {currentUser.email}
                </InputGroup.Text>
              </InputGroup.Prepend>
            </div>
          </Col>
        </Row>
        <Button onClick={handleLogout}>Logout</Button>
      </Container>
    </div>
    
  );
}
