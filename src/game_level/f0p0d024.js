import React from 'react';
import ReactDOM from 'react-dom';
import Game_up from "../templates/cima/poppy/p0/game_talk";
import {Redirect, Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d025 from "./c0p0d025";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import SorrowOfaLonelyGirl from '../audio/pages/SorrowOfaLonelyGirl';

import $ from 'jquery';



export default class f0p0d024 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 
        function f() {
            var fade = $(".all_game_unique").removeAttr('id')
            $(fade).attr("id", "fade-out");
                      
            link();
        }

        function link(){

            setTimeout(function(){
                ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Route path="/game/c/" exact={false} component={SorrowOfaLonelyGirl} />
                    <Switch>
                        <Route path="/game/c/cf0p0d025" component={f0p0d025} />
                    </Switch>
                    <Redirect to="/game/c/cf0p0d025"/>
                </Router>,
                document.getElementById('root')
            ) }, 3000)
          }

        return(
            <div className= "all_game">
                <div className="background-black"></div>
                <div id="fade" className= "all_game_unique">
                    <Game_up />
                    <div id="b1" className="Back_">
                        <p className="disabled">Voltar</p>
                    </div>
                    <div className="bar_game"/>
                    <Link onClick={f}>
                        <div id="n1" className="Next">
                            <p className="next">Próximo</p>
                        </div>
                    </Link>
                    <h1 className="rebecca">Rebecca</h1>
                    <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                    <Typical
                    steps={['(Não consigo ficar de pé. É melhor eu me sentar...)']}
                    loop={1}
                    wrapper="p"
                    className="texto-italic"
                    />
                </div>
            </div>
        );
    }
}