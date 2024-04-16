import React from "react"
import { Card,Button, Box} from "@mui/material"
import dominos from "../../img/dominos.jpg"
import "./RestCard.css"

function menuredirect() {
    window.location("/Dish")
}

function RestCard(props) {
    const encodedBase64 = props.image;
    return <Card className={"card"} style={{ width: '18rem' }}>


        <Box component='img' className="img" src={props.image} fluid />
        <Card>
            <p>{props.name}</p>
            <p>
                {props.description}
            </p>
            <Button variant="primary" href="/Dish">Menu</Button>
        </Card>
    </Card>
}

export default RestCard;