import React from 'react'
import "../../../css/main.css";
import "../../../css/game_choice.css";
import soul from "../../../img/personagens/louis/almasemvitrola.png";
import vitrola from "../../../img/itens/vitrola.png";


export default class Game_bt extends React.Component{
    render(){
        return(
            <div id="all_game_choice_bt-zoom" className="all_game">
                <div className="poppy-3-container">
                    <img className="soul-3-zoom" src={soul} />
                    <img className="vitrola" src={vitrola} />
                </div>
            </div>        
        );
    }
}



