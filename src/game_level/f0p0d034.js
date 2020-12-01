import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/acogue/soul/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d033 from "./f0p0d033";
import f0p0d035 from "./f0p0d035";

import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d034 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d033" component={f0p0d033} />
                        <Route path="/game/f/f0p0d035" component={f0p0d035} />


                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d033">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d035">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                  <h1 className="poppy">??????</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Hipotenusa de um triângulo retângulo, com catetos de 20cm e 15cm.', 1000]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}