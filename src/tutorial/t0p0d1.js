import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Game from "../game_template/porta/game_talk";
import "../css/tutorial.css";
import t0 from './t0p0d0';
import t1e0 from "./t0p0d1e0";
import Typical from 'react-typical';
import refresh from "../img/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class t1 extends React.Component{
    render(){     


        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" component={TheBackgroundScreams} />
                    <Switch>
                    <Route path="/game/t0p0d0" component={t0} />
                        <Route path="/game/t0p0d1e0" component={t1e0} />
                        
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="t0p0d0">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="t0p0d1e0">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Eu vou tentar te ensinar como se joga essa coisa.',1500, 
                'Você tem que escolher entre as opções que aparecem na tela para escolher seu rumo de história.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />


            </div>
        );
    }
}