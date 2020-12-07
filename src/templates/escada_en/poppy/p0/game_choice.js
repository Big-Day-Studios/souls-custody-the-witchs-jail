import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import poppy from "../../../../img/personagens/poppy/normal/poppy.png";


export default class Choices_es extends React.Component{
    render(){
        return(
            <div id="all_game_choice_es" className="all_game">
                <div className="poppy-1-container">
                    <img className="poppy-1" src={poppy} />
                </div>
            </div>        
        );
    }
}
