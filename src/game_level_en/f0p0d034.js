import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/acogue/soul/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d033 from "./f0p0d033";
import en_f0p0d035 from "./f0p0d035";

import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d034 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d033" component={en_f0p0d033} />
                        <Route path="/game/en/f/f0p0d035" component={en_f0p0d035} />


                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d033">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d035">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                  <h1 className="poppy">??????</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['The hypotenuse of a right triangle, with opposite of 20cm and adjacent of 15cm.', 1300]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}