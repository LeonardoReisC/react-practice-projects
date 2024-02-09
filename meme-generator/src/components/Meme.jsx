import React from "react";

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg",
    });

    const [allMemes, setAllMemes] = React.useState([]);
    React.useEffect(() => {
        (async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        })();
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const { url } = allMemes[randomNumber];

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
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        className="form--input"
                        type="text"
                        placeholder="And take my money"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img
                    className="meme--image"
                    src={meme.randomImage}
                    alt="Meme"
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
