import React from "react";

export default function Form() {
    return (
        <main>
            <form className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        className="form--input"
                        type="text"
                        placeholder="Shut up"
                    />
                </div>

                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        className="form--input"
                        type="text"
                        placeholder="And take my money"
                    />
                </div>
                <button className="form--button">Get a new meme image</button>
            </form>
        </main>
    );
}
