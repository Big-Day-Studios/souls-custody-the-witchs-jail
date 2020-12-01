import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito/poppy/game_item";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import f0p0d022 from "./f0p0d022";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d021 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d022" component={f0p0d022} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
            <Game_es/>
            <Link onClick={link} to="f0p0d022">
                <div className="item-next">
                    <p className="item-next-text">Continuar</p>
                </div>
            </Link>
            </div>
        );
    }
}