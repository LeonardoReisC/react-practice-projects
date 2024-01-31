import React from "react";
import logo from "../assets/images/react.svg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="nav--icon" src={logo} alt="React Logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}
