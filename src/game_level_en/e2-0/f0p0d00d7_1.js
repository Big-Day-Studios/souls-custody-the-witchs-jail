import React from 'react';
import ReactDOM from 'react-dom';
import Choices_dp from "../../templates/deposito_en/poppy/p2/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_choice.css";
import en_f0p0d00d7_2 from "./f0p0d00d7_2";
import refresh from "../../img/icons/refresh.svg";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d7_1 extends React.Component{
    

    render(){
    
        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d00d7_2" component={en_f0p0d00d7_2} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_dp/>
                <h1 className= "question_2U">What will you say?</h1>
                <Link onClick={link} to="f0p0d00d7_2">
                    <div className="choice_U">
                        <p className="choice_1t">What happened to the one which was here?</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
            </div>
        );
    }
}