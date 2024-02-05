import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "../data";

export default function App() {
    const cards = data.map((item) => <Card key={item.id} item={item} />);

    return (
        <>
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}</section>
        </>
    );
}
