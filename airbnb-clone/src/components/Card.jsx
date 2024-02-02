import React from "react";
import photo from "../assets/images/katie-zaferes.png";
import star from "../assets/images/star.svg";

export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src={photo} alt="Main card image" />
            <div className="card--stats">
                <img className="card--star" src={star} alt="Star icon" />
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">•</span>
                <span className="gray">USA</span>
            </div>

            <h2>Life lessons with Katie Zaferes</h2>
            <p>
                <span className="bold">From $136</span> / person
            </p>
        </div>
    );
}
