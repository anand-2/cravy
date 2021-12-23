import React, { useEffect, useState } from "react";
import NavbarComponent from "../common/NavbarComponent";
import "./Dish.css"
import Jumbotron from 'react-bootstrap/Jumbotron'

function Dish() {
    return <div><NavbarComponent />
        <Jumbotron className="restInfo" />

    </div>

}

export default Dish;