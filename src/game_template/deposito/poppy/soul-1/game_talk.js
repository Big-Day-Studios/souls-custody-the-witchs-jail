import React from 'react';
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import soul from '../../../../img/personagens/poppy/original/soul/alma.png';



export default class Game_dp extends React.Component{
    render(){
        return(
            <div id="all_game_run_dp" className="all_game">
                <div className="soul-poppy-1-container">
                <img className="soul-poppy-1" src={soul} />

                </div>
                <div className="name"></div>
                <div className="textArea"></div>
            </div>        
        );
    }
}



