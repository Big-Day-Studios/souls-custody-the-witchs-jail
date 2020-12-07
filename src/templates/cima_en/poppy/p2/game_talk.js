import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import poppy from "../../../../img/personagens/poppy/normal/poppy2.png";


export default class Game_dp extends React.Component{
    render(){
        return(
            <div id="all_game_run_up" className="all_game">
                <div className="poppy-2-container">
                <img className="poppy-2" src={poppy} />
                </div>
                <div className="name"></div>
                <div className="textArea"></div>
            </div>        
        );
    }
}



