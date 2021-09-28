import React, { useState } from "react";
import "./LoginDialog.css";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import axios from "axios";






function LoginDialog() {

    const [errorMessage, setErrorMessage] = useState("")
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });


    const handleChangeEmail = event => {
        setCredentials({
            ...credentials,
            email: event.target.value
        })
    }

    const handleChangePassword = event => {
        setCredentials({
            ...credentials,
            password: window.btoa(event.target.value)
        })
    }

    const resetAlerts = () => {
        setErrorMessage("");
    }

    const onLogin = event => {
        resetAlerts();
        axios.post("http://localhost:5000/users/login", credentials)
            .then((res) => {
                let data = res.data;    //Axios response
                if (data.error) {
                    setErrorMessage(data.message)
                    window.localStorage.removeItem("AUTH_TOKEN")
                }
                else {
                    //store token to browser
                    window.localStorage.setItem("AUTH_TOKEN", data.token);
                }

            })
            .catch((err) => {
                setErrorMessage(JSON.stringify(err))
            })
    }


    let errorAlert = <div className="alert alert-danger" role="alert">
        {errorMessage}
    </div>;

    if (errorMessage === "") {
        errorAlert = undefined;
    }


    return <div>
        <div>
            <Form >
                <Container className="Design">

                    <Row>
                        <Col>

                            <h3>Login</h3>
                            {errorAlert}
                            <Form.Group id="formDialog" className="mb-3" controlId="formBasicEmail">

                                <Form.Control onChange={handleChangeEmail} type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control onChange={handleChangePassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <a href="/register"> Or Register here</a>
                                    <br />
                                </Col>
                                <Col><a href="/iforgot">Forgot Password?</a></Col>
                            </Row>


                            <div id="loginButton">
                                <Button onClick={onLogin} variant="primary" type="button">
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