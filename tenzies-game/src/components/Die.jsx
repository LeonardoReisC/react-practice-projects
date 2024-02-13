import React from "react";

export default function Die({ value }) {
    return (
        <div className="die">
            <h2 className="die--value">{value}</h2>
        </div>
    );
}
