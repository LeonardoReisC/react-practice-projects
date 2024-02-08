import React from "react";
import memesData from "../memesData.js";

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const { url } = memesArray[randomNumber];

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
            };
        });
    }

    return (
        <main>
            <div className="form">
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
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image
                </button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="Meme" />
        </main>
    );
}
