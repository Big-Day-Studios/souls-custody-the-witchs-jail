import React from 'react'
import "../../../css/main.css";
import "../../../css/game_choice.css";
import louis from "../../../img/personagens/louis/louis2.png";

export default class Game_bt extends React.Component{
    render(){
        return(
            <div id="all_game_run_bt-zoom" className="all_game">
                <div className="poppy-3-container">
                    <img className="louis-zoom" src={louis} />
                </div>
            </div>        
        );
    }
}



