import React from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import back from '../img/icons/back_en.svg';
import logo from '../img/logos/logo-min.png';
import bds from '../img/logos/logo_bds.png';
import bar from '../img/icons/vertical_bar.svg';
import '../css/var.css';
import '../css/main.css';
import '../css/credits.css';
import Menu from './menu';


export default class About extends React.Component{
    render() {

        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/en/menu" component={Menu} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(  
            
                <div id="all_credits" className="all_credits">
                    <div className="loading_container">
                        <p className="loading">Loading</p>
                    </div>
                    <Link onClick={link} to="/en/menu"><img src={back} className="back" alt="back"/></Link>
                    <div className="logo_container">
                        <img src={logo}  className="logo_game" alt="game logo"/>
                        <img src={bds} className="logo_bds" alt="bds logo"/>
                    </div>
                    <div className="information">
                        <h1 className="edu_h">Learning Objective</h1>

                        <p className="edu_p">Stimulate the logical and mathematical reasoning of the
                                player with fun and challenging puzzles.
                        </p>
                        
                        <h1 className="sinopse_h">Game Synopsis</h1>

                        <p className="sinopse_p">Rebecca Roberts, a 16-year-old teenager, wakes up in an unknown place.
                             Devoid of her memories, she explores the place, where she finds several corrupted souls.
                             Determined to leave this place and recover her memories, the young woman faces challenging puzzles
                             to conquer the freedom of souls and reach out to the person who can get her out of there.
                        </p>
                        <img src={bar} className="bar"/>
                        <h1 className="orientacao_h">Guidance</h1>

                        <p className="orientacao_p">Tchr. Robson Vanderlei Alves de Andrade<br></br>
                            Tchr. Diego Marques de Carvalho<br></br>
                            Tchr. Marcelo Barbosa
                        </p>

                        <h1 className="dev_h">Development</h1>

                        <p className="dev_p">Marcoulakis<br></br>
                            Arthur Monteiro Gois dos Santos<br></br>
                            Juan Pablo Mendes Caetano<br></br>
                            Isabela Dias Cerqueira<br></br>
                            Bianca Yasuda Leoni Jordão
                        </p>
                    </div>
                </div>
        )
    }
}


