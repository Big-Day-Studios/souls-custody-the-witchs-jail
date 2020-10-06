import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../game_template/porta/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import f0p0d001 from "./f0p0d001"
import Menu from "../menu";
import "../css/index.css";


export default class f0p0d000 extends React.Component{
    render(){
        
        function link() {
            ReactDOM.render(
                <Router>
                    <Switch>
                        <Route path="/menu" component={Menu} />
                        <Route path="/game/f0p0d001" component={f0p0d001} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all">
                <Game />
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
                <h1 className="poppy">Rebecca</h1>
                <p className="texto">Rebecca acorda em um local desconhecido. 
                Por algum motivo, ela não consegue se lembrar de nada do seu passado. 
                Atordoada, a menina observa o seu redor. Ela estava sentada no centro de uma escadaria, 
                havia uma porta de metal à sua frente, as escadas continuavam para baixo às suas costas, 
                e subiam à sua esquerda. A garota então decidiu
                </p>

            </div>
        );
    }


}
