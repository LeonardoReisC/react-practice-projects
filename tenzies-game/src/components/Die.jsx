import React from "react";

export default function Die({ value, isHeld }) {
    return (
        <div className={isHeld ? "die die-held" : "die"}>
            <h2 className="die--value">{value}</h2>
        </div>
    );
}
