import React from 'react';
import ReactDOM from 'react-dom';
import Game_up from "../../templates/cima_en/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import en_f0p0d00d1__0 from "./f0p0d00d1__0";
import Typical from '../../typical';
import refresh from "../../img/icons/refresh.svg";
import en_f0p0d00d1__2 from "./f0p0d00d1__2";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';
import cenarios from "../../img/cenarios/deposito.png";
import escada from "../../img/cenarios/escada.png";
import soul from "../../img/personagens/poppy/soul/alma.png";
export default class f0p0d00d1__1 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d00d1__0" component={en_f0p0d00d1__0} />
                        <Route path="/game/en/f/f0p0d00d1__2" component={en_f0p0d00d1__2} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_up />
                <Link onClick={link} to="f0p0d00d1__0">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d00d1__2">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Why would anyone write something like that here?', 1300, "That's a creepy place.", 1300, 'Bom...', 700, 'Não achei nada de mais...', 1300, 'Melhor Back e ver o que tinha atrás daquela porta.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
                <img src={cenarios} className="load_b4"></img>
                <img src={soul} className="load_b4"></img>
                <img src={escada} className="load_b4"></img>

                

            </div>
        );
    }
}