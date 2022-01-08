import React from "react";
import "./style.css"
import killua from "../assets/killua.png"

export default function Header() {
    return (
        <header className="header">
          <img 
            className='header-img' 
            src={killua}
          />
          <h1 className='header-title'>Meme Generator</h1>
          <p>Zachary Shifrel</p>
        </header>
    );
  }
