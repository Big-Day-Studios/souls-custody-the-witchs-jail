import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../templates/deposito/poppy/p0/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import f0p0d017 from "./f0p0d017";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy1 from  '../img/personagens/poppy/normal/poppy1.png'
import refresh from '../img/icons/refresh.svg'


export default class f0p0d016 extends React.Component{
 
    

    render(){

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d017" component={f0p0d017} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_2">O que vai falar?</h1>
                <Link onClick={link} to="f0p0d017">
                    <div className="choice_0">
                        <p className="choice_0t">E você pode me ajudar a achar ela?</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d017">
                    <div className="choice_1">
                        <p className="choice_1t">Já que agora você tá livre, por que não sai logo daqui?</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <img src={poppy1} className="load_b4"></img>
            </div>
        );
    }
}