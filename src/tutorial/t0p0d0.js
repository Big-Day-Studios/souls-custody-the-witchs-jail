import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from "../game_template/porta/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Menu from "../menu";
import t1 from "./t0p0d1";
import Typical from 'react-typical';
import refresh from "../img/refresh.svg";



export default class t0 extends React.Component{
 
    

    render(){
    
        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/menu" component={Menu} />
                        <Route path="/game/t0p0d1" component={t1} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="/menu">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="t0p0d1">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Olá, eu sou a Poppy, você vai me conhecer mais pra frente.',1000, 'Clique em próximo para continuar.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />

            </div>
        );
    }
}
