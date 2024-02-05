import React from "react";
import star from "../assets/images/star.svg";

export default function Card({
    img,
    rating,
    reviewCount,
    location,
    title,
    price,
    openSpots,
}) {
    let badgeText;
    if (!openSpots) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
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
                <span className="gray">{location}</span>
            </div>

            <p className="card--title">{title}</p>
            <p className="card--price">
                <span className="bold">From ${price}</span> / person
            </p>
        </div>
    );
}
