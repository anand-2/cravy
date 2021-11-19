import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./Home.css"
import axios from "axios";
import RestCard from "../common/RestCard";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"


function Home() {


    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/users/restaurant")
            .then((res) => {
                let data = res.data.data

                setRestaurants(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" id="navHeading">Cravy</Navbar.Brand>
            <Nav className="mr-auto" />
            <Nav className="navBar">

                <Nav.Link className="navBar" href="/Cart">Cart</Nav.Link>

                <Nav.Link className="navBar" href="#About us">About Us</Nav.Link>

            </Nav>
        </Navbar >

        <Container fluid>
            <Row>
                {
                    restaurants.map((one_res) => {
                        return <Col key={one_res.id}>
                            <RestCard name={one_res.name} description={one_res.description} image={one_res.image}></RestCard>
                        </Col>
                    })
                }
            </Row>
        </Container>



    </div >
}

export default Home;