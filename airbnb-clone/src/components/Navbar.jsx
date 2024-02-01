import React from "react";
import logo from "../assets/images/airbnb.svg";

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="Airbnb logo" />
        </nav>
    );
}
