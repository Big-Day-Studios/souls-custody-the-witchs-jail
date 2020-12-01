import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito/poppy/soul-1/game_box_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from 'react-typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d005 from "./f0p0d005";
import f0p0d003 from "./f0p0d003";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d004 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d003" component={f0p0d003} />
                        <Route path="/game/f/f0p0d005" component={f0p0d005} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d003">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d005">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Calma...',1000, 'Já sei!', 1000, 'Aquela coisa que esse treco me disse é a resposta para o código deste cadeado.', 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}