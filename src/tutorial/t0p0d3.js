import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../game_template/porta/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Menu from "../menu";
import ena from '../game_level/f0p0d000';
import Typical from 'react-typical';
import refresh from "../img/refresh.svg";


export default class t3 extends React.Component{
    render(){
        
        function refreshPage(){
            window.location.reload();
        } 


        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/menu" component={Menu} />
                        <Route path="/game/f0p0d000" component={ena} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all">
                <Game />
                <Link onClick={link} to="f0p0d000">
                    <div id="b1" className="Play_">
                        <p className="back_">Jogar</p>
                    </div>
                </Link>
                <div className="bar_game___"/>
                <Link onClick={link} to="/menu">
                    <div id="n1" className="B_menu">
                        <p className="next">Voltar para o menu</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Certo!',750, 
                'Então parece que você tá pronto para jogar!', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
                <p className="texto"></p>

            </div>
        );
    }
}