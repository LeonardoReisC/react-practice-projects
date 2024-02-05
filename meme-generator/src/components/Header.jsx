import React from "react";
import logo from "../assets/images/troll-face.svg";

export default function Header() {
    return (
        <header>
            <img className="header--logo-icon" src={logo} alt="Header icon" />
            <h2 className="header--logo-title">Meme Generator</h2>
            <h4 className="header--side-text">React Course - Project 3</h4>
        </header>
    );
}
