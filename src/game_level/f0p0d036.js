import React from 'react';
import ReactDOM from 'react-dom';
import Poppy from "../templates/acogue/poppy/p0/game_view";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_choice.css";
import f0p0d037 from "./f0p0d037";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import pitagoras from '../img/itens/pitagoras.png'


export default class f0p0d036 extends React.Component
{
    

    render(){
    
     

        function link(){


                ReactDOM.render(
                    <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />

                        <Switch>
                            <Route path="/game/f/f0p0d037" component={f0p0d037} />
                        </Switch>
                        
                    </Router>,
                    document.getElementById('root')
                ) 
        
        }

        
        return(

                <div className= "all_game">
                <Poppy/>
                <img src={pitagoras} className="pitagoras"/>
                <Link onClick={link} to="f0p0d037">
                    <div className="item-next">
                        <p className="item-next-text">Continuar</p>
                    </div>
                </Link>
                </div>

        );
    }
}