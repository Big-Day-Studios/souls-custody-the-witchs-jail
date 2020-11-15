import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_choice.css";
import soul from '../../../../img/personagens/poppy/original/soul/alma.png';


export default class Choices_dp extends React.Component{
    render(){
        return(
            <div id="all_game_choice_dp" className="all_game">
                <img className="soul-poppy-1" src={soul} />
            </div>        
        );
    }
}