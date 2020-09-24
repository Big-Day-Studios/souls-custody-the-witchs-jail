import React from 'react'
import "../css/main.css";
import "../css/game_index.css";



export default class Game extends React.Component{
    render(){
        return(
            <div id="all_game_run" className="all_game">
                <div className="name"></div>
                <div className="textArea"></div>
            </div>        
        );
    }
}



