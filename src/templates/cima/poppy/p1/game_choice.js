import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import poppy from "../../../../img/personagens/poppy/normal/poppy1.png";


export default class Choices_dp extends React.Component{
    render(){
        return(
            <div id="all_game_choice_up" className="all_game">
                <div className="poppy-2-container">
                <img className="poppy-2" src={poppy} />
                </div>
            </div>        
        );
    }
}
