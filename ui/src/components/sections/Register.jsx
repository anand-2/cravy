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
    const [value, setValue] = useState("Select Location")
    const handleSelect = (selected_item) => {
        setValue(selected_item);
    }


    const [user, setUser] = useState({
        name: "",
        email: "",
        phone_num: "",
        password: "",
        location: "",
    })


    const handleChangeName = event => {
        setUser({ name: event.target.value })
    }
    const handleChangeEmail = event => {
        setUser({ email: event.target.value })
    }
    const handleChangePhoneNo = event => {
        setUser({ phone_num: event.target.value })
    }
    const handleChangePass = event => {
        setUser({ password: event.target.value })
    }
    const handleChangeLocation = event => {
        setUser({ location: event.target.value })
    }


    const onSubmit = event => {
        event.preventDefault()



        axios.post("http://localhost:5000/users/register", user)
            .then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            })




    }
    let locationDropdownItems = locations.map(item => {
        return <Dropdown.Item key={item} onClick={e => handleSelect(item)}>{item}</Dropdown.Item>
    })



    return <div><Banner />

        <div>
            <Form >
                <Container className="inputForm">

                    <Row>
                        <Col>

                            <h3 style={{ textAlign: "center" }}>Register</h3>

                            <Form.Group id="formDialog" className="mb-3" >
                                <Form.Control onChange={handleChangeName} type="name" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control onChange={handleChangePass} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group id="formDialog" className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={handleChangeEmail} type="email" placeholder="Email" />
                            </Form.Group>

                            <Row><Col md="3"><DropdownButton onChange={handleChangeLocation} className="dropdown-basic-button " variant="secondary" title={value}>
                                {locationDropdownItems}
                            </DropdownButton></Col></Row>


                            <Form.Group id="formDialog" className="mb-3">
                                <Form.Control onChange={handleChangePhoneNo} type="text" pattern="\d*" placeholder="Phone Number" maxLength="10" />
                            </Form.Group>

                            <Row className="justify-content-center">
                                <Col style={{ textAlign: "right" }}>
                                    <Button onSubmit={onSubmit} className="registerButton" variant="danger" type="submit">
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