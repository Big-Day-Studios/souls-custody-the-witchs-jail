import React from 'react';
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import soul from '../../../../img/personagens/poppy/soul/alma.png';



export default class Game_dp extends React.Component{
    render(){
        return(
            <div id="all_game_run_dp-zoom" className="all_game">
                <div className="soul-poppy-1-zoom-container">
                <img className="soul-poppy-1-zoom" src={soul} /> 
                </div>
                <div className="name"></div>
                <div className="textArea"></div>
            </div>        
        );
    }
}



