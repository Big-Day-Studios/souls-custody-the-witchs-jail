import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './css/var.css';
import './css/main.css';
import './css/splash.css';
import './css/menu.css'
import t0 from './tutorial/t0p0d0';
import About from './credits';
import ena from './game_level/f0p0d000';



export default class Menu extends React.Component{

    render(){
        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/game/f0p0d000"  component={ena} />
                        <Route path="/game/t0p0d0" component={t0}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }
        return(
            
            <div className="all">
                <div id="menu" className="menu">
                    <Link onClick={link} to="/game/f0p0d000">
                        <button className="play">Começar</button>
                    </Link>
                    <Link onClick={link} to="/game/t0p0d0">
                        <button className="info">Como Jogar</button>
                    </Link>
                    <Link onClick={link} to="/about">
                        <button className="credits">Sobre o Jogo</button>
                    </Link>
                </div>
            </div>
        );


    };
}





