import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../game_template/escada/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Menu from "../menu";
import Typical from 'react-typical';
import refresh from "../img/refresh.svg";
import f0p0d001 from "./f0p0d001"


export default class f0p0d000 extends React.Component{
 
    

    render(){
    
        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/menu" component={Menu} />
                        <Route path="/game/t0p0d1" component={f0p0d001} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all">
                <Game_es />
                <Link onClick={link} to="/menu">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="t0p0d1">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['O que…?',1000, 'Onde estou? Não me lembro de nada...', 1000, 'Minha cabeça tá doendo e minhas roupas estão acabadas, que droga.', 1400, 'Não posso ficar parada aqui, tenho que descobrir onde eu tô, e por que eu tô aqui.', 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />

            </div>
        );
    }
}