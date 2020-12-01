import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/acogue/poppy/p0/game_view";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d032 from "./f0p0d032";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d031 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d032" component={f0p0d032} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es/>
                <Link onClick={link} to="f0p0d032">
                    <div className="item-next">
                        <p className="item-next-text">Continuar</p>
                    </div>
                </Link>
            </div>
        );
    }
}