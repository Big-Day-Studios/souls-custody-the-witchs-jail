import React from 'react';
import {Link} from "react-router-dom";
import './css/var.css';
import './css/main.css';
import './css/splash.css';
import './css/menu.css'
import About from './credits'



function Menu(){
    return(
        <div className="all">
            <div id="menu" className="menu">
                <Link to="/game">
                    <button className="play">Começar</button>
                </Link>
                <button className="info">Como Jogar</button>
                <Link to="/about">
                    <button className="credits">Sobre o Jogo</button>
                </Link>
            </div>
        </div>
    )
    };






export default Menu;
