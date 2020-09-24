import React from 'react';
import Game from "../game_template/game_talk";
import {Link} from "react-router-dom";
import "../css/tutorial.css";


export default class t0 extends React.Component{
    render(){    
        return(
            <div className= "all">
                <Game />
                <Link to="t0p0d1">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                    Olá, eu sou a Poppy, você vai me conhecer mais pra frente. <br/>
                    Clique em próximo para continuar.
                </p>

            </div>
        );
    }
}