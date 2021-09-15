import React from "react";
import Banner from "../common/Banner";
import LoginDialog from "./LoginDialog";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Login() {
    return <div>
        <Banner />
        <Container>
            <Row>
                <Col>
                    <LoginDialog></LoginDialog>
                </Col>
            </Row>
        </Container>
    </div>
}


export default Login;