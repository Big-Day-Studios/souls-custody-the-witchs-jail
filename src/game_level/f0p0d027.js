import React from 'react';
import ReactDOM from 'react-dom';
import Game_up from "../templates/cima/poppy/p0/game_talk";
import {Redirect, Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d028 from "./f0p0d028";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import $ from 'jquery';



export default class f0p0d027 extends React.Component{
 
    

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
                ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d028" component={f0p0d028} />
                    </Switch>
                    <Redirect to="/game/f/f0p0d028"/>
                </Router>,
                document.getElementById('root')
                )
        }

        return(
            <div className= "all_game">
                <div className="background-black"></div>
                <div id="fade-in" className= "all_game_unique">
                    <Game_up />
                    <div id="b1" className="Back_">
                        <p className="disabled">Voltar</p>
                    </div>
                    <div className="bar_game"/>
                    <Link onClick={link, f}>
                        <div id="n1" className="Next">
                            <p className="next">Próximo</p>
                        </div>
                    </Link>
                    <h1 className="poppy">Poppy</h1>
                    <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                    <Typical
                    steps={['', 3000, 'O que que aconteceu?']}
                    loop={1}
                    wrapper="p"
                    className="texto"
                    />
                </div>
            </div>
        );
    }
}