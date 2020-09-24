import React from 'react';
import Choices from "../game_template/game_input";
import {Link} from "react-router-dom";
import "../css/tutorial.css";


export default class t1i0 extends React.Component{
    render(){    
        return(
            <div className="all">
                <Choices />
                <h1 className="input_tittle">Digite “continuar” para<br/>prosseguir</h1>
                <form method="GET">
                    <input type="text" name="answer" className="answer" placeholder="Digite aqui" />
                    <input type="submit" className="send" value="Enviar"/>
                </form>
            </div>
        );
    }
}