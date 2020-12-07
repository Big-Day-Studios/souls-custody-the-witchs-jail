import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Game from "../templates/porta/poppy/p1/game_talk";
import "../css/tutorial.css";
import en_t0 from './t0p0d0';
import t1e0 from "./t0p0d1e0";
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';



export default class t1 extends React.Component{
    render(){     


        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/t/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                    <Route path="/game/en/t/t0p0d0" component={en_t0} />
                    <Route path="/game/en/t/t0p0d1e0" component={t1e0} />
                        
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="t0p0d0">
                    <div id="b1" className="Back_en">
                        <p className="back_">Back</p>
                    </div>
                </Link>
                <div className="en_bar_game"/>
                <Link onClick={link} to="t0p0d1e0">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['I will try to teach you how to play this thing.',1600, 
                'You have to choose one of the options that appear on the screen.', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />


            </div>
        );
    }
}