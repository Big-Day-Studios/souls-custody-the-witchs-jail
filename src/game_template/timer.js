import React from 'react';

export default class Timer extends React.Component{
    render(){

        var d = new Date();
        var hours = d.getUTCHours(); 
        var min = d.getUTCMinutes(); 
        var sec = d.getUTCSeconds(); 

        console.log(hours, min, sec);
        console.log(d);

        return(
            <div style={{background_color: 'black',}}>
            <button>pietro</button>
            </div>
        )
            
    }
}