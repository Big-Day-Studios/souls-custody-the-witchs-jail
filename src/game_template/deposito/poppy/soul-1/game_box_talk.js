import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_choice.css";
import soul from '../../../../img/personagens/poppy/original/soul/alma.png';
import caixa from '../../../../img/itens/caixafechada.png';


export default class Box extends React.Component{
    render(){
        return(
            <div id="all_game_run_dp" className="all_game">
                <img src={caixa} className="box-closed"/>
                <div className="soul-poppy-1-container">
                    <img className="soul-poppy-1" src={soul} />
                </div>
                <div className="name"></div>
                <div className="textArea"></div>
            </div>       
        );
    } 
}
