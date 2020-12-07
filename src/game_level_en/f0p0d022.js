import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito_en/poppy/game_item_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d023 from "./f0p0d023";
import en_f0p0d021 from "./f0p0d021";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import escada from '../img/cenarios/escada.png'


export default class f0p0d022 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d023" component={en_f0p0d023} />
                        <Route path="/game/en/f/f0p0d021" component={en_f0p0d021} />

                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="f0p0d021">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d023">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={["(Maybe it's important, I'll take it with me.)"]}
                loop={1}
                wrapper="p"
                className="texto-italic"
                />
                <img src={escada} className="load_b4"/>
            </div>

        );
    }
}