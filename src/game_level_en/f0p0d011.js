import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito_en/poppy/p2/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d012 from "./f0p0d012";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d011 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d012" component={en_f0p0d012} />
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
                <Link onClick={link} to="f0p0d012">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Did you pay attention to what I just said?',1300, 'It is obvious that you are not cursed.', 1300, 'Corrupted souls walk around the store aimlessly, are filthy, and cannot do anything on their own.', 1300, "But you,  you're completely clean, you can think, talk, you couldn't be cursed like I was.", 1300]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}