import React from 'react';
import Game from "../game_template/game_talk";
import {Link} from "react-router-dom";



export default class ena extends React.Component{
    render(){    
        return(
            <div className= "all">
                <Game />
                <Link to="f0p0d002">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
            </div>
        );
    }
}



