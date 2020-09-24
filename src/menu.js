import React from 'react';
import {Link} from "react-router-dom";
import './css/var.css';
import './css/main.css';
import './css/splash.css';
import './css/menu.css'



export default class Menu extends React.Component{
    render() {
        return(
            <div className="all">
                <div id="menu" className="menu">
                    <Link to="/game/f0p0d000">
                        <button className="play">Começar</button>
                    </Link>
                    <Link to="/game/t0p0d0">
                        <button className="info">Como Jogar</button>
                    </Link>
                    <Link to="/about">
                        <button className="credits">Sobre o Jogo</button>
                    </Link>
                </div>
            </div>
        )
    };
}





