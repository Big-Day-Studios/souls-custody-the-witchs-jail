import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../game_template/deposito/poppy/p1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d016 from "./f0p0d016";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d020 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/"  component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f0p0d016" component={f0p0d016} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <div id="b1" className="Back_">
                    <p className="disabled">Voltar</p>
                </div>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d016">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['(Melhor eu ir atrás dela.)', 1000, '(O que que é isso aqui?)', 1000, '(Talvez seja importante, é melhor eu levar comigo.)', 1000, '(Minha cabeça… está doendo de novo. Quanto mais eu subo, mais parece que eu vou cair.)', 1000, '(O que está acontecendo comigo?)']}
                loop={1}
                wrapper="p"
                className="texto-italic"
                />
            </div>
        );
    }
}