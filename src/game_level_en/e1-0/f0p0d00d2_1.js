import React from 'react';
import ReactDOM from 'react-dom';
import Game_dp from "../../templates/deposito_en/poppy/soul-1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../../css/game_index.css";
import en_f0p0d00d2_2 from "./f0p0d00d2_2";
import Typical from '../../typical';
import refresh from "../../img/icons/refresh.svg";
import TheBackgroundScreams from '../../audio/pages/TheBackgroundScreams';
import background from "../../img/cenarios/cima.png"


export default class f0p0d00d2_1 extends React.Component{
 
    

    render(){
    

        function refreshPage(){
            window.location.reload();
        } 

        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/en/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/en/f/f0p0d00d2_2" component={en_f0p0d00d2_2} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game_dp/>
                <div id="b1" className="Back_en">
                    <p className="disabled">Back</p>
                </div>
                <div className="en_bar_game"/>
                <Link onClick={link} to="f0p0d00d2_2">
                    <div id="n1" className="Next_en">
                        <p className="next">Next</p>
                    </div>
                </Link>
                <h1 className="rebecca">Rebecca</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Maybe I should go up that stairs.', 1300]}
                loop={1}
                wrapper="p"
                className="texto"
                />

                <img class="load_b4" src={background} />

            </div>
        );
    }
}