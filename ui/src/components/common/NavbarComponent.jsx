import react from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


function NavbarComponent() {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" id="navHeading">Cravy</Navbar.Brand>
        <Nav className="mr-auto" />
        <Nav className="navBar">

            <Nav.Link className="navBar" href="/Cart">Cart</Nav.Link>

            <Nav.Link className="navBar" href="#About us">About Us</Nav.Link>

        </Nav>
    </Navbar >
}

export default NavbarComponent;