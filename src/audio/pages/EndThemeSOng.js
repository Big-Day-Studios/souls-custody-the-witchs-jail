import React from 'react';
import endThemeSOng from"../aac/EndThemeSOng.aac";


export default class EndThemeSOng extends React.Component{
    render(){
        return(
            <div id="player" className="player">
                <audio autoPlay loop>
                    <source src={endThemeSOng} type="audio/aac" />
                </audio>
            </div>
        );
    }
}



