import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/acogue/poppy/p2/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d038 from "./f0p0d038";
import en_f0p0d036 from "./f0p0d036";

import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d037 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d038" component={en_f0p0d038} />
                        <Route path="/game/en/f/f0p0d036" component={en_f0p0d036} />


                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d036">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d038">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                  <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['(I think I understand!)', 1300, "(He must have something like Poppy's box!)", 1300, '(Maybe...)', 1500, "(maybe it's this phonograph he's holding!)", 1300, "I'll take it"]}
                loop={1}
                wrapper="p"
                className="texto-italic"
                />
            </div>
        );
    }
}