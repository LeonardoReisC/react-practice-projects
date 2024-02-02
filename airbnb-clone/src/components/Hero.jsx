import React from "react";
import picture from "../assets/images/airbnb-grid.png";

export default function Main() {
    return (
        <section className="hero">
            <img className="hero--picture" src={picture} alt="Hero grid" />
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities lead by one-of-a-kind
                hosts-all without leaving home.
            </p>
        </section>
    );
}
