import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/escada/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Menu from "../another/menu";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d001 from "./f0p0d001";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d000 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/menu" component={Menu} />
                        <Route path="/game/f/f0p0d001" component={f0p0d001} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="/menu">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d001">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['O que…?',1300, 'Onde estou? Não me lembro de nada...', 1300, 'Minha cabeça tá doendo e minhas roupas estão acabadas, que droga.', 1400, 'Não posso ficar parada aqui, tenho que descobrir onde eu tô, e por que eu tô aqui.', 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}