import React from "react";
import "./LoginDialog.css";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";



function LoginDialog() {
    return <div>
        <div>
            <Form >
                <Container className="Design">

                    <Row>
                        <Col>

                            <h3>Login</h3>

                            <Form.Group id="formDialog" className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <a href="/register"> Or Register here</a>
                                    <br />
                                </Col>
                                <Col><a href="/iforgot">Forgot Password?</a></Col>
                            </Row>


                            <div id="loginButton">
                                <Button variant="primary" type="button">
                                    Login
                                </Button>
                            </div>



                        </Col>

                    </Row>


                </Container>

            </Form>
        </div >
    </div >
}


export default LoginDialog;