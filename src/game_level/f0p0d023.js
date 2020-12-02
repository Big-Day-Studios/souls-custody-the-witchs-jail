import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/escada/poppy/p0/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d022 from "./f0p0d022";
import f0p0d024 from "./f0p0d024";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import cenarios from "../img/cenarios/deposito.png"
import up from "../img/cenarios/cima.png"

export default class f0p0d023 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                            <Route path="/game/f/f0p0d022" component={f0p0d022} />
                            <Route path="/game/f/f0p0d024" component={f0p0d024} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
            <div className="background-black"></div>
                <div id="fade1" className= "all_game">
                    <Game_es />
                    <Link onClick={link} to="f0p0d022">
                        <div id="b1" className="Back_">
                            <p className="back_">Voltar</p>
                        </div>
                    </Link>
                    <div className="bar_game"/>
                    <Link onClick={link} to="f0p0d024">
                        <div id="n1" className="Next">
                            <p className="next">Próximo</p>
                        </div>
                    </Link>
                    <h1 className="rebecca">Rebecca</h1>
                    <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                    <Typical
                    steps={['(Minha cabeça… está doendo de novo.)', 2000, '(Não sei se vou conseguir subir a escada.)', 2000, '(O que está acontecendo comigo?)']}
                    loop={1}
                    wrapper="p"
                    className="texto-italic"
                    />
                </div>
                <img src={cenarios} className="load_b4"/>
                <img src={up} className="load_b4"/>
                

            </div>
        );
    }
}