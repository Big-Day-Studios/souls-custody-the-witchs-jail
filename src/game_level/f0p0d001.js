import React from 'react';
import Game from "../game_template/porta/game_talk";
import {Link} from "react-router-dom";



export default class f0p0d001 extends React.Component{
    render(){    
        return(
            <div className= "all_game">
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



