import React from 'react';
import Game from "../game_template/game_talk";
import {Link} from "react-router-dom";
import "../css/tutorial.css";


export default class t1 extends React.Component{
    render(){    
        return(
            <div className= "all">
                <Game />
                <Link to="t0p0d1e0">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                Eu vou tentar te ensinar como se joga essa coisa. <br/>
                Você tem que escolher entre as opções que aparecem na tela para escolher seu rumo de história.
                </p>

            </div>
        );
    }
}