import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../templates/deposito/poppy/p0/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import f0p0d011 from "./f0p0d011";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy2 from  '../img/personagens/poppy/normal/poppy2.png'
import refresh from '../img/icons/refresh.svg'


export default class f0p0d010 extends React.Component{
 
    

    render(){

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d011" component={f0p0d011} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_2">O que vai falar?</h1>
                <Link onClick={link} to="f0p0d011">
                    <div className="choice_0">
                        <p className="choice_0t">Que merda, tô amaldiçoada, preciso sair daqui.</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d011">
                    <div className="choice_1">
                        <p className="choice_1t">Eu tô amaldiçoada? Você consegue me libertar?</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <img src={poppy2} className="load_b4"></img>
            </div>
        );
    }
}