import React, { useEffect } from "react";
import '../style.css'

const memes = [
    {
        id: 1,
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    }
]

export default function Header1() {
    const [meme, setMeme] = React.useState({})
    const [randImage, setRandImage] = React.useState('');
    const [inputText, setInputText] = React.useState({
        topText: '',
        bottomText: ''
    });

    function handleChange(event) {
        setInputText(prevText => {
            const { name, value } = event.target;
            return (
                {
                    ...prevText,
                    [name]: value
                }
            )
        })
    }
    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch(`https://api.imgflip.com/get_memes`);
            const data = await res.json();
            setMeme(data.data.memes);
        }
        getMeme()
    }, [])
    const randNumber = () => {
        const randNum = Math.floor(Math.random() * meme.length);
        const url = meme[randNum].url;
        setRandImage(prevMeme => url)
    }
    return (
        <div className="header--main">
            <div className="form--two">
                <input className="form--input" type="text" placeholder="Enter First Line" name="topText" value={meme.topText} onChange={handleChange} />
                <input className="form--input" type="text" placeholder="Enter second Line" name="bottomText" value={meme.bottomText} onChange={handleChange} />
            </div>
            <button onClick={randNumber} className="form--button">Select new Image from new meme</button>
            <div className="meme--main">
                <img className="meme--image" src={randImage} alt="Meme Image" />
                <h2 className="memeTextTop">{inputText.topText}</h2>
                <h2 className="memeTextBottom">{inputText.bottomText}</h2>
            </div>
        </div >

    )
}