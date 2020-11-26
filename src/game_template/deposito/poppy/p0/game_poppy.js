import React from 'react'
import "../../../../css/main.css";
import "../../../../css/game_index.css";
import poppy from "../../../../img/personagens/poppy/sd/normal/poppy.png";


export default class Poppy extends React.Component{
    render(){
        return(
            <div id="all_game_run_dp" className="all_game">
                <img className="poppy-0" src={poppy} />
            </div>       
        );
    } 
}
