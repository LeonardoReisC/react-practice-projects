import React from "react";

export default function Die({ die, holdDice }) {
    return (
        <div
            className={die.isHeld ? "die die-held" : "die"}
            onClick={() => holdDice(die.id)}
        >
            <h2 className="die--value">{die.value}</h2>
        </div>
    );
}
