import React from 'react';
import ReactDOM from 'react-dom';
import Poppy from "../templates/acogue/poppy/p0/game_view";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import en_f0p0d037 from "./f0p0d037";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import pythagoras from '../img/itens/pythagoras.png'


export default class f0p0d036 extends React.Component
{
    

    render(){
    
     

        function link(){


                ReactDOM.render(
                    <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />

                        <Switch>
                            <Route path="/game/en/f/f0p0d037" component={en_f0p0d037} />
                        </Switch>
                        
                    </Router>,
                    document.getElementById('root')
                ) 
        
        }

        
        return(

                <div className= "all_game">
                <Poppy/>
                <img src={pythagoras} className="pitagoras"/>
                <Link onClick={link} to="f0p0d037">
                    <div className="item-next">
                        <p className="item-next-text">Next</p>
                    </div>
                </Link>
                </div>

        );
    }
}