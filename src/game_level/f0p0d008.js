import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../game_template/deposito/poppy/p1/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import f0p0d00d7_0 from "./e2-0/f0p0d00d7_0";
import f0p0d00d1__0 from "./e1-1/f0p0d00d1__0";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy1 from  '../img/personagens/poppy/sd/normal/poppy1.png'
import refresh from '../img/icons/refresh.svg'


export default class f0p0d006 extends React.Component{
 
    

    render(){

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f0p0d00d7_0" component={f0p0d00d7_0} />
                        <Route path="/game/f0p0d00d1__0" component={f0p0d00d1__0} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_2">O que vai perguntar?</h1>
                <Link onClick={link} to="f0p0d00d7_0">
                    <div className="choice_0">
                        <p className="choice_0t">Esse lugar é amaldiçoado?</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d00d1_0">
                    <div className="choice_1">
                        <p className="choice_1t">Do que que você tá falando garota?</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <img src={poppy1} className="load_b4"></img>
            </div>
        );
    }
}