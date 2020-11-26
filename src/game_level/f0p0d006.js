import React from 'react';
import ReactDOM from 'react-dom';
import Poppy from "../game_template/deposito/poppy/p0/game_poppy";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import f0p0d007 from "./f0p0d007";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import caixa from '../img/itens/caixafechada.png'


export default class f0p0d006 extends React.Component{
 
    

    render(){
    
        
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f0p0d007" component={f0p0d007} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Poppy/>
                <Link onClick={link} to="f0p0d007">
                    <div className="item-next">
                        <p className="item-next-text">Continuar</p>
                    </div>
                </Link>
            </div>
        );
    }
}