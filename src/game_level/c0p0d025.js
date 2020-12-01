import React from 'react';
import ReactDOM from 'react-dom';
import Poppy from "../templates/cutscene/1";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import cf0p0d026 from "./c0p0d026";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import SorrowOfaLonelyGirl from '../audio/pages/SorrowOfaLonelyGirl';



export default class f0p0d025 extends React.Component
{
    

    render(){
    
     

        function link(){


                ReactDOM.render(
                    <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Route path="/game/c/" exact={false} component={SorrowOfaLonelyGirl} />

                        <Switch>
                            <Route path="/game/c/cf0p0d026" component={cf0p0d026} />
                        </Switch>
                        
                    </Router>,
                    document.getElementById('root')
                ) 
        
        }

        
        return(
            <div className= "all_game">
                <div className="background-black"></div>
                <div id="fade-in" className= "all_game">
                <Poppy/>
                <Link onClick={link} to="cf0p0d026">
                    <div className="item-next">
                        <p className="item-next-text">Continuar</p>
                    </div>
                </Link>
                </div>
            </div>
        );
    }
}