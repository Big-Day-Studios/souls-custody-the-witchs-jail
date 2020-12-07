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
                    <Route path="/game/en/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/t/t0p0d2.0" component={t2_0}/>
                        <Route path="/game/en/t/t0p0d2.1"  component={t2_1}/>
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices />
                <h1 className= "en_question_0">Did you understand or what?</h1>
                <Link onClick={link} to="t0p0d2.0">
                    <div className="choice_0">
                        <p className="choice_0t">Got it!</p>
                    </div>
                </Link>
                <Link onClick={link} to="t0p0d2.1">
                    <div className="choice_1">
                        <p className="choice_1t">I don't think so.</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>

                <img src={poppy} className="load_b4"></img>
                <img src={poppy2} className="load_b4"></img>


            </div>
        );
    }
}