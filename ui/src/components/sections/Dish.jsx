import React, { useEffect, useState } from "react";
import NavbarComponent from "../common/NavbarComponent";
import "./Dish.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from "react-bootstrap/Image"
import bk from "../../img/bk.png"
import idly from "../../img/idli-sambar-1.jpg"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"



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
                            <p>Burgers and Fast Food</p>
                        </Row> <br />
                        <Row>
                            <p>Rating : </p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Card className="dishCard mx-auto">
                            <Card.Body className="dishName">
                                <div>
                                    <div>
                                        <Row>
                                            <Col> <br />
                                                Idly Sambar
                                                <p className="rupees">Rs100</p>
                                            </Col>

                                            <Col>
                                                <Image className="dishImage" src={idly}></Image>
                                            </Col>
                                        </Row>



                                    </div>

                                </div>

                            </Card.Body>

                        </Card>
                    </Col>

                </Row>

            </div>
        </Jumbotron >


    </div >

}

export default Dish;