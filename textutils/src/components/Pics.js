import React, { useState } from 'react'
import axios from "axios"

function Pics() {

    const [PicURL, setPicURL] = useState("");

    const getPic = async () => {
            const Pic = await axios.get("https://foodish-api.herokuapp.com/api/")
            console.log(Pic);
            setPicURL(Pic.data.image);

    }

    return (
        <>
            <div className="container" style={{margin: "2rem"}}>
                <h2 style={{textAlign: "center", margin: "1rem"}}>Get Random Pics of Food Items.</h2>
                
                <button onClick={getPic} className = "btn btn-success mx-1 my-1">Get Pic</button>
                <br />

                <img src={PicURL} alt="" style={{width: "auto", height: "30rem", margin: "1rem"}}/>
            </div>
        </>
    )
}

export default Pics