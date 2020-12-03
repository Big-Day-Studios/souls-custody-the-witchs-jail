import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito/poppy/game_item_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d023 from "./f0p0d023";
import f0p0d021 from "./f0p0d021";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import escada from '../img/cenarios/escada.png'


export default class f0p0d022 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d023" component={f0p0d023} />
                        <Route path="/game/f/f0p0d021" component={f0p0d021} />

                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d021">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d023">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['(Talvez seja importante, é melhor eu levar comigo.)']}
                loop={1}
                wrapper="p"
                className="texto-italic"
                />
                <img src={escada} className="load_b4"/>
            </div>

        );
    }
}