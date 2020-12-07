import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/deposito_en/poppy/p1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d020 from "./f0p0d020";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d019 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d020" component={en_f0p0d020} />
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
                <Link onClick={link} to="f0p0d020">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['The entrance to the underground building is on the other side of the store, where the main entrance is, it will take a while to get there.', 1300]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}