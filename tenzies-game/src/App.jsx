import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function allNewDice() {
        let dice = [];
        for (let i = 0; i < 10; i++) {
            const dieNumber = Math.ceil(Math.random() * 6);
            dice.push({
                value: dieNumber,
                isHeld: false,
                id: nanoid(),
            });
        }
        return dice;
    }

    function rollDice() {
        setDice(allNewDice());
    }

    const diceElements = dice.map((die) => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} />
    ));

    return (
        <main>
            <div className="main--dice">{diceElements}</div>
            <button className="main--roll-button" onClick={rollDice}>
                Roll
            </button>
        </main>
    );
}

export default App;
