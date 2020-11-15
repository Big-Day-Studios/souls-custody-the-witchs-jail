import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_choice.css";
import soul from '../../../../img/personagens/poppy/original/soul/alma.png';


export default class Input_dp extends React.Component{
    render(){
        return(
            <div id="all_game_choices_dp" className="all_game">
                <img className="soul-poppy-1" src={soul} />
            </div>       
        );
    } 
}
