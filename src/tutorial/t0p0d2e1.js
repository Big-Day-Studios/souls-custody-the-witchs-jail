import React from 'react';
import Choices from "../game_template/game_choice";
import {Link} from "react-router-dom";
import "../css/tutorial.css";


export default class t2e1 extends React.Component{
    render(){    
        return(
            <div className= "all">
                <Choices />
                <h1 className= "question_0">Você entendeu agora?</h1>
                <Link to="t0p0d2.0">
                    <div className="choice_0">
                    <p className="choice_2t">Entendi</p>

                    </div>
                </Link>
                <Link to="t0p0d2.0">
                    <div className="choice_1">
                        <p className="choice_3t">Com certeza</p>
                    </div>
                </Link>
            </div>
        );
    }
}