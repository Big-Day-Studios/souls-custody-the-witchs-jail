import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/escada_en/poppy/p0/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d022 from "./f0p0d022";
import en_f0p0d024 from "./f0p0d024";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import cenarios from "../img/cenarios/deposito.png"
import up from "../img/cenarios/cima.png"

export default class f0p0d023 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                            <Route path="/game/en/f/f0p0d022" component={en_f0p0d022} />
                            <Route path="/game/en/f/f0p0d024" component={en_f0p0d024} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
            <div className="background-black"></div>
                <div id="fade1" className= "all_game">
                    <Game_es />
                    <Link onClick={link} to="f0p0d022">
                        <div id="b1" className="Back_en">
                            <p className="back_">Back</p>
                        </div>
                    </Link>
                    <div className="en_bar_game"/>
                    <Link onClick={link} to="f0p0d024">
                        <div id="n1" className="Next_en">
                            <p className="next">Next</p>
                        </div>
                    </Link>
                    <h1 className="rebecca">Rebecca</h1>
                    <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                    <Typical
                    steps={['(My head… it hurts again.)', 1300, "(I don't know if I will be able to go up the stairs.)", 1300, "(What's happening to me?)"]}
                    loop={1}
                    wrapper="p"
                    className="texto-italic"
                    />
                </div>
                <img src={cenarios} className="load_b4"/>
                <img src={up} className="load_b4"/>
                

            </div>
        );
    }
}