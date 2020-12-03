import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/acogue/soul/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import f0p0d038 from "./f0p0d038";
import f0p0d040 from "./f0p0d040";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import vitrola from  '../img/itens/vitrola.png';
import soul from  '../img/personagens/louis/almasemvitrola.png';



export default class f0p0d039 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d038" component={f0p0d038} />
                        <Route path="/game/f/f0p0d040" component={f0p0d040} />


                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d038">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d040">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                  <h1 className="poppy">??????</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Aaaaah…', 1300, 'Huuumm…', 1300, 'Aaaaah…']}
                loop={1}
                wrapper="p"
                className="texto"
                />
                <img src={vitrola} className="load_b4"/>
                <img src={soul} className="load_b4"/>

            </div>
        );
    }
}