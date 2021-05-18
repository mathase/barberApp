import React, { useRef, useState } from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Container,
} from "react-bootstrap";
import { useAuth } from "../contexts/OauthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const signUpDetails = {
    img: "http://localhost:3000/signUp__img.png",
  };
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      history.push("/feed");
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center w-100"
        style={{ minHeight: `100vh` }}
      >
        <div className="w-100">
          <Card
            className="shadow"
            style={{
              borderRadius: `20px`,
              border: `5px gray solid`,
            }}
          >
            <Row>
              <Col md={4} style={{ borderRight: `ridge` }}>
                <div style={{ padding: `20px` }}>
                  <h2>Welcome Back!</h2>

                  <p>Log In here</p>
                  {error && <Alert variant="danger">{error}</Alert>}
                  {currentUser && currentUser.email}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-around">
                      <Button
                        disabled={loading}
                        className="shadow"
                        type="submit"
                        style={{ backgroundColor: `white`, color: `black` }}
                      >
                        Log In
                      </Button>
                    </Form.Group>
                  </Form>
                  <p className="pt-3">
                    Need an account? <Link to="/signup">Create account</Link>
                  </p>
                  <p className="pt-3">
                    <Link to="/passwordReset">Forgot Password</Link>
                  </p>
                </div>
              </Col>
              <Col
                style={{
                  backgroundImage: `url(${signUpDetails.img})`,
                  backgroundPosition: `center`,
                  backgroundSize: `contain`,
                  backgroundRepeat: `no-repeat`,
                  margin: `30px`,
                }}
              ></Col>
            </Row>
          </Card>
        </div>
      </Container>
    </>
  );
}
