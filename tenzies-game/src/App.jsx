import React from "react";
import Die from "./components/Die";
import "./App.css";

function App() {
    function allNewDice() {
        let randomNumbersArray = [];
        for (let i = 0; i < 10; i++) {
            const dieNumber = Math.ceil(Math.random() * 6);
            randomNumbersArray.push(dieNumber);
        }
        return randomNumbersArray;
    }

    return (
        <main>
            <div className="main--dice">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={7} />
                <Die value={8} />
                <Die value={9} />
                <Die value={10} />
            </div>
        </main>
    );
}

export default App;
