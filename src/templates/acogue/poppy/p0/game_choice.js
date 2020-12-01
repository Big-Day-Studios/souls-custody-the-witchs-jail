import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_choice.css";
import poppy from "../../../../img/personagens/poppy/normal/poppy.png";
import soul from "../../../../img/personagens/louis/almavitrola.png";

export default class Choice_bt extends React.Component{
    render(){
        return(
            <div id="all_game_choice_bt" className="all_game">
                <div className="poppy-3-container">
                    <img className="soul-3" src={soul} />
                    <img className="poppy-3" src={poppy} />
                </div>
            </div>        
        );
    }
}