import React from 'react';
import TheBackgroundScreams from"../aac/TheBackgroundScreams.aac";


export default class TheBackgroundScreams extends React.Component{
    render(){
        return(
            <div id="player" className="player">
                <audio autoPlay loop>
                    <source src={TheBackgroundScreams} type="audio/aac" />
                </audio>
            </div>
        );
    }
}



