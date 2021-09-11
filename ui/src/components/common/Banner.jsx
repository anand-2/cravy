import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./Banner.css"




function Banner() {
    return <div >
        <Jumbotron fluid className="Jumbo">
            <Container >
                <span id="title">Cravy</span>
                <br />
                <span>
                    For your unattended cravings
                </span>
            </Container>
        </Jumbotron>
    </div>
}

export default Banner;