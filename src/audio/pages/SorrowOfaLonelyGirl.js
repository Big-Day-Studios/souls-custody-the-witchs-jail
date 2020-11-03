import React from 'react';
import SorrowOfaLonelyGirl from"../aac/SorrowOfaLonelyGirl.aac";


export default class SorrowOfaLonelyGirl extends React.Component{
    render(){
        return(
            <div id="player" className="player">
                <audio autoPlay loop>
                    <source src={SorrowOfaLonelyGirl} type="audio/aac" />
                </audio>
            </div>
        );
    }
}



