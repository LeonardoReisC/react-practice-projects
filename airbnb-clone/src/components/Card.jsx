import React from "react";
import star from "../assets/images/star.svg";

export default function Card({
    img,
    rating,
    reviewCount,
    country,
    title,
    price,
}) {
    return (
        <div className="card">
            <img
                className="card--image"
                src={`./src/assets/images/${img}`}
                alt="Main card image"
            />
            <div className="card--stats">
                <img className="card--star" src={star} alt="Star icon" />
                <span>{rating}</span>
                <span className="gray">({reviewCount})</span>
                <span className="gray">•</span>
                <span className="gray">{country}</span>
            </div>

            <h2>{title}</h2>
            <p>
                <span className="bold">From ${price}</span> / person
            </p>
        </div>
    );
}
