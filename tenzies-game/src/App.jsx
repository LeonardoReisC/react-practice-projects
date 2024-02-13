import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        let dice = [];
        for (let i = 0; i < 10; i++) {
            dice.push(generateNewDie());
        }
        return dice;
    }

    function rollDice() {
        setDice((oldDice) =>
            oldDice.map((die) => (die.isHeld ? die : generateNewDie()))
        );
    }

    function holdDice(dieId) {
        setDice((oldDice) =>
            oldDice.map((die) =>
                die.id === dieId ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    }

    const diceElements = dice.map((die) => (
        <Die key={die.id} die={die} holdDice={holdDice} />
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
