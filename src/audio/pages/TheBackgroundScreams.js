import React from 'react';
import theBackgroundScreams from"../aac/TheBackgroundScreams.aac";


export default class TheBackgroundScreams extends React.Component{
    render(){
        return(
            <div id="player" className="player">
                <audio autoPlay loop>
                    <source src={theBackgroundScreams} type="audio/aac" />
                </audio>
            </div>
        );
    }
}



