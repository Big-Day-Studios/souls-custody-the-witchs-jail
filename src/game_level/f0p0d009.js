import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito/poppy/p0/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d010 from "./f0p0d010";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d009 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d010" component={f0p0d010} />
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
                <Link onClick={link} to="f0p0d010">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Tem uma construção amaldiçoada bem debaixo dessa loja.',1000, 'As almas que entram aqui são aprisionadas e corrompidas.', 1000, 'Elas perdem suas memórias, e a única coisa que pensam é naquilo que pode lhes salvar, mesmo que não saibam disso.',10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}