import React from 'react';
import ReactDOM from 'react-dom';
import Choices_dp from "../../templates/deposito/poppy/soul-1/game_choices";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_choice.css";
import f0p0d00d2_1 from "./f0p0d00d2_1";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';
import refresh from "../../img/icons/refresh.svg";



export default class f0p0d00d2_0 extends React.Component{
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d00d2_1" component={f0p0d00d2_1} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_dp/>
                <h1 className= "question_1U">O que vai fazer?</h1>
                <Link onClick={link} to="f0p0d00d2_1">
                    <div className="choice_U">
                        <p className="choice_1t">Subir a escada</p>
                    </div>
                </Link>

                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
            </div>
        );
    }
}