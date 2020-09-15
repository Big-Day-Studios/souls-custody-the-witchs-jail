import React from 'react';
import {Link} from "react-router-dom"; 
import "../css/main.css";
import "../css/game_index.css";



function ena(){




    return(
        <div className="all">
            <div className="all_game">
                <div className="name"></div>
                <div className="textArea"></div>
                <Link to="">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
            </div>        
        </div>
    );

   
}



export default ena;