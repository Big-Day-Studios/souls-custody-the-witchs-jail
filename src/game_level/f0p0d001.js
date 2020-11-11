import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../game_template/escada/game_choices";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import f0p0d00d1 from "./e1-0/f0p0d00d1_0";
import f0p0d00e1 from "./e1-0/f0p0d00d1_2";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d001 extends React.Component{
 
    

    render(){
    
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f0p0d00d1" component={f0p0d00d1} />
                        <Route path="/game/f0p0d00e1" component={f0p0d00e1} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_1">O que vai fazer?</h1>
                <Link onClick={link} to="f0p0d00e1">
                    <div className="choice_0">
                        <p className="choice_0t">Subir a escada</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d00d1">
                    <div className="choice_1">
                        <p className="choice_1t">Entrar pela porta</p>
                    </div>
                </Link>
            </div>
        );
    }
}