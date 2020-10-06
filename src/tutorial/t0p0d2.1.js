import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../game_template/porta/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import t2e1 from './t0p0d2e1';
import t1e0 from './t0p0d1e0';


export default class t2_1 extends React.Component{
    render(){    
        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/game/t0p0d2e1" component={t2e1} />
                        <Route path="/game/t0p0d1e0" component={t1e0} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all">
                <Game />
                <Link onClick={link} to="t0p0d1e0">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link  onClick={link} to="t0p0d2e1">
                    <div  id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <p className="texto">
                Seguinte, você tem que clicar no botão de Próximo para ver o próximo trecho da história. <br/>
                Depois, quando houverem decisões a serem tomadas, você vai escolher uma das opções sobre a<br/>
                pergunta na tela seguinte. Isso faz você montar a história do jeito que você
                </p>

            </div>
        );
    }
}