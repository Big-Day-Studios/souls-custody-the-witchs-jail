import React from 'react';
import ReactDOM from 'react-dom';
import Game_dp from "../../templates/deposito/poppy/soul-1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import f0p0d00d1__1 from "./f0p0d00d1__1";
import Typical from 'react-typical';
import refresh from "../../img/icons/refresh.svg";
import f0p0d00d1__3 from "./f0p0d00d1__3";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';
import cenarios from "../../img/cenarios/cima.png";
import soul from "../../img/personagens/poppy/soul/alma.png";

export default class f0p0d00d1__2 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d00d1__1" component={f0p0d00d1__1} />
                        <Route path="/game/f/f0p0d00d1__3" component={f0p0d00d1__3} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_dp />
                <Link onClick={link} to="f0p0d00d1__1">
                    <div id="b1" className="Back_">
                        <p className="back_">Voltar</p>
                    </div>
                </Link>
                <div className="bar_game"/>
                <Link onClick={link} to="f0p0d00d1__3">
                    <div id="n1" className="Next">
                        <p className="next">Próximo</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} className="refresh_text"></img>
                <Typical
                steps={['Caramba, que bicho nojento!', 1000, 'O que ele está dizendo?', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />

                <img src={cenarios} className="load_b4"></img>
                <img src={soul} className="load_b4"></img>


            </div>
        );
    }
}