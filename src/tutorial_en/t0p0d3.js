import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../templates/porta/poppy/p1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Menu from "../another_en/menu";
import ena from '../game_level_en/f0p0d000';
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import sign from '../img/logos/sign_standard.png'
import escada from '../img/cenarios/escada.png'
export default class t3 extends React.Component{
    render(){
        
        function refreshPage(){
            window.location.reload();
        } 


        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />

                    <Switch>
                        <Route path="/en/menu" component={Menu} />
                        <Route path="/game/en/f/f0p0d000" component={ena} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="/game/en/f/f0p0d000">
                    <div id="b1" className="Play_en">
                        <p className="back_">Play</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="/en/menu">
                    <div id="n1" className="Next_en">
                        <p className="next">Menu</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Right!',750, 
                "So it looks like you're ready to play!", 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
                <p className="texto"></p>

                <img src={sign} className="load_b4"></img>
                <img src={escada} className="load_b4"></img>

            </div>
        );
    }
}