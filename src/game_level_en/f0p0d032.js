import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../templates/acogue/poppy/p0/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import en_f0p0d032__1 from "./e3-1/f0p0d032__1";
import en_f0p0d032_1 from "./e3-0/f0p0d032_1";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy1 from  '../img/personagens/poppy/normal/poppy1.png'
import refresh from '../img/icons/refresh.svg'


export default class f0p0d032 extends React.Component{
 
    render(){

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d032_1" component={en_f0p0d032_1} />
                        <Route path="/game/en/f/f0p0d032__1" component={en_f0p0d032__1} />

                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_2_en">What will you say?</h1>
                <Link onClick={link} to="f0p0d032_1">
                    <div className="choice_0">
                        <p className="choice_0t">Do you know him?</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d032__1">
                    <div className="choice_1">
                        <p className="choice_1t">What happened to him?</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <img src={poppy1} className="load_b4"></img>
            </div>
        );
    }
}