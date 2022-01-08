import React from "react";
import "./style.css"

export default function MemeForm() {

    function getMeme() {
        const memesArr = memesData
    }

    return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    className="input"
                    placeholder="Top text"
                />
                <input 
                    type="text"
                    className="input"
                    placeholder="Bottom Text"
                />
                <button
                    className="button"
                    onClick={getMeme}
                >
                    Generate Meme Image
                </button>
            </form>
        </main>
    );
}