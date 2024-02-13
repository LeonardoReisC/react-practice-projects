import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./App.css";

function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld === true);

        const firstValue = dice[0].value;
        const allSameValue = dice.every((die) => die.value === firstValue);

        if (allHeld && allSameValue) setTenzies(true);
    }, [dice]);

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
            {tenzies && (
                <Confetti
                    width={window.innerWidth - 10}
                    height={window.innerHeight - 10}
                />
            )}
            <h1 className="main--title">Tenzies</h1>
            <p className="main--instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="main--dice">{diceElements}</div>
            <button className="main--roll-button" onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    );
}

export default App;
