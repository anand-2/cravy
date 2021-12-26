import React, { useEffect, useState } from "react";
import NavbarComponent from "../common/NavbarComponent";
import "./Dish.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from "react-bootstrap/Image"
import bk from "../../img/bk.png"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function Dish() {
    return <div><NavbarComponent />
        <Jumbotron className="restInfo" >
            <div>
                <Row>
                    <Col sm={3}>
                        <Image className="image" src={bk}></Image>
                    </Col>
                    <Col sm={9}>
                        <h3 className="text-left">Burger King</h3><br />
                        <Row>
                            <span>Burgers and Fast Food</span>
                        </Row>
                    </Col>
                </Row>

            </div>
        </Jumbotron>


    </div>

}

export default Dish;