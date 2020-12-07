import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito_en/poppy/p0/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d010 from "./f0p0d010";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d009 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d010" component={en_f0p0d010} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <div id="b1" className="Back_en">
                    <p className="disabled">Back</p>
                </div>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d010">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={["There's a cursed building right under that store.",1300, "The souls that come here are imprisoned and corrupted.", 1300, "They lose their memories, and the only thing they think about is what can save them, even if they don't know it.",10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}