import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito/poppy/p2/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d012 from "./f0p0d012";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d011 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d012" component={f0p0d012} />
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
                <Link onClick={link} to="f0p0d012">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Você prestou atenção no que eu acabei de falar?',1000, 'Tá na cara que você não tá amaldiçoada.', 1000, 'As almas corrompidas andam pela loja sem rumo, são imundas, e não conseguem fazer nada por si só.', 1000, "Já você tá completamente limpa, consegue pensar, falar, não tem como estar amaldiçoada como eu tava.", 1000]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}