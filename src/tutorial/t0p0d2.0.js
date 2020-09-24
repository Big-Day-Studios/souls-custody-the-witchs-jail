import React from 'react';
import Game from "../game_template/game_talk";
import {Link} from "react-router-dom";
import "../css/tutorial.css";


export default class t2_0 extends React.Component{
    render(){    
        return(
            <div className= "all">
                <Game />
                <Link to="t0p0d2i0">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                Na tela vai aparecer um “Input” onde você tem que digitar o resultado do enigma ou a resposta a alguma <br/>
                pergunta, você tem que digitar em minúsculo e sem caracteres especiais.<br/>
                Clique em próximo para continuar.
                </p>

            </div>
        );
    }
}