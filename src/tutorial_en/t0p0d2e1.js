import React from 'react';
import ReactDOM from 'react-dom';
import Choices from "../templates/porta/poppy/p2/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import t2_0 from './t0p0d2.0';
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/normal/poppy.png'
import refresh from "../img/icons/refresh.svg";

export default class t2e1 extends React.Component{
    render(){ 
        
        function refreshPage(){
            window.location.reload();
        } 

        
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/t/t0p0d2.0" component={t2_0}/>
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices />
                
                <h1 className= "en_question_1-1">Do you understand now?</h1>
                <Link onClick={link} to="t0p0d2.0">
                    <div className="choice_0">
                        <p className="choice_0t">Got it!</p>
                    </div>
                </Link>
                <Link onClick={link} to="t0p0d2.0">
                    <div className="choice_1">
                        <p className="choice_1t">Sure!</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                
                <img src={poppy} className="load_b4"></img>

            </div>
        );
    }
}