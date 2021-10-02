import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./Home.css"
import "../../img/shopping-cart.png"


function Home() {
    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" id="navHeading">Cravy</Navbar.Brand>
            <Nav className="mr-auto" />
            <Nav className="navBar">
                <img src="" alt="" />
                <Nav.Link className="navBar" href="/Cart">Cart</Nav.Link>
                <Nav.Link className="navBar" href="/">Login</Nav.Link>
                <Nav.Link className="navBar" href="#About us">About Us</Nav.Link>

            </Nav>
        </Navbar >
    </div >
}

export default Home;