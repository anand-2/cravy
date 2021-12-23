import React from "react"
import Card from "react-bootstrap/Card"
import dominos from "../../img/dominos.jpg"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import "./RestCard.css"

function menuredirect() {
    window.location("/Dish")
}

function RestCard(props) {
    const encodedBase64 = props.image;
    return <Card className={"card"} style={{ width: '18rem' }}>


        <Image className="img" src={props.image} fluid />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Button variant="primary" href="/Dish">Menu</Button>
        </Card.Body>
    </Card>
}

export default RestCard;