import React from 'react';
import Game from "../game_template/game_talk";
import {Link} from "react-router-dom";
import "../css/tutorial.css";


export default class t2_1 extends React.Component{
    render(){    
        return(
            <div className= "all">
                <Game />
                <Link to="t0p0d2e1">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                Seguinte, você tem que clicar no botão de Próximo para ver o próximo trecho da história. <br/>
                Depois, quando houverem decisões a serem tomadas, você vai escolher uma das opções sobre a<br/>
                pergunta na tela seguinte. Isso faz você montar a história do jeito que você
                </p>

            </div>
        );
    }
}