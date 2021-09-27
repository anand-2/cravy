import React, { useState } from "react";
import Banner from "../common/Banner";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Register.css"
import axios from "axios";




function Register() {

    const locations = ["Delhi", "Bangalore", "Chennai", "Mumbai"]
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone_num: "",
        password: "",
        location: "Select location",
    })

    const resetAlerts = () => {
        setErrorMessage("");
        setSuccessMessage("")
    }
    const handleChangeName = event => {
        setUser(
            {
                ...user,
                username: event.target.value
            })
    }
    const handleChangeEmail = event => {
        setUser(
            {
                ...user,
                email: event.target.value
            })
    }
    const handleChangePhoneNo = event => {
        setUser(
            {
                ...user,
                phone_num: event.target.value
            })
    }
    const handleChangePass = event => {
        setUser(
            {
                ...user,
                password: event.target.value
            })
    }
    const handleChangeLocation = selected_item => {
        setUser(
            {
                ...user,
                location: selected_item
            })
    }


    const onRegister = event => {

        resetAlerts()
        axios.post("http://localhost:5000/users/register", user)
            .then((res) => {
                let data = res.data
                if (data.error) {
                    setErrorMessage(data.message)
                }
                else {
                    setSuccessMessage(data.message)
                }
            }).catch((error) => {
                setErrorMessage(JSON.stringify(error))
            })




    }
    let locationDropdownItems = locations.map(item => {
        return <Dropdown.Item key={item} onClick={e => handleChangeLocation(item)}>{item}</Dropdown.Item>
    })

    let errorAlert = <div className="alert alert-danger" role="alert">
        {errorMessage}
    </div>;


    let successAlert = <div className="alert alert-success" role="alert">
        {successMessage}
    </div>;

    if (errorMessage === "") {
        errorAlert = undefined;
    }

    if (successMessage === "") {
        successAlert = undefined
    }
    return <div><Banner />

        <div>
            <Form >
                <Container className="inputForm">

                    <Row>
                        <Col>

                            <h3 style={{ textAlign: "center" }}>Register</h3>
                            {errorAlert}
                            {successAlert}
                            <Form.Group id="formDialog" className="mb-3" >
                                <Form.Control onChange={handleChangeName} type="name" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control onChange={handleChangePass} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group id="formDialog" className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={handleChangeEmail} type="email" placeholder="Email" />
                            </Form.Group>

                            <Row><Col md="3"><DropdownButton className="dropdown-basic-button " variant="secondary" title={user.location}>
                                {locationDropdownItems}
                            </DropdownButton></Col></Row>


                            <Form.Group id="formDialog" className="mb-3">
                                <Form.Control onChange={handleChangePhoneNo} type="text" pattern="\d*" placeholder="Phone Number" maxLength="10" />
                            </Form.Group>

                            <Row className="justify-content-center">
                                <Col style={{ textAlign: "right" }}>
                                    <Button onClick={onRegister} className="registerButton" variant="danger" type="button">
                                        Register
                                    </Button>

                                    <br />
                                </Col>
                                <Col>
                                    <Button className="registerbutton" variant="secondary" type="reset">
                                        Clear
                                    </Button>
                                </Col>
                            </Row>





                        </Col>

                    </Row>


                </Container>

            </Form>
        </div >
    </div >

}

export default Register;