import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './css/var.css';
import './css/main.css';
import './css/splash.css';
import './css/menu.css'
import t0 from './tutorial/t0p0d0';
import About from './credits';
import f0p0d000 from './game_level/f0p0d000';
import sign from './img/logos/sign.png';
import back from './img/icons/back.svg';
import logo from './img/logos/logo-min.png';
import bds from './img/logos/logo_bds.png';
import bar from './img/icons/vertical_bar.svg';
import refresh from "./img/icons/refresh.svg";
import escada from "./img/cenarios/escada.png";
import porta from "./img/cenarios/entrada_loja_background.png";
import EndThemeSOng from "./audio/pages/EndThemeSOng"
import TheBackgroundScreams from './audio/pages/TheBackgroundScreams';


export default class Menu extends React.Component{

    render(){
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Route path="/game/t" exact={false} component={TheBackgroundScreams} />

                    <Switch>
                        <Route path="/game/f/f0p0d000"  component={f0p0d000} />
                        <Route path="/game/t/t0p0d0" component={t0}/>
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
                    <Link onClick={link} to="/game/f/f0p0d000">
                        <button className="play">Começar</button>
                    </Link>
                    <Link onClick={link} to="/game/t/t0p0d0">
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





