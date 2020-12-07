import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../../templates/acogue/poppy/p2/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import Typical from '../../typical';
import refresh from "../../img/icons/refresh.svg";
import en_f0p0d033 from "../f0p0d033";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';
import cenarios from "../../img/cenarios/butchery.png";
import soul from "../../img/personagens/louis/almavitrola.png";

export default class f0p0d032_1 extends React.Component{
 
    

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

                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <div id="b1" className="Back_en">
                    <p className="disabled">Back</p>

                </div>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d033">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={["I probably bumped into him, but I don't remember well.", 1300]}
                loop={1}
                wrapper="p"
                className="texto"
                />
                <img src={cenarios} className="load_b4"/>
                <img src={soul} className="load_b4"/>

            </div>
        );
    }
}