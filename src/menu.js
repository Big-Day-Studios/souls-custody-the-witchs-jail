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
import sign from './img/sign.png';
import back from './img/back.svg';
import logo from './img/logo-min.png';
import bds from './img/logo_bds.png';
import bar from './img/vertical_bar.svg';
import refresh from "./img/refresh.svg";
import escada from "./img/escada.png";
import porta from "./img/entrada_loja_background.png";
import EndThemeSOng from "./audio/pages/EndThemeSOng"



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
                <div id="menu" className="menu">
                    
                    <div className='sign_container'>
                        <img src={sign} alt="Souls custody: The witch's jail" className="game_sign" />
                    </div>
                    <Link onClick={link} to="/game/f0p0d000">
                        <button className="play">Começar</button>
                    </Link>
                    <Link onClick={link} to="/game/t0p0d0">
                        <button className="info">Como Jogar</button>
                    </Link>
                    <Link onClick={link} to="/about">
                        <button className="credits">Sobre o Jogo</button>
                    </Link>

                    <img src={back} className="load_b4"></img>
                    <img src={logo} className="load_b4"></img>
                    <img src={bds} className="load_b4"></img>
                    <img src={bar} className="load_b4"></img>

                    <img src={refresh} className="load_b4"></img>
                    <img src={escada} className="load_b4"></img>
                    <img src={porta} className="load_b4"></img>
                    <EndThemeSOng/>
                    
                </div>

        );


    };
}





