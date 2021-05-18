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
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const signUpDetails = {
    img: "http://localhost:3000/signUp__img.png",
  };
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
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
                  <h2>Reset Password</h2>

                  <p>
                    Please enter the email address associated with your account.
                  </p>
                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="success">{message}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
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
                        Reset Password
                      </Button>
                    </Form.Group>
                  </Form>
                  <p className="pt-3">
                    Need an account? <Link to="/signup">Create account</Link>
                  </p>
                  <p className="pt-3">
                   Go back to <Link to="/login">Log in</Link>
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
