import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import '../css/var.css';
import '../css/main.css';
import '../css/splash.css';
import '../css/menu.css'
import en_t0 from '../tutorial_en/t0p0d0';
import About from './credits';
import en_f0p0d000 from '../game_level_en/f0p0d000';
import sign from '../img/logos/sign_standard.png';
import back from '../img/icons/back.svg';
import logo from '../img/logos/logo-min.png';
import bds from '../img/logos/logo_bds.png';
import bar from '../img/icons/vertical_bar.svg';
import refresh from "../img/icons/refresh.svg";
import escada from "../img/cenarios/escada.png";
import porta from "../img/cenarios/entrada_loja_background.png";
import EndThemeSOng from "../audio/pages/EndThemeSOng"
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';


export default class Menu extends React.Component{

    render(){
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d000"  component={en_f0p0d000} />
                        <Route path="/en/about" component={About} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        function linkTutorial(){
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/t" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/t/t0p0d0" component={en_t0}/>
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
                    <Link onClick={link} to="/game/en/f/f0p0d000">
                        <button className="play">Play</button>
                    </Link>
                    <Link onClick={linkTutorial} to="/game/en/t/t0p0d0">
                        <button className="info">Tutorial</button>
                    </Link>
                    <Link onClick={link} to="/en/about">
                        <button className="credits">About</button>
                    </Link>

                    <img src={back} className="load_b4"></img>
                    <img src={logo} className="load_b4"></img>
                    <img src={bds} className="load_b4"></img>
                    <img src={bar} className="load_b4"></img>

                    <img src={refresh} alt="refresh"  className="load_b4"></img>
                    <img src={escada} className="load_b4"></img>
                    <img src={porta} className="load_b4"></img>
                    <EndThemeSOng/>
                </div>

        );


    };
}





