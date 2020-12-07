import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/cima_en/poppy/p1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d031 from "./f0p0d031";
import en_f0p0d029 from "./f0p0d029";

import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import cenarios from "../img/cenarios/butchery.png";
import soul from "../img/personagens/louis/almavitrola.png";
import poppy from "../img/personagens/poppy/normal/poppy.png"


export default class f0p0d030 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d029" component={en_f0p0d029} />
                        <Route path="/game/en/f/f0p0d031" component={en_f0p0d031} />

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
                <Link onClick={link} to="f0p0d031">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['(Strange dream.)', 1300, '(Those people looked so familiar to me.)', 1300, '(And they were so happy together ...)']}
                loop={1}
                wrapper="p"
                className="texto-italic"
                />
                <img src={cenarios} className="load_b4"/>
                <img src={soul} className="load_b4"/>
                <img src={poppy} className="load_b4"/>
            </div>
        );
    }
}