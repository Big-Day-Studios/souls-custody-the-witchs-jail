import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../templates/escada_en/game_choices";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import en_f0p0d00d1_0 from "./e1-0/f0p0d00d1_0";
import en_f0p0d00d1__0 from "./e1-1/f0p0d00d1__0";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import deposito from '../img/cenarios/deposito.png';
import soul from  '../img/personagens/poppy/soul/alma.png'
import refresh from '../img/icons/refresh.svg'
export default class f0p0d001 extends React.Component{
 
    

    render(){

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d00d1_0" component={en_f0p0d00d1_0} />
                        <Route path="/game/en/f/f0p0d00d1__0" component={en_f0p0d00d1__0} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "en_question_1">What'll you do?</h1>
                <Link onClick={link} to="f0p0d00d1__0">
                    <div className="choice_0">
                        <p className="choice_0t">Walk up the stairs</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d00d1_0">
                    <div className="choice_1">
                        <p className="choice_1t">Enter through the door</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <img src={deposito} className="load_b4"></img>
                <img src={soul} className="load_b4"></img>

                
            </div>
        );
    }
}