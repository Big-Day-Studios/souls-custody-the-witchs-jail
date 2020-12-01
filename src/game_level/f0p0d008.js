import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../templates/deposito/poppy/p1/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import f0p0d009 from "./f0p0d009";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy0 from  '../img/personagens/poppy/normal/poppy.png'
import refresh from '../img/icons/refresh.svg'


export default class f0p0d008 extends React.Component{
 
    

    render(){

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d009" component={f0p0d009} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_2">O que vai falar?</h1>
                <Link onClick={link} to="f0p0d009">
                    <div className="choice_0">
                        <p className="choice_0t">Esse lugar é amaldiçoado?</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d009">
                    <div className="choice_1">
                        <p className="choice_1t">Do que que você tá falando garota?</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <img src={poppy0} className="load_b4"></img>
            </div>
        );
    }
}