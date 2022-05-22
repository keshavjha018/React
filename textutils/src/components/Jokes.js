import React, { useState } from 'react'
import axios from "axios"

function Jokes() {
    
    const [joke, setJoke] = useState("");

    const getJokes = () => {
        axios.get("https://api.chucknorris.io/jokes/random").then(response => {
            // console.log(response);
            setJoke(response.data.value);
        });
    }

    return (
        <>
        <div className="container" style={{margin: "2rem"}}>
            <h2 style={{textAlign: "center", margin: "1rem"}}>Get Random Jokes.</h2>
            <button onClick={getJokes} className = "btn btn-success mx-1 my-1">Get a Joke</button>
            <br />
            <br />
            <br />
            <div className='joke_content' >{joke}</div>
        </div>
        </>

    )
}

export default Jokes