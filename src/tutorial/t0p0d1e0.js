import React from 'react';
import ReactDOM from 'react-dom';
import Choices from "../templates/porta/poppy/p1/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import t2_0 from './t0p0d2.0';
import t2_1 from './t0p0d2.1';
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/normal/poppy.png';
import poppy2 from '../img/personagens/poppy/normal/poppy2.png';
import refresh from "../img/icons/refresh.svg";

export default class t1e0 extends React.Component{
    render(){  

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/t0p0d2.0" component={t2_0}/>
                        <Route path="/game/t0p0d2.1"  component={t2_1}/>
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices />
                <h1 className= "question_0">Você entendeu ou o quê?</h1>
                <Link onClick={link} to="t0p0d2.0">
                    <div className="choice_0">
                        <p className="choice_0t">Entendi</p>
                    </div>
                </Link>
                <Link onClick={link} to="t0p0d2.1">
                    <div className="choice_1">
                        <p className="choice_1t">Me explica melhor</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>

                <img src={poppy} className="load_b4"></img>
                <img src={poppy2} className="load_b4"></img>


            </div>
        );
    }
}