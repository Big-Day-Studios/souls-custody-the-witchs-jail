import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from "../templates/porta/poppy/p0/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Menu from "../another_en/menu";
import  t1 from "./t0p0d1";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/normal/poppy1.png'


export default class t0 extends React.Component{
 
    

    render(){
    
        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/en/menu" component={Menu} />
                        <Route path="/game/en/t/t0p0d1" component={t1} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="/en/menu">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="t0p0d1">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Hello, I’m Poppy, you’ll meet me later.',1300, 'Click Next to continue.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />

                <img src={poppy} className="load_b4"></img>
            

            </div>
        );
    }
}
