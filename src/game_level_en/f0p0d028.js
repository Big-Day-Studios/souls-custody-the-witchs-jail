import React from 'react';
import ReactDOM from 'react-dom';
import Choices_es from "../templates/cima_en/poppy/p0/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import en_f0p0d029 from "./f0p0d029";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy1 from  '../img/personagens/poppy/normal/poppy1.png'
import refresh from '../img/icons/refresh.svg'


export default class f0p0d018 extends React.Component{
 
    render(){

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d029" component={en_f0p0d029} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices_es/>
                <h1 className= "question_2_en">What will you say?</h1>
                <Link onClick={link} to="f0p0d029">
                    <div className="choice_0">
                        <p className="choice_0t">It's none of your business</p>
                    </div>
                </Link>
                <Link onClick={link} to="f0p0d029">
                    <div className="choice_1">
                        <p className="choice_1t">I'm not sure.</p>
                    </div>
                </Link>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <img src={poppy1} className="load_b4"></img>
            </div>
        );
    }
}