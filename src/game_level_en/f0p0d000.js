import React from 'react';
import ReactDOM from 'react-dom';
import Game_es from "../templates/escada_en/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/game_index.css";
import Menu from "../another_en/menu";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import en_f0p0d001 from "./f0p0d001";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class f0p0d000 extends React.Component{
 
    

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
                        <Route path="/game/en/f/f0p0d001" component={en_f0p0d001} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_es />
                <Link onClick={link} to="/en/menu">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d001">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Wait...',1300, 'Where am I? I do not remember anything...', 1300, 'My head is paining and my clothes are destroyed, damn it.', 1400, "I can't stand here, I have to find out where I am, and why I'm here.", 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}