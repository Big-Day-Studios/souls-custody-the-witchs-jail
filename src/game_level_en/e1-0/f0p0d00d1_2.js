import React from 'react';
import ReactDOM from 'react-dom';
import Game_dp from "../../templates/deposito_en/poppy/soul-1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import en_f0p0d00d1_1 from "./f0p0d00d1_1";
import Typical from '../../typical';
import refresh from "../../img/icons/refresh.svg";
import en_f0p0d00d2_0 from "./f0p0d00d2_0";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';



export default class f0p0d00d1_2 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d00d1_1" component={en_f0p0d00d1_1} />
                        <Route path="/game/en/f/f0p0d00d2_0" component={en_f0p0d00d2_0} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_dp />
                <div id="b1" className="Back_en">
                    <p className="disabled">Back</p>
                </div>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d00d2_0">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={["I didn't get that", 1300, "I'll try to find a tip somewhere else.", 10 ]}
                loop={1}
                wrapper="p"
                className="texto"
                />
            </div>
        );
    }
}