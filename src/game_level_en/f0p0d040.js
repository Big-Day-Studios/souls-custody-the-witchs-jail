import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/acogue/soul/game_item";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import en_f0p0d041 from "./f0p0d041";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import vitrola from  '../img/itens/vitrola.png';


export default class f0p0d040 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d041" component={en_f0p0d041} />

                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
            <Game_es/>
            <img src={vitrola} className="vitrola"/>
            <Link onClick={link} to="f0p0d041">
                <div className="item-next">
                    <p className="item-next-text">Next</p>
                </div>
            </Link>
            </div>
        );
    }
}