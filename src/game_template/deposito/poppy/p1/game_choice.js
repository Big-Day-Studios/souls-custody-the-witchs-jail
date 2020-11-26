import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import poppy from "../../../../img/personagens/poppy/sd/normal/poppy1.png";


export default class Choices_dp extends React.Component{
    render(){
        return(
            <div id="all_game_choice_dp" className="all_game">
                <img className="poppy-0" src={poppy} />
            </div>        
        );
    }
}
