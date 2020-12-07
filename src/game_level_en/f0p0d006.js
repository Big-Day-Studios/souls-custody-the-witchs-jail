import React from 'react';
import ReactDOM from 'react-dom';
import Poppy from "../templates/deposito_en/poppy/p0/game_poppy";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import en_f0p0d007 from "./f0p0d007";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';


export default class f0p0d006 extends React.Component{
 
    

    render(){
    
        
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d007" component={en_f0p0d007} />
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
                        <p className="item-next-text">Next</p>
                    </div>
                </Link>
            </div>
        );
    }
}