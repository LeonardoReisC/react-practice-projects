import React from "react";
import Die from "./components/Die";
import "./App.css";

function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function allNewDice() {
        let randomNumbersArray = [];
        for (let i = 0; i < 10; i++) {
            const dieNumber = Math.ceil(Math.random() * 6);
            randomNumbersArray.push(dieNumber);
        }
        return randomNumbersArray;
    }

    const diceElements = dice.map((die) => <Die value={die} />);

    return (
        <main>
            <div className="main--dice">{diceElements}</div>
        </main>
    );
}

export default App;
